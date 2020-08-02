import React from 'react';

import TitleScreen from './app/screens/TitleScreen'
import GameScreen from './app/screens/GameScreen';
import { Difficulties } from './app/constants/enums/Difficulties.js'

export const App = () => <GameScreen difficulty={Difficulties.normal} />
