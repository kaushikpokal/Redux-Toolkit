import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Search from "../../components/search";

const Home = () => {

    const filter = () => {
        console.warn("Show Filter")
    }

    return(
        <View>
            <View style={[styles.container, styles.flex]}>
                <Search />
                <TouchableOpacity style={styles.filterButton} onPress={filter}>
                   <Image source={require('../../assets/filter-icon.png')} style={{width: 24, height: 24}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 15
    },
    flex:{
        flexDirection: "row"
    },
    filterButton:{
        borderColor: "#EEEEEE",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 100,
        width: 50,
        height: 50,
        alignItems:"center",
        justifyContent: "center",
        marginLeft: 10
    }
})

export default Home