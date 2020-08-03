'use-strict';

import React from 'react';
import { View, StyleSheet } from 'react-native';

export function SolutionContainer({ solution, hidden }) {
    return (
        <View style={styles.container}>
            {hidden ? <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: "black" }} /> :
                solution.map(peg => <View style={{ borderRadius: 100, height: 30, width: 30, backgroundColor: peg.color, }} key={peg.position} />)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    hiddenMask: {
        flex: 1,
        backgroundColor: 'black',
    }
});