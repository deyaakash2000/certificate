import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

function Sighup(props) {
  const [credentials,setcredentials] = useState({email:"",password:""})
  const navigate = useNavigate()

    const handleSubmit=  async (e)=>{
        e.preventDefault()
        const response = await fetch("http://localhost:50001/api/auth/login", {
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
        <form onSubmit={handleSubmit}>
        <div className="mb-3 my-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="text" className="form-control" id="email" name="email"  value={credentials.email} onChange={onChange} minLength={5} required />
      </div>
      <div className="mb-3 my-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" value={credentials.password}onChange={onChange} minLength={5} required/>
      </div>
      <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
       </div>
       
  
  )
}

export default Sighup
