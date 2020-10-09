import React from 'react';
import { View, StyleSheet } from 'react-native';

const FlatListContainer = () => {
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

export default FlatListContainer