import React from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css'

export function PhotoViewer(props) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div className="photo-viewer">
            <img src={props.src}/>
        </div>
    );
}