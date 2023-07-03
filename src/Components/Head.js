import React from 'react'
import profile from './profile.jpg';

export default function Head() {
  return (
    <div className='container-fluid bg-dark text-white head d-flex justify-content-center align-items-center' >
        <div className='box container-fluid'>
             <div className="row">
                <div className="col-auto col-lg-8 col-md-6 content p-4">
                      <h1 className='fs-3 text-info mb-3'>Hi, My Name is Harshit Pandey !</h1>
                      <p>An Enthusiastic student currently embarking on a journey of exploration 🚀 across various tech stacks. With a strong emphasis on user-friendly website and Web Application development.</p>
                      <a href="#contact" className='btn btn-success m-3'>Contact Me</a>
                      <button href="#" className='btn btn-warning m-3  cv' disabled>CV / Resume</button>
                </div>
                <div className="col-lg-auto col-md-auto  d-none d-sm-block d-sm-none d-md-block">
                <div className='style-border '>
                         <img src={profile} alt="#ProfilePic" className='pro-img'/>
                </div>     
                </div>
             </div>
        </div>
    </div>
  )
}

