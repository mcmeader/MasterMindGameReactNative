import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert
} from 'react-native';
import DifficultySelector from '../components/TitleScreen/DifficultySelector.js';

import TitleScreenOptionButton from '../components/TitleScreen/TitleScreenOptionButton.js'
import { getDifficulties } from '../constants/enums/Difficulties.js';

const TitleScreen = ({ navigation }) => {
    let difficulties = getDifficulties()
    const [gameDifficultyIndex, setGameDifficultyIndex] = useState()

    let startGame = () => {
        if (gameDifficultyIndex != undefined) {
            navigation.push("Game Screen", { difficulty: difficulties[gameDifficultyIndex], navigate: navigation })
        } else {
            Alert.alert(
                "Error!",
                "Please select a difficulty",
                [
                    {
                        text: "Ok",
                        style: "cancel"
                    }
                ],
                { cancelable: true }
            );
        }
    }

    let placeholder = () => { }

    return (
        <View style={styles.screen}>
            <View style={styles.content}>
                <Text style={styles.mastermindLogo}>
                    Mastermind
                </Text>
                <TitleScreenOptionButton text="Start Game" buttonFunction={startGame} />
                <DifficultySelector
                    difficultyIndex={gameDifficultyIndex}
                    setDifficulty={setGameDifficultyIndex} />
                <TitleScreenOptionButton text="High Score" buttonFunction={placeholder} />
                <TitleScreenOptionButton text="Settings" buttonFunction={placeholder} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignContent: 'center',
        margin: 5,
    },
    content: {
        flex: 1,
        alignContent: 'space-between',
    },
    mastermindLogo: {
        flex: 1,
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

export default TitleScreen