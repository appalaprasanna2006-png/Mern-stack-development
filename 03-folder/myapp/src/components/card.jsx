import React from 'react'

const card = (props) => {
  return (
    
    //   <div className="card">
    //   <img src="https://i.pinimg.com/736x/b2/da/f9/b2daf9019c4b08fa3a90c7d28a08a059.jpg" alt=""/>
    //   <h1>Prasanna,22</h1>
    //   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cum.</p>
    //   <button>view profile</button>
    // </div>

<div className="card">
      <img src={props.img}alt=""/>
      <h1>{props.user},{props.age}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cum.</p>
      <button>view profile</button>
    </div>

  )
}

export default card
