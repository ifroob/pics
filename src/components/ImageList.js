import "./ImageList.css";
import ImageCard from "./ImageCard";
import React from "react";

const ImageList = props => {
    // Each element much have a unique key prop
    // On a rerender, react takes list elements and looks what is in the DOM.
    // So, a virtual DOM is being compared to the actual DOM to see what is different.
    // It wants to see what new thing it needs to append (efficientcy)
    // With a key, it sees the key and compares the content. If a key isn't found or the content
    // is different, it appends the new element to the DOM.
    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image} />;
    });
    return <div className='image-list'>{images}</div>;
};

export default ImageList;
