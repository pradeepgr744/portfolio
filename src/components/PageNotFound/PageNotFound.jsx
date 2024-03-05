import React, { useEffect } from 'react'

const PageNotFound = () => {
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
   <div>
    <img src="https://res.cloudinary.com/dt1vfv8jv/image/upload/v1709659640/my%20portfolio/upfmteiaiza3plpzd2ot.jpg" alt="" loading='lazy' className='w-full h-[100dvh] mt-0'/>
   </div>
    </>
  )
}

export default PageNotFound