import { useState } from 'react'
import React from 'react'
import './App.css'
import SplitText from './components/SplitText.jsx';
{ /* import Magnet from './components/Magnet.jsx'; */ }
import NavBar from './components/NavBar.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';


function App() {
  const [count, setCount] = useState(0)
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
    };
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Experience", href: "#" },
    { label: "Contact", href: "#" },
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

      {/* Fix Magnet Bug */}
      {/* <span>
        <Magnet padding={50} disabled={false} magnetStrength={50}>
          <p>Hello!</p>
        </Magnet>
      </span> */}

      <SplitText text="arnav"
        className="font-bold text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="words, chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <ScrollReveal
        baseOpacity={0.1}
        enableBlur={true}
        baseRotation={0}
        blurStrength={3}
        wordAnimationEnd={"bottom bottom"}
      >
        Hi! I'm Arnav Payghan.
      </ScrollReveal>

      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      


    </>
  )
}

export default App
