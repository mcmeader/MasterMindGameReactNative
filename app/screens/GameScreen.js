'use-strict';

import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    SafeAreaView
} from 'react-native';

import { MenuButton } from '../components/GameScreen/Buttons/MenuButton.js';
import { UserActionButton } from '../components/GameScreen/Buttons/UserActionButton.js';
import { SolutionContainer } from '../components/GameScreen/Containers/SolutionContainer.js';
import { PoolContainer } from '../components/GameScreen/Containers/PoolContainer.js';
import { FlatListContainer } from '../components/GameScreen/Containers/FlatListContainer.js';

const sampleData = [
    {
        round: 1,
        data: {
            guesses: ("red", "yellow", "blue", "green"),
            check: ("black", "white", "blank", "black")
        }
    },
    {
        round: 2,
        data: {
            guesses: ("white", "yellow", "blue", "green"),
            check: ("black", "blank", "blank", "black")
        }
    },
]

export default function GameScreen({ difficulty }) {
    return (
        // <SafeAreaView>
        <View style={styles.screen}>
            <View style={styles.topSection}>
                <MenuButton />
                <SolutionContainer />
            </View>
            <View style={styles.midSection}>
                <FlatList
                    data={sampleData.data}
                    key={sampleData.round}
                    renderItem={({ item }) => (<FlatListContainer />)}
                />
            </View>
            <View style={styles.bottomSection}>
                <PoolContainer />
                <View style={styles.buttonBar}>
                    <UserActionButton />
                    <UserActionButton />
                </View>
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
    topSection: {
        flex: 0.6,
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: 'red',
    },
    midSection: {
        flex: 4,
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: 'yellow',
    },
    bottomSection: {
        flex: 1.25,
        alignContent: 'center',
        backgroundColor: 'blue',
    },
    buttonBar: {
        flex: 0.4,
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: 'red',
    }
});
