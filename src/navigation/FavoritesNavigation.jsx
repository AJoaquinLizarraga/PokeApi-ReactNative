/** @format */

import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import FavoritesScreen from "../screens/Favorites"
import HomeScreen from "../screens/Home"

const Stack = createStackNavigator()

const FavoritesNavigation = (params) => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Favorites Navigation"
        component={FavoritesScreen}
        options={{ title: "Favorites" }}
      />
      {/* <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      /> */}
    </Stack.Navigator>
  )
}

export default FavoritesNavigation
