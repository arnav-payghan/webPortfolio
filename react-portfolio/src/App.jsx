import { useState } from 'react'
import React from 'react'
import SplitText from './components/SplitText.jsx';
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
    };

  return (
    <>
      
      
      <SplitText text="arnav"
        className="text-2xl font-bold text-center"
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
