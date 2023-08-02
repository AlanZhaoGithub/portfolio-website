import React from 'react';
import Draggable from 'react-draggable';


function Pushnotif(props) {
    return (
        <Draggable axis="x" zIndex={25}>
            <div className="shadow-[0_0px_20px_0_rgba(0,0,0,0.3)] bg-[#FFFFFF] bg-opacity-40 rounded-2xl p-2 m-4 2xl:p-10 2xl:m-10">
                <div class="push__content">
                    <div class="push__top">
                        <div class="col">
                            <div class="push__imgwrap">
                                Some Icon
                            </div>  
                            <span class="push__title"><h1>{props.project_title}</h1></span>
                        </div>
                        <div class="col">
                            <div class="push__time"><p>{props.project_date}</p></div>
                        </div>
                    </div>
                    <div class="push__main">
                        <p>{props.project_description}</p>
                    </div>
                </div>
            </div>
        </Draggable>
    )
  }

  export default Pushnotif;