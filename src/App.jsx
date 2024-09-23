import { useEffect, useState } from "react";
import Game from "./components/Game";

export default function App() {

    const [words, setWords] = useState([]);
    const [correctWord, setCorrectWord] = useState('');

    useEffect(() => {
        fetch('popular.json').then(res => {
            return res.json();
        }).then(data => {
            let allWords = data.words;
            let wordList = [];
            allWords.forEach(word => {
                if (word.length == 6) {
                    wordList.push(word)
                }
            });
            setWords(wordList);
            let word = wordList[Math.floor(Math.random() * wordList.length)]
            setCorrectWord(word);
            console.log(word)
        })

    }, [])

    function newGame() {
        window.location.reload();
    }

    return (
        <div className="h-screen w-screen bg-gray-100 flex flex-col">
            <div className="flex flex-col justify-center items-center">
                <h1 className="w-screen text-center text-2xl text-green-300 py-5 mb-5 bg-gray-600 font-bold">Word Game</h1>
                <button onClick={newGame} className="border rounded p-2 shadow hover:shadow-inner text-gray-600 border-gray-300 bg-grey-100 hover:bg-green-300">New Game</button>
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
                <Game words={words} correctWord={correctWord} />
            </div>
            <div className="mt-5 bg-gray-600 grow">

            </div>
        </div>
    )
}