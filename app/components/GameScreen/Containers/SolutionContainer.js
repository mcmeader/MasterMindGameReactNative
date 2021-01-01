import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import StaticColorPeg from '../Pegs/StaticColorPeg';

const SolutionContainer = (props) => {
    return (
        <View style={styles.container}>
            {props.hidden ? <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: "black" }} /> :
                props.sol.map((peg, index) => <StaticColorPeg key={index} pegColor={peg} />)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    hiddenMask: {
        flex: 1,
        backgroundColor: 'black',
    }
});

SolutionContainer.propTypes = {
    sol: PropTypes.arrayOf(String),
    hidden: PropTypes.bool
}

export default SolutionContainer