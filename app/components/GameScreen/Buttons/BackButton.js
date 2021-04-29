import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image } from 'react-native';
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
        width: 75,
        height: 75,
        alignSelf: 'center',
        resizeMode: 'contain',
        backgroundColor: '#408000',
        borderRadius: 200,
    },

    buttonContainer: {
        flex: 0.9,
        justifyContent: 'center',
        height: 500,
        marginStart: 25
    },
});

BackButton.propTypes = {
    buttonText: PropTypes.string,
    clickAction: PropTypes.func
}

export default BackButton