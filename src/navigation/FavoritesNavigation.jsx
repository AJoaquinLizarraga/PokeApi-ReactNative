/** @format */

import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import FavoritesScreen from "../screens/Favorites"
import Pokemon from "../screens/Pokemon"

const Stack = createStackNavigator()

const FavoritesNavigation = (params) => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Favorites Navigation"
        component={FavoritesScreen}
        options={{ title: "Favorites" }}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  )
}

export default FavoritesNavigation
