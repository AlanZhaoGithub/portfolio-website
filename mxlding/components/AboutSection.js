function AboutSection() {
	return (
		<div id="about" className="flex flex-col h-screen bg-black">
			<div className="flex flex-grow w-screen justify-items-center items-start">
				<h1 className="p-8 sm:p-16 mt-8 ml-8 font-semibold bg-black text-gray-200 text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
				About me 
				</h1>
			</div>
			<div className="animate-bounce flex flex-col items-center">
				<h1 className="font-bold text-white text-3xl xs:text-6xl sm:text-7xl md:text-8xl mr-[4.5rem]">
				Hi, I&apos;m Alan
				</h1>
			</div>
			<div className="flex flex-grow h-3/8 w-screen justify-items-center items-end flex-row">
				<p className="leading-loose p-8 sm:p-12 ml-8 mr-24 mb-8 font-bold text-gray-200 text-sm lg:text-justify lg:text-2xl">
				I&apos;m also known as Mxlding online. I am a passionate and driven third-year student pursuing a degree in Computer Science at the University of Toronto. I love solving problems and try to approach each challenge with enthusiasm, determination, and a passion for finding creative solutions.
				</p>
			</div>
		</div>
	)
} export default AboutSection;