import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity, Button, Platform } from 'react-native';

const TitleScreenOptionButton = (props) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={() => props.buttonFunction()}>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        margin: 50,
        backgroundColor: "lightblue",
    },
    text: {
        textAlign: 'center',
        fontSize: Platform.isPad ? 50 : 20
    }
});

TitleScreenOptionButton.propTypes = {
    text: PropTypes.string,
    buttonFunction: PropTypes.func,
}

export default TitleScreenOptionButton