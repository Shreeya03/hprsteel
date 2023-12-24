import React, { useRef, useEffect,useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './p1.css';
import Navbarr from './navbar';
import Footer from './footer';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    'https://hkimg.bjyyb.net/sites/81500/81692/20230908095606285.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230921085832956.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230908095607408.webp',
    // Add more slide URLs as needed
];

const P9d = () => {
    return (
        <div>
        <Navbarr />
    <div>
        
    
       
        
        
      <h1 className="head1">Hot Rolled Carbon Steel Coil</h1>
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
        Low carbon steel plate: For carbon content 0.06% to 0.25%, also we call it mild steel plate.
Medium carbon steel plate: C content from 0.25% to 0.55%. High carbon steel plate: 0.55% to 1.0%, also called hard steel plate. As the content of Carbon increase, the steel plate hardness increases.Carbon hot rolled steel sheets and plates are used in the welding and construction sectors such as railroad tracks, construction equipment, boom cranes, agriculture equipment and heavy vehicle frames. By varying the percentage in carbon steel, it is possible to produce steel with a variety of different qualities. In general, higher carbon content in steel makes steel harder, brittler and less ductile.
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
      <td>Hot Rolled Carbon Steel Coil</td>
    </tr>
    <tr>
      <td>Application</td>
      <td>Ship Plate, Boiler Plate, Container Plate, making pipes, making cold rolled steel products, making small tools</td>
    </tr>
    <tr>
      <td>Type</td>
      <td>Steel Coil</td>
    </tr>
    <tr>
      <td>Thickness</td>
      <td>3-200mm</td>
    </tr>
    <tr>
      <td>Standard</td>
      <td>AiSi, ASTM, bs, DIN, GB, JIS, etc</td>
    </tr>
    <tr>
      <td>Width</td>
      <td>600-2000mm</td>
    </tr>
    <tr>
      <td>Length</td>
      <td>as your request</td>
    </tr>
    <tr>
      <td>Certificate</td>
      <td>CE, ISO9001</td>
    </tr>
    <tr>
      <td>Grade</td>
      <td>Q195A/Q235AF/Q295AB/Q345AB</td>
    </tr>
    <tr>
      <td>Tolerance</td>
      <td>±1%</td>
    </tr>
    <tr>
      <td>Processing Service</td>
      <td>Welding, Punching, Cutting, Bending, Decoiling</td>
    </tr>
    <tr>
      <td>Delivery Time</td>
      <td>15-21 days</td>
    </tr>
    <tr>
      <td>Surface</td>
      <td>Black/Galvanized Coated or Customized</td>
    </tr>
    <tr>
      <td>Coil Weight</td>
      <td>3-10 Tons</td>
    </tr>
    <tr>
      <td>Sample</td>
      <td>Available</td>
    </tr>
    <tr>
      <td>Price Term</td>
      <td>CIF CFR FOB EX-WORK</td>
    </tr>
    <tr>
      <td>Payment term</td>
      <td>L/C T/T (30% Deposit)</td>
    </tr>
    <tr>
      <td>Packing</td>
      <td>Standard Seaworthy Packaging</td>
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

export default P9d;
