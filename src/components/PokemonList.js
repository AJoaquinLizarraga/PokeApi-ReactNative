/** @format */

import React from "react"
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native"
import PokemonCard from "./PokemonCard"

const PokemonList = (props) => {
  const { pokemons, loadPokemons, nextUrl } = props
  const loadMore = () => {
    loadPokemons()
  }
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContainer}
      onEndReached={nextUrl && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        nextUrl && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color={"#FF6347"}
          />
        )
      }
    />
  )
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
})
export default PokemonList
