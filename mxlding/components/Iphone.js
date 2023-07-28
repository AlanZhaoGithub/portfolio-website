import PushNotif from './PushNotif.js';

function Iphone(){
    return (
        <div id="iphone-wrapper" className="flex flex-grow justify-self-center self-center m-8 mr-24">
          <div id="iphone-container" className="flex h-[480px] w-[360px] 2xl:h-[780px] 2xl:w-[1280px] bg-black justify-self-center self-center p-12 border rounded-3xl">
            <div id="iphone-screen" className="flex flex-col h-[400px] min-w-[260px] 2xl:h-[700px] 2xl:w-[1220px] bg-slate-900 justify-self-center self-center">
              <PushNotif></PushNotif>
              <PushNotif></PushNotif>
              <PushNotif></PushNotif>
            </div>
            <div id="iphone-circle" className="relative top-[400px] right-[140px] flex min-h-[24px] max-h-[24px] min-w-[24px] max-w-[24px] bg-black rounded-full
            2xl:left-6 2xl:top-[320px] 2xl:h-[32px] 2xl:w-[32px]">
                <button id="iphone-home" className="flex flex-grow border border-1 border-gray-200 m-[5px] rounded"></button>
            </div>
          </div>
        </div>
    )
} export default Iphone;