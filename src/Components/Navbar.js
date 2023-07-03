import React from 'react'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark  ">
  <div className="container-fluid ">
    <div className='logo fs-1 d-flex col-lg-4 col-md-3 col-sm-2 text-white'data-toggle="tooltip" data-placement="bottom" title="HARSHIT PANDEY">HARSHIT.</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item text-white fs-5">
          <a className="nav-link text-white  btn btn-outline-primary" aria-current="page" href="#home">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white btn btn-outline-primary" href="#about">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white btn btn-outline-primary" href="#project">PROJECTS</a>
        </li>       
        <li className="nav-item">
          <a className="nav-link  text-white btn btn-outline-primary" href="#achievement" tabindex="-1" aria-disabled="true">ACHIEVEMENTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white btn btn-outline-primary" href="#contact">CONTACT</a>
        </li>     
      </ul>    
    </div>
  </div>
</nav>
    </div>
  )
}
