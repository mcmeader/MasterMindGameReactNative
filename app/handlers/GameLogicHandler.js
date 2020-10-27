import GuessPegColor from "../constants/enums/GuessPegColor"

const checkGuess = (guess, solution) => {
    let checkedPegs = new Array(guess.length).fill(GuessPegColor.EMPTY)
    let checkedGuess = [...guess]

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === solution[i]) {
            checkedGuess[i] = "-"
            checkedPegs[i] = GuessPegColor.BLACK
        }
    }

    for (let i = 0; i < checkedGuess.length; i++) {
        if (solution.some(value => value === checkedGuess[i])) {
            checkedGuess[i] = "-"
            checkedPegs[i] = GuessPegColor.WHITE
        }
    }

    if (checkedPegs.some(value => value === GuessPegColor.EMPTY) || checkedPegs.some(value => value === GuessPegColor.WHITE)) {
        checkedPegs.sort()
        return checkedPegs
    } else {
        return null
    }
}

export { checkGuess }