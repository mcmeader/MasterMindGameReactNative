import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Platform } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Difficulties } from '../../../constants/enums/Difficulties';

const ColorPeg = (props) => {
    let getTextStyle = () => {
        switch (props.difficulty) {
            case Difficulties.easy:
                return styles.emptyEasy
            case Difficulties.normal:
                return styles.emptyNormal
            case Difficulties.hard:
                return styles.emptyHard
            case Difficulties.nightmare:
                return styles.emptyNightmare
            case Difficulties.impossible:
                return styles.emptyImpossible
        }
    }

    return (
        <TouchableHighlight style={styles.buttonContainer} onPress={() => props.onSelect(props.pegColor, props.index)}>
            <View style={[getTextStyle(), {
                backgroundColor: props.pegColor,
                borderColor: props.selected ? "gold" : "black",
                borderWidth: props.selected ? 5 : 3
            }]}>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        padding: 0,
        justifyContent: 'center',
    },
    emptyEasy: {
        height: 160,
        aspectRatio: 1 / 1,
        borderWidth: 3,
        margin: 40,
        borderRadius: Platform.isPad ? 80 : 100,
    },
    emptyNormal: {
        height: 140,
        aspectRatio: 1 / 1,
        borderWidth: 3,
        margin: 40,
        borderRadius: Platform.isPad ? 80 : 100,
    },
    emptyHard: {
        height: 100,
        aspectRatio: 1 / 1,
        borderWidth: 3,
        margin: 40,
        borderRadius: Platform.isPad ? 80 : 100,
    },
    emptyNightmare: {
        height: 90,
        aspectRatio: 1 / 1,
        borderWidth: 3,
        margin: 40,
        borderRadius: Platform.isPad ? 80 : 100,
    },
    emptyImpossible: {
        height: 70,
        aspectRatio: 1 / 1,
        borderWidth: 3,
        margin: 40,
        borderRadius: Platform.isPad ? 80 : 100,
    },
});

ColorPeg.props = {
    pegColor: PropTypes.string,
    selected: PropTypes.bool,
    onSelect: PropTypes.func,
    index: PropTypes.number,
    difficulty: PropTypes.object
}

export default ColorPeg