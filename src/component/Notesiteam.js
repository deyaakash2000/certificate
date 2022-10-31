import React from 'react'

export default function Notesiteam(props) {
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
