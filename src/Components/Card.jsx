import React from 'react'

export default function Card({title,link,discription,tech,fork,star}) {
  return (
    <div className='card bg-dark text-white m-4 ' style={{width:445}}><a href={link} target="_blank" rel="noopener noreferrer">
           <div className="box p-2 text-white">
            <h5 className='text-success'>{title}</h5>
           <span>{discription}</span>
           <div className='d-flex flex-column'>
            <div className='p-3 text-warning'>{tech}</div>
            <div className='d-flex'>
            <div className='p-3'>{fork} fork</div>
            <div className='p-3'>{star} star</div>
            </div>
           </div>
           </div>
           </a>
    </div>
  )
}
