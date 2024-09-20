import React from "react";
function Womanfashion(props){
    const{title,image1,image2,image3,image4,image5,image6}=props.ladiesFashion;
    return(
        <div className="women-fashion-component">
            <div className="women-banner">
                <div className="banner-block">
                    <img src="./assets/LadiesBanner.gif" alt="Ladies-Banner" />
                </div>
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
            </div>
        </div>
    )
}
export default Womanfashion;