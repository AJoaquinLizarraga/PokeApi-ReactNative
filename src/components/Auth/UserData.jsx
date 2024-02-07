/** @format */

import React, { useState, useCallback } from "react"
import { Text, View, StyleSheet, Button } from "react-native"
import { useFocusEffect } from "@react-navigation/native"
import { size } from "lodash"
import useAuth from "../../hooks/useAuth"
import { getPokemonsFavoriteApi } from "../../api/favorite"

const UserData = () => {
  const { auth, logout } = useAuth()
  const [total, setTotal] = useState(0)

  useFocusEffect(
    useCallback(() => {
      ;(async () => {
        try {
          const response = await getPokemonsFavoriteApi()
          setTotal(size(response))
        } catch (error) {
          setTotal(0)
        }
      })()
    }, [])
  )

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>
          Welcome, {`${auth.firstName} ${auth.lastName}`}!
        </Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Name" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username" text={auth.userName} />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total Favorites" text={`${total} pokemons`} />
      </View>

      <Button
        onPress={logout}
        title="Log Out"
        style={styles.btnLogout}
        color="#FF6347"
      />
    </View>
  )
}

const ItemMenu = (props) => {
  const { title, text } = props
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    mmarginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#cfcfcf",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogout: {
    paddingTop: 20,
  },
})

export default UserData
