import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Platform } from 'react-native';
import { Difficulties } from '../../../constants/enums/Difficulties';

const StaticColorPeg = (props) => {
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
        <View style={styles.buttonContainer}>
            {props.pegColor === 'zz' ?
                <View style={getTextStyle()}></View>
                :
                <View style={[getTextStyle(), {
                    backgroundColor: props.pegColor === 'zz' ? 'yellow' : props.pegColor
                }]} />
            }
        </View>
    )
};


const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        margin: 1,
        aspectRatio: 1 / 1,
    },
    emptyEasy: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'black',
        margin: Platform.isPad ? 40 : 10,
        borderRadius: Platform.isPad ? 50 : 100,
    },
    emptyNormal: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'black',
        margin: Platform.isPad ? 20 : 5,
        borderRadius: Platform.isPad ? 50 : 100,
    },
    emptyHard: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'black',
        margin: Platform.isPad ? 15 : 5,
        borderRadius: Platform.isPad ? 40 : 100,
    },
    emptyNightmare: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'black',
        margin: Platform.isPad ? 15 : 5,
        borderRadius: Platform.isPad ? 40 : 100,

    },
    emptyImpossible: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: Platform.isPad ? 30 : 100,
    },
});

StaticColorPeg.props = {
    pegColor: PropTypes.string,
    difficulty: PropTypes.object,
}

export default StaticColorPeg