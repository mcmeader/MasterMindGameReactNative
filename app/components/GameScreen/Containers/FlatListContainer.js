'use-strict';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export function FlatListContainer() {
    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'stretch',
        margin: 5,
        backgroundColor: "black",
    },
});