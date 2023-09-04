import React from "react";
import CustomTitle from "../../shared/title";
import CustomSubtitle from "../../shared/subtitle";
import IconBoxAdd from "../../../assets/svg/IconBoxAdd";
import AutoSlider from "../../shared/slider";
import CardProduct from "../../shared/cardProduct";
import RoundedImage from "../../shared/roundedImage";
import "./styles.scss";

const RecentlyAdded = () => {
  const sliderProductsData = [
    {
      key: 1,
      image: "image1.jpg",
    },
    {
      key: 2,
      image: "image2.jpg",
    },
    {
      key: 3,
      image: "image2.jpg",
    },
    {
      key: 4,
      image: "image2.jpg",
    },
    {
      key: 5,
      image: "image2.jpg",
    },
    {
      key: 6,
      image: "image2.jpg",
    },
  ];

  return (
    <section className="section recently-background">
      <div className="main-container recently-container ">
        <div className="sliderProducts-container">
          <div className="title-container session-title">
            <IconBoxAdd width="30px" />
            <CustomTitle text="Novidades" />
          </div>
          <div>
            <AutoSlider
              sliderData={sliderProductsData}
              showOnMobile={1}
              showOnDesktop={3}
              itemRenderer={CardProduct}
            />
          </div>
        </div>
        <div className="brands-container">
          <CustomSubtitle text="NAVEGUE POR MARCAS" />
          <AutoSlider
            sliderData={sliderProductsData}
            showOnMobile={2}
            showOnDesktop={4}
            itemRenderer={RoundedImage}
          />
        </div>
      </div>
    </section>
  );
};

export default RecentlyAdded;
