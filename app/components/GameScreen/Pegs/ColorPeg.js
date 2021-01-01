import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const ColorPeg = (props) => {
    return (
        <TouchableHighlight style={styles.buttonContainer} onPress={() => props.onSelect(props.pegColor, props.index)}>
            <View style={{
                flex: 1, backgroundColor: props.pegColor, borderRadius: 100,
                borderColor: props.selected ? "gold" : "black", borderWidth: props.selected ? 5 : 1
            }}>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        margin: 5,
        minWidth: 40,
        maxWidth: 50,
        minHeight: 40,
        maxHeight: 50,
        aspectRatio: 1 / 1,
        borderWidth: 2,
        borderRadius: 100,
        borderColor: 'black',
    },
});

ColorPeg.props = {
    pegColor: PropTypes.string,
    selected: PropTypes.bool,
    onSelect: PropTypes.func,
    index: PropTypes.number
}

export default ColorPeg