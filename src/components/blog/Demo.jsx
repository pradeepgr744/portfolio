import React, { useEffect, useRef } from "react"
import './blog.css'
import { Helmet } from 'react-helmet';

const Demo = () => {
    return (
        <>
            <Helmet>
                <title>JAVA</title>
            </Helmet>
            <div className='w-[80%] mobile:w-[90%] m-auto text-2xl'>
                <div className='flex h-[100dvh] items-center text-9xl animate__animated animate__slideInLeft'>
                    <div>
                        <h2 className='head_text font-semibold'>
                            JAVA
                        </h2>
                        <h1 className='font-extralight'>
                            Hello World!...
                        </h1>
                    </div>
                </div>
                <section className='mt-10 content_section'>
                    <h1 className='mt-7 mb-2 font-semibold text-center'>Java is Object oriented programming language</h1>
                    <img src="/images/img-1.png" className='my-12 h-auto w-auto flex m-auto rounded-lg' alt="" loading='lazy' />
                    <img src="/images/img-2.png" className='my-12 h-auto w-auto flex m-auto rounded-lg' alt="" loading='lazy' />
                    Example:
                    <img src="/images/img-3.png" className=' h-auto w-auto flex m-auto rounded-lg' alt="" loading='lazy' />

                    <h1 className='mt-16 mb-2 font-semibold'>Features</h1>
                    <ol className='list-decimal mb-20'>
                        <li>Simple.</li>
                        <li>Object-Oriented Programming.</li>
                        <li>Platform Independence.</li>
                        <li>Robust.</li>
                    </ol>
                </section>
            </div>

        </>
    )
}

export default Demo