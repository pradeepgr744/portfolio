import React, { useEffect } from 'react'
import { Bottompage } from '../Pages/Bottompage.jsx';
import Portfolio_Card from '../card/Portfolio_Card';
import Card from '../card/Card';


const myProjects = [
  {
    "image": "https://www.youtube.com/s/desktop/77953cee/img/favicon_144x144.png",
    "title": "Youtube Clone",
    "tools": "Reactjs,Rapid Api,Tailwind",
    "duration": "1-Month",
    "link":"https://youtube-clone-teal-beta.vercel.app/"
  },
  {
    "image": "https://res.cloudinary.com/dt1vfv8jv/image/upload/v1709659638/my%20portfolio/dt1zirfprkbmdqhfwuju.png",
    "title": "Chat-Bot",
    "tools": "Reactjs,Gemeni API,Tailwind",
    "duration": "15-days",
    "link":"https://chat-cpphymuuj-pradeepgr744s-projects.vercel.app/"
  },
  {
    "image": "https://static01.nyt.com/images/2014/05/25/magazine/25wmt/mag-25WMT-t_CA0-superJumbo.jpg",
    "title": "Weaather-App",
    "tools": "HTML,Javascript,bootstrap",
    "duration": "15days",
    "link":"https://weather-sigma-beryl.vercel.app/"
  },
  {
    "image": "https://ftonato.gallerycdn.vsassets.io/extensions/ftonato/password-generator/0.0.5/1602587151428/Microsoft.VisualStudio.Services.Icons.Default",
    "title": "Password Generators",
    "tools": "Reactjs,Tailwind",
    "duration": "10days",
    "link":"https://password-generator-orcin-five.vercel.app/"
  },
  {
    "image": "https://yookkan.com/wp-content/uploads/2019/02/todolist-vert.png",
    "title": "Todo-List",
    "tools": "Reactjs,Rapid Api,Tailwind",
    "duration": "15days",
    "link":"https://todo-list-pradeepgr744s-projects.vercel.app/"
  },
  {
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    "title": "Zomato Home-Page Clone",
    "tools": "Reactjs,zomato home-page json,Tailwind",
    "duration": "15days",
    "link":"https://zomato-clone-ochre.vercel.app/"
  },
  {
    "image": "https://res.cloudinary.com/dt1vfv8jv/image/upload/v1709659631/my%20portfolio/pomgbmtxykedjedhkejm.png",
    "title": "3d Calculator",
    "tools": "Reactjs,Tailwind",
    "duration": "15days",
    "link":"https://calculator-roan-seven.vercel.app/"
  },
  {
    "image": "https://images.unsplash.com/photo-1565275706395-d452122d6cfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "title": "Login page samples",
    "tools": "Reactjs,Tailwind",
    "duration": "10days",
    "link":"https://frontend-loginpages.vercel.app/"
  },

]


const Projects = () => {
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
      <div className='w-[80%] flex flex-wrap justify-center m-auto my-10 bg-transparent gap-5 ease-in-out transition-all duration-1000 animate__animated animate__slideInUp'>
        {myProjects.map((d, i) => (
          <Card Projects={d} key={i}/>
        ))}

      </div>

      <Bottompage /> 
    </>
  )
}

export default Projects