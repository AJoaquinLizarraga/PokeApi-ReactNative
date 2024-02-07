/** @format */

import React, { useState, useEffect } from "react"
import { ScrollView, Text, TouchableOpacity } from "react-native"

import { getDetailApi } from "../api/pokemonApi"
import Header from "../components/Pokemon/Header"
import Type from "../components/Pokemon/Type"
import Stats from "../components/Pokemon/Stats"
import Icon from "react-native-vector-icons/FontAwesome5"
import Favorite from "../components/Pokemon/Favorite"
import useAuth from "../hooks/useAuth"

const Pokemon = (props) => {
  const [pokemonDetail, setPokemonDetail] = useState(null)

  const {
    navigation,
    route: { params }, //esto es un doble destructuring
  } = props

  const { auth } = useAuth()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemonDetail?.id} />,
      headerLeft: () => (
        <TouchableOpacity>
          <Icon
            name="arrow-left"
            color="white"
            size={20}
            style={{ marginLeft: 20 }}
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      ),
    })
  }, [navigation, params, pokemonDetail])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getDetailApi(params.id)
        setPokemonDetail(response)
      } catch (error) {
        navigation.goBack()
      }
    })()
  }, [params])

  if (!pokemonDetail) return null
  return (
    <ScrollView>
      <Header
        name={pokemonDetail.name}
        order={pokemonDetail.order}
        image={pokemonDetail.sprites.other["official-artwork"].front_default}
        type={pokemonDetail.types[0].type.name}
      />
      <Type types={pokemonDetail.types} />
      <Stats stats={pokemonDetail.stats} />
    </ScrollView>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: Platform.OS === "android" ? 1 : undefined,
//   },
// })

export default Pokemon

/**
 * id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other["official-artwork"].front_default,
 */
