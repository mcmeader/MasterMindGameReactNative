import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, Platform, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BackButton = (props) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={() => props.goBack()}>
            <Image style={styles.image} source={require("../../../assets/back-button.png")} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        width: Platform.isPad ? 75 : 35,
        height: Platform.isPad ? 75 : 35,
        alignSelf: 'center',
        resizeMode: 'contain',
        backgroundColor: '#408000',
        borderRadius: 200,
    },

    buttonContainer: {
        flex: 0.9,
        justifyContent: 'center',
        height: Platform.isPad ? 500 : 30,
        marginStart: Platform.isPad ? 25 : 10,
    },
});

BackButton.propTypes = {
    buttonText: PropTypes.string,
    clickAction: PropTypes.func
}

export default BackButton