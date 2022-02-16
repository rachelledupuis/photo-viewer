import React from "react";
import './LargeImage.css'

export function LargeImage({currentPhotoUrl}) {
    return (                
        <div className="photo-viewer-container">
            <img className="photo-viewer" src={currentPhotoUrl}/>
        </div>
    );
}