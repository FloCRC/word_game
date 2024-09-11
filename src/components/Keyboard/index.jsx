export default function Keyboard({ gameKey }) {

    return (
        <>
            <div id="keyboard" className="flex flex-col items-center">
                <div className="">
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">q</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">w</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">e</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">r</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">t</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">y</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">u</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">i</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">o</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">p</button>
                </div>
                <div className="">
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">a</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">s</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">d</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">f</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">g</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">h</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">j</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">k</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">l</button>
                </div>
                <div className="">
                    <button className="keyboard-key p-1 m-1 w-12 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">Del</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">z</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">x</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">c</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">v</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">b</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">n</button>
                    <button className="keyboard-key p-1 m-1 w-6 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">m</button>
                    <button className="keyboard-key p-1 m-1 w-20 cursor-pointer uppercase bg-gray-200 border rounded hover:shadow-inner shadow-md">Enter</button>
                </div>
            </div>
        </>
    )
}