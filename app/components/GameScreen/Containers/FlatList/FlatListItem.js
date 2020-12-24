import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import GradedRow from '../FlatList/GradedRow';
import GuessRow from '../FlatList/GuessRow';
import GuessPeg from '../../Pegs/GuessPeg';
import ColorPeg from '../../Pegs/ColorPeg';

const FlatListItem = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.round}>{props.rowNumber}</Text>
            <GradedRow data={props.gradedRow} />
            <GuessRow guessRow={props.guessRow} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 75,
        borderWidth: 3,
        borderColor: 'black',
        marginBottom: 5,
    },
    round: {
        textAlignVertical: 'center',
    }
});

FlatListItem.propTypes = {
    rowNumber: PropTypes.number,
    gradedRow: PropTypes.arrayOf(String),
    guessRow: PropTypes.arrayOf(String)
}

export default FlatListItem