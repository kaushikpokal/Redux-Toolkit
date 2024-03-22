import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../page/auth";
const Stack = createStackNavigator();

const AuthRoute = () => {
    return (
        <Stack.Navigator initialRouteName="login" screenOptions={{ headerShown: true }}>
            <Stack.Screen name="login" component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default AuthRoute;