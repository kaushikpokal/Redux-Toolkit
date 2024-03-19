import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Auth = () => {

    const [url, setUrl] = useState();
    const [key, setKey] = useState();

    const login = () => {
        console.warn(key)
    }

    return (
        <View style={styles.container}>
            <Image style={styles.brand} source={require('./../../assets/icon.png')} />
            <Text style={styles.title}>SIGN IN</Text>
            <TextInput
                placeholder="Site URL"
                onChangeText={(text) => setUrl(text)}
                value={url}
                style={styles.input}
            />
            <TextInput
                placeholder="API key"
                onChange={(text) => setKey(text)}
                value={key}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText} onPress={() => login()}>SIGN IN</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F9F9F9"
    },
    brand: {
        width: 100,
        height: 100,
        objectFit: "contain",
        marginBottom: 50,
        marginTop: 30
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: "#000000",
        marginBottom: 30
    },
    button: {
        backgroundColor: "#FF4600",
        padding: 15,
        borderRadius: 6,
        width: "100%",
        marginTop: 15
    },
    buttonText: {
        fontSize: 16,
        textTransform: "uppercase",
        color: "#ffffff",
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#EEEEEE",
        width: "100%",
        backgroundColor: "#ffffff",
        padding: 12,
        fontSize: 16,
        borderRadius: 6,
        marginBottom: 15
    },
})

export default Auth;