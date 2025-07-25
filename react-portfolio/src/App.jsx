import { useState } from 'react'
import React from 'react'
import './App.css'
import SplitText from './components/SplitText.jsx';
import NavBar from './components/NavBar.jsx';
import Magnet from './components/Magnet.jsx';


function App() {
  const [count, setCount] = useState(0)
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
    };

  return (
    <>
      <NavBar />

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


    </>
  )
}

export default App
