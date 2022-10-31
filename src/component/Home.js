import React,{useEffect} from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import Infostudent from './Infostudent'
function Home() {
  const navigate = useNavigate()

useEffect(()=>{
  if(!localStorage.getItem('token')){
    navigate('/')
  }
})
  return (
  
    <div>
    
      <Navbar/>
      <Infostudent/>
    </div>
  )
}

export default Home
