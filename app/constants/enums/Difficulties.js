import * as colors from './PegColor';

const Difficulties = {
    "easy": {
        "numberOfPegs": 3,
        "colors": colors.EasyDifficultyPegColor,
        "maxGuesses": 0,
    },
    "normal": {
        "numberOfPegs": 4,
        "colors": colors.NormalDifficultyPegColor,
        "maxGuesses": 10,
    },
    "hard": {
        "numberOfPegs": 5,
        "colors": colors.HardDifficultyPegColor,
        "maxGuesses": 12,
    },
    "nightmare": {
        "numberOfPegs": 6,
        "colors": colors.NightmareDifficultyPegColor,
        "maxGuesses": 10,
    },
    "impossible": {
        "numberOfPegs": 8,
        "colors": colors.ImpossibleDifficultyPegColor,
        "maxGuesses": 8,
    }
}

export default Difficulties