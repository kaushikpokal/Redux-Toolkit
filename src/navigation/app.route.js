import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import FetchApi from "../page/api/fetch";
import Counter from "../components/counter";
const Stack = createStackNavigator();

const AppRoute = () => {
    return (
        <Stack.Navigator initialRouteName="Counter">
            <Stack.Screen name="Api" component={FetchApi} />
            <Stack.Screen name="Counter" component={Counter} />
        </Stack.Navigator>
    )
}

export default AppRoute;