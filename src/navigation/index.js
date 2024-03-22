import React from "react";

import { useSelector } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppRoute from "./app.route";
import AuthRoute from "./auth.route";

const Stack = createStackNavigator();

const Navigation = () => {
  const auth = useSelector(state => state.auth);
  console.warn(auth.credentials)

  return (
    <NavigationContainer>
      {auth.credentials ? <AppRoute /> : <AuthRoute />}
    </NavigationContainer>
  )
}



export default Navigation;