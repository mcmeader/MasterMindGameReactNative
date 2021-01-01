import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Button } from 'react-native';

const UserActionButton = (props) => {
    return (
        <View style={styles.buttonContainer} >
            <Button title={props.buttonText} onPress={() => props.clickAction()} />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        margin: 5,
    },
});

UserActionButton.propTypes = {
    buttonText: PropTypes.string,
    clickAction: PropTypes.func
}

export default UserActionButton