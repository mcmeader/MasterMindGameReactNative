import React from 'react';
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TitleScreenOptionButton = (props) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => props.buttonFunction()}>
                <Text style={styles.text}>
                    {props.text}
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

TitleScreenOptionButton.propTypes = {
    text: PropTypes.string,
    buttonFunction: PropTypes.func,
}

export default TitleScreenOptionButton