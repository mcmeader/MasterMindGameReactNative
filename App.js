import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import GameScreen from './app/screens/GameScreen';
import TitleScreen from './app/screens/TitleScreen'

export const App = () => {
    let Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen
                    name="Title Screen"
                    component={TitleScreen}
                />
                <Stack.Screen
                    name="Game Screen"
                    component={GameScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
