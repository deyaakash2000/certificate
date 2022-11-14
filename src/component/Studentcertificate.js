import React,{useContext,useState}  from 'react'
import noteContext from '../contex/userdetails/noteContex'
import Certificatetemp from './Certificatetemp'

export default function Studentcertificate() {
    const noteDetails = useContext(noteContext)
    const {findcertificate,notes}=noteDetails
    const [addInfo,setInfo]=useState({csearch:""})
    const infoHandel=(e)=>{
        setInfo({...addInfo,[e.target.name]:e.target.value})
    }
    const handelClick=(e)=>{
        setInfo({
            csearch:""
          })
          findcertificate(addInfo.csearch)
         
    }
  return (
    <div>
      <div className="container">
        <h1>Search Result</h1>
       
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='csearch' value={addInfo.csearch} onChange={infoHandel}/>
        <button className="btn btn-outline-success" type="submit" onClick={handelClick}>Search</button>
    
      </div>
      <div className='row my-3'>
                <h1>Details</h1>
               {
                notes.map((iteam)=>{
                    return (
                        <Certificatetemp iteam={iteam}/>
                    )
                      
                })
               }
            </div>
    </div>
  )
}
