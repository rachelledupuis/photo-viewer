import React, { useState } from "react";
import { imageUrls } from "../ImagesUrls/Images"

export function SelectImage() {
    const [currentImage, selectedImage] = useState("https://picsum.photos/id/623/1600/900.jpg");

    imageUrls.map((image) => {
    return (
        <div>
            <h1 onClick={selectedImage(image)}>Image</h1>
            {currentImage === image ? (
                    <img src={image}/>
                ) : null}
        </div>
    )})
}