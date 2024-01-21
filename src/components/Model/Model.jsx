import React, { useEffect, useRef } from 'react'
import { Application } from '@splinetool/runtime';


const Model = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);

    // Load the Spline scene when the component mounts
    app.load('https://prod.spline.design/RGOEyZs80NyOGRAh/scene.splinecode');

    // Clean up resources when the component unmounts
    return () => {
      // Perform any necessary cleanup here, e.g., stopping animations or releasing resources
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  

  return (
    <>
    <div className='bg-gray-950'>
    <canvas ref={canvasRef} id="canvas3d"/>
    </div>
    </>

    )
}

export default Model