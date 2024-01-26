import { useRef } from "react"
import { useEffect } from "react"
import { useState, useCallback } from "react"


function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const pwdRef = useRef(null)

  const pwdGenerator = useCallback(() => {
    let pwd = ""
    let str = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) str += '0123456789'
    if(charAllowed) str += '!@#$%^&*()'

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pwd += str.charAt(char)
    }
    setPassword(pwd)
    
  },[length,numberAllowed,charAllowed,setPassword])
  //setPassword here is for memoization we can not give password here (infinite loop)

  const copyPasswordToClipBoard = useCallback(() => {
    pwdRef.current?.select();
    // pwdRef.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    pwdGenerator()
  },[length, numberAllowed, charAllowed, pwdGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        ref={pwdRef}
        />
        <button
        onClick={copyPasswordToClipBoard}
         className="outline-none bg-blue-700 text-white
        px-3 py-3 shrink-0"> Copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) =>setLength(e.target.value)}
            />
            <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input
        type="checkbox"
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
        </div> 

        <div className="flex items-center gap-x-1">
        <input
        type="checkbox"
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={() => {
          setCharAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="characterInput">Characters</label>
        </div> 
      </div>
    </div>
    </>
  )
}

export default App
