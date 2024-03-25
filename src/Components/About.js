import React from 'react'
import { FaNode,FaHtml5,FaCss3Alt,FaJava ,FaJs,FaGitAlt,FaReact} from "react-icons/fa";
import { DiMongodb,DiNpm } from "react-icons/di";
import { TbBrandSocketIo, TbBrandRedux } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
export default function About() {
  return (
    <div className='container-fluid about  ' id="about">
    <div className='p-4 d-flex justify-content-center '>
      <h1 className='text-decoration-underline fw-bold text-warning'>About Me 👨🏻‍💻</h1>
    </div>
        <div className="box d-flex justify-content-center align-items-center w-100 h-100">
          <div className="row">
                 <div className="col-lg-6 col-md-6 col-sm-auto fs-5 text-white">
                     <ul>
                      {/* <li>🎓   I'm currently studying at Motilal National Institute of Technology, Allahabad, India.</li> */}
                      <li>💡   I like to explore new technologies and develop web apps.</li>
                      <li>🌱   I'm on track to learning more about Web and UI design.</li>
                      <li>✍️   Programming is the most important part of my life, but I also play badminton and cricket as hobbies .</li>
                      
                     </ul>        
                 </div>
                 <div className="col ic ">
                    <div className='text-warning'><h2>Teck-Stacks :</h2></div>
                   <div className='d-flex flex-wrap'>    
                    <div className='p-3'><FaJs className='fs-1 '/> <p className='fs-6 '>Javascript</p></div>
                    <div className='p-3'><FaReact className='fs-1 '/> <p className='fs-6 '>React</p></div>
                    <div className='p-3'><TbBrandRedux className='fs-1 '/> <p className='fs-6 '>Redux</p></div>
                    <div className='p-3'><FaJava className='fs-1 '/> <p className='fs-6 '>Java</p></div>
                    <div className='p-3'><FaNode className='fs-1 '/> <p className='fs-6 '>Node.js</p></div>
                    <div className='p-3'><FaHtml5 className='fs-1 '/> <p className='fs-6'>HTML</p></div>
                    <div className='p-3'><FaCss3Alt className='fs-1 '/> <p className='fs-6 '>CSS</p></div>
                    <div className='p-3'><FaGitAlt className='fs-1 '/> <p className='fs-6 '>Git</p></div>
                    <div className='p-3'><DiMongodb className='fs-1 '/> <p className='fs-6 '>MongoDB</p></div>
                    <div className='p-3'><SiExpress className='fs-1 '/> <p className='fs-6 '>Express.js</p></div>
                    <div className='p-3'><DiNpm className='fs-1 '/> <p className='fs-6 '>NPM</p></div>
                    <div className='p-3'><TbBrandSocketIo className='fs-1 '/> <p className='fs-6 '>Socket.io</p></div>
                   </div>
                 </div>
          </div>
        </div>
      
    </div>
  )
}
