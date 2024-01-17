import React from 'react'
import { Bottompage } from '../Pages/bottompage';
import Portfolio_Card from '../card/Portfolio_Card';
import Card from '../card/Card';

const Projects = () => {
  return (
    <>
      <div className="flex justify-center m-10 bg-gray-100">
        <Portfolio_Card />
      </div>
      <div className='w-[900px] flex flex-wrap justify-center m-auto bg-gray-100'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

      </div>
      
      <Bottompage />
    </>
  )
}

export default Projects