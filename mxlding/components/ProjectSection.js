import React from 'react';
import { FaList, FaListCheck, FaListUl} from 'react-icons/fa6';
import { IconContext } from "react-icons";
function LargeWhiteCodeIcon(props) {
	return (
		<IconContext.Provider value={{ color: props.color, size: '64px'}}>{<props.object></props.object>}</IconContext.Provider>
	);
}
function ProjectSection() {
    return (
        <div id="projects" className="flex flex-col h-screen bg-black">
            <div className="flex flex-col flex-grow text-white text-4xl justify-center justify-items-center items-center">
                <div className="flex w-screen justify-self-center justify-center px-8">
                    <h1 className="text-7xl md:text-8xl"> Projects </h1>
                </div>
                <div className="flex flex-col m-4 pr-10">
                    {/*<div className="transition delay-250 hover:shadow-[0_0px_20px_0_rgba(0,0,0,0.3)] hover:bg-[#FFFFFF] hover:bg-opacity-40 rounded-2xl p-2 m-4 2xl:p-10 2xl:m-10"></div>*/}
                    <a className="transition ease-in-out delay-50 hover:scale-110 hover:-translate-y-1 hover:translate-x-4 duration-300 rounded-2xl p-2 m-4 2xl:p-10">
                        <div className="block text-start">
                            <h2 className="text-2xl md:text-4xl">CSC311 Project</h2>
                            <p className="text-sm md:text-xl"> Utilized SKlearn and Google Colabs to produce Bernoulli and Gaussian Models in relation to course materials and study </p>
                        </div>
                    </a>
                    <a className="transition ease-in-out delay-50 hover:scale-110 hover:-translate-y-1 hover:translate-x-4 duration-300 rounded-2xl p-2 m-4 2xl:p-10">
                        <div className="block text-start">
                            <h2 className="text-2xl md:text-4xl">CSC309 Project</h2>
                            <p className="text-sm md:text-xl"> Integrated a custom written RESTful api into frontend built with DaisyUI and React</p>
                        </div>
                    </a>
                    <a href="https://github.com/AlanZhaoGithub/CSC258_Project" className="transition ease-in-out delay-50 hover:text-[#00FFFF]  hover:scale-110 hover:-translate-y-1 hover:translate-x-4 duration-300 rounded-2xl p-2 m-4 2xl:p-10">
                        <div className="block text-start">
                            <h2 className="text-2xl md:text-4xl">CSC258 Project</h2>
                            <p className="text-sm md:text-xl"> Simon &#40;game&#41; programmed with RISC-V </p>
                        </div>
                    </a>
                    <a href="https://github.com/AlanZhaoGithub/portfolio-website" className="transition ease-in-out delay-50 hover:text-[#00FFFF]  hover:scale-110 hover:-translate-y-1 hover:translate-x-4 duration-300 rounded-2xl p-2 m-4 2xl:p-10">
                        <div className="block text-start">
                            <h2 className="text-2xl md:text-4xl">Portfolio Website</h2>
                            <p className="text-sm md:text-xl"> Built with React & Tailwind, deployed using Next.js</p> 
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )

}  export default ProjectSection;