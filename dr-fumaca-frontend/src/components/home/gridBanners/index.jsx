import React from "react";
import "./styles.scss";
import Banner from "./banner";
import ImageTest from "../../../assets/images/banner-principal.jpg";

const GridBanners = () => {
  return (
    <section className="section banners-background">
      <div className="main-container banners-container">
        <Banner
          size="large"
          image={ImageTest}
          overlayText="PROMOÇÃO DE INVERNO"
        />
        <Banner
          size="large"
          image={ImageTest}
          overlayText="PROMOÇÃO DE INVERNO"
        />
        <Banner
          size="small"
          image={ImageTest}
          overlayText="PROMOÇÃO DE INVERNO"
        />
        <Banner
          size="small"
          image={ImageTest}
          overlayText="PROMOÇÃO DE INVERNO"
        />
        <Banner
          size="small"
          image={ImageTest}
          overlayText="PROMOÇÃO DE INVERNO"
        />
      </div>
    </section>
  );
};

export default GridBanners;
