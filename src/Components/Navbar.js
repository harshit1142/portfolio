import React from 'react'

export default function Navbar() {
  return (
    <div className='container-fluid nav-bar ' >
          <div className='d-flex align-content center align-items-center h-100 pt-2'>
            <div className='logo fs-1 d-flex col-lg-4 col-md-3 col-sm-2 text-white'data-toggle="tooltip" data-placement="bottom" title="HARSHIT PANDEY">HARSHIT.</div>
            <div className='navlinks '>
                <ul className='col fs-5  d-flex flex-wrap align-content-center text-warming'>
                    <li><a href="#home" className='btn btn-outline-light' >HOME</a></li>
                    <li><a href="#about" className='btn btn-outline-light'>ABOUT</a></li>
                    <li><a href="#education" className='btn btn-outline-light'>EDUCATION</a></li>
                    <li><a href="#project" className='btn btn-outline-light'>PROJECTS</a></li>
                    <li><a href="#contact" className='btn btn-outline-light'>CONTACT</a></li>
                </ul>
            </div>
          </div>
    </div>
  )
}
