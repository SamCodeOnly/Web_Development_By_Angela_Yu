import React, { useState } from 'react'


function App() {

  function handleChange() {
    
  }
  return (
    <div className='container'>
      <h1>Hello</h1>
      <input onChange={handleChange} type="text" placeholder='what your name?' />
      <button>Submit</button>
    </div>
  )
}

export default App
