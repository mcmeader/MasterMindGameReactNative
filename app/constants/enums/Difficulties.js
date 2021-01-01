import { EasyDifficultyPegColor, HardDifficultyPegColor, ImpossibleDifficultyPegColor, NightmareDifficultyPegColor, NormalDifficultyPegColor } from "./PegColor"

const Difficulties = {
    "easy": {
        "difficulty": "Easy",
        "numberOfPegs": 3,
        "colors": EasyDifficultyPegColor,
        "maxGuesses": 0,
    },
    "normal": {
        "difficulty": "Normal",
        "numberOfPegs": 4,
        "colors": NormalDifficultyPegColor,
        "maxGuesses": 10,
    },
    "hard": {
        "difficulty": "Hard",
        "numberOfPegs": 5,
        "colors": HardDifficultyPegColor,
        "maxGuesses": 12,
    },
    "nightmare": {
        "difficulty": "Nightmare",
        "numberOfPegs": 6,
        "colors": NightmareDifficultyPegColor,
        "maxGuesses": 10,
    },
    "impossible": {
        "difficulty": "Impossible",
        "numberOfPegs": 8,
        "colors": ImpossibleDifficultyPegColor,
        "maxGuesses": 8,
    }
}

const getDifficulties = () => {
    return [Difficulties.easy, Difficulties.normal, Difficulties.hard, Difficulties.nightmare, Difficulties.impossible]
}

export { Difficulties, getDifficulties }