import React from 'react'
import Cardproject from './Cardproject.js'
export default function Project() {
  return (
    <div className='container-fluid project pt-5 ' id="project">
        <div className='d-flex flex-column justify-content-center w-100 h-100'>
        <div className='pb-3 fs-1 d-flex justify-content-center text-decoration-underline fw-bold text-warning'>Project ⚒️</div>
        <div className="box d-flex flex-wrap justify-content-center pt-5">
          {/* <Card title={"Quizopia"} discription={"This platform is designed to empower educators by providing a clear and user-friendly interface for sharing conducting quizzes and various class activities."} tech={"React,Redux,Bootstrap,Express.js,Node,js,MongoDB"} fork={"0"} star={"2"} link={"https://github.com/harshit1142/Quizopia"}/> */}
          {/* <Card title="Insight" discription={"A Movie Rated Website having a collection of movies across the world. Through this website you will able to get Movies / Webseries various information"} tech={"HTML Javascript"} fork={"1"} star={"1"} link={"https://github.com/harshit1142/Insight"}/> */}
          {/* <Card title={"Foodie"} discription={"An online restaurant platform built on the MERN stack, providing users the ability to conveniently order food online within specified price ranges and categories."} tech={"React,Redux,Bootstrap,Express.js,Node,js,MongoDB"} fork={"0"} star={"1"} link={"https://github.com/harshit1142/Foodie"}/> */}
          <Cardproject title={"Quizopia"} img={"https://startupbonsai.com/wp-content/uploads/2020/07/Best-Online-Quiz-Makers-Featured.jpg"} description={"This platform is designed to empower educators by providing a clear and user-friendly interface for sharing conducting quizzes and various class activities."} tech={"React,Redux,Bootstrap,Express.js,Node,js,MongoDB"} fork={"0"} star={"2"} link={"https://github.com/harshit1142/Quizopia"} />
          <Cardproject title={"Foodie"} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuKX1BmPUR-0PYKzq3tPzMCBUh6rZVDqmtxIQ5v9VuQ&s"} description={"An online restaurant platform built on the MERN stack, providing users the ability to conveniently order food online within specified price ranges and categories."} tech={"React,Redux,Bootstrap,Express.js,Node,js,MongoDB"} fork={"0"} star={"1"} link={"https://github.com/harshit1142/Foodie"} />
          </div>
        </div>
        <div className=' d-flex justify-content-center pt-3 pb-5'><a href="https://github.com/harshit1142" className="btn btn-outline-light " target="_blank" rel="noopener noreferrer">More Project</a></div>      
    </div>
  )
}
