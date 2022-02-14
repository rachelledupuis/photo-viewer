import React from "react"; 
import { imageUrls } from "./ImageUrls.js";
import { Image } from "../image/Image";

export function ImageUrls() {
    return (                 
        <ol>
            {imageUrls.map((image, index) => (
            <li key={index}>
                <Image image={image}/>
            </li>
            ))}
        </ol>
    );
}