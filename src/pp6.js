import React, { useRef, useEffect,useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './p1.css';
import Navbarr from './navbar';
import Footer from './footer';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    'https://hkimg.bjyyb.net/sites/81500/81692/20230912143126593.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230912143125751.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230912143127244.webp',
    // Add more slide URLs as needed
];

const P6dd = () => {
    return (
        <div>
        <Navbarr />
    <div>
        
    
       
        
        
      <h1 className="head1">40 cr Cold Drawn Steel Rod

</h1>
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
        Good quality q235 q345 s355 ss400 a36 40Cr 42Cr 34crnimo6 4140 42CrMo SCM440 carbon steel round bar, cold drawn/hot rolled/forged
Alloy round steel hot rolling, forging and cold drawn three kinds.
The specifications of the hot rolled round steel of 6.5 to 500mm.
Among them: 6.5-25 mm small alloy round steel are mostly with straight bundles of supplies, commonly used for reinforcing steel bar, bolt, and various mechanical parts;
More than 25 mm alloy round steel, mainly used in the manufacture of machinery parts or for seamless steel tube.
          <br />
        </p>
      </div>
      <div className="a55">
        <hr></hr>
      </div>
      <div className="a33">
        <h2>Product Details</h2>
        <div className="a22">
          <table border="3" className='custom-table'>
          <tbody>
    <tr>
      <td>Product Name</td>
      <td>Carbon Steel Round Bar</td>
    </tr>
    <tr>
      <td>Steel Grade</td>
      <td>20Cr, 40Cr, 20CrMo, 35CrMo, 42CrMo</td>
    </tr>
    <tr>
      <td>Model Number</td>
      <td>Q195, Q235, 10#, 20#, 35#, 45#, Q215, Q345</td>
    </tr>
    <tr>
      <td>Technique</td>
      <td>Hot Rolled/Cold Drawn</td>
    </tr>
    <tr>
      <td>Application</td>
      <td>Building materials, mechanical equipment parts, etc.</td>
    </tr>
    <tr>
      <td>Special Use</td>
      <td>Mold Steel</td>
    </tr>
    <tr>
      <td>Type</td>
      <td>Alloy Steel Bar</td>
    </tr>
    <tr>
      <td>Tolerance</td>
      <td>±1%</td>
    </tr>
    <tr>
      <td>Delivery Time</td>
      <td>15-21 days</td>
    </tr>
    <tr>
      <td>Length</td>
      <td>1-12m/customized</td>
    </tr>
    <tr>
      <td>Diameter</td>
      <td>6.5-500mm</td>
    </tr>
    <tr>
      <td>Advantage</td>
      <td>Fast Delivery</td>
    </tr>
    <tr>
      <td>Surface Treatment</td>
      <td>Mild Steel Plain Finish or Customized</td>
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

export default P6dd;
