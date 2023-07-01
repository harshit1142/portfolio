import React from 'react'
import Navbar from '../Components/Navbar'
import Head from '../Components/Head'
import About from '../Components/About'



export default function Home() {
  return (
    <div className='home ' id="home">
        <Navbar />
         <Head />
         <About />
    </div>
  )
}
