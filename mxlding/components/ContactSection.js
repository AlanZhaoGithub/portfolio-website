import { FaDiscord, FaTwitch, FaLinkedin, FaGithub, FaTwitter, FaEnvelope} from 'react-icons/fa6';
import { IconContext } from "react-icons";
function LargeWhiteCodeIcon(props) {
	return (
		<IconContext.Provider value={{ color: props.color, size: '64px'}}>{<props.object></props.object>}</IconContext.Provider>
	);
}

function ContactSection() {
	return (
		<div id="contacts" className="flex flex-col flex-grow h-screen justify-items-center items-center bg-black pr-8">
			<div className="flex h-1/2 items-center self-center"> 
				<h2 className="font-bold text-white text-2xl md:text-4xl px-12">Here are some ways to contact me.</h2>
			</div>
			<div className="flex h-1/2 items-start self-center">
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-24">
					<a href="mailto:zhaoalan01@gmail.com" className="transition hover:invert hover:bg-black rounded-2xl p-2"><LargeWhiteCodeIcon object={FaEnvelope} color="white"></LargeWhiteCodeIcon></a>
					<a href="https://www.linkedin.com/in/alanzhao01/" target="_blank" className="transition hover:bg-[#FFFFFF] rounded-2xl p-2"><LargeWhiteCodeIcon object={FaLinkedin} color="#0A66C2"></LargeWhiteCodeIcon></a>
					<a href="https://github.com/alanzhaogithub" target="_blank" className="transition hover:invert hover:bg-black rounded-2xl p-2"><LargeWhiteCodeIcon object={FaGithub} color="white"></LargeWhiteCodeIcon></a>
					<a href="https://twitter.com/mxlding_" target="_blank" className="transition hover:shadow-[0_0px_20px_0_rgba(0,0,0,0.3)] hover:bg-[#FFFFFF] rounded-2xl p-2"><LargeWhiteCodeIcon object={FaTwitter} color="#1DA1F2"></LargeWhiteCodeIcon></a>
					<a href="https://discordapp.com/users/165135184591716352" target="_blank" className="transition hover:shadow-[0_0px_20px_0_rgba(0,0,0,0.3)] hover:bg-[#FFFFFF] rounded-2xl p-2"><LargeWhiteCodeIcon object={FaDiscord} color="#7289DA"></LargeWhiteCodeIcon></a>
					<a href="https://www.twitch.tv/mxlding" target="_blank" className="transition hover:shadow-[0_0px_20px_0_rgba(0,0,0,0.3)] hover:bg-[#FFFFFF] rounded-2xl p-2"><LargeWhiteCodeIcon object={FaTwitch} color="6441a5"></LargeWhiteCodeIcon></a>
				</div>
			</div>
		</div>
	)
} export default ContactSection;