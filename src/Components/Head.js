import React from 'react'
// import profile from './pro2.jpg';



const profile = "https://png.pngtree.com/png-vector/20230728/ourmid/pngtree-coder-clipart-boy-working-with-computer-game-on-the-desk-vector-png-image_6804917.png";
export default function Head() {



  return (
    <div className='container-fluid text-light  head d-flex justify-content-center align-items-center' >
      <div className='box container-fluid'>
        <div className="row">
          <div className="col-auto col-lg-8 col-md-6 content p-4">
            <h1 className='fs-3 text-info mb-3'>Hi, My Name is Harshit Pandey !</h1>
            <p>An Enthusiastic student currently embarking on a journey of exploration 🚀 across various tech stacks. With a strong emphasis on user-friendly website and Web Application development.</p>
            <a href="#contact" className='btn btn-success m-3'>Contact Me</a>
            <a href="https://drive.google.com/file/d/1MTF7S4Qc1aR7GtP3q93v-o-Q4wqK-2gb/view?usp=sharing" rel="noopener noreferrer" target='_blank' className='btn btn-warning m-3  cv' >CV / Resume</a>
          </div>
          <div className="col-lg-auto col-md-auto  d-none d-sm-block d-sm-none d-md-block">
            <div className='style-border '>
              <img src={profile} alt="#ProfilePic" className='pro-img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

