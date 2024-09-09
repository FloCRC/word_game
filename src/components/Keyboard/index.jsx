import { useEffect, useState } from "react"

export default function Keyboard({ gameKey }) {

    // const [keyboard, setKeyboard] = useState('')

    // useEffect(() => {
    //     function createKeyboard() {
    //         return <div className="m-1 flex flex-col items-center">
    //             <div className="">
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">q</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">w</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">e</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">r</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">t</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">y</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">u</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">i</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">o</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">p</button>
    //             </div>
    //             <div className="">
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">a</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">s</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">d</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">f</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">g</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">h</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">j</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">k</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">l</button>
    //             </div>
    //             <div className="">
    //                 <button className="keyboard-key p-1 m-1 w-12 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">Del</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">z</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">x</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">c</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">v</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">b</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">n</button>
    //                 <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">m</button>
    //                 <button className="keyboard-key p-1 m-1 w-20 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">Enter</button>
    //             </div>
    //         </div>
    //     }

    //     let keyboardNew = createKeyboard();
    //     setKeyboard(keyboardNew)

    // }, [gameKey])

    return (
        <>
            <div id="keyboard" className="flex flex-col items-center">
                <div className="">
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">q</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">w</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">e</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">r</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">t</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">y</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">u</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">i</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">o</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">p</button>
                </div>
                <div className="">
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">a</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">s</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">d</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">f</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">g</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">h</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">j</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">k</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">l</button>
                </div>
                <div className="">
                    <button className="keyboard-key p-1 m-1 w-12 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">Del</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">z</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">x</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">c</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">v</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">b</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">n</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">m</button>
                    <button className="keyboard-key p-1 m-1 w-20 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner hover:bg-green-300">Enter</button>
                </div>
            </div>
        </>
    )
}