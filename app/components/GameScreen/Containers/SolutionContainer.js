import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

const SolutionContainer = (props) => {
    return (
        <View style={styles.container}>
            {props.hidden ? <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: "black" }} /> :
                props.solution.map(peg => <View style={{ borderRadius: 100, height: 30, width: 30, backgroundColor: peg.color, }} key={peg.position} />)}
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
    solution: PropTypes.object,
    hidden: PropTypes.bool
}

export default SolutionContainer