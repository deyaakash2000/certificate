import React,{useEffect} from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
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
<h1>Hii home</h1>
    </div>
  )
}

export default Home
