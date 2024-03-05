import React, { useState } from 'react'
import './Portfolio_Card.css'
import { Link } from 'react-router-dom'

function Card({Projects}) {
  
  return (
    <>
    
    <Link to={Projects?.link}>
      <div
        className="card_design w-[273px] m-2 rounded-xl border cursor-pointer">

        <img src={Projects?.image}
          alt='snippet.title'  loading='lazy'
          className="h-[200px] w-full p-2 pb-0 rounded-3xl object-cover"
        />



        <div className="mt-0 px-3 flex justify-between">
          <h1 className="text-lg font-semibold text-gray-600">{Projects.title}</h1>
          <div>
            <h2 className="bg-green-700 text-xs text-white px-1 m-1 rounded-md">&#9733;</h2>
          </div>
        </div>
        <div className="mt-0 px-3 flex justify-between">
          <h1 className="text-md text-gray-500">{Projects.tools}</h1>
          <div>
            <h2 className="text-sm text-gray-500">{Projects.duration}</h2>
          </div>
        </div>
        <div className="text-right px-3 mb-3">
          <h1 className='text-xs font-bold text-gray-500'>~Pradeep</h1>
        </div>

      </div>
      </Link>
    </>
  )
}
export default Card