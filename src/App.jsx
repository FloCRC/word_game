import { useEffect, useState } from "react";
import Game from "./components/Game";

export default function App() {

    const [words, setWords] = useState([]);
    const [correctWord, setCorrectWord] = useState('');
    const [gameKey, setGameKey] = useState(0)

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

    }, [gameKey])

    function newGame() {
        window.location.reload();
    }

    return (
        <div className="h-screen w-screen">
            <div className="flex flex-col justify-center items-center mt-6">
                <h1 className="text-2xl mb-1 font-bold">Word Game</h1>
                <button onClick={newGame} className="border rounded p-2 shadow hover:shadow-inner bg-grey-200 hover:bg-green-300">New Game</button>
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
                <Game words={words} correctWord={correctWord} gameKey={gameKey} />
            </div>
        </div>
    )
}