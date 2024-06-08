import { useCallback, useEffect, useState } from 'react'

function App() {
  const [length, setLength]= useState(6)
  const [numberAllowed, setNumberAllowed]= useState(false)
  const [charAllowed, setCharAllowed]= useState(false)
  const [password, setPassword]= useState("")
  
  const passwordGenerator= useCallback(()=> {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+{}[]?"

    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  

  return (
  
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='password'></input>
        <button className='outline-none bg-blue-500 text-white px-3 py-1'>copy</button>
      </div>
      <div>
        <div>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' 
          onChange={(e)=>{setLength(e.target.value)}}></input>
          <label>length:{length}</label>
        </div>
        
          <input type="checkbox" id="numberInput" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev) => !prev)}} />
        <label htmlFor='numberInput'>numbers</label>

        <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={()=>{setCharAllowed((prev) => !prev)}} />
        <label htmlFor='charInput'>character</label>
      </div>
    </div>

  )
}

export default App
