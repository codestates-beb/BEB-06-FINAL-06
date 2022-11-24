import React from 'react';
import Slider from "infinite-react-carousel";
import banner_1 from "../icon/Banner_.png";
import banner_2 from "../icon/Banner_1.png";

const Banner = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        className: "slide_box",
        dots: true,
        virtualList: true,
        duration: 20,
        arrows:true,
        position:"relative"
    };
    return (
        <div>
          <Slider {...settings}>
            <div className="banner1">
              <img
                src={banner_1}
                className="banner_1"
                alt="Responsive img"
              />
              
            </div>
            <div className='banner2'>
              <img
                src={banner_2}
                className="banner_2"
                alt="Responsive img"
              />
              
            </div>
          </Slider>
        </div>
      );    
}
  
export default Banner;
