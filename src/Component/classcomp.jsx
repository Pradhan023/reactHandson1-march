import React, { Component } from 'react'
import './classcomp.css'

class Classcomp extends Component {
  render() {
    return (
        <div className="classcontainer">
        <h1>This is created using class Component</h1>
        <p className='p'>This is done using external CSS</p>
        <p style={{color:'blue' , fontSize:'x-large'}}>This is done using inline CSS</p>
    </div>
    )
  }
}
export default Classcomp