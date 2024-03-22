import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const Api = () => {

    const [data , setData] = useState()

    const getApiData = async () => {
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        let result = await fetch(url);
        result = await result.json();
        // console.warn(result)
        setData(result)
    }

    useEffect(() => {
        getApiData()
    }, [])

    return (
        <View>
            <Text>API Call Demo</Text>
            <View>
            {
                data ? 
                <View>
                    <Text>{data.id}</Text>
                    <Text>{data.userId}</Text>
                    <Text>{data.title}</Text>
                    <Text>{data.body}</Text>
                </View>
                : 
                <Text>No Data Found</Text>
            }
            </View>
        </View>
    )
}

export default Api