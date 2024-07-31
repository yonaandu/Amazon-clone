import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {img} from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Caraousel23 = () => {
  return (
    <div>
      <Carousel
      autoPlay={true}

infiniteLoop={true}

showIndicators={false}

showThumbs={false}>

 {  img.map((imageitemLink) => {
        return <img src={imageitemLink}/>
        
    })}
    
</Carousel>
    </div>
  )
}

export default Caraousel23;
