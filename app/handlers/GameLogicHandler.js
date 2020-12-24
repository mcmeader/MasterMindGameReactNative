import GuessPegColor from "../constants/enums/GuessPegColor"

const checkGuess = (guess, solution) => {
    let checkedPegs = new Array(guess.length).fill(GuessPegColor.EMPTY)
    let checkedGuess = [...guess]

    guess.forEach((data, index) => {
        if (data === solution[index]) {
            checkedGuess[index] = "-"
            checkedPegs[index] = GuessPegColor.BLACK
        }
    })

    let whiteGuess = [...solution]
    checkedPegs.forEach((data, index) => {
        if (data === GuessPegColor.BLACK) {
            whiteGuess[index] = "-"
        }
    })

    checkedGuess.forEach((data, index) => {
        if (data !== '-') {
            let indexWhiteGuess = whiteGuess.indexOf(data)
            if (indexWhiteGuess != -1) {
                checkedPegs[index] = GuessPegColor.WHITE;
                whiteGuess[indexWhiteGuess] = "-"
            }
        }
    })

    if (checkedPegs.some(value => value === GuessPegColor.EMPTY) || checkedPegs.some(value => value === GuessPegColor.WHITE)) {
        checkedPegs.sort()
        return checkedPegs
    } else {
        return new Array(guess.length).fill(GuessPegColor.BLACK)
    }
}

const generateSolution = (difficulty) => {
    let pegs = new Array(difficulty.numberOfPegs).fill("")
    let randomPegs = pegs.map(() => difficulty.colors[Math.floor(Math.random() * difficulty.colors.length)])
    return randomPegs
}

export { checkGuess, generateSolution }