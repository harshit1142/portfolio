import React from 'react'
import profile from './profile.jpg';

export default function Head() {
  return (
    <div className='bg-dark text-white head d-flex justify-content-center align-items-center' >
        <div className='box container-fluid'>
             <div className="row">
                <div className="col-6 content">
                      <h1 className='fs-3 text-info mb-3'>Hi,My Name is Harshit Pandey !</h1>
                      <p>An Enthusiastic student currently embarking on a journey of exploration 🚀 across various tech stacks. With a strong emphasis on user-friendly website and Web Application development.</p>
                      <a href="#contact" className='btn btn-success m-3'>Contact Me</a>
                      <button href="#" className='btn btn-warning m-3  cv' disabled>CV / Resume</button>
                </div>
                <div className="col-auto">
                <div className='style-border'>
                         <img src={profile} alt="#ProfilePic" style={{width:261,height:311}}/>
                </div>     
                </div>
             </div>
        </div>
    </div>
  )
}

