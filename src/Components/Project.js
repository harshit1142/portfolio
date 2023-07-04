import React from 'react'
import Card from './Card.jsx'
export default function Project() {
  return (
    <div className='container-fluid project pt-5' id="project">
        <div className='d-flex flex-column justify-content-center w-100 h-100'>
        <div className='pb-3 fs-1 d-flex justify-content-center text-decoration-underline fw-bold text-warning'>Project ⚒️</div>
        <div className="box d-flex flex-wrap pt-5">
          <Card title="Insight" discription={"A Movie Rated Website having a collection of movies across the world. Through this website you will able to get Movies / Webseries various information"} tech={"HTML Javascript"} fork={"1"} star={"1"} link={"https://github.com/harshit1142/Insight"}/>
          <Card title={"Foodie"} discription={"A MERN project on Ordering of food, add to cart feature  , user-login/signup"} tech={"Javascript React"} fork={"0"} star={"1"} link={"https://github.com/harshit1142/Foodie"}/>
          </div>
        </div>
        <div className=' d-flex justify-content-center pt-3 pb-5'><a href="https://github.com/harshit1142" className="btn btn-outline-light " target="_blank" rel="noopener noreferrer">More Project</a></div>      
    </div>
  )
}
