"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Typed from 'typed.js';
import isometricWorkshop from "../public/images/isometricWorkshop.webp";
import GrainFilter from "../public/images/grainFilter";
import hoodLogo from "../public/images/hoodLogo.png";
import ScrollSvgIcon from "../public/icons/scroll";
import RobotSvgIcon from "../public/icons/robot";
import AstronautSvgIcon from "../public/icons/astronaut";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const typedElement = useRef(null);

  const handleAboutClick = () => {
    event?.preventDefault();
    aboutRef.current?.scrollIntoView({ behavior: 'instant' });
  }

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Revitalizing skilled trades for heavy industry'],
      typeSpeed: 60,
      backSpeed: 0,
      backDelay: 1400,
      startDelay: 1000,
      fadeOut: true,
      loop: true,
      cursorChar: '█',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-[#111517] text-[#CCCFC9] font-work-sans h-full overflow-auto filtered-bg" id="grainFilter">
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
          <button className="text-[#CCCFC9]">Menu</button>
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
      <header className="relative bg-cover bg-center container mx-auto h-[calc(100vh-110px)]">
        <div className="grid grid-cols-3 grid-rows-3 gap-2 min-h-[calc(100vh-110px)]">
          <div className="col-span-3 row-span-2 row-start-1 row-end-3 relative">
            <Image
              alt="Workshop"
              src={isometricWorkshop}
              placeholder="empty"
              loading="eager"
              priority={true}
              quality={10}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 33vw"
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
                <h1 className="typed bg-[#090B0C] text-left xl:text-1xl lg:text-1xl md:text-1xl sm:text-lg font-black mb-2 tracking-wide font-mono">
                  <span className="text-[#9CABAF]">user@outcastral:~$&nbsp;</span>
                  <span ref={typedElement}></span>
                </h1>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-evenly max-w-[768px] mx-auto h-full">
              <div className="text-lg text-center">
              U.S. shipyards and heavy industry face acute shortages in the skilled trade workforce.  
              <br></br>
              We are building mobile welding cobots for open-ended environments and forging vulnerabilities in the industrial base back into deterrents.  
              </div>
              <a href="mailto:stephen@outcastral.com" className="hover:bg-[#445359] border border-[#6A818A] hover:border hover:border-[#6A818A] font-medium p-3 rounded inline-flex items-center text-lg">
                <AstronautSvgIcon />
                <span className="ml-1">Contact</span>
              </a>
            </div>
            <div className="mt-auto py-4 text-center bg-[#111517] text-[#CCCFC9] text-xs">
              © 2024 Outcastral Labs · All rights reserved
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
