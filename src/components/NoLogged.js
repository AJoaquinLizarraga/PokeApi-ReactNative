/** @format */

import React from "react"
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

const NoLogged = (params) => {
  const navigation = useNavigation()
  return (
    <View style={styles.content}>
      <Text style={styles.texto}>
        You must be logged in to view this screen
      </Text>
      <TouchableOpacity
        style={styles.btnGTAccount}
        onPress={() => navigation.navigate("Account")}
      >
        <Text>Go to My Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  texto: {
    textAlign: "center",
    marginBottom: 10,
  },
  btnGTAccount: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    height: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
export default NoLogged
