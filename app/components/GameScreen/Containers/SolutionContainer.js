import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import StaticColorPeg from '../Pegs/StaticColorPeg';

const SolutionContainer = (props) => {
    return (
        <View style={styles.container}>
            {props.hidden ? <View style={styles.hiddenMask} /> :
                props.sol.map((peg, index) => <StaticColorPeg key={index} pegColor={peg} difficulty={props.difficulty} />)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2.25,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
    hiddenMask: {
        flex: 1, alignSelf: 'stretch', backgroundColor: "black"
    }
});

SolutionContainer.propTypes = {
    sol: PropTypes.arrayOf(String),
    hidden: PropTypes.bool,
    difficulty: PropTypes.object
}

export default SolutionContainer