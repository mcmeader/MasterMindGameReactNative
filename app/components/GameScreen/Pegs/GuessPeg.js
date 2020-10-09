import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const GuessPeg = (props) => {
    return (
        <View style={styles.buttonContainer}>
            <View style={{ flex: 1, backgroundColor: props.pegColor, borderRadius: 100, }} />
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

GuessPeg.propTypes = {
    pegColor: PropTypes.object
}

export default GuessPeg