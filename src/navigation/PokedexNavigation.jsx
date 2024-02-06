/** @format */

import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import PokedexScreen from "../screens/Pokedex"
import Pokemon from "../screens/Pokemon"

const Stack = createStackNavigator()

const FavoritesNavigation = (params) => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="Pokedex" component={PokedexScreen} options={{}} />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  )
}

export default FavoritesNavigation
