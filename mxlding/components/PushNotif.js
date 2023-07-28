import React from 'react';

function Pushnotif(props) {
    return (
        <button>
            <div className="bg-inherit border-2 border-gray-200 rounded-lg shadow height-[400px] width-[200px]">
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.paragraph}</p>
                </div>
            </div>
        </button>
    )
  }

  export default Pushnotif;