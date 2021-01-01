import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import GuessPeg from '../../Pegs/GuessPeg';


const GradedRow = (props) => {
    return (
        <View style={styles.container}>
            {props.data.map((value, index) =>
                <GuessPeg key={index} pegColor={value} />)}
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
    data: PropTypes.arrayOf(GuessPeg),
}

export default GradedRow