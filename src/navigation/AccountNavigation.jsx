/** @format */

import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Account from "../screens/Account"

const Stack = createStackNavigator()

const AccountNavigation = (params) => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Account Navigation"
        component={Account}
        options={{ title: "My Account" }}
      />
      {/* <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      /> */}
    </Stack.Navigator>
  )
}

export default AccountNavigation
