import React from 'react';


function Pushnotif(props) {
    return (
        <button>
            <div style={{
                position: 'relative',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.4)',
                boxShadow: '0 0 20px rgba(0, 0, 0, .3)',
                zIndex: 1,
                padding: '10px 12px',
                margin: '8px 8px'}}>
                <div class="push__content">
                    <div class="push__top">
                        <div class="col">
                            <div class="push__imgwrap">
                                Some Icon
                            </div>
                            <span class="push__title">{props.project_title}</span>
                        </div>
                        <div class="col">
                            <div class="push__time">{props.project_date}</div>
                        </div>
                    </div>
                    <div class="push__main">
                        <p>{props.project_description}</p>
                    </div>
                </div>
            </div>
        </button>
    )
  }

  export default Pushnotif;