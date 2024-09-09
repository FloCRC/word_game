import { useEffect, useState } from "react";

export default function Board({ gameKey }) {

    // const [board, setBoard] = useState('')

    // useEffect(() => {
        function createBoard() {
            let gameBoard = document.getElementById("game-board");
            // gameBoard.replaceChildren();
            for (let i = 0; i < 7; i++) {
                let row = document.createElement('div')
                row.className = "row flex p-1"
                for (let j = 0; j < 6; j++) {
                    let box = document.createElement('div')
                    box.className = "box border w-10 h-10 mx-1 p-1 flex items-center justify-center uppercase"
                    row.appendChild(box)
                }
                if (gameBoard != null) {
                    gameBoard.appendChild(row)
                }
            }
        }

        let newBoard = createBoard()
        // setBoard(newBoard)

    // }, [gameKey])

    return (
        <>
            <div id="game-board" className="flex flex-col items-center">
                {newBoard}
            </div>
        </>
    )
}