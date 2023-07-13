import React from 'react'
import "./funcomp.css"

function Funcomp() {
  return (
    <div className="container">
        <h1 className='fh1'>This is created using functional Component</h1>
        <p className='fp'>This is done using external CSS</p>
        <p style={{color:'blue' , fontSize:'x-large'}}>This is done using inline CSS</p>
    </div>
  )
}

export default Funcomp