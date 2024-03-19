import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, twox, clear } from '../store/counter/counterSlice'
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View style={styles.body}>
            <Text style={styles.title}>Increment / Decrement Counter</Text>
            <View style={styles.center}>
                <Text style={styles.number}>{count}</Text>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={() => dispatch(decrement())}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => dispatch(increment())}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => dispatch(twox())}><Text style={styles.buttonText}>2X</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => dispatch(clear())}><Text style={styles.buttonText}>Clear</Text></TouchableOpacity>
                </View>
            </View>
            <Text style={styles.secondTitle}>Using react redux toolkit </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#ff4600",
        height: "100%",
        padding: 30,
    },
    container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
        gap: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        flex: 1,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 7,
        minWidth: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    title:{
        fontSize: 24,
        textAlign: "center",
        color: "#ffffff"
    },
    number:{
        fontSize: 150,
        textAlign: "center",
        color: "#ffffff",
    },
    secondTitle: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 16
    },
    buttonText:{
        fontSize: 28,
        color: "#000000"
    },
    center: {
        flex: 1,
        justifyContent: "center"
    }
});

export default Counter;
