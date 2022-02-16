import React from "react"; 
import { imageUrls } from "../../clients/getImageUrls.js";
import './ThumbnailImages.css'

export function ThumbnailImages( {setCurrentPhotoUrl} ) {
    return (                 
        <ol className="image-container">
            {imageUrls.map((image, index) => (
            <li class="li" key={index}>  
                <img 
                    class="thumbnail-image" 
                    src={image}
                    onClick={function() {
                        setCurrentPhotoUrl(image);
                    }} 
                />
            </li>
            ))}
        </ol>
    );
}