import { getDifficulties } from '../constants/enums/Difficulties.js'
import GuessPegColor from '../constants/enums/GuessPegColor.js';
import { checkGuess } from '../handlers/GameLogicHandler'

describe("Game Logic Tests", () => {
    let gameDifficulty

    let getRandom = (arr) => {
        return arr[Math.floor(arr.length * Math.random(arr.length))]
    }

    beforeEach(() => {
        gameDifficulty = getRandom(getDifficulties())
    });

    it("Returns null on a winning guess", () => {
        let guess = Array.of(gameDifficulty.colors[1])
        let results = checkGuess(guess, guess)
        expect(results.indexOf(GuessPegColor.WHITE)).toBe(-1)
        expect(results.indexOf(GuessPegColor.EMPTY)).toBe(-1)
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
