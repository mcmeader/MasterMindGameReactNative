'use-strict';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export function SolutionContainer() {
    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        alignContent: 'center',
        alignItems: 'stretch',
        margin: 5,
        backgroundColor: "white",
    },
});