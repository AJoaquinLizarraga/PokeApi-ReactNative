/** @format */
import { StyleSheet, Text, View } from "react-native"
import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import Navigation from "./src/navigation/NavigationScreens"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
