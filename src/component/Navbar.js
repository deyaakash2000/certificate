import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
function Navbar() {
  const navigate = new useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/home' className="nav-link active" aria-current="page">Home</NavLink>
        </li>
      </ul>
     {!localStorage.getItem('token')?<form className="d-flex">
      <NavLink to='/' className=" btn btn-outline-successaria-current">sign up </NavLink>
      </form>:<button type="button" class="btn btn-primary" onClick={handleLogout}>Logout</button>
}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
