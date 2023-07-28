import { FaDiscord, FaTwitch, FaLinkedin, FaGithub, FaTwitter, FaEnvelope} from 'react-icons/fa6';
import { IconContext } from "react-icons";
function LargeWhiteCodeIcon(props) {
    return (
      <IconContext.Provider
        value={{ color: 'white', size: '64px' }}
      >
        {<props.object></props.object>}
      </IconContext.Provider>
    );
}

function ContactSection() {
    return (
        <div id="contacts" className="grid grid-cols-2 lg:grid-cols-3 h-screen justify-items-center items-center bg-gradient-to-b from-[#5C526E] to-[#4976AB] pr-8">
            <div className="col-span-2 lg:col-span-3"> 
            <h2 className="font-bold text-gray-200 text-4xl px-16">Here are some ways to contact me.</h2>
            </div>
            <a href="mailto:zhaoalan01@gmail.com"><LargeWhiteCodeIcon object={FaEnvelope}></LargeWhiteCodeIcon></a>
            <a href="https://www.linkedin.com/in/alanzhao01/" target="_blank"><LargeWhiteCodeIcon object={FaLinkedin}></LargeWhiteCodeIcon></a>
            <a href="https://github.com/alanzhaogithub" target="_blank"><LargeWhiteCodeIcon object={FaGithub}></LargeWhiteCodeIcon></a>
            <a href="https://twitter.com/mxlding_" target="_blank"><LargeWhiteCodeIcon object={FaTwitter}></LargeWhiteCodeIcon></a>
            <a href="https://discordapp.com/users/165135184591716352" target="_blank"><LargeWhiteCodeIcon object={FaDiscord}></LargeWhiteCodeIcon></a>
            <a href="https://www.twitch.tv/mxlding" target="_blank"><LargeWhiteCodeIcon object={FaTwitch}></LargeWhiteCodeIcon></a>
        </div>
    )
  }
  
  export default ContactSection;