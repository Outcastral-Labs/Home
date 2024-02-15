"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Typed from 'typed.js';
import isometricWorkshop from "../public/images/isometricWorkshop.webp";
import hoodLogo from "../public/images/hoodLogo.png";
import ScrollSvgIcon from "../public/icons/scroll";
import RobotSvgIcon from "../public/icons/robot";
import AstronautSvgIcon from "../public/icons/astronaut";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const typedElement = useRef(null);

  const handleAboutClick = () => {
    event?.preventDefault();
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['the capacity to act', 'realizing you can just go and do things', 'finding things others aren&apos;t willing to do', 'a learnable skill'],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1400,
      startDelay: 1400,
      fadeOut: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-[#111517] text-[#CCCFC9] font-work-sans h-full overflow-auto">
      <nav className="relative z-10 container mx-auto px-4 py-6 flex justify-between items-center lg:hidden">
        <div className="flex items-center space-x-4">
          <Image
            alt="Outcastral Labs logo"
            className="h-10 w-10"
            height={60}
            src={hoodLogo}
            width={60}
            objectFit="cover"
          />
          <span className="text-xl font-black tracking-wide">OUTCASTRAL LABS</span>
        </div>
        <div className="flex items-center space-x-6">
          <button className="bg-black-600 text-[#CCCFC9]">Menu</button>
        </div>
      </nav>
      <nav className="relative z-10 hidden lg:flex container mx-auto px-4 py-6 justify-between items-center">
        <div className="flex items-center space-x-4">
        <Image
            alt="Outcastral Labs logo"
            className="h-15 w-15"
            height={60}
            src={hoodLogo}
            loading="eager"
            placeholder="blur"
            width={60}
            objectFit="cover"
          />
          <span className="text-xl font-black tracking-wide">OUTCASTRAL LABS</span>
        </div>
        <div className="flex items-center space-x-6 text-[#CCCFC9]">
          <button className="hover:bg-[#445359] border-2 border-transparent hover:border hover:border-[#6A818A] font-medium py-2 px-2 rounded inline-flex items-center">
            <RobotSvgIcon />
            <span className="ml-1">Projects</span>
          </button>
          <button className="hover:bg-[#445359] border-2 border-transparent hover:border hover:border-[#6A818A] font-medium py-2 px-2 rounded inline-flex items-center" onClick={handleAboutClick}>
            <ScrollSvgIcon />
            <span className="ml-1">About</span>
          </button>
          <a href="mailto:stephen@outcastral.com?subject=Reaching out&body=Hi Stephen," className="hover:bg-[#445359] border-2 border-transparent hover:border hover:border-[#6A818A] font-medium py-2 px-2 rounded inline-flex items-center">
            <AstronautSvgIcon />
            <span className="ml-1">Contact</span>
          </a>
        </div>
      </nav>
      <header className="relative bg-cover bg-center min-h-[calc(100vh-100px)] container mx-auto h-[calc(100vh-100px)] h-screen mb-8">
        <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[calc(100vh-100px)]">
          <div className="col-span-3 row-span-2 row-start-1 row-end-3 relative">
            <Image
              alt="Workshop"
              src={isometricWorkshop}
              placeholder="blur"
              loading="eager"
              quality={70}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "contain",
                pointerEvents: "none",
                zIndex: 1, 
              }}
            />
          </div>
          <div className="flex flex-col col-span-3 row-start-3 z-2 h-full">
            <div className="flex justify-center my-2">
              <div className="w-[800px] lg:w-[800px] md:w-[600px] sm:w-[600]">
                <h1 className="text-left xl:text-2xl lg:text-2xl md:text-1xl sm:text-lg font-black mb-2 tracking-wide font-mono">
                  <span>Agency is&nbsp;</span>
                  <span ref={typedElement}></span>
                </h1>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-evenly max-w-[768px] mx-auto h-full">
              <div className="text-lg text-center">
                Outcastral is a maker and capabilities shop formed around the notion of going out and doing. We apply research at the intersection of AI and robotics to the industrial base.
              </div>
              <a href="mailto:stephen@outcastral.com?subject=Reaching out&body=Hi Stephen," className="hover:bg-[#445359] border border-[#6A818A] hover:border hover:border-[#6A818A] font-medium p-3 rounded inline-flex items-center text-lg">
                <AstronautSvgIcon />
                <span className="ml-1">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div ref={aboutRef} id="about" className="relative bg-cover bg-center min-h-[calc(100vh-100px)] container mx-auto h-[calc(100vh-100px)] bg-[#111517] transition-opacity duration-500 ease-in-out opacity-100">
        <main className="flex flex-col h-[calc(100vh-100px)] justify-normal gap-2 max-w-[768px] mx-auto h-full">
          <div className="relative inline-flex items-center justify-around w-full">
            <hr className="w-full h-0.5 bg-[#6D7F87] border-0 dark:bg-[#6D7F87]"></hr>
            <div className="absolute px-4 -translate-x-1/2 left-1/2" style={{backgroundColor: "#111517"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" aria-hidden="true" className="bi bi-engine w-8 h-8 text-gray-700 dark:text-gray-300" viewBox="0 0 16 16" style={{ backgroundColor: "#111517" }}>
                <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v2A1.5 1.5 0 0 1 12.5 7h-9A1.5 1.5 0 0 1 2 5.5v-2zM3.5 3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-9zM6 8a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4H6zm-1 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm5 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"/>
                <path d="M9 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm-4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center justify-around w-full my-6">
            <h1 className="text-4xl font-black mb-4 tracking-wide">About</h1>
            <div className="text-center mb-6">
              Two once-in-a-lifetime opportunities are reshaping the world: the reshoring of industrial manufacturing, and the convergence of AI, robotics, and edge devices. Our mission is to take hold of these forces and apply emergent technical capabilities to evolve industrial manufacturing.
            </div>
          </div>
          <div className="flex flex-col items-center justify-around w-full">
            <h2 className="text-2xl font-black mb-4 tracking-wide">Areas of research, expertise, and collaboration:</h2>
            <div className="text-center mb-6">
              <ul>
                <li>- Evolved, deployable manufacturing cells and micro-factories</li>
                <li>- Operating articulated objects in open-ended unstructured environments for field skilled tradework</li>
                <li>- Vision language models for semantic navigation</li>
                <li>- Combining foundation models for action generation</li>
                <li>- Deploying computer vision models and alternative sensing modalities on embedded devices for edge inference</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
      <div className="mt-auto py-4 text-center bg-[#111517] text-[#CCCFC9]">
        © 2024 Outcastral Labs · All rights reserved
      </div>
    </div>
  );
}
