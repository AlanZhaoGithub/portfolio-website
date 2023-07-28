import React from 'react';
import { FaCode } from 'react-icons/fa6';
import { IconContext } from "react-icons";
import { Link, animateScroll as scroll } from "react-scroll";
function LargeWhiteCodeIcon() {
    return (
      <IconContext.Provider
        value={{ color: 'white', size: '36px' }}
      >
        <div>
          <FaCode />
        </div>
      </IconContext.Provider>
    );
  }

function MainbarNav() {
    return(
    <div id="navbar">
        <nav className="flex flex-row justify-between px-5 md:px-20 py-10 items-center bg-black">
        <div className="flex flex-row place-items-center">
            <LargeWhiteCodeIcon/>
            <h1 className="text-2xl md:text-4xl lg:text-8xl font-bold text-white   pl-5 lg:pl-10">Mxlding</h1>
        </div>
        <div className="flex items-center">
            <ul className="flex items-center space-x-4 sm:space-x-8">
            {//need to add using Link component here.
            }
            <li className="font-semibold text-gray-200 text-xs sm:text-2xl underline-offset-4 hover:underline">
                <Link activeClass="active" to="about" smooth={true} offset={-5} duration={50}> About </Link>
            </li>
            <li className="font-semibold text-gray-200 text-xs sm:text-2xl underline-offset-4 hover:underline">
                <Link activeClass="active" to="projects"smooth={true} offset={-5} duration={50}> Projects </Link>
            </li>
            <li className="font-semibold text-gray-200 text-xs sm:text-2xl underline-offset-4 hover:underline">
                <Link activeClass="active" to="contacts" smooth={true} offset={-5} duration={50}> Contact </Link>
            </li>
            </ul>
        </div>
        </nav>
    </div>
    )
} export default MainbarNav;