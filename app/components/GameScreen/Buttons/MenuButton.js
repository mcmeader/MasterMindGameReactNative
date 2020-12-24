import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, StyleSheet } from 'react-native';

const MenuButton = (props) => {
    return (
        <View style={styles.buttonContainer} >
            <Button title="Menu" onPress={() => props.clickAction()} />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1.5,
        alignContent: 'stretch',
        alignItems: 'stretch',
        padding: 10,
        marginTop: 5,
    },
});

MenuButton.propTypes = {
    clickAction: PropTypes.func,
}

export default MenuButton