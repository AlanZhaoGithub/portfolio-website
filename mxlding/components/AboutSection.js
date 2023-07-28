function AboutSection() {
    return (
    <div id="about" className="flex flex-col h-screen bg-gradient-to-b from-[#00425B] to-[#007380]">
        <div className="flex flex-grow h-3/8 w-screen justify-items-center items-start">
            <h1 className="p-16 mt-8 ml-8 font-bold text-gray-100 text-4xl lg:text-8xl border-t-4 border-l-4 rounded">
            About me 
            </h1>
        </div>
        <div className="animate-bounce flex flex-col items-center">
            <h1 className="font-bold text-gray-100 text-8xl mx-24">
            Hi, I&apos;m Alan
            </h1>
        </div>
        <div className="flex flex-grow h-3/8 w-screen justify-items-center items-end flex-row">
            <p className="leading-loose p-12 ml-8 mr-24 mb-8 font-bold text-gray-100 text-xs lg:text-2xl border-b-4 border-r-4 rounded">
            I&apos;m also known as Mxlding online. I am a passionate and driven third-year student pursuing a degree in Computer Science at the University of Toronto. 
            Throughout my academic journey, I&apos;ve explored various aspects of computer science, from algorithms and data structures 
            to software development and artificial intelligence. I love solving problems and approach each challenge with enthusiasm, 
            determination, and a passion for finding creative solutions.
            </p>
        </div>
    </div>
    )
  }
  
  export default AboutSection;