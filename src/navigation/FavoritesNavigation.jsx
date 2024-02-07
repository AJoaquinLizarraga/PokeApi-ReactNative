/** @format */

import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import FavoritesScreen from "../screens/FavoriteScreen"
import Pokemon from "../screens/Pokemon"

const Stack = createStackNavigator()

const FavoritesNavigation = (params) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitleAlign: "center" }}
      initialRouteName="Favorites"
    >
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
