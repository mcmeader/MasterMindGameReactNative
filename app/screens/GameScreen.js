import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Alert,
    Text,
    Platform,
    SafeAreaView
} from 'react-native';
import BackButton from '../components/GameScreen/Buttons/BackButton';
import UserActionButton from '../components/GameScreen/Buttons/UserActionButton';
import FlatListContainer from '../components/GameScreen/Containers/FlatListContainer';
import PoolContainer from '../components/GameScreen/Containers/PoolContainer';
import SolutionContainer from '../components/GameScreen/Containers/SolutionContainer';
import { Difficulties } from '../constants/enums/Difficulties';
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

    let goBack = () => {
        navigation.push("Title Screen")
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.topSection}>
                <View style={styles.topSectionContainer}>
                    <BackButton goBack={goBack} />
                    <View style={styles.roundsLeftContainer}>
                        <Text style={styles.roundsLeft}>Rounds Left:</Text>
                        <Text style={styles.roundsLeftNumber}>{difficulty != Difficulties.easy ? difficulty.maxGuesses - currentRound : '-'}</Text>
                    </View>
                </View>
                <SolutionContainer sol={solution} hidden={solutionHidden} difficulty={difficulty} />
            </View>

            <View style={styles.midSection}>
                <FlatListContainer data={roundData} difficulty={difficulty} />
            </View>

            <View style={styles.bottomSection}>
                <PoolContainer colors={difficulty.colors} selectColor={selectColor} selectedIndex={selectedIndex} difficulty={difficulty} />
                <View style={styles.buttonBar}>
                    <UserActionButton id="resetGuess" buttonText='Reset' clickAction={resetGuess} />
                    <UserActionButton id="submitGuess" buttonText="Submit" clickAction={submitGuess} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignContent: 'center',
    },
    topSection: {
        flex: Platform.isPad ? 0.8 : 0.6,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#408000',
    },
    midSection: {
        flex: Platform.isPad ? 3.4 : 3.8,
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: '#d3d3d3',
    },
    bottomSection: {
        flex: Platform.isPad ? 1.4 : 1.25,
        alignContent: 'center',
        borderColor: 'black',
        borderTopWidth: 4,
        backgroundColor: '#5A5B5C',
    },
    buttonBar: {
        flex: Platform.isPad ? 0.8 : 1.25,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#408000',
    },
    roundsLeftContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 12,
        fontSize: Platform.isPad ? 30 : 12,
    },
    topSectionContainer: {
        flex: 1.75,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    roundsLeft: {
        fontSize: Platform.isPad ? 40 : 12,
        marginBottom: 20,
    },
    roundsLeftNumber: {
        fontSize: Platform.isPad ? 60 : 12,
    }
});

export default GameScreen
