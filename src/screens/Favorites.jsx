/** @format */

import React, { useState, useCallback } from "react"
import { SafeAreaView, Text } from "react-native"
import { useFocusEffect } from "@react-navigation/native"
import { getPokemonsFavoriteApi } from "../api/favorite"
import { getDetailApi } from "../api/pokemonApi"
import useAuth from "../hooks/useAuth"
import PokemonList from "../components/PokemonList"
import NoLogged from "../components/NoLogged"

const FavoritesScreen = (params) => {
  const [allFavorites, setAllFavorites] = useState([])

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        ;(async () => {
          const response = await getPokemonsFavoriteApi()
          const pokemonsArray = []
          for await (const id of response) {
            const pokemonDetail = await getDetailApi(id)
            pokemonsArray.push({
              id: pokemonDetail.id,
              name: pokemonDetail.name,
              type: pokemonDetail.types[0].type.name,
              order: pokemonDetail.order,
              image:
                pokemonDetail.sprites.other["official-artwork"].front_default,
            })
          }
          setAllFavorites(pokemonsArray)
        })()
      }
    }, [auth])
  )
  const { auth } = useAuth()

  return auth ? <PokemonList pokemons={allFavorites} /> : <NoLogged />
}

export default FavoritesScreen
