import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const StaticColorPeg = (props) => {
    return (
        <View style={styles.buttonContainer}>
            {props.pegColor === 'zz' ?
                <Text style={styles.emptyButtonContainer}>X</Text>
                :
                <View style={{
                    flex: 1, backgroundColor: props.pegColor === 'zz' ? 'yellow' : props.pegColor, borderRadius: 100,
                    borderColor: 'black', borderWidth: 2
                }}>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        margin: 5,
        maxHeight: 45,
        maxWidth: 45,
        aspectRatio: 1 / 1,
    },
    emptyButtonContainer: {
        flex: 1,
        color: 'black',
        fontSize: 22,
        borderWidth: 2,
        borderRadius: 100,
        textAlignVertical: 'center',
        borderColor: 'black',
        textAlign: 'center',
        justifyContent: 'center',
    }
});

StaticColorPeg.props = {
    pegColor: PropTypes.string,
}

export default StaticColorPeg