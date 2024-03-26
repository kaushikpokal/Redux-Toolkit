import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Search = () => {
    return (
        <TextInput
            placeholder="Search Food"
            style={styles.input}
        />
    )
}


const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderColor: "#EEEEEE",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 100,
        flex: 1,
        paddingStart: 20,
        fontSize: 15,
    }
})

export default Search