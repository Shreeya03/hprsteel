import React, { useRef, useEffect,useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './p1.css';
import Navbarr from './navbar';
import Footer from './footer';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    'https://hkimg.bjyyb.net/sites/81500/81692/20230913161130427.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230913161131844.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230913161132285.webp',
    // Add more slide URLs as needed
];

const P19d = () => {
    return (
        <div>
        <Navbarr />
    <div>
        
    
       
        
        
      <h1 className="head1">
      Corten Steel</h1>
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
        Our products have ASTM, BV DIN, ISO, EN, JIS, GB and other standards. Various materials welcome to inquire

We have an inventory of 60000+ tons, which can be delivered quickly and also support custom size production

We also sell wear-resisting steel plate, spring steel plate, other alloy steel plate, details can see other product pages or email to consult us

Shipbuilding steel plate refers to the carbon and alloy steel plate used in offshore and marine contructions, common grades are

A,B, D, E, AH32/36/40, DH32/36/40, and EH32/36/40 which ranged from different strength. The plates usually used to manufacture

 

unalloyed steels.It is a kind of steel which reacts to natural elements in the atmosphere and forms its own protective layer of rust.
          <br />
        </p>
      </div>
      <div className="a55">
        <h1 className="hh">Specification</h1>
        <p className="content"  style={{ fontSize: '100%'}}>
        We aslo called it weathering steel plates,Corrosion Resistant steel and Anti corrosion steel. Corten steel is a copper chromium alloy steel - this alloy displays a greater level of resistance to atmospheric weathering when compared to other,can provide professional steel,Shipbuilding steel plate such as bridge steel, ship steel, boiler steel, pressure vessel steel, agricultural machinery steel, etc        </p>
      </div>
      <div className="a33">
        <h2>Product Details</h2>
        <div className="a22">
          <table border="3" className='custom-table'>
          <tbody>
    <tr>
      <td>Steel Grade</td>
      <td>
        <strong>GB:</strong> Q195, Q215, Q235A, Q235B, Q235C, Q235D, Q255A, 255B, Q275, Q295A, Q295B, Q345B, Q345C, Q345D, Q345E, Q390A, Q390B, Q390C, Q390D, Q390E, Q420, Q420B, Q420C, Q420D, Q420E, Q460D, Q460E, Q500D, Q500E, Q550D, Q550E, Q620D, Q620E, Q690D, Q690E,
        <strong>EN:</strong> S185, S235JR, S275JR, S355JR, S420NL, S460NL, S500Q, S550Q, S620Q, S690Q,
        <strong>ASTM:</strong> Grade B, Grade C, Grade D, A36, Grade 36, Grade 40, Grade 42, Grade 50, Grade 55, Grade 60, Grade 65, Grade 80,
        <strong>JIS:</strong> SS330, SPHC, SS400, SPFC, SPHD, SPHE
      </td>
    </tr>
    <tr>
      <td>Standard</td>
      <td>GB/T709-2006, ASTM A36, JIS G4051, DIN EN 10083, SAE 1045, ASTM A29M</td>
    </tr>
    <tr>
      <td>Thickness</td>
      <td>0.15mm-300mm</td>
    </tr>
    <tr>
      <td>Width</td>
      <td>500-2250mm</td>
    </tr>
    <tr>
      <td>Length</td>
      <td>1000mm-12000mm or according to customer's special request</td>
    </tr>
    <tr>
      <td>Tolerance</td>
      <td>Thickness: +/-0.02mm, Width: +/-2mm</td>
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

export default P19d;
