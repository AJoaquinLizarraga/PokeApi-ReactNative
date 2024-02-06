/** @format */

import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native"
import getColorByPokemonType from "../utils/getColorByPokemonType"
import { capitalize } from "lodash"
import { useNavigation } from "@react-navigation/native"

const PokemonCard = (props) => {
  const { pokemon } = props
  const navigation = useNavigation()

  const goToPokemon = () => {
    console.log("====================================")
    console.log(`vamos al pokemon ${pokemon.id}`)
    console.log("====================================")
    navigation.navigate("Pokemon", { id: pokemon.id })
  }
  const pokemonBGColor = getColorByPokemonType(pokemon.type)

  const bgStyles = { backgroundColor: pokemonBGColor, ...styles.bgStyles }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    // paddingTop: 60,
  },
  spacing: {
    flex: 1,
    padding: 4,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 96,
    height: 96,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
})

export default PokemonCard
