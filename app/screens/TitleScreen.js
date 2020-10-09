import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView
} from 'react-native';

import { TitleScreenOptionButton } from '../components/TitleScreen/TitleScreenOptionButton.js'

const TitleScreen = () => {
    return (
        // <SafeAreaView>
        <View style={styles.screen}>
            <View style={styles.content}>
                <Text style={styles.mastermindLogo}>
                    Mastermind
                </Text>
                <TitleScreenOptionButton text="Start Game" buttonFunction={() => null} />
                <TitleScreenOptionButton text="Difficulty" buttonFunction={() => null} />
                <TitleScreenOptionButton text="High Score" buttonFunction={() => null} />
                <TitleScreenOptionButton text="Settings" buttonFunction={() => null} />
            </View>
        </View>
        // </SafeAreaView>
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