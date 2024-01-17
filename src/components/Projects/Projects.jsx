import React from 'react'
import { Bottompage } from '../Pages/Bottompage.jsx';
import Portfolio_Card from '../card/Portfolio_Card';
import Card from '../card/Card';


const myProjects = [
  {
    "image": "/images/Youtube.svg",
    "title": "Youtube Clone",
    "tools": "Reactjs,Rapid Api,Tailwind",
    "duration": "1-Month",
    "link":"https://youtube-clone-teal-beta.vercel.app/"
  },
  {
    "image": "images/chatbot.png",
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
    "image": "https://scontent.fblr8-1.fna.fbcdn.net/v/t39.30808-6/258713769_7448510961841588_2864726168693929917_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=tyVuzYDvK2kAX_tDo22&_nc_ht=scontent.fblr8-1.fna&oh=00_AfCktpahKQSJ0Dz5n5sBZpEATczu9Ju6pmA-h3EU9of6BA&oe=65AD927F",
    "title": "Zomato Home-Page Clone",
    "tools": "Reactjs,zomato home-page json,Tailwind",
    "duration": "15days",
    "link":"https://zomato-clone-ochre.vercel.app/"
  },
  {
    "image": "/images/cal.png",
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

  return (
    <>
      <div className="flex justify-between m-10 bg-gray-100">
        <Portfolio_Card />
      
      </div>
      <div className='w-[900px] flex flex-wrap justify-center m-auto bg-gray-100'>
        {myProjects.map((d, i) => (
          <Card Projects={d} key={i}/>
        ))}

      </div>

      <Bottompage />
    </>
  )
}

export default Projects