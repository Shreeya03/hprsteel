import React, { useRef, useEffect,useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './p1.css';
import Navbarr from './navbar';
import Footer from './footer';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    'https://hkimg.bjyyb.net/sites/81500/81692/20230908100906835.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230908100904974.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230908100905433.webp',
    // Add more slide URLs as needed
];

const P7d = () => {
    return (
        <div>
        <Navbarr />
    <div>
        
    
       
        
        
      <h1 className="head1">Carbon Steel Sheet</h1>
      <div className="bb">
      <div className="box">
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div></div>
    
    
      <div className="a11">
        <hr></hr>
      </div>
      <div className="a55">
        <hr></hr>
      </div>
      <div className="a33">
        <hr></hr>
      </div>
     
      <Footer />
    </div>
    </div>
    );
};

export default P7d;
