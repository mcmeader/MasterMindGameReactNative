'use-strict';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export function SolutionContainer({ solution, hidden }) {
    return (
        <View style={styles.container}>
            {hidden ? <View style={{ flex: 1, backgroundColor: "black" }} /> :
                data.map(peg => <View style={{ flex: 1, borderRadius: 100, backgroundColor: peg.color }} key={peg.position} />)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'stretch',
        margin: 5,
    },
    hiddenMask: {
        flex: 1,
        backgroundColor: 'black',
    }
});