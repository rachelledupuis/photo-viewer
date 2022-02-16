import React, { useState } from "react";
import { LargeImage } from "../largeImage/LargeImage";
import { ThumbnailImages } from "../thumbnailImages/ThumbnailImages";
import { imageUrls } from "../../clients/getImageUrls";

export function PhotoViewer() {
    const [currentPhotoUrl, setCurrentPhotoUrl] = useState(imageUrls[22]);

    return (
        <div>
        <LargeImage currentPhotoUrl={currentPhotoUrl} />
        <ThumbnailImages
            setCurrentPhotoUrl={setCurrentPhotoUrl}
        />
    </div>
    )
}