import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import StaticColorPeg from '../../Pegs/StaticColorPeg';

const GuessRow = (props) => {
    return (
        <View style={styles.container}>
            {props.guessRow.map((value, index) =>
                <StaticColorPeg key={index} pegColor={value} />)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
    },
});

GuessRow.propTypes = {
    guessRow: PropTypes.arrayOf(String),
}

export default GuessRow