import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Alert,
} from 'react-native';
import MenuButton from '../components/GameScreen/Buttons/MenuButton';
import UserActionButton from '../components/GameScreen/Buttons/UserActionButton';
import FlatListContainer from '../components/GameScreen/Containers/FlatListContainer';
import PoolContainer from '../components/GameScreen/Containers/PoolContainer';
import SolutionContainer from '../components/GameScreen/Containers/SolutionContainer';
import GuessPegColor from '../constants/enums/GuessPegColor';
import { checkGuess, generateSolution } from '../handlers/GameLogicHandler';

const GameScreen = ({ route, navigation }) => {
    let { difficulty } = route.params

    const [solutionHidden, setSolutionHidden] = useState(true)
    const [solution, setSolution] = useState(generateSolution(difficulty))
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentRound, setCurrentRound] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState(null)
    const [selectedPegs, setSelectedPegs] = useState(new Array(difficulty.numberOfPegs).fill(GuessPegColor.EMPTY))
    const [roundData, setRoundData] = useState([{
        round: 1,
        answers: new Array(difficulty.numberOfPegs).fill(GuessPegColor.EMPTY),
        guesses: new Array(difficulty.numberOfPegs).fill(GuessPegColor.EMPTY)
    }])

    let goToTitle = () => {
        navigation.navigate("Title Screen")
    }

    let createWinAlert = () => {
        Alert.alert(
            "Congratulations!",
            `You solved the puzzle in ${currentRound + 1} rounds!`,
            [
                {
                    text: "Ok",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                }
            ],
            { cancelable: true }
        );
    }

    let createLoseAlert = () => {
        Alert.alert(
            "Better Luck Next Time!",
            `You failed to solve the puzzle in the alloted ${currentRound + 1} rounds!`,
            [
                {
                    text: "Ok",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                }
            ],
            { cancelable: true }
        );
    }

    let selectColor = (color, index) => {
        if (selectedIndex === index) {
            setSelectedIndex(null)
            if (currentIndex < difficulty.numberOfPegs) {
                let newPegs = [...selectedPegs]
                newPegs[currentIndex] = color
                setSelectedPegs(newPegs)
                let oldRoundData = [...roundData]
                oldRoundData.pop()
                let newRoundData = roundData[currentRound]
                newRoundData.guesses = newPegs
                setRoundData([...oldRoundData, newRoundData])
                setCurrentIndex(currentIndex + 1)
            }
        } else {
            setSelectedIndex(index)
        }
    }

    let resetGuess = () => {
        setSelectedPegs(new Array(difficulty.numberOfPegs).fill(GuessPegColor.EMPTY))
        setCurrentIndex(0)
        setSelectedIndex(null)
        let oldRoundData = [...roundData]
        oldRoundData.pop()
        let newRoundData = roundData[currentRound]
        newRoundData.guesses = new Array(difficulty.numberOfPegs).fill(GuessPegColor.EMPTY)
        setRoundData([...oldRoundData, newRoundData])
    }

    let submitGuess = () => {
        let checkedGuess = checkGuess(selectedPegs, solution)
        if (checkedGuess.indexOf(GuessPegColor.WHITE) === -1 && checkedGuess.indexOf(GuessPegColor.EMPTY) === -1) {
            setSolutionHidden(false)
            let currentRoundData = roundData[currentRound]
            currentRoundData.answers = checkedGuess
            createWinAlert()
        } else {
            if (difficulty.maxGuesses === currentRound + 1) {
                setSolutionHidden(false)
                let currentRoundData = roundData[currentRound]
                currentRoundData.answers = checkedGuess
                createLoseAlert()
            } else {
                let currentRoundData = roundData[currentRound]
                currentRoundData.answers = checkedGuess
                setRoundData([...roundData, {
                    round: currentRound + 2,
                    answers: new Array(difficulty.numberOfPegs).fill(GuessPegColor.EMPTY),
                    guesses: new Array(difficulty.numberOfPegs).fill(GuessPegColor.EMPTY)
                }])
                setCurrentRound(currentRound + 1)
                setSelectedPegs(new Array(difficulty.numberOfPegs).fill(GuessPegColor.EMPTY))
                setCurrentIndex(0)
                setSelectedIndex(null)
            }
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.topSection}>
                <MenuButton clickAction={goToTitle} />
                <SolutionContainer sol={solution} hidden={solutionHidden} />
            </View>

            <View style={styles.midSection}>
                <FlatListContainer data={roundData} />
            </View>

            <View style={styles.bottomSection}>
                <PoolContainer colors={difficulty.colors} selectColor={selectColor} selectedIndex={selectedIndex} />
                <View style={styles.buttonBar}>
                    <UserActionButton id="resetGuess" buttonText='Reset' clickAction={resetGuess} />
                    <UserActionButton id="submitGuess" buttonText="Submit" clickAction={submitGuess} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignContent: 'center',
    },
    topSection: {
        flex: 0.6,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#408000',
    },
    midSection: {
        flex: 3.8,
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: '#d3d3d3',
    },
    bottomSection: {
        flex: 1.25,
        alignContent: 'center',
        borderColor: 'black',
        borderTopWidth: 4,
        backgroundColor: '#5A5B5C',
    },
    buttonBar: {
        flex: 1.25,
        flexDirection: 'row',
        backgroundColor: '#408000',
    }
});

export default GameScreen
