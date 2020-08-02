'use-strict';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export function GuessPeg({ pegColor }) {
    return (
        <View style={styles.buttonContainer}>
            <View style={{ flex: 1, backgroundColor: pegColor, borderRadius: 100, }} />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'stretch',
        margin: 5,
    },
});