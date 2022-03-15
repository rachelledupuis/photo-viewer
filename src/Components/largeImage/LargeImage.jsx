import React from "react";
import './LargeImage.css'

export function LargeImage({currentPhotoUrl1, currentPhotoUrl2}) {
    return (                
        <div className="photo-viewer-container">
            <img className="photo" src={currentPhotoUrl1}/>
            <img className="photo" src={currentPhotoUrl2}/>
        </div>
    );
}