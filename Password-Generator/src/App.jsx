import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setNumallowed] = useState(false)
  const [charAllowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "`~!@#$%^&*()+';:?/.,"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    
    setPassword(pass)

  },
    [length, numAllowed, charAllowed, setPassword]
  )

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  }, 
  [password])

  useEffect(() => {
      passwordGenerator()
  }, 
  [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-20 text-orange-400 font-bold bg-gray-700'>
        <h1 className='text-4xl text-center text-white my-3 py-10'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 '
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-6 outline-black bg-orange-500 text-black mr-1 px-6 py-1 shrink-0 rounded-lg font-medium transition-all duration-200 hover:bg-orange-600 hover:text-white active:scale-95 shadow-md hover:shadow-lg'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer py-4'
            onChange={ (e) => {setLength(e.target.value)} }
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex text-sm gap-x-2'>
            <input 
            type="checkbox" 
            defaultChecked={numAllowed}
            id='numberInput'
            className='py-4 ml-2'
            onChange={ () => {setNumallowed((prev) => !prev);} }
            />
            <label className='py-4'>Numbers</label>
          </div>
          <div className='flex text-sm gap-x-2'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id='charInput'
            className='py-4 ml-2'
            onChange={ () => {setCharallowed((prevs) => !prevs);} }
            />
            <label className='py-4'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
