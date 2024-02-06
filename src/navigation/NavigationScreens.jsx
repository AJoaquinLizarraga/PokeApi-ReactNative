/** @format */

import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome5"
import { Image } from "react-native"
import PokedexNavigation from "./PokedexNavigation"
import FavoritesNavigation from "./FavoritesNavigation"
import AccountNavigation from "./AccountNavigation"

const Tab = createBottomTabNavigator()

const Navigation = (params) => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen
        name="Favorites"
        component={FavoritesNavigation}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PokedexScreen"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => pokeIcon(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const pokeIcon = (color, size) => {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -18 }}
    />
  )
}
export default Navigation
