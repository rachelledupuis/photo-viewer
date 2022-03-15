import React from "react"; 
import './ThumbnailImages.css'

export function ThumbnailImages( {images, setCurrentPhotoUrl} ) {
    return (
        <div>                
            {images.map((image, index) => (
                <div key={index}>
                    <img 
                        src={image}
                        onClick={function() {
                            setCurrentPhotoUrl(image);
                        }} 
                    />
                </div>
            ))}
        </div> 
    );
}