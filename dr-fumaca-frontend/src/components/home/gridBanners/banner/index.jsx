import React from "react";
import CustomSubtitle from "../../../shared/subtitle";
import "../styles.scss";

const Banner = (props) => {
  const bannerStyle = {
    backgroundImage: `url(${props.image})`,
  };

  return (
    <div className={`secondary-banner-container ${props.size}`}>
      <div className="banner-item" style={bannerStyle}></div>
      <div className="overlay">
        <CustomSubtitle text={props.overlayText} />
      </div>
    </div>
  );
};

export default Banner;
