import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageTest from "../../../assets/images/banner-principal.jpg";
import "./styles.scss";
import { useScreenSize } from "../../../contexts/ScreenSizeContext";

const AutoSlider = (props) => {
  const { isMobile } = useScreenSize();
  const [slidesToShow, setSlidesToShow] = useState();

  useEffect(() => {
    if (isMobile) {
      setSlidesToShow(props.showOnMobile);
    } else {
      setSlidesToShow(props.showOnDesktop);
    }
  }, [isMobile]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };

  const arrayToMap = props.sliderData;
  const ItemRenderer = props.itemRenderer;

  return (
    <div className="slider-item">
      <Slider {...settings}>
        {arrayToMap.map((item, index) => {
          return (
            <>
              <ItemRenderer id={index + 1} img={imageTest} />
              {item.label ? <label>{item.label}</label> : null}
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default AutoSlider;

/*
  <AutoSlider
    sliderData={sliderData}
    showOnMobile={2}
    showOnDesktop={5}
    itemRenderer={RoundedImage}
  />
*/
