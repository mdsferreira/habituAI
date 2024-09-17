import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function Button(props) {
    const { color } = props;
    const btnStyle = color === "secondary" ? styles.buttonSecondary : {};
    const txtStyle = color === "secondary" ? styles.textSecondary : {};

    return (
        <TouchableWithoutFeedback {...props} >
            <View style={{ ...styles.button, ...btnStyle }}>
                <Text style={{ ...styles.text, ...txtStyle }}>
                    {props.children}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "90%",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        backgroundColor: "#8a3af2",
        alignSelf: "center",
    },
    buttonSecondary: {
        backgroundColor: "white",
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    },
    textSecondary: {
        color: "#8a3af2"
    }
})