import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FetchApi from "../page/api/fetch";
import Counter from "../components/counter";
import Home from "../page/home";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
const Tab = createBottomTabNavigator();

const AppRoute = () => {
    return (
        <Tab.Navigator initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: '#FF4600'
        }}

        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerLeft: () => (
                        <TouchableOpacity style={styles.menu}>
                            <Image source={require("../assets/menu.png")} />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? require("../assets/home-fill.png") : require("../assets/home.png")} />
                    ),
                }}
            />
            <Tab.Screen name="Api" component={FetchApi}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? require("../assets/heart-fill.png") : require("../assets/heart.png")} />
                    ),
                }}
            />
            <Tab.Screen name="Counter" component={Counter}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={focused ? require("../assets/order-fill.png") : require("../assets/order.png")} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    menu: {
        paddingLeft: 10
    }
})

export default AppRoute;