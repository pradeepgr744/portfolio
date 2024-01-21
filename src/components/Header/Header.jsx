import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import StaggeredDropDown from '../Drop-down/Drop_down';
import { FiHome, FiUser, FiMail, FiBriefcase } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = () => {

  let [open, setOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-black transition ease transform duration-300`;

  const [open1, setOpen1] = useState(false);



  return (
    <header className="shadow sticky z-50 top-0 h-auto backdrop-blur-xl ">
      <nav className="backdrop-blur-sm bg-white/30  pt-2 pb-2 mb-0">
        <div className="flex flex-wrap justify-between items-center mx-auto lg:w-[80%] md:w-[90%] sm:w-[90%] mobile:w-[90%]">
          <Link to="" className="flex items-center">
            <img src="/images/icon1.jpg" className='p-0 w-12 rounded-full' alt="" />
            {/* <h1 className='font-bold font-sans ml-2'>PRADEEP</h1> */}
          </Link>


          <button

            className='flex flex-col h-12 w-12 outline-none justify-center items-center group text-3xl cursor-pointer md:hidden'
            onClick={() => setOpen1((pv) => !pv)}          >
            <div
              className={`${genericHamburgerLine} ${open1
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
              className={`${genericHamburgerLine} ${open1 ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
              className={`${genericHamburgerLine} ${open1
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
                }`}
            />

          </button>




          <div
            className={`md:flex md:items-center  absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 pr-9 transition-all delay-0 duration-300 ease-in-out ${open ? 'top-14 ' : 'top-[-490px]'} justify-between items-center w-full lg:flex lg:w-auto lg:order-11`}
            id="mobile-menu-2"
          >
            <ul className='flex flex-col h-auto items-center font-medium  md:flex-row lg:space-x-8 md:mt-0'>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`

                  }
                  
                  title='Home'
                >
               Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                  
                  title='About'
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                  
                  title='Blog'
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                  
                  title='Projects'
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                  
                  title='Contact'
                >
                  Contact Me
                </NavLink>
              </li>
              <li>
                <StaggeredDropDown />
              </li>
            </ul>
          </div>

        </div>
      </nav>

      <div className="flex items-center justify-center lg:hidden xl:hidden md:hidden">
        <motion.div animate={open1 ? "open" : "closed"} className="relative">

          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", translateX: "-50%" }}
            className="flex flex-col gap-2 w-80 rounded-lg backdrop-blur-3xl bg-white/30 shadow-xl absolute top-[120%] "
          >
            <div><NavLink to="" ><Option setOpen1={setOpen1} Icon={FiHome} text="Home" /></NavLink></div>
            <div><NavLink to="/about"><Option setOpen1={setOpen1} Icon={FiUser} text="About" /></NavLink></div>
            <div><NavLink to="/blog"><Option setOpen1={setOpen1} Icon={FiUser} text="Blog" /></NavLink></div>
            <div><NavLink to="/projects"><Option setOpen1={setOpen1} Icon={FiMail} text="Project" /></NavLink></div>
            <div><NavLink to="/contact"><Option setOpen1={setOpen1} Icon={FiBriefcase} text="Contact Me" /></NavLink></div>
            <div><StaggeredDropDown /></div>
          </motion.ul>
        </motion.div>
      </div>

    </header>
  );
}

const Option = ({ text, Icon, setOpen1 }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen1(false)}
      className="flex items-center justify-center gap-2 w-full py-2 text-sm font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};


export default Header

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
