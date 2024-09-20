import React from "react";
function Collections(prop){
    const{title,image1,image2,image3,image4,image5,image6}=prop.gentsFashion;
    return(
        <div className="mens-fashion-component">
            <h2>{title}</h2>
            <div className="image-men">
                <img src={image1} alt={title} />
                <img src={image2} alt={title} />
                <img src={image3} alt={title} />
                <img src={image4} alt={title} />
                <img src={image5} alt={title} />
                <img src={image6} alt={title} />
            </div>
        </div>
    )
}
export default Collections;