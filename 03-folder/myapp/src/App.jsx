import React from 'react'
import Card from './components/card.jsx'
const App = () => {
  return (
    <div className="parent">
      <Card user='Prasanna'age={21} img="https://i.pinimg.com/736x/b2/da/f9/b2daf9019c4b08fa3a90c7d28a08a059.jpg"/>
      <Card user='Lavanya' age={21} img="https://i.pinimg.com/736x/5f/5b/42/5f5b4202cf5f3352237732e9fa8dcb3d.jpg"/>
      <Card user='Nikitha' age={22} img="https://i.pinimg.com/1200x/b4/d8/b7/b4d8b752968e5b8594f962c2d34f0120.jpg"/>
      <Card user='Lakshmi' age={22} img="https://i.pinimg.com/736x/c9/e0/b5/c9e0b5e45aad1de8e27b25ec6ce3cd27.jpg"/>
    </div>
  )
}

export default App
