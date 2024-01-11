import React, { useState, useRef } from "react";
import Confetti from "react-confetti";
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiRef = useRef();

  const { register, handleSubmit, reset } = useForm();
  const [mob, setNum1] = useState("");
  const handleNumChangeM = (event) => {
    const numericValue = event.target.value.replace(/\D/g, "");
    const limit1 = 10;
    setNum1(numericValue.slice(0, limit1));
  };
  const onSubmit = (data) => {
    if (
      [
        data.First_Name,
        data.Last_Name,
        data.Email,
        data.Phone_Number,
        data.Message,].some((field) => field?.trim() !== "")
    ) {
      console.log(data)
      setShowConfetti(true);
      reset();
      setNum1("");
    }
  };


  return (
    <>
      <div className="lg:w-[80%] md:w-[90%] sm:w-[90%] mobile:w-[90%] m-auto flex justify-around md:flex-row  mobile:flex-col sm:flex-col lg:h-[92dvh] mobile:h-[92dvh] items-center">
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139648.62438514814!2d77.52457850001586!3d12.963341722482944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704629169066!5m2!1sen!2sin"
            width="600" height="450"
            className='rounded-lg max-w-[90%] mobile:h-auto max-h-[80]
             m-auto  animate__animated animate__slideInLeft'
            loading="lazy"></iframe>
        </div>
        <div className="mobile:w-[100%]  animate__animated animate__slideInRight  ">
          <div className="text-center font-bold text-5xl mobile:mb-0 mb-10 text-sky-500">
            <h1 >Contact...</h1>
          </div>
          <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)} >

            <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required

                {...register("Name")} />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>


            </div>
            <div className="grid xl:grid-cols-2 xl:gap-2">
              <div className="relative z-0 w-48 mobile:w-full mb-5 group">
                <input type="text" pattern="[0-9]{10}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                  {...register("Phone_Number")}
                  value={mob}
                  onChange={(event) => {
                    handleNumChangeM(event);
                  }} />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (9739640989)</label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                  {...register("Email")}
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <textarea type="text" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
                {...register("Message")}
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
            </div>
            <button className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-12 w-44 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
              <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
              <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
              <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
              <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
              <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
              <p className="z-10">Submit</p>
            </button>          </form>
        </div>
      </div>







      <div className="confetti-button">
        {showConfetti && (
          <Confetti
            ref={confettiRef}
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={200}
            recycle={false}
            onConfettiComplete={() => setShowConfetti(false)}
          />
        )}
      </div>
    </>
  );
}

export default Contact