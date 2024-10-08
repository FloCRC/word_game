import { useState } from "react";
import Board from "../Board";
import Keyboard from "../Keyboard";

export default function Game({ words, correctWord }) {

    const [guessesRemaining, setGuessesRemaining] = useState(7);
    const [currentGuess, setCurrentGuess] = useState([]);
    const [letterCount, setLetterCount] = useState(0);

    function inputListener(e) {
        if (guessesRemaining === 0) {
            return
        }

        let target = e.target
        let value = target.textContent

        if (value === "Del") {
            value = "Backspace"
        }

        if (value === "Backspace" && letterCount !== 0) {
            deleteLetter()
            return
        }

        if (value === "Enter") {
            checkGuess()
            return
        }

        let letter = value.match(/[a-z]/gi)

        if (!letter || letter.length > 1) {
            return
        }
        else {
            addLetter(value)
        }
    }

    function addLetter(value) {
        if (letterCount === 6) {
            return
        }

        value = value.toLowerCase()

        let row = document.getElementsByClassName("row")[7 - guessesRemaining]
        let box = row.children[letterCount]
        box.textContent = value
        box.classList.add("filled")
        setCurrentGuess(oldArray => [...oldArray, value])
        setLetterCount(letterCount + 1)
    }

    function deleteLetter() {
        let row = document.getElementsByClassName("row")[7 - guessesRemaining]
        let box = row.children[letterCount - 1]
        box.textContent = ""
        box.classList.remove("filled")
        setCurrentGuess(currentGuess.slice(0, -1))
        setLetterCount(letterCount - 1)
    }

    function checkGuess() {
        let row = document.getElementsByClassName("row")[7 - guessesRemaining]
        let guess = ''

        for (const letter of currentGuess) {
            guess += letter
        }

        if (guess.length < 6) {
            alert("Word too short!")
            return
        }

        if (!words.includes(guess)) {
            alert("Word not in list!")
            return
        }

        let boxColour = ''
        let keyColour = ''
        let correctBoxes = {
            0: false,
            1: false,
            2: false,
            3: false,
            4: false,
            5: false
        }
        let correctWordLetters = {}

        for (let i = 0; i < correctWord.length; i++) {
            if (!(correctWord[i] in correctWordLetters)) {
                correctWordLetters[correctWord[i]] = 1
            }
            else {
                correctWordLetters[correctWord[i]] += 1
            }
        }

        for (let i = 0; i < 6; i++) {
            let box = row.children[i]
            let letter = currentGuess[i]
            if (currentGuess[i] === correctWord[i]) {
                boxColour = "bg-green-300"
                keyColour = "bg-green-300"
                colourKeyboard(letter, keyColour)
                box.classList.add(boxColour)
                correctBoxes[i] = true
                correctWordLetters[currentGuess[i]] -= 1
            }
        }

        for (let i = 0; i < 6; i++) {
            let box = row.children[i]
            let letter = currentGuess[i]
            if ((correctWord.includes(currentGuess[i]) && correctBoxes[i] != true) && correctWordLetters[currentGuess[i]] > 0) {
                boxColour = "bg-yellow-300"
                box.classList.add(boxColour)
                correctWordLetters[currentGuess[i]] -= 1
            }
            else {
                boxColour = "bg-gray-200"
                box.classList.add(boxColour)
                if (!correctWord.includes(currentGuess[i])) {
                    keyColour = "bg-gray-600"
                    colourKeyboard(letter, keyColour)
                }
            }
        }

        if (guess == correctWord) {
            alert("You guessed correctly!")
            setGuessesRemaining(0)
            return
        }
        else {
            setGuessesRemaining(guessesRemaining - 1)
            let guessesRemainingForReal = guessesRemaining - 1
            setCurrentGuess([])
            setLetterCount(0)

            if (guessesRemainingForReal === 0) {
                alert(`You've run out of guesses! The correct word was ${correctWord}`)
            }
        }
    }

    function colourKeyboard(letter, colour) {
        for (const key of document.getElementsByClassName("keyboard-key")) {
            if (key.textContent === letter) {
                key.classList.add(colour)
                key.classList.remove("bg-gray-200")
                if (colour == "bg-gray-600") {
                    key.classList.add("text-gray-200")
                }
            }
        }
    }

    return (
        <>
            <div onClick={inputListener} className="flex flex-col justify-center items-center">
                <Board />
                <Keyboard />
            </div>
        </>
    )
}