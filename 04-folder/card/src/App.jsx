import React from 'react'
import Card from './components/Card.jsx'

const jobOpenings=[
  {
    img:"https://pngimg.com/uploads/meta/meta_PNG12.png",
    company:"Meta",
    duration:"3 days ago",
    role:"Frontend Engineer",
    tag1:"Remote",
    tag2:"Senior level",
    pay:"$8000",
    location:"Bangalore"
  },
  {
 img:"https://i.pinimg.com/474x/15/aa/16/15aa1678d4ee5615c5c53ed5c9968126.jpg",
 company:"Flipkark",
 duration:"4 days ago",
 role:"Frontend Engineer",
 tag1:"Remote",
 tag2:"Senior level",
 pay:"$10000",
 location:"Vijayawada",
  },
  {
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNyAKOqn2eOUvcyAxCk2CImqNaHi9aJVxiBALClCLUnhvQh1P2QRwGV3Q&s=10",
  company:"Tata",
 duration:"4 days ago",
 role:"Frontend Engineer",
 tag1:"Remote",
 tag2:"Senior level",
 pay:"$20000",
 location:"Hyderabad",
  },
{
  img:"https://toppng.com/uploads/preview/hcl-technologies-vector-logo-free-11574106908xagflgb27g.png",
 company:"Hcl",
 duration:"4 days ago",
 role:"Frontend Engineer",
 tag1:"Remote",
 tag2:"Senior level",
 pay:"$30000",
 location:"Hyderabad",
  },
];


const App = () => {
  return (
    <div className='parent'>
      {/* <Card img="" company="" duration="" role="" tag1="" tag2="" pay="" location=""/> */}
      {jobOpenings.map((e)=>{
        return <Card img={e.img} company={e.company} duration={e.duration} role={e.role} tag1={e.tag1} tag2={e.tag2} pay={e.pay} location={e.location}/>
      })}      
    </div>
  )
}

export default App