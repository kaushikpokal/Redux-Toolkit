import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const GetListApi = () => {
    const [data, setData] = useState();

    const getApiCall = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }

    useEffect(() => {
        getApiCall()
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Get List Api Call Demo</Text>
            {data.length ? data.map((item) =>
                <View style={styles.box}>
                    <Text style={styles.item}><Text style={styles.strong}>ID:</Text> {item.id}</Text>
                    <Text style={styles.item}><Text style={styles.strong}>User ID:</Text> {item.userId}</Text>
                    <Text style={styles.item}><Text style={styles.strong}>Title:</Text> {item.title}</Text>
                    <Text style={styles.item}><Text style={styles.strong}>Body:</Text> {item.body}</Text>
                </View>
            )
                :
                <Text>No Data Found</Text>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#eeeeee"
    },
    title: {
        fontSize: 22,
        textAlign: "center",
        marginBottom: 20,
        color: "#222222",
        marginTop: 50,
        marginBottom: 50
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
    }
})

export default GetListApi;