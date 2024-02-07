/** @format */

import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from "../../api/favorite"

const Favorite = (props) => {
  const { id } = props

  const [isFavorite, setIsFavorite] = useState(undefined)
  const [reloadCheck, setReloadCheck] = useState(false)
  const Icon = isFavorite ? FontAwesome : FontAwesome5

  useEffect(() => {
    ;(async () => {
      try {
        const response = await isPokemonFavoriteApi(id)
        setIsFavorite(response)
      } catch (error) {
        setIsFavorite(false)
      }
    })()
  }, [id, reloadCheck])

  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev)
  }

  const addFavorites = async () => {
    try {
      await addPokemonFavoriteApi(id)
      onReloadCheckFavorite()
    } catch (error) {
      throw error
    }
  }

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id)
      onReloadCheckFavorite()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TouchableOpacity onPress={isFavorite ? removeFavorite : addFavorites}>
      <Icon
        name="heart"
        color={isFavorite ? "red" : "#fff"}
        size={20}
        // onPress={addFavorites}
        style={{ marginRight: 20 }}
      />
    </TouchableOpacity>
  )
}

export default Favorite
