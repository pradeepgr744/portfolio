import React, { useEffect } from 'react';


const Resume = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling behavior
    });
  }
  useEffect(() => {
    scrollToTop()
  }, [])
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <iframe src="/images/Resume-pradeep.pdf" className='w-full h-full'></iframe>
      </div>
    </>
  )
}

export default Resume