  import { useState } from 'react'
  import React from 'react'
  import './App.css'
  import { CursorifyProvider, DefaultCursor } from '@cursorify/react'
  import LightRays from './components/LightRays.jsx';
  import Dock from './components/Dock.jsx';
  import MusicPlayer from './components/MusicPlayer.jsx';

  import { VscHome, VscArchive, VscMail, VscGithubAlt } from 'react-icons/vsc';

  function App() {
    const [count, setCount] = useState(0)
    const [showPlayer, setShowPlayer] = useState(false);

    const items = [
      { icon: <VscHome size={18} />, label: 'Home', onClick: () => { document.getElementById("home-arnav").scrollIntoView({ behavior: "smooth", block: "start" }) } },
      { icon: <VscArchive size={18} />, label: 'Projects', onClick: () => alert('Projects!') },
      { icon: <VscMail size={18} />, label: 'Mail', onClick: () => window.open('mailto:arnavpayghan.work@gmail.com') },
      { icon: <VscGithubAlt size={18} />, label: 'GitHub', onClick: () => window.open('https://github.com/arnav-payghan') },
    ];

    return (
      <>
        <div className="">
        <CursorifyProvider
          cursor={DefaultCursor}
          opacity={1}
          delay={1}
          defaultCursorVisible={false}
          breakpoint={997}
        >
          <section className="relative grid grid-cols-[2fr_3fr_2fr] min-h-screen">
            {/* Left Column Empty Due to Middle requirements */}
            <div></div>

            <div>
              <div className="absolute inset-0 z-0 w-full h-[800px] m-0 p-0 px-6" >
                <LightRays
                  raysOrigin="top-center"
                  raysColor="#000000ff"
                  raysSpeed={0.5}
                  lightSpread={0.8}
                  rayLength={1.2}
                  followMouse={false}
                  mouseInfluence={0.1}
                  noiseAmount={0.1}
                  distortion={0.05}
                  className="custom-rays z-0"
                />
              </div>
              <div className="title relative z-10 flex flex-col items-left text-left z-10 text-balance sm:text-balance md:text-balance lg:text-balance xl:text-balance 2xl:text-balance">
                <div className=""> {/* grid grid-cols-[1fr_3fr] */}
                  {/* <div className="myPhoto">
                    <img src="/images/myPhotos/arnav.png" alt="Arnav Payghan" className="w-30 h-30 rounded-full border-4 border-neutral-700 shadow-lg translate-x-3 mt-18" />
                  </div> */}
                  <div>
                    <p className="name mt-10 text-[50px]" id="home-arnav">hi, i'm arnav.</p>
                    <article className="text-wrap w-full max-w-3xl -mt-1" style={{ fontFamily: 'Helvetica' }}>
                      <p>Navi Mumbai, India</p>
                    </article>
                  </div>
                </div>
                <p className="text-gray-300 mt-3 leading-5 text-sm" style={{ fontFamily: 'Helvetica' }} >Hey there! I'm Arnav Payghan, a final year computer engineering student. Currently learning UI/UX design and web development. I love to design and create user-friendly interfaces that enhance the overall user experience.</p>
              </div>
              <div className="skills">
                
              </div>
            </div>

            {/* Right Column Empty Due to Middle requirements */}
            <div></div>



          </section>
          
          <Dock 
            items={items}
            panelHeight={70}
            baseItemSize={50}
            magnification={70}
            className="z-1000 fixed backdrop-blur-md bg-[rgba(255,255,255,0.1)"
          />

          <MusicPlayer
            track={{
              title: "Do I Wanna Know?",
              artist: "Arctic Monkeys",
              cover: "/images/musicCover/ArcticMonkeysLogo.jpeg",
              src: "/music/DoIWannaKnow.mp3",
            }}
          />

        </CursorifyProvider>
        </div>
      </>
    )
  }

  export default App
