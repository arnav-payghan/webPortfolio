import { useState } from 'react'
import React from 'react'
import './App.css'
import { CursorifyProvider, DefaultCursor } from '@cursorify/react'
import { Analytics } from "@vercel/analytics/next"
import LightRays from './components/LightRays.jsx';
import Dock from './components/Dock.jsx';
import MusicPlayer from './components/MusicPlayer.jsx';
import SkillBox from './components/SkillBox.jsx';
import Education from './components/Education.jsx';
import ProjectBox from './components/ProjectBox.jsx';
import ScrollReveal from './components/ScrollReveal.jsx';
import SkillContainer from './components/SkillContainer.jsx';
import TextType from './components/TextType.jsx';

import { VscHome, VscArchive, VscMail, VscGithubAlt } from 'react-icons/vsc';
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress,  } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0)
  const [showPlayer, setShowPlayer] = useState(false);

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => { document.getElementById("home-arnav").scrollIntoView({ behavior: "smooth", block: "start" }) } },
    { icon: <VscArchive size={18} />, label: 'Projects', onClick: () => { document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" }) } },
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
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0 w-full h-full m-0 p-0 px-6" >
          <LightRays
            raysOrigin="top-center"
              raysColor="#525252ff"
              raysSpeed={1.0}
              lightSpread={0.3}
              rayLength={1.5}
              followMouse={false}
              mouseInfluence={0}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays z-0"
          />
        </div>
        <section className="relative grid grid-cols-[3fr_5fr_3fr] min-h-screen">
          {/* Left Column Empty Due to Middle requirements */}
          <div></div>

            <div>
            {/* TITLE */}
            <div className="title relative z-10 flex flex-col items-left text-left z-10 text-balance sm:text-balance md:text-balance lg:text-balance xl:text-balance 2xl:text-balance">
                <div className=""> {/* grid grid-cols-[1fr_3fr] */}
                  {/* <div className="myPhoto">
                    <img src="/images/myPhotos/arnav.png" alt="Arnav Payghan" className="w-30 h-30 rounded-full border-4 border-neutral-700 shadow-lg translate-x-3 mt-18" />
                  </div> */}
                  {/* CAN BE REMOVED - WHICH IS GHOST IMAGE */}
                  <div className="relative flex left-7/15 top-21 w-9 h-9 group">
                    <img src="/images/ghost/openEyeGhost.svg" alt="ghost" className="absolute w-9 h-9 transition-opacity duration-300 group-hover:opacity-0" />
                    <img src="/images/ghost/closedEyeGhost.svg" alt="ghost" className="absolute w-9 h-9 opacity-0 -rotate-20 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div>
                    <p className="name text-[65px]" id="home-arnav">hi, i'm arnav.</p>
                    <article className="text-wrap w-full max-w-3xl -mt-1" style={{ fontFamily: 'Helvetica' }}>
                      <p className="-mx-1">📍Navi Mumbai, India</p>
                    </article>
                  </div>
                </div>
                <p className="text-gray-300 mt-3 leading-5 text-sm" style={{ fontFamily: 'Helvetica' }} >Hey there! I'm Arnav Payghan, a final year computer engineering student. Currently learning UI/UX design and web development. I love to design and create user-friendly interfaces that enhance the overall user experience.</p>
            </div>
            {/* SKILLS */}
            <div className="skills grid gird-cols-2 gap-4 mt-3 text-white">
                <span className="text-left" style={{ fontFamily: 'NeometricMedium' }}>Skills</span>
                <div className="flex flex-wrap gap-1.5">
                  <SkillContainer skillName="HTML" />
                  <SkillContainer skillName="CSS" />
                  <SkillContainer skillName="JavaScript" />
                  <SkillContainer skillName="React.js" />
                  <SkillContainer skillName="Node.js" />
                  <SkillContainer skillName="MongoDB" />
                  <SkillContainer skillName="Express.js" />
                  <SkillContainer skillName="MySQL" />
                  <SkillContainer skillName="Java" />
                  <SkillContainer skillName="Figma" />
                  <SkillContainer skillName="Git" />
                  <SkillContainer skillName="GitHub" />
                </div>
            </div>
            {/* EDUCATION */}
            <div className="">
              <div className="text-md text-left my-4">
                <span style={{ fontFamily: 'NeometricMedium' }}>Education</span>
              </div>
              <div className="">
                <Education
                  instituteName="Ramrao Adik Institute of Technology"
                  study="Bachelor of Technology in Computer Engineering"
                  duration="2022 - Present"
                  marks="CGPA: 9.04"
                />
                {/* Education Pointers and Stuff containers here. */}
              </div>
            </div>
            {/* Projects */}
            <div id="projects" className="text-left mt-5">
              <TextType
                text={["Wanna see my work?", "Here are some of my projects✨"]}
                typingSpeed={50}
                initialDelay={1500}
                pauseDuration={3000}
                showCursor={true}
                cursorCharacter="_"
                className="items-left text-left text-3xl leading-[1.2] text-left tracking-tight"
                style={{ fontFamily: 'NeometricBold' }}
              />
            </div> {/* ACTUAL PROJECT BOXES */}
            <div className="flex grid grid-cols-2 w-auto mt-5 gap-10">
              <div className="">
                <ProjectBox
                  projectTitle="Spirit Lands"
                  projectDesc="Description of Spirit Lands"
                  projectURL="/images/projects/spiritLands.svg"
                />
              </div>
              <div className="">
                <ProjectBox
                  projectTitle="Lost-Link"
                  projectDesc="Description of Lost-Link"
                  projectURL="/images/projects/LostLinkPoster.svg"
                />
              </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>

          {/* Right Column Empty Due to Middle requirements */}
          <div></div>
        </section>

        {/* BOTTOM NAVIGATION DOCK */}
        <Dock 
          items={items}
            panelHeight={70}
            baseItemSize={50}
            magnification={70}
            className="z-1000 fixed backdrop-blur-md bg-[rgba(255,255,255,0.1)"
        />
        {/* TOP RIGHT MUSIC PLAYER DOCK */}
        <MusicPlayer
          track={{
              title: "Do I Wanna Know?",
              artist: "Arctic Monkeys",
              cover: "/images/musicCover/ArcticMonkeysLogo.jpeg",
              src: "/music/DoIWannaKnow.mp3",
          }}
          className="blur-sm z-500000"
        />

      </CursorifyProvider>
      </div>
    </>
  )
}

export default App
