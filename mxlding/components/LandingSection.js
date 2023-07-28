'use client'

import React, {useState, useEffect} from 'react';
import SidebarNavigation from './SidebarNav.js';

function LandingSection() {
    const [animated, setAnimated] = useState(false);
    const [audio, setAudio] = useState(null);
    useEffect(() => {
        setAudio(new Audio('/wdh.mp4'));
    }, [])
    const playWDHsound = () => {
        audio.play();
    }
    return (
        <div id="Content" className="flex flex-grow justify-center items-center bg-gradient-to-b from-gray-900 to-[#00425B]">
            <button onClick={playWDHsound} className="text-gray-200 rounded-full bg-black flex justify-self-center self-center 
            justify-items-center place-items-center ring-offset-4 ring-4 
            [height:250px] [width:250px] md:[height:450px] md:[width:450px] lg:[height:600px] lg:[width:600px]">
            <div onMouseEnter={() => setAnimated(() => true)} onAnimationEnd={() => setAnimated(() => false)} 
            className={animated ? "animate-spincircle flex flex-grow" : "flex flex-grow"}>
                <div className="flex-col grow place-items-center self-center justify-self-center">
                <h1 className="flex grow justify-center text-4xl font-bold text-gray-200">
                    MXLDING
                </h1>
                <h2 className="animate-wiggle hover:animation-none flex grow justify-center font-semibold text-gray-200">
                    Developer. Student. Gamer.
                </h2>
                </div>
            </div>
            </button>
        <SidebarNavigation></SidebarNavigation>
    </div>
    )
} export default LandingSection;