import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import TitleScreenOptionButton from '../components/TitleScreen/TitleScreenOptionButton.js'
import { getDifficulties } from '../constants/enums/Difficulties.js';

const TitleScreen = ({ navigation }) => {
    let difficulties = getDifficulties()
    const [gameDifficultyIndex, setgameDifficultyIndex] = useState(1)

    let updateDifficulty = () => {
        if (gameDifficultyIndex === difficulties.length - 1) {
            setgameDifficultyIndex(0)
        } else {
            setgameDifficultyIndex(gameDifficultyIndex + 1)
        }
    }

    let startGame = () => {
        navigation.push("Game Screen", { difficulty: difficulties[gameDifficultyIndex], navigate: navigation })
    }

    let placeholder = () => { }

    return (
        <View style={styles.screen}>
            <View style={styles.content}>
                <Text style={styles.mastermindLogo}>
                    Mastermind
                </Text>
                <TitleScreenOptionButton text="Start Game" buttonFunction={startGame} />
                <TitleScreenOptionButton text={'Difficulty: ' + difficulties[gameDifficultyIndex].difficulty}
                    buttonFunction={updateDifficulty} />
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