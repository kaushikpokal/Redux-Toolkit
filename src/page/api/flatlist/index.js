import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";

const FlatListComp = () => {
    const [data, setData] = useState([])

    const getApiData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts";
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    useEffect(() => {
        getApiData()
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Flat List Api Call Demo</Text>
            <View>
                {data.length ?
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <View style={styles.box}>
                            <Text>{item.id}</Text>
                            <Text>{item.userId}</Text>
                            <Text>{item.title}</Text>
                            <Text>{item.body}</Text>
                        </View>}
                    />
                    : <Text>No data found</Text>
                }
            </View>
        </ScrollView>
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
    }
})

export default FlatListComp;