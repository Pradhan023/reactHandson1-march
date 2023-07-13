import React, { useState } from 'react'
import Funcomp from './Component/funcomp'
import Classcomp from './Component/classcomp'
import './App.css'

const App = () => {
  const[value,Newvalue] = useState(false)
  const[value1,Newvalue1] = useState(false)

  console.log(value);
  const change = ()=>{
    Newvalue(!value)
  }

  return (
    <div className='bgcolor'>
    <h1 className='h1'>Styling using Functional and Class Component</h1>
    <div className="btn">
      <button className='btnfont' onClick={change}>To see styling is functional component</button>
      <button className='btnfont' onClick={()=>{
        Newvalue1(!value1)
      }}>To see styling is class component</button>
    </div>
    <div className="box">
    {value && <Funcomp/>}
    {value1 && <Classcomp/>}
    </div>
    </div>
  )
}

export default App
