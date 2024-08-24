import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {img} from './img/data'
import '../Caraousel/Caraousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Caraousel = () => {
  return (
    <div>
     <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
    >
      {img.map((imageitemLink, index) => {
        return <img key={index} src={imageitemLink} />;
      })}
    </Carousel>
    </div>
  );
};

export default Caraousel;