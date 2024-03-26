import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import validate from "../../services/validation";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../../store/auth/authSlice'

const host = 'https://app.hiretechtalent.com/api';

const Auth = () => {

    // const auth = useSelector(state => state.auth.credentials);
    const dispatch = useDispatch();

    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    });

    const handleChange = (i, val) => {
        setFormData(state => ({
            ...state,
            [i]: val,
        }));
    };


    // key = 2576040397
    // url = https://app.wp-eventmanager.com


    const loginProvider = ({ email, password }) => {
        const body = new FormData();
        body.append('email', email);
        body.append('password', password);

        console.log('Login Url is ===>>>', `${host}/talentLogin`);
        return fetch(`${host}/talentLogin`, {
            method: 'POST',
            headers: {
                Connection: 'keep-alive',
            },
            body: body,
        })
            .then(async res => {
                return await res.json();
            })
            .catch(err => {
                console.log('Errorrrrr');
                return err;
            });
    }

    const loginUser = async () => {
        if (
            validate('email', formData.email) &&
            validate('required', formData.password)
        ) {
            const response = await loginProvider(formData);
            if (response) {
                if (response.credentials && response.user) {
                    dispatch(login(response));
                } else {
                    console.warn("error1")
                }
            } else {
                console.warn("error2")
            }
            console.warn("Please use correct password")
        } else {
            console.warn("Credentials does not match")
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.brand} source={require('./../../assets/icon.png')} />
            <Text style={styles.title}>SIGN IN</Text>
            <Text style={styles.title}>{formData.email}</Text>
            <TextInput
                placeholder="Site URL"
                onChangeText={e => handleChange('email', e)}
                value={formData.email}
                style={styles.input}
            />
            <TextInput
                placeholder="API key"
                onChangeText={e => handleChange('password', e)}
                value={formData.password}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText} onPress={() => loginUser()}>SIGN IN</Text></TouchableOpacity>
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