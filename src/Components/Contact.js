import React from 'react'
import profile from './profile.jpg';
import { AiFillGithub ,AiFillLinkedin,AiOutlineWhatsApp,AiOutlineCopyrightCircle} from "react-icons/ai";

export default function Contact() {
  return (
    <div className='container-fluid contact text-white  ' id="contact">
        <div className="conatiner-fluid  ">
            <div className="row pt-3">
                <h1>Reach Out To Me !!</h1>
            </div>
            <div className="row d-flex flex-row  flex-wrap justify-content-center p-2 pt-3">
                <div className='style-border d-lg-none d-md-none d-flex'>
                         <img src={profile} alt="#ProfilePic" className='s-pro-img'/>
                         <ul className='pt-3'>
                            <li className='p-1'><a href="https://github.com/harshit1142" target="_blank" className='btn btn-rounded btn-outline-light p-2' rel="noopener noreferrer"><AiFillGithub /></a></li>
                            <li className='p-1'><a href="https://www.linkedin.com/in/harshit-pandey-312b78245/" target="_blank" className='btn btn-rounded btn-outline-light p-2' rel="noopener noreferrer"><AiFillLinkedin /></a></li>
                            <li className='p-1'><a href="https://chat.whatsapp.com/HDxwmppnDVPKGdW2m8Va45" target="_blank" className='btn btn-rounded btn-outline-light p-2' rel="noopener noreferrer"><AiOutlineWhatsApp /></a></li>
                         </ul>
                </div> 
                <div className='content col-auto p-4'>
                    <h4>"A Learner ..."</h4>
                    <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
                </div>
             </div>
                <div className='row d-none d-md-block d-lg-block'>
                <div className='icon d-flex flex-row  flex-wrap justify-content-center'>
                <div className='p-1'><a href="https://github.com/harshit1142" target="_blank" className='btn btn-rounded btn-outline-light p-2' rel="noopener noreferrer"><AiFillGithub /></a></div>
                <div className='p-1'><a href="https://www.linkedin.com/in/harshit-pandey-312b78245/" target="_blank" className='btn btn-rounded btn-outline-light p-2' rel="noopener noreferrer"><AiFillLinkedin /></a></div>
                <div className='p-1'><a href="https://chat.whatsapp.com/HDxwmppnDVPKGdW2m8Va45" target="_blank" className='btn btn-rounded btn-outline-light p-2' rel="noopener noreferrer"><AiOutlineWhatsApp /></a></div>
                </div>
                </div>
        </div>
        <div className="container-fluid pt-5">
            <div className="row">
            <div className='icon d-flex flex-column align-content-center  flex-wrap justify-content-center'>
                <h5> <AiOutlineCopyrightCircle /> Made with 💗 by Harshit Pandey. </h5>
                <p>Last Updated on July 2023</p>
                <hr />
            </div>
            </div>
        </div>
    </div>
  )
}
