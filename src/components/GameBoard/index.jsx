import { useEffect } from "react";

export default function GameBoard() {

    let words = [];
    const numberOfGuesses = 7;
    let guessesRemaining = numberOfGuesses;
    let currentGuess = [];
    let letterCount = 0;
    let correctWord = ""
    let board = ''

    useEffect(() => {
        function createBoard() {
            let gameBoard = document.getElementById("game-board");
            for (let i = 0; i < numberOfGuesses; i++) {
                let row = document.createElement('div')
                row.className = "row flex p-1"
                for (let j = 0; j < 6; j++) {
                    let box = document.createElement('div')
                    box.className = "box border w-10 h-10 mx-1"
                    row.appendChild(box)
                }
                if (gameBoard != null) {
                    gameBoard.appendChild(row)
                }
            }
        }

        board = createBoard()

        fetch('words_dictionary.json').then(res => {
            return res.json();
        }).then(data => {
            let allWords = data.words;
            allWords.forEach(word => {
                if (word.length == 6) {
                    words.push(word)
                }
            });
            correctWord = words[Math.floor(Math.random() * words.length)]
            console.log(correctWord)
        })

    }, [])

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
        let wordCopy = correctWord
        let editedCopy = correctWord

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

        for (let i = 0; i < 6; i++) {
            let boxColour = ''
            let box = row.children[i]
            let letter = currentGuess[i]
            let letterPosition = correctWord.indexOf(currentGuess[i])

            if (letterPosition === -1) {
                boxColour = "bg-gray-200"
                let keyColour = "bg-gray-600"
                colourKeyboard(letter, keyColour)
                box.classList.add(boxColour)
            }
            else if (currentGuess[i] === correctWord[i]) {
                boxColour = "bg-green-300"
                let keyColour = "bg-green-300"
                colourKeyboard(letter, keyColour)
                box.classList.add(boxColour)
            }
            else if (correctWord.indexOf(letter) != -1) {
                boxColour = "bg-yellow-300"
                box.classList.add(boxColour)
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
            <div onClick={inputListener} className="flex flex-col justify-center items-center h-screen w-screen">
                <div id="game-board" className="flex flex-col items-center">
                    <h1 className="text-2xl mb-1">Word Game</h1>
                    {board}
                </div>
                <div className="m-1 flex flex-col items-center">
                    <div className="">
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">q</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">w</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">e</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">r</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">t</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">y</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">u</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">i</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">o</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">p</button>
                    </div>
                    <div className="">
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">a</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">s</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">d</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">f</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">g</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">h</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">j</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">k</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">l</button>
                    </div>
                    <div className="">
                        <button className="keyboard-key p-1 m-1 w-12 cursor-pointer uppercase bg-gray-200 border rounded">Del</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">z</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">x</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">c</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">v</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">b</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">n</button>
                        <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded">m</button>
                        <button className="keyboard-key p-1 m-1 w-20 cursor-pointer uppercase bg-gray-200 border rounded">Enter</button>
                    </div>
                </div>
            </div>
        </>
    )
}