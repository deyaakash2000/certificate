import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import  '../css/login.css'
import img from '../img/login.jpg'

function Sighup(props) {
  const [credentials,setcredentials] = useState({email:"",password:""})
  const navigate = useNavigate()

    const handleSubmit=  async (e)=>{
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success){
            localStorage.setItem('token',json.Authtoken)
            navigate('/home')

        }else{
            alert("enter the valid email and password")
        }
    }
    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
        console.log(credentials);
    }
  return (

       <div>
        <Navbar/>
  
        <div className="containers">
        <div class="imgcontainer">
      
      <img src={img} alt="Avatar" class="src"/>
    </div>
        <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter email" id="email" name="email"  value={credentials.email} onChange={onChange} minLength={5} required/>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" id="password" name="password" value={credentials.password}onChange={onChange} minLength={5} required/>
        
      <button type="submit" className="w-100" onClick={handleSubmit}>Login</button><br/>

        </div>
       </div>
       
  
  )
}

export default Sighup
