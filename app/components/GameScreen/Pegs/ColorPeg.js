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
        <TouchableHighlight style={styles.buttonContainer} underlayColor="#5A5B5C" onPress={() => props.onSelect(props.pegColor, props.index)}>
            <View style={[getTextStyle(), {
                backgroundColor: props.pegColor,
                borderColor: props.selected ? "gold" : "black",
                borderWidth: props.selected ? 5 : 3
            }]} />
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingBottom: Platform.isPad ? 0 : 20,
    },
    emptyEasy: {
        height: Platform.isPad ? 160 : 80,
        aspectRatio: 1 / 1,
        borderWidth: 3,
        margin: Platform.isPad ? 40 : 0,
        marginTop: Platform.isPad ? 40 : 20,
        paddingBottom: 0,
        borderRadius: Platform.isPad ? 80 : 100,
    },
    emptyNormal: {
        height: Platform.isPad ? 140 : 65,
        aspectRatio: 1 / 1,
        borderWidth: 3,
        marginBottom: Platform.isPad ? 40 : -20,
        margin: Platform.isPad ? 40 : 0,
        marginRight: Platform.isPad ? 40 : 5,
        borderRadius: Platform.isPad ? 80 : 100,
    },
    emptyHard: {
        height: Platform.isPad ? 100 : 65,
        aspectRatio: 1 / 1,
        borderWidth: 3,
        margin: Platform.isPad ? 40 : 0,
        marginBottom: Platform.isPad ? 40 : -17,
        marginTop: Platform.isPad ? 40 : 0,
        borderRadius: Platform.isPad ? 80 : 100,
    },
    emptyNightmare: {
        width: Platform.isPad ? 90 : 60,
        aspectRatio: 1 / 1,
        borderWidth: 3,
        margin: Platform.isPad ? 40 : 0,
        marginBottom: Platform.isPad ? 40 : -10,
        borderRadius: Platform.isPad ? 80 : 100,
    },
    emptyImpossible: {
        height: Platform.isPad ? 70 : 50,
        aspectRatio: 1 / 1,
        borderWidth: 3,
        margin: Platform.isPad ? 40 : 0,
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