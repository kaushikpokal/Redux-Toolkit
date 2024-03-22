import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PostApi = () => {

    const savePostData = async () => {

        const data = {
            id: 1,
            name: "kaushik"
        }

        const url = "https://app.wp-eventmanager.com/wp-json/wpem-auth/appkey?key=";
        let result = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        result = await result.json()
        console.warn("KK" + result.data.name)

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Post Api Call Demo</Text>
            <TouchableOpacity onPress={savePostData} style={styles.button}><Text style={styles.buttonText}>Button</Text></TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#eeeeee"
    },
    title: {
        fontSize: 22,
        textAlign: "center",
        color: "#222222",
        marginTop: 20,
        marginBottom: 20
    },
    box: {
        backgroundColor: "#ffffff",
        elevation: 2,
        padding: 15,
        borderRadius: 10,
        margin: 10
    },
    item: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: "#eeeeee",
        paddingVertical: 10
    },
    strong: {
        fontWeight: "600"
    },
    button: {
        padding: 12,
        backgroundColor: "#ff0066",
    },
    buttonText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 18
    }
})


export default PostApi;