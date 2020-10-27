'use-strict';

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function TitleScreenOptionButton({ "text": text, "buttonFunction": buttonFunction }) {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => console.log(text)}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: "red",
    },
    text: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
    }
});