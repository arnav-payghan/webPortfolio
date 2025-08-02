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
        <Magnet padding={60} disabled={false} magnetStrength={2} 
        className="magnet-wrapper absolute p-4 text-black left-25 top-50 transform translate-x-1/2" 
        style={{ fontFamily: "GildaDisplay", fontStyle: "italic" }}>
          <p>Minimalism</p>
        </Magnet>

        <Magnet padding={60} disabled={false} magnetStrength={2} 
        className="magnet-wrapper absolute p-4 text-black left-2/3 top-4/6 transform translate-x-1/2" 
        style={{ fontFamily: "GildaDisplay", fontStyle: "italic" }}>
          <p>Modern</p>
        </Magnet>

        <Magnet padding={60} disabled={false} magnetStrength={2} 
        className="magnet-wrapper absolute p-4 text-black left-3/4 top-30 transform translate-x-1/2" 
        style={{ fontFamily: "GildaDisplay", fontStyle: "italic" }}>
          <p>Elegant</p>
        </Magnet>

        {/* arnav. */}
        <div className="relative my-[100px] mx-center h-[200px] group">
          {/* Text */}
          <p 
            className="text-black text-9xl z-10 relative text-center"
            style={{ fontFamily: "NeometricExtraBold" }}
          >
            arnav.
          </p>
          <p className="absolute z-100 top-1/3 left-4/9 -translate-x-1/2 w-[60px] h-[60px] rounded-full" style={{ backgroundColor:"#0057ff", color:"#0057ff" }}>.</p>
          <img 
            src="/images/ghost/openEyeGhost.svg" 
            alt="Ghost" 
            className="absolute z-100 top-1/3 left-4/9 -translate-x-1/2 w-[60px] transition-opacity duration-400 ease-in-out group-hover:opacity-0"
          />
          <img 
            src="/images/ghost/closedEyeGhost.svg" 
            alt="Ghost Wink" 
            className="absolute z-100 top-1/3 left-4/9 -translate-x-1/2 w-[60px] opacity-0 transition-opacity duration-400 ease-in-out group-hover:opacity-100 -rotate-10"
          />
        </div>

      </section>

      {/*
      <span>
        <ScrollVelocity
          texts={['React Bits', 'Scroll Down']} 
          velocity={velocity} 
          className="custom-scroll-text"
        />
      </span>
      */}
      


    </>
  )
}

export default App
