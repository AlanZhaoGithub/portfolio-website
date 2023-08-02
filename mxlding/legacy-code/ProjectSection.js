import React from 'react';
import Iphone from './Iphone.js';

/* Iphone was abandonned due to not being able to figure out 
/* 1. How to make the push notification z-indexes work (the glass crystal div should be under the black screen but over the background image)
/* 2. Not knowing how to warp the glass crystal div on drag. */

function ProjectSection() {
    return (
        <div id="projects" className="flex flex-col h-screen bg-black">
            <Iphone></Iphone>
        </div>
    )

}  export default ProjectSection;
