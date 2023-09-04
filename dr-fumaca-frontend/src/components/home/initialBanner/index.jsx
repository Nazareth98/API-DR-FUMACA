import React from "react";
import IconCategory from "../../../assets/svg/IconCategory";
import CustomTitle from "../../shared/title";
import AutoSlider from "../../shared/slider";
import RoundedImage from "../../shared/roundedImage";
import "./styles.scss";

const InitialBanner = () => {
  const sliderData = [
    {
      key: 1,
      image: "image1.jpg",
      label: "Label 1",
    },
    {
      key: 2,
      image: "image2.jpg",
      label: "Label 2",
    },
    {
      key: 3,
      image: "image2.jpg",
      label: "Label 2",
    },
    {
      key: 4,
      image: "image2.jpg",
      label: "Label 2",
    },
    {
      key: 5,
      image: "image2.jpg",
      label: "Label 2",
    },
    {
      key: 6,
      image: "image2.jpg",
      label: "Label 2",
    },
  ];

  return (
    <section className="section home-container">
      <div className="banner-container"></div>
      <div className="categories-container main-container">
        <div className="title-container session-title">
          <IconCategory width="30px" />
          <CustomTitle text="Principais categorias" />
        </div>
        <AutoSlider
          sliderData={sliderData}
          showOnMobile={2}
          showOnDesktop={5}
          itemRenderer={RoundedImage}
        />
      </div>
    </section>
  );
};

export default InitialBanner;
