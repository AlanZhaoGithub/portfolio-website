import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function SidebarNavigation(){
    return (
    <div id="custom-scrollbar" className="fixed right-4 z-[20000]">
      <Link activeClass="active" to="landing" spy={true} smooth={true} offset={-5} duration={100}>
        <button className=" text-gray-200 rounded-full bg-inherit flex justify-self-center self-center 
          justify-items-center place-items-center ring-black ring-2 [height:20px] [width:20px] m-6">
        </button>
      </Link>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-5} duration={100}>
        <button className="text-gray-200 rounded-full bg-inherit flex justify-self-center self-center 
          justify-items-center place-items-center ring-black/80 ring-2 [height:20px] [width:20px] m-6">
        </button>
      </Link>
      <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-5} duration={100}>
        <button className="text-gray-200 rounded-full bg-inherit flex justify-self-center self-center 
          justify-items-center place-items-center ring-black/80 ring-2 [height:20px] [width:20px] m-6">
        </button>
      </Link>
      <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-5} duration={100}>
        <button className="text-gray-200 rounded-full bg-inherit flex justify-self-center self-center 
          justify-items-center place-items-center ring-black/80 ring-2 [height:20px] [width:20px] m-6">
        </button>
      </Link>
    </div>
    )
  }

export default SidebarNavigation;