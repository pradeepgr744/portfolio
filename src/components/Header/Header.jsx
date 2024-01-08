import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import StaggeredDropDown from '../Drop-down/Drop_down';

const Header = () => {

  let [open, setOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-black transition ease transform duration-300`;




  return (
    <header className="shadow sticky z-50 top-0 h-auto backdrop-blur-xl ">
      <nav className="backdrop-blur-sm bg-white/30  pt-2 pb-2 mb-0">
        <div className="flex flex-wrap justify-between items-center mx-auto lg:w-[80%] md:w-[90%] sm:w-[90%] mobile:w-[90%]">
          <Link to="" className="flex items-center">
            <img src="/icon1.jpg" className='p-0 w-12 rounded-full' />
            {/* <h1 className='font-bold font-sans ml-2'>PRADEEP</h1> */}
          </Link>

          <button

            className='flex flex-col h-12 w-12 outline-none justify-center items-center group text-3xl cursor-pointer md:hidden'
            onClick={() => setOpen(!open)}
          >
            <div
              className={`${genericHamburgerLine} ${open
                ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
              className={`${genericHamburgerLine} ${open ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
              className={`${genericHamburgerLine} ${open
                ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
                }`}
            />

          </button>



          <div
            className={`md:flex md:items-center  absolute md:static md:bg-transparent mobile:bg-[#fff5ef]/95 sm:bg-[#fff5ef]/95 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 pr-9 transition-all delay-0 duration-300 ease-in-out ${open ? 'top-14 ' : 'top-[-490px]'} justify-between items-center w-full lg:flex lg:w-auto lg:order-11`}
            id="mobile-menu-2"
          >
            <ul className='flex flex-col h-auto items-center font-medium  md:flex-row lg:space-x-8 md:mt-0'>
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`

                  }
                  onClick={() => setOpen(false)}
                  title='Home'
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                  onClick={() => setOpen(false)}
                  title='About'
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-blue-500" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                  onClick={() => setOpen(false)}
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
                  onClick={() => setOpen(false)}
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

    </header>
  );
}

export default Header