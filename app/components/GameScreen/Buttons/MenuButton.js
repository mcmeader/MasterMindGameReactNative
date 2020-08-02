'use-strict';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export function MenuButton() {
    return (
        <View style={styles.buttonContainer}>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'stretch',
        margin: 5,
        backgroundColor: "black",
    },
});