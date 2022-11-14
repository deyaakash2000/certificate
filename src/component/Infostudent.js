import React,{useState,useContext,useEffect} from 'react'
import noteContext from '../contex/userdetails/noteContex'
import Notesiteam from '../component/Notesiteam'
export default function Infostudent() {
    const noteDetails = useContext(noteContext)
    const {addetails,fetchNotes,notes} = noteDetails //Destructuring
    const [addInfo,setInfo]=useState({
        title:"",
        email :"",
        department:"",
        roll :""
    })
   useEffect(()=>{
    fetchNotes()
   })
    const infoHandel=(e)=>{
        setInfo({...addInfo,[e.target.name]:e.target.value})
    }
    const handelClick=(e)=>{
        setInfo({
            title:"",
            email:"",
            department:"",
            roll :"",
            year :""
          })
          addetails(addInfo.title,addInfo.email,addInfo.department,addInfo.roll,addInfo.year)
         
    }
    return (
        <>
    
 <div className="mb-3 container">
                <label htmlFor="title" className="form-label">Name :</label>
                <input type="text" className="form-control" id="sname" placeholder="Student name"   name='title' value={addInfo.title} onChange={infoHandel} minLength={5} required/>
                <label htmlFor="email" className="form-label">Email address :</label>
                <input type="email" className="form-control" id="email" placeholder="Student email" name='email' value={addInfo.email} onChange={infoHandel} minLength={5} required/>
                <label htmlFor="department" className="form-label">Department :</label>
                <input type="text" className="form-control" id="department" placeholder="Department"  name='department' value={addInfo.department} onChange={infoHandel} minLength={5} required/>
                <label htmlFor="roll" className="form-label">University Roll :</label>
                <input type="text" className="form-control" id="roll" placeholder="University Roll"  name='roll' value={addInfo.roll} onChange={infoHandel} minLength={5} required/>
                <label htmlFor="roll" className="form-label">Year :</label>
                <input type="number" className="form-control" id="year" placeholder="year"  name='year' value={addInfo.year} onChange={infoHandel} minLength={5} required/>
                <button type="button" disabled={addInfo.email.length <=5 ? addInfo.department.length <=2:""} className="btn btn-primary" onClick={handelClick}>Submit</button>
            </div>
            <div className='row my-3'>
                <h1>Details</h1>
               {
                notes.map((iteam)=>{
                    return (
                        <Notesiteam iteam={iteam}/>
                    )
                      
                })
               }
            </div>
        </>
    )
}
