import React, { useEffect, useRef, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { TypeAnimation } from 'react-type-animation';
import 'animate.css';
import { Bottompage } from '../Pages/Bottompage';



const Home = () => {
  const ref = useRef(null);
  const [date, setDate] = useState(new Date());
  const notificationDisplayed = useRef(false);

  useEffect(() => {
    setDate(new Date());
    if (!notificationDisplayed.current) {
      notify();
      notificationDisplayed.current = true;
    }
  }, []);

  const checkGreeting = () => {
    const temp = date.getHours();
    if (temp >= 5 && temp <= 11) {
      return "Good morning!";
    } else if (temp >= 12 && temp <= 15) {
      return "Good afternoon!";
    } else if (temp >= 16 && temp <= 19) {
      return "Good evening!";
    } else if (temp >= 20 || temp <= 4) {
      return "Have some sleep, Good night!";
    } else {
      return "It's nice to meet you!";
    }
  };

  function notify() {
    toast.custom((t) => (
      <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img className="h-10 w-10 rounded-full" src="/images/img1.jpg" alt="" />
            </div>
            <div className="ml-3 flex-1">
              <h1 className="text-sm font-medium text-gray-900 flex justify-between">
                <p>hi👋</p>
                <p>Date : {new Date().toLocaleDateString()}</p>
              </h1>
              <p className="mt-1 text-sm text-gray-500">{checkGreeting()}</p>
            </div>
          </div>
        </div>
     
      </div>
    ), {
      duration: 2000, 
    });
  }

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

function hello() {
  toast('Here is your toast.')
}

  return (
    <>
      <section>
        <div className=' lg:w-[80%] md:w-[90%] sm:w-[90%] mobile:w-[90%] m-auto h-[100dvh]'>
          <div className='md:w-[75%] sm:w-[100%] mobile:w-[100%] mobile:m-auto mb-28'>
            <div className='flex justify-between'>
              <img src="/images/img2.jpg" alt="" className='w-[150px] mobile:w-[120px] rounded-full m-3 mobile:mt-20 mt-10 mb-10 shadow-2xl shadow-[#fdb724]  animate__animated animate__fadeInDown' />
              <div className="tooltip-container mt-48 mr-20">
                <div className="tooltip">
                  <div className="text">Save Trees</div>
                  <div className="leaf leaf1"></div>
                  <div className="leaf leaf2"></div>
                  <div className="leaf leaf3"></div>
                  <div className="leaf leaf4"></div>
                </div>
                <div className="leaf icon"></div>
              </div>
            </div>
            <div>
              <p className='md:text-[40px]  text-gray-800 md:leading-[1.3] sm:text-2xl mobile:text-xl font-light'>Hi, I'm
                <span className='font-semibold text-black'><TypeAnimation
                  sequence={[" Pradeep "]}
                  speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
                  cursor={false}
                /></span>
                <span> a </span>
                <span className='font-semibold text-black'>
                  <TypeAnimation
                    sequence={[" Full-Stack developer "]}
                    speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
                    cursor={false}
                  /></span>
                <span> shaping seamless digital landscapes from</span>
                <span className='font-semibold text-black'> frontend </span>
                finesse to
                <span className='font-semibold text-black'> backend </span>
                brilliance.</p>
            </div>
            <div className='mt-5 leading-[1.2] text-sm'>
              <p>Previously @<a href='https://www.safepro.tech/' target='_blank' rel='noopener noreferrer' className='text-blue-500'>Safepro</a> as Intern</p>
              <p>Pasionate about <span className='font-semibold'>solving complex problems </span> <span>that significantly ease the life of the end user.</span></p>
            </div>
          </div>
          <div className='w-full flex justify-center mt-20 ScrollButton cursor-pointer'>
            <button className='button3d focus red relative rounded-full w-auto h-auto flex items-center justify-center'
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                className='static m-0 p-0'
              >
                <path
                  className="Arrow_Down"
                  d="M41.5 24C41.5 23.1716 40.8284 22.5 40 22.5C39.1716 22.5 38.5 23.1716 38.5 24H41.5ZM38.9393 57.0607C39.5251 57.6464 40.4749 57.6464 41.0607 57.0607L50.6066 47.5147C51.1924 46.9289 51.1924 45.9792 50.6066 45.3934C50.0208 44.8076 49.0711 44.8076 48.4853 45.3934L40 53.8787L31.5147 45.3934C30.9289 44.8076 29.9792 44.8076 29.3934 45.3934C28.8076 45.9792 28.8076 46.9289 29.3934 47.5147L38.9393 57.0607ZM38.5 24L38.5 56H41.5L41.5 24H38.5Z"

                />
              </svg>
            </button>
          </div>
        </div>


        <div ref={ref}>
          <button onClick={hello}>Hlo</button>
          <Toaster />

        </div>
        
      </section>


      <Bottompage />
    </>
  )
}

export default Home