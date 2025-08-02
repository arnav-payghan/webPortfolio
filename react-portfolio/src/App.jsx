import { useState } from 'react'
import React from 'react'
import './App.css'
import SplitText from './components/SplitText.jsx';
import Magnet from './components/Magnet.jsx';
import NavBar from './components/NavBar.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';
import ScrollVelocity from './components/ScrollVelocity.jsx';

function App() {
  const [count, setCount] = useState(0)
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
    };
  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <NavBar
        style={{  }}
        items={items}
        particleCount={0}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />

      <section className="hero-section">
        {/* arnav. */}
        <div className="relative my-[100px] flex justify-center items-center group">
          {/* Big centered text */}
          <p 
            className="text-black text-[40px] sm:text-[80px] md:text-[120px] lg:text-[200px] leading-none"
            style={{ fontFamily: "NeometricExtraBold" }}
          >
            arnav.
          </p>
          {/* Ghost images layered over text */}
          <div className="absolute left-3/8 top-5/6 transform -translate-x-[20%] -translate-y-1/2 w-[100px] h-[100px]">
            <img 
              src="/images/ghost/openEyeGhost.svg" 
              alt="Ghost" 
              className="absolute z-100 inset-0 w-full h-full transition-opacity duration-400 ease-in-out group-hover:opacity-0"
            />
            <img  
              src="/images/ghost/closedEyeGhost.svg" 
              alt="Ghost Wink" 
              className="absolute z-100 inset-0 w-full h-full opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100"
            />
            <p className="absolute z-50 w-[100px] h-[100px] rounded-full" style={{ backgroundColor:"#0057ff", color:"#0057ff" }}>.</p>
          </div>
        </div>


      </section>

      <section className="aboutMe-section">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="information">
            <table className="table-auto">
              <thead className="text-black text-[30px] sm:text-[60px] md:text-[100px] lg:text-[150px]" style={{ fontFamily: "NeometricAltMedium" }}>
                <tr>
                  <th>Hello!</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Welcome to my portfolio website.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


    </>
  )
}

export default App
