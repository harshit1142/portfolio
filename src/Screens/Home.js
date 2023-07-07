import React from 'react'
import Navbar from '../Components/Navbar'
import Head from '../Components/Head'
import About from '../Components/About'
import Education from '../Components/Education'
import Project from '../Components/Project'
import Contact from '../Components/Contact'
import {Curve} from '../Components/Curve'




export default function Home() {
  return (
    <div className='home ' id="home">
        <Navbar/>
         <Head />
         <Curve />
         <About />
         <Education />
         <Project />
         <Contact />
    </div>
  )
}
