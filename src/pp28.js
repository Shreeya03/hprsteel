import React, { useRef, useEffect,useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './p1.css';
import Navbarr from './navbar';
import Footer from './footer';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    'https://hkimg.bjyyb.net/sites/81500/81692/20230908095727503.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230908095726569.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230912141554239.webp',
    // Add more slide URLs as needed
];

const P28dd = () => {
    return (
        <div>
        <Navbarr />
    <div>
        
    
       
        
        
      <h1 className="head1">Carbon steel DC01</h1>
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
        <h1 className="hh">Product Description</h1>
        <p className="content"  style={{ fontSize: '100%'}}>
          1. The cold-rolled coil products are accurate in size, uniform in thickness, and the thickness difference of the coils generally does not exceed 0.01-0.03 mm or less, which can meet the requirements of high-precision tolerances.
          <br />
          2. It is possible to obtain extremely thin strips that cannot be produced by hot rolling (up to 0.001 mm or less).
          <br />
          3. The surface quality of cold-rolled products is superior, there are no defects such as pitting, hot-pressed iron oxide, etc., which are often found in hot-rolled coils, and coils of different surface roughness (glossy or hemp) can be produced according to user requirements. Rough surface, etc., to facilitate the processing of the next process.
          <br />
          4. The cold rolled plate has good mechanical properties and process properties (such as higher strength, lower yield limit, good deep drawability, etc.).
          <br />
          5. High-speed rolling and full-continuous rolling can be realized with high productivity.
          <br />
        </p>
      </div>
      <div className="a55">
        <h1 className="hh">Specification</h1>
        <p className="content"  style={{ fontSize: '100%'}}>
        Cold rolled steel coils are made from hot rolled steel coils, which are rolled at room temperature below the recrystallization temperature, including plates and coils. Among them, the ones delivered in pieces are called steel plates, also called box plates or flat plates; the ones that are long in length and delivered in coils are called steel strips, also called coiled plates.The cold-rolled steel sheet has a smooth surface and excellent processing. It is widely used in home appliances such as automobiles, refrigerators, washing machines, industrial equipment, and various building materials.
        </p>
      </div>
      <div className="a33">
        <h2>Product Details</h2>
        <div className="a22">
          <table border="3" className='custom-table'>
            <tbody>
              <tr>
                <td>Product</td>
                <td>Cold Rolled Steel DC01 CR Coil and Sheet</td>
              </tr>
              
              <tr>
                <td>Grade</td>
                <td>ST-12, DC01, DC03, SGCH, SGCC, DX51D</td>
              </tr>
              <tr>
                <td>Standard</td>
                <td>JIS G3302, JIS G3312, EN10142, ASTM A653M</td>
              </tr>
              <tr>
                <td>Technique</td>
                <td>Cold Rolled</td>
              </tr>
              <tr>
                <td>Surface</td>
                <td>Mill, Slightly Oiled, Skin Pass</td>
              </tr>
              <tr>
                <td>Thickness</td>
                <td>0.5mm - 3.0mm</td>
              </tr>
              <tr>
                <td>Size</td>
                <td>Width 600mm-1250mm, Length 1000mm - 3000mm</td>
              </tr>
              <tr>
                <td>Packing</td>
                <td>In standard export package, wooden pallets or as required</td>
              </tr>
              <tr>
                <td>Delivery Time</td>
                <td>Ready stocks 3-7 days, customized 7-10 days for customized size</td>
              </tr>
              <tr>
                <td>MOQ</td>
                <td>20 Ton</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
     
      <Footer />
    </div>
    </div>
    );
};

export default P28dd;
