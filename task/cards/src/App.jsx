import React from 'react'
import Card from './components/Card.jsx'

 const Card=[
  {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9oHIl198mgzLbniXjF7OiDZFC-4n0r-bzPbGS5mDdA&s=10",
    text1:"Most-loved",
    text2:"Special Offer",
  },
  {
    img:"https://t4.ftcdn.net/jpg/04/79/11/23/360_F_479112366_dku6Ufwd9OVnRB3AZxonMgRzuZYeTTYY.jpg",
    text1:"Widest Range",
    text2:"Under 600",
  },
  {
    img:"https://snd.in/uploads/2022/04/197674hfg.jpg",
    text1:"Most loved",
    text2:"Top rated",
  },
 ];

  const App = () => {
  return (
    <div className='parent'>
      {/* <Card img="" text1="" text2=""/> */}
      {Card.map((e)=>{
        return <Card img={e.img} text1={e.text1} text2={e.text2}/>
      })}      
    </div>
  )
}

export default App
