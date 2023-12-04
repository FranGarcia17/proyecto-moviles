import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "3007bff",
        padding: 10,
        borderRadius: 5,
        alignItems: "center"
    },
    buttonText : {
        color: "black",
        fontSize: 16
    }
});

export default Button;