import { getDifficulties } from '../constants/enums/Difficulties.js'
import GuessPegColor from '../constants/enums/GuessPegColor.js';
import { checkGuess } from '../handlers/GameLogicHandler'

//Fisher-Yates shuffle algorithm
const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a;
}

const generateRandomPegColors = (difficulty) => {
    let pegs = new Array(difficulty.numberOfPegs).fill("")
    let availableColors = difficulty.colors
    return pegs.map(() => shuffleArray(availableColors)[0])
}

describe("Game Logic Tests", () => {
    let gameDifficulty

    beforeEach(() => {
        gameDifficulty = shuffleArray(getDifficulties())[0]
        console.log(gameDifficulty)
    });

    it("Returns null on a winning guess", () => {
        let guess = generateRandomPegColors(gameDifficulty)
        expect(checkGuess(guess, guess)).toBe(null)
    });

    it("Returns correct order for 2 correct guess and no other correct colors", () => {
        let guess = new Array(gameDifficulty.numberOfPegs).fill(gameDifficulty.colors[0])
        guess[2] = gameDifficulty.colors[1]

        let solution = new Array(gameDifficulty.numberOfPegs).fill(gameDifficulty.colors[2])
        solution[2] = gameDifficulty.colors[1]

        let checkedGuess = checkGuess(guess, solution)
        expect(checkedGuess.length).toBe(gameDifficulty.numberOfPegs)
        expect(checkedGuess.some(value => value === GuessPegColor.WHITE)).toBeFalsy()
        expect(checkedGuess[0]).toBe(GuessPegColor.BLACK)
    })

    it("Returns correct order for 1 correct color but no correct positions", () => {
        let guess = new Array(gameDifficulty.numberOfPegs).fill(gameDifficulty.colors[0])
        guess[1] = gameDifficulty.colors[1]

        let solution = new Array(gameDifficulty.numberOfPegs).fill(gameDifficulty.colors[2])
        solution[2] = gameDifficulty.colors[1]

        let checkedGuess = checkGuess(guess, solution)
        console.log(checkedGuess)
        expect(checkedGuess.length).toBe(gameDifficulty.numberOfPegs)
        expect(checkedGuess.some(value => value === GuessPegColor.BLACK)).toBeFalsy()
        expect(checkedGuess[0]).toBe(GuessPegColor.WHITE)
    })

    it("Returns correct values when no colors match the guess", () => {
        let guess = new Array(gameDifficulty.numberOfPegs).fill(gameDifficulty.colors[0])
        guess[0] = gameDifficulty.colors[1]

        let solution = new Array(gameDifficulty.numberOfPegs).fill(gameDifficulty.colors[2])
        solution[0] = gameDifficulty.colors[3]

        let checkedGuess = checkGuess(guess, solution)
        expect(checkedGuess.length).toBe(gameDifficulty.numberOfPegs)
        expect(checkedGuess.some(value => value === GuessPegColor.BLACK)).toBeFalsy()
        expect(checkedGuess.some(value => value === GuessPegColor.WHITE)).toBeFalsy()
    })

});
