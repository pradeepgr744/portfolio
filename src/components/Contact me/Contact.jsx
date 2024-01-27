import React, { useState, useRef } from "react";
import Confetti from "react-confetti";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";



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
  const onSubmit = async (data) => {
    
    const options1 = {
      method: 'POST',
      url: 'https://send-mail-serverless.p.rapidapi.com/send',
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '7d1fad5568msh911fde48846fd8dp1c0b2fjsn40a9c8205509',
        'X-RapidAPI-Host': 'send-mail-serverless.p.rapidapi.com'
      },
      data: {
        personalizations: [
          {
            to: [
              {
                email: 'pradeepgr744@gmail.com',
                name: 'Recipient name'
              },
            ]
          }
        ],
        from: {
          email: 'noreply@firebese.com',
          name: 'noreply'
        },
        subject: 'Portfolio Contact-Form',
        content: [
          {
            type: 'text/html',
            value: `<b>Lead from Your Portfolio</b><br><br>
          <p>
              <b>Name: </b> ${data.Name}<br>
              <b>Email: </b> ${data.Email}<br>
              <b>Phone Number: </b> ${data.Phone_Number}<br>
              <b>Message: </b> ${data.Message}
          </p>`
          }
        ],
        headers: {
          'List-Unsubscribe': '<mailto: unsubscribe@firebese.com?subject=unsubscribe>, <https://firebese.com/unsubscribe/id>'
        }
      }
    };

    const options2 = {
      method: 'POST',
      url: 'https://send-mail-serverless.p.rapidapi.com/send',
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '7d1fad5568msh911fde48846fd8dp1c0b2fjsn40a9c8205509',
        'X-RapidAPI-Host': 'send-mail-serverless.p.rapidapi.com'
      },
      data: {
        personalizations: [
          {
            to: [
              {
                email: data.Email,
                name: data.Name
              },
            ]
          }
        ],
        from: {
          email: 'noreply@firebese.com',
          name: 'noreply'
        },
        subject: 'Thank You for Reaching Out!',
        content: [
          {
            type: 'text/html',
            value: `<b>Hello </b>${data.Name}<br><br>
          <p>
          Thanks a lot for getting in touch! I've received your message,
          and I'll get back to you as soon as I can.<br><br>
          I appreciate the opportunity to connect.<br><br>
          
              
          📞 Phone Number: <b>+91 9739640989</b><br>
          ✉️ Email: <b>pradeepgr744@gmail.com</b><br><br>

          Let's stay connected on:<br><br>

          👉 GitHub: github.com/pradeepgr744<br>
          👉 LinkedIn: linkedin.com/in/pradeep-g-r-838a98233<br><br>

          Looking forward to connect with you soon!<br><br>

          Regards,<br>
          Pradeep G R<br>
          Bangalore<br>
          </p>`
          }
        ],
        headers: {
          'List-Unsubscribe': '<mailto: unsubscribe@firebese.com?subject=unsubscribe>, <https://firebese.com/unsubscribe/id>'
        }
      }
    };

    if (
      [
        data.Name,
        data.Phone_Number,
        data.Email,
        data.Message,].some((field) => field?.trim() !== "")
    ) {

      try {
        const [response1, response2] = await Promise.all([
          axios.request(options1),
          axios.request(options2),
        ]);
        // console.log(response1.data);
        // console.log(response2.data);
        toast.success('Submitted Successfully!')
        console.log(data)
        setShowConfetti(true);
        reset();
        setNum1("");
      } catch (error) {
        console.error(error);
        toast.error('Try again')
      }
    }

  };




  return (
    <>
    
      <div className="lg:w-[80%] md:w-[90%] sm:w-[90%] mobile:w-[90%] m-auto flex justify-around md:flex-row  mobile:flex-col sm:flex-col lg:h-[92dvh] mobile:h-[92dvh] items-center">
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d139648.62438514814!2d77.52457850001586!3d12.963341722482944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704629169066!5m2!1sen!2sin"
            width="600" height="450"
            className='rounded-lg max-w-[90%] mobile:h-auto max-h-[80]
             m-auto  transition-all ease-in-out duration-1000  animate__animated animate__slideInLeft form'
            loading="lazy"></iframe>
        </div>
        <div className="mobile:w-[100%]  transition-all ease-in-out duration-1000  animate__animated animate__slideInRight form p-5">
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
              <textarea type="text" name="floating_email" id="floating_email" className="resize-none block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required
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
            </button>
          </form>
        </div>
      </div>

      <Toaster />




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