import React from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    SafeAreaView
} from 'react-native';
import PropTypes from 'prop-types'

import { MenuButton } from '../components/GameScreen/Buttons/MenuButton.js';
import { UserActionButton } from '../components/GameScreen/Buttons/UserActionButton.js';
import { SolutionContainer } from '../components/GameScreen/Containers/SolutionContainer.js';
import { PoolContainer } from '../components/GameScreen/Containers/PoolContainer.js';
import { FlatListContainer } from '../components/GameScreen/Containers/FlatListContainer.js';

const GameScreen = (props) => {
    return (
        // <SafeAreaView>
        <View style={styles.screen}>
            <View style={styles.topSection}>
                <MenuButton />
                <SolutionContainer solution={[{
                    position: 1,
                    color: "yellow"
                }, {
                    position: 2,
                    color: "blue"
                }, {
                    position: 3,
                    color: "white"
                }, {
                    position: 4,
                    color: "black"
                }, {
                    position: 5,
                    color: "grey"
                }
                ]} hidden={false} />
            </View>
            <View style={styles.midSection}>
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
        justifyContent: 'center',
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

GameScreen.propTypes = {
    difficulty: PropTypes.object
}

export default GameScreen