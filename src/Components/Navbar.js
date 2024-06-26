import React, { useState } from 'react'

export default function Navbar() {


  const [colorChange, setColorchange] = useState(false);
  const [toggle, setToggle] = useState(true);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80 || toggle==true) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

 function handleToggle(){
  if(toggle==true){
    setToggle(false);
  }else{
    setToggle(true);
  }
  changeNavbarColor();
 }
  return (
    <div>
      <nav className={colorChange ? "navbar fixed-top navbar-expand-lg bg-dark  " :"navbar fixed-top navbar-expand-lg bg-transparent  "}>
  <div className="container-fluid ">
    <div className='logo fs-1 d-flex col-lg-4 col-md-4 col-sm-4 text-white'data-toggle="tooltip" data-placement="bottom" title="HARSHIT PANDEY" id="logo"> HarshitPandey.in</div>
    <button className="navbar-toggler" onClick={()=>handleToggle()} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
          <a className="nav-link  text-white btn btn-outline-primary" href="#achievement" >ACHIEVEMENTS</a>
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
