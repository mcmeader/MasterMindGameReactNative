import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ColorPeg from '../Pegs/ColorPeg';

const PoolContainer = (props) => {
    return (
        <View style={styles.container}>
            {props.colors.map((color, index) =>
                <ColorPeg key={index} index={index} selected={props.selectedIndex === index} pegColor={color} onSelect={() => props.selectColor(color, index)} difficulty={props.difficulty} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

PoolContainer.propTypes = {
    colors: PropTypes.arrayOf(ColorPeg),
    selectedIndex: PropTypes.number,
    selectColor: PropTypes.func,
    difficulty: PropTypes.object
}

export default PoolContainer