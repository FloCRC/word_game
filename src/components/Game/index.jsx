import { useEffect, useState } from "react";
import Board from "../Board";
import Keyboard from "../Keyboard";

export default function Game({ words, correctWord, gameKey }) {

    const numberOfGuesses = 7;
    let guessesRemaining = numberOfGuesses;
    let currentGuess = [];
    let letterCount = 0;

    document.addEventListener("keydown", keyboardListener);

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

    function keyboardListener(e) {
        console.log(e)
        e.preventDefault()
        let value = e.key
        inputListener({target: {textContent: value}})
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
        currentGuess.push(value)
        letterCount += 1
    }

    function deleteLetter() {
        let row = document.getElementsByClassName("row")[7 - guessesRemaining]
        let box = row.children[letterCount - 1]
        box.textContent = ""
        box.classList.remove("filled")
        currentGuess.pop()
        letterCount -= 1
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
            guessesRemaining = 0
            return
        }
        else {
            guessesRemaining -= 1
            currentGuess = []
            letterCount = 0

            if (guessesRemaining === 0) {
                alert(`You've run out of guesses! The correct word was ${correctWord}`)
            }
        }
    }

    function colourKeyboard(letter, colour) {
        for (const key of document.getElementsByClassName("keyboard-key")) {
            if (key.textContent === letter) {
                key.classList.add(colour)
                key.classList.remove(`bg-gray-200`)
            }
        }
    }

    return (
        <>
            <div onClick={inputListener} className="flex flex-col justify-center items-center">
                <Board gameKey={gameKey} />
                <Keyboard gameKey={gameKey} />
            </div>
        </>
    )
}