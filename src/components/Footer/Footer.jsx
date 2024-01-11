import React from 'react'

const Footer = () => {

  return (
    <>



      <section className='bg-[#1A1A1A] text-[#AAA] '>
        <div>
          <img src="src/assets/icon3.jpg" alt="" width={150} height={80}  className='rounded-xl  m-auto pt-5'/>
        </div>
        <section className='lg:w-[80%] md:w-[90%] sm:w-[90%] mobile:w-[90%] m-auto '>
          <div className='flex md:flex-row  mobile:flex-col sm:flex-col justify-around mobile:text-center sm:text-center w-[80%] m-auto mb-10 pt-10'>
            <div className=''>
              <h1 className='text-2xl font-semibold'>Quick Link</h1>
              <div className='text-md leading-[2.2] mt-2'>
                <p>About</p>
                <p>Portfolio</p>
                <p>Resume</p>
                <p>Contact</p>
              </div>
            </div>
            <div>
              <div className=''>
                <h1 className='font-semibold text-2xl sm:mt-5 md:mt-auto mobile:mt-8'>Contact</h1>
                <div className='leading-[2.2] mt-2'>
                  <a href='https://maps.app.goo.gl/BMB1sAXfrsmykGn87'>
                    <p >Bangalore-562129</p></a>
                  <a href='tel:+91 9739640989'>
                    <p>📞+91 9739 640 989</p></a>
                  <a href='mailto:pradeepgr744@gmail.com'>
                    <p>📧 pradeepgr744@gmail.com</p></a>
                </div>
              </div>
              <div className='flex mobile:justify-center sm:justify-center gap-5 mt-7'>
                <section className="link-icon flex items-center">
                  <a
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                    href="https://github.com/pradeepgr744"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 15 15"
                      className="main-icon w-5"
                    >
                      <path
                        d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                      ></path>
                    </svg>
                    <span
                      className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                    >
                      GitHub
                    </span>
                  </a>
                </section>


                <section className="link-icon flex justify-center items-center">
                  <a
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                    href="https://www.linkedin.com/in/pradeep-g-r-838a98233?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYihZhcakTvCb%2BgaTdgUwPg%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"

                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      dat-supported-dps="24x24"
                      fill="currentColor"
                      className='main-icon mercado-match '
                      width={24}
                      height={24}
                      focusable="false"
                    >
                      <path
                        d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                    <span
                      className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700 "
                    >
                      LinkedIn
                    </span>
                  </a>
                </section>



                <section className="link-icon flex justify-center items-center">
                  <a
                    className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                    href="https://twitter.com/Pradeep38859446"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="main-icon w-5"
                    >
                      <path
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"      ></path>
                    </svg>
                    <span
                      className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700"
                    >
                      Twitter
                    </span>
                  </a>
                </section>


              </div>
            </div>
          </div>
          <div className='h-[8vh] flex items-center  border-[#606060] border-t-2 '>
            <div className='flex mobile:flex-col md:flex-row justify-between items-center w-full'>
              <div>© 2024 All Rights Reserved by Pradeep</div>
              <div>Developed By <span className='text-[#fdb724]'>Pradeep.</span></div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Footer