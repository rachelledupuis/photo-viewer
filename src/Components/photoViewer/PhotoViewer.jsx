import React, { useState } from "react";
import { LargeImage } from "../largeImage/LargeImage";
import { ThumbnailImages } from "../thumbnailImages/ThumbnailImages";
import { imageUrls } from "../../clients/getImageUrls";

export function PhotoViewer() {
    const [currentPhotoUrl1, setCurrentPhotoUrl1] = useState(imageUrls[22]);
    const [currentPhotoUrl2, setCurrentPhotoUrl2] = useState(imageUrls[2]);

    return (
        <div>
            <LargeImage 
                currentPhotoUrl1={currentPhotoUrl1}
                currentPhotoUrl2={currentPhotoUrl2}
             />
            <ThumbnailImages
                images={imageUrls}
                setCurrentPhotoUrl1={setCurrentPhotoUrl1}
                setCurrentPhotoUrl2={setCurrentPhotoUrl2}
            />
        </div>
    )
}