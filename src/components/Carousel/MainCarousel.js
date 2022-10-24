import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import firstCarousel from "./CGV_carousel_01.jpg";
import secondCarousel from "./CGV_carousel_02.jpg";
import thirdCarousel from "./CGV_carousel_03.jpg";

import "./MainCarousel.css";

export default class MainCarousel extends Component {
  render() {
    const captionStyle = {
      color: "white",
      background: "transparent",
      fontSize: "2.5rem",
      textAlign: "left",
      textShadow: "1px 1px black",
      fontWeight: "bold",
      opacity: "1",
      display: "block",
      padding: "200px 100px 150px 100px",
    };
    const subCaptionStyle = {
      display: "block",
      fontSize: "1.2rem",
      color: "white",
      textAlign: "left",
      opacity: "1",
      margin: "10px",
    };
    return (
      <Carousel
        autoPlay
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        interval={3000}
        stopOnHover={false}
        showArrows={false}
        showStatus={false}
        className="carouselWrapper"
      >
        <div>
          <img src={firstCarousel} alt="마녀2 1" />
          <p className="legend" style={captionStyle}>
            마녀(魔女) Part2. The Other One
            <p style={subCaptionStyle}>모든 것의 시작,</p>
            <p style={subCaptionStyle}>또 다른 존재가 깨어난다!</p>
          </p>
        </div>
        <div>
          <img src={thirdCarousel} alt="마녀2 2" />
          <p className="legend" style={captionStyle}>
            마녀(魔女) Part2. The Other One
            <p style={subCaptionStyle}>모든 것의 시작,</p>
            <p style={subCaptionStyle}>또 다른 존재가 깨어난다!</p>
          </p>
        </div>
        <div>
          <img src={secondCarousel} alt="마녀2 3" />
          <p className="legend" style={captionStyle}>
            마녀(魔女) Part2. The Other One
            <p style={subCaptionStyle}>모든 것의 시작,</p>
            <p style={subCaptionStyle}>또 다른 존재가 깨어난다!</p>
          </p>
        </div>
      </Carousel>
    );
  }
}
