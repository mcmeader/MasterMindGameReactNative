import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native';
import { getDifficulties } from '../../constants/enums/Difficulties';
import ModalSelector from 'react-native-modal-selector';

const DifficultySelector = (props) => {
    let difficulties = getDifficulties();
    let data = difficulties.map((data, index) => {
        return (
            {
                key: index,
                label: `${data.difficulty}\nPegs:${data.numberOfPegs}\nGuesses:${data.maxGuesses}`
            })
    })

    return (
        <ModalSelector
            style={styles.buttonContainer}
            cancelText="CANCEL"
            data={data}
            initValueTextStyle={styles.textStyle}
            initValue={props.difficultyIndex != undefined ? `Difficulty: ${difficulties[props.difficultyIndex].difficulty}` : "Select a difficulty"}
            onChange={(option) => props.setDifficulty(option.key)} />
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'column',
        alignContent: 'center',
        flex: 1,
        margin: 5,
        backgroundColor: "lightblue",
    },
    textStyle: {
        marginTop: 30,
        marginBottom: 38,
        textAlignVertical: 'center',
        color: 'black',
        fontSize: 20,
    }
});

DifficultySelector.propTypes = {
    difficultyIndex: PropTypes.number,
    setDifficulty: PropTypes.func
}

export default DifficultySelector