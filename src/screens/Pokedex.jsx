/** @format */

import React, { useEffect, useState } from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import { getPokemonsApi, getPokemonDetailApi } from "../api/pokemonApi"
import PokemonList from "../components/PokemonList"

const PokedexScreen = (params) => {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  // console.log(pokemons)

  useEffect(() => {
    ;(async () => {
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl)
      setNextUrl(response.next)

      const pokemonsArray = []
      for await (const pokemon of response.results) {
        const pokemonDetail = await getPokemonDetailApi(pokemon.url)

        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other["official-artwork"].front_default,
        })
      }
      setPokemons([...pokemons, ...pokemonsArray])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        nextUrl={nextUrl}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default PokedexScreen
