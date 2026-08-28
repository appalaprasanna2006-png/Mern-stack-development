import React from 'react'
import Card from './components/Card.jsx'

const jobOpenings=[
  {
 img:"",
 company:"",
 duration:"",
 role:"",
 tag1:"",
 tag2:"",
 pay:"",
 location:"",
  },
  {
 img:"",
 company:"",
 duration:"",
 role:"",
 tag1:"",
 tag2:"",
 pay:"",
 location:"",
  },
  {
 img:"",
 company:"",
 duration:"",
 role:"",
 tag1:"",
 tag2:"",
 pay:"",
 location:"",
  },
  {
 img:"",
 company:"",
 duration:"",
 role:"",
 tag1:"",
 tag2:"",
 pay:"",
 location:"",
  }
]
const App = () => {
  return (
    <div className='parent'>
      {/* <Card img="" company="" duration="" role="" tag1="" tag2="" pay="" location=""/>  */}
      {jobOpenings.map((e)=>{
      <Card img={e.img} company={e.company} duration={e.duration} role={e.role} tag1={e.tag1} tag2={e.tag2} pay={e.pay} location={e.location}/>
      })}

    </div>
  )
}

export default App

