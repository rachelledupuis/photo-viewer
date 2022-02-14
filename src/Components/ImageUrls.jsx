import React from "react"; 
import { imageUrls } from "./Images";

export function ImageUrls() {
    return (                
        <div>
            {imageUrls.map((image) => (<img src={image} alt="random image"/>))}
        </div>
    );
}