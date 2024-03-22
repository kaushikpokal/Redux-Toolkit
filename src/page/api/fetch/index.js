import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const FetchApi = () => {
    const [data, setData] = useState();
    const getApiData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        let result = await fetch(url)
        result = await result.json();
        setData(result)
    }

    useEffect(() => {
        getApiData()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fetch Api Call Demo</Text>
            {
                data ?
                <View style={styles.box}>
                    <Text style={styles.item}><Text style={styles.strong}>ID:</Text> {data.id}</Text>
                    <Text style={styles.item}><Text style={styles.strong}>User ID:</Text> {data.userId}</Text>
                    <Text style={styles.item}><Text style={styles.strong}>Title:</Text> {data.title}</Text>
                    <Text style={styles.item}><Text style={styles.strong}>Body:</Text> {data.body}</Text>
                </View> :
                <Text>No Data Found</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 22,
        textAlign: "center",
        marginBottom: 20,
        color: "#222222",
        marginTop: 50,
        marginBottom: 50
    },
    box:{
        backgroundColor: "#ffffff",
        elevation: 40,
        padding: 15,
        borderRadius: 10,
    },
    item:{
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: "#eeeeee",
        paddingVertical: 10
    },
    strong:{
        fontWeight: "600"
    }
})

export default FetchApi;