import React from "react";
import './LargeImage.css'

export function LargeImage({currentPhotoUrl1, currentPhotoUrl2}) {
    return (                
        <div className="photo-viewer-container">
            <img src={currentPhotoUrl1}/>
            <img src={currentPhotoUrl2}/>
        </div>
    );
}