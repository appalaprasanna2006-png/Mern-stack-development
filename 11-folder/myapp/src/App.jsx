import React from 'react'

const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("Bhaii your form is submitted")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name'/>
        <input type="age" placeholder='Enter your age'/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
