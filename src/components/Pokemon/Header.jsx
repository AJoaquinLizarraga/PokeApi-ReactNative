/** @format */

import React from "react"
import { StyleSheet, SafeAreaView, View, Text, Image } from "react-native"
import getColorByPokemonType from "../../utils/getColorByPokemonType"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { capitalize } from "lodash"

const Header = (props) => {
  const { name, order, image, type } = props
  const color = getColorByPokemonType(type)
  const bgStyles = [{ backgroundColor: color, ...styles.bg }]
  return (
    <>
      <View style={bgStyles}>
        <SafeAreaView style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.name}>{capitalize(name)}</Text>
            <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
          </View>
          <View style={styles.containerImg}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        </SafeAreaView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    // position: "absolute",
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    // borderBottomLeftRadius: 100,
    // transform: [{ scaleX: 2 }],
  },
  content: {
    flex: 1,
    marginHorizontal: 20,

    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  containerImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 10,
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    // position: "relative",
  },
})
export default Header
