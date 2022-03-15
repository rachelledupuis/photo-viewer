import React, { useState } from "react"; 
import './ThumbnailImages.css'

export function ThumbnailImages( {images, setCurrentPhotoUrl1, setCurrentPhotoUrl2} ) {
    const [clickCount, setClickCount] = useState(0);

    return (
        <div className="thumbnail-container">                
            {images.map((image, index) => (
                <div className="thumbnail" key={index}>
                    <img 
                        src={image}
                        onClick={function() {
                            setClickCount(clickCount + 1);
                            if (clickCount % 2 === 0) {
                                setCurrentPhotoUrl1(image);
                            } else {
                                setCurrentPhotoUrl2(image);
                            } 
                        }} 
                    />
                </div>
            ))}
        </div> 
    );
}