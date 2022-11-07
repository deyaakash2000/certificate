import React,{useContext} from 'react'
import noteContext from '../contex/userdetails/noteContex'
export default function Notesiteam(props) {
    const noteDetails = useContext(noteContext)
    const {deleteNote}=noteDetails
    const { iteam } = props
    
    return (
        <div>
            <div>
                <div className='col-md-3 my-3'>
                    <div className="card ">
                        <h3 className='mx-2'>Todo<span className="badge bg-secondary mx-3">{iteam.email}</span></h3>
                        <div className="card-body">
                            <h5 className="card-title">{iteam.title}</h5>

                            <p className="card-text">{iteam.department}</p>
                            <div className="card-footer text-muted">
                                {iteam.date}
                            </div>
                            <i className="fa-solid fa-trash mx-3 icone "onClick={()=>(deleteNote(iteam._id))}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
