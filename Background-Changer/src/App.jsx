import { useState } from 'react'

function App() {
  const [color, setColor] = useState("gold")

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-24 inset-x-0 px-2'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl'>
          <button onClick={ () => setColor("Red") } className='outline-none text-white px-4 py-1 shadow-lg rounded-full' style={{backgroundColor : "red"}} >Red</button>
          <button onClick={ () => setColor("Blue") } className='outline-none text-white px-4 py-1 shadow-lg rounded-full' style={{backgroundColor : "blue"}} >Blue</button>
          <button onClick={ () => setColor("Green") } className='outline-none text-white px-4 py-1 shadow-lg rounded-full' style={{backgroundColor : "green"}} >Green</button>
          <button onClick={ () => setColor("Purple") } className='outline-none text-white px-4 py-1 shadow-lg rounded-full' style={{backgroundColor : "purple"}} >Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
