import PushNotif from './PushNotif.js';

function GetDateTime(){
  var dateVariable = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  return(
    <div className="animate-glow flex-grow text-center text-gray-200 text-4xl font-sans">
      {dateVariable.toLocaleDateString('en-US', options)}
    </div>
  )
}

function Iphone(){
    return (
        <div id="iphone-wrapper" className="flex flex-grow justify-self-center self-center m-8 mr-24">
          <div id="iphone-container" className="flex h-[420px] w-[260px] 2xl:h-[780px] 2xl:w-[1280px] bg-black justify-self-center self-center p-7 border-2 rounded-3xl">
            <div id="iphone-screen" className="flex flex-col h-[360px] min-w-[200px] 2xl:h-[700px] 2xl:w-[1220px] bg-slate-900 justify-self-center self-center 2xl:ml-4" 
            style={{backgroundImage: `url('https://www.mactrast.com/wp-content/uploads/2016/09/Stars_1_Mac-582x301.jpg')`,
                    backgroundRepeat: `no-repeat`,
                    backgroundSize: `cover`}}>
              <div id="date-time" className="flex h-1/3 items-center justify-items-center">
                <GetDateTime></GetDateTime>
              </div>
              <div id="push-notification-container">
                <div id="push-wrapper">
                  <PushNotif project_title="Portfolio website"></PushNotif>
                  <PushNotif></PushNotif>
                  <PushNotif></PushNotif>
                </div>
              </div>
            </div>
            <div id="iphone-circle" className="relative top-[365px] right-[112px] flex min-h-[24px] max-h-[24px] min-w-[24px] max-w-[24px] bg-black rounded-full
            2xl:left-[14px] 2xl:top-[340px] 2xl:h-[32px] 2xl:w-[32px]">
                <button id="iphone-home" className="flex flex-grow border border-1 border-gray-200 m-[5px] rounded"></button>
            </div>
          </div>
        </div>
    )
} export default Iphone;