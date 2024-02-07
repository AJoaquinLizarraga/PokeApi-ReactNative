/** @format */
import { StyleSheet, Text, View } from "react-native"
import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import Navigation from "./src/navigation/NavigationScreens"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { AuthProvider } from "./src/context/AuthContext"
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
