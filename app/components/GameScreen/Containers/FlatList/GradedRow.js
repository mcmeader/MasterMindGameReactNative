import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import StaticColorPeg from '../../Pegs/StaticColorPeg';

const GradedRow = (props) => {
    return (
        <View style={styles.container}>
            {props.data.map((value, index) =>
                <StaticColorPeg key={index} pegColor={value} difficulty={props.difficulty} />)}
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

GradedRow.propTypes = {
    data: PropTypes.arrayOf(StaticColorPeg),
    difficulty: PropTypes.object,
}

export default GradedRow