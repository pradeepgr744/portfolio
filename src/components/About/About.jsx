import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../../utils/utils";
import { Link } from "react-router-dom";

const About = () => {
  const [isCanvasLoaded, setCanvasLoaded] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional smooth scrolling behavior
    });
  }
  useEffect(() => {
    scrollToTop()
  }, [])
  useEffect(() => {
    // Simulate an asynchronous task (e.g., loading assets) here
    // For demonstration purposes, we'll use a setTimeout
    const timeoutId = setTimeout(() => {
      setCanvasLoaded(true);
    }, 1000); // Adjust the time as needed

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      {isCanvasLoaded && (
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center ">
          <h1 className="text-5xl font-bold text-white mb-6 animate__animated animate__fadeInDown">About <span className="text-[#fdb724]">Me</span></h1>
        <p className="max-w-prose text-white animate__animated animate__fadeIn animate__delay-1s">Passionate FullStack Developer from Bengaluru, India. Turning ideas into code and creating digital experiences.</p>
        <p className="text-white mt-2"><strong className="text-yellow-300 font-semibold">Skills:</strong> HTML, CSS, tailwind, JavaScript, MERN Stack, Java</p>
        <p className="text-white mt-2"><strong className="text-yellow-300 font-semibold">Projects:</strong> YouTube Clone, Weather App, Video Streaming</p>
        <p className="text-white mt-2 mb-5"><strong className="text-yellow-300 font-semibold ">Contact:</strong> 
            <a href="tel:+91 9739640989" className="text-yellow-300 hover:text-white transition duration-300 pointer-events-auto"> +91 9739640989</a> | 
            <a href="mailto:pradeepgr744@gmail.com" className="text-yellow-300 hover:text-white transition duration-300 pointer-events-auto"> pradeepgr744@gmail.com</a>
        </p>
        
        <Link to="/contact" className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 mt-4 rounded-full transition duration-300 hover-scale  font-semibold pointer-events-auto">Let's Connect</Link>
        <p className="text-white mt-4 animate__animated animate__fadeIn animate__delay-2s">Excited to connect and collaborate on innovative projects! 🚀</p>
    
        </div>
      )}
    </div>
  );
};

const PointCircle = React.memo(() => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return useMemo(() => (
    <group ref={ref}>
      {[...pointsInner, ...pointsOuter].map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  ), []);
});

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default About;