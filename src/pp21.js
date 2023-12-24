import React, { useRef, useEffect,useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './p1.css';
import Navbarr from './navbar';
import Footer from './footer';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    'https://hkimg.bjyyb.net/sites/81500/81692/20230912114552804.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230912114554802.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230912114553517.webp',
    // Add more slide URLs as needed
];

const P21dd = () => {
    return (
        <div>
        <Navbarr />
    <div>
        
    
       
        
        
      <h1 className="head1">MS Angle steel</h1>
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
        The Angle Steel Is Generally Based On The Specifications Required In Use, And Its Steel Grade Is The Corresponding Carbon Steel Grade. In Addition To The Specification Number, Angle Steel Has No Specific Composition And Performance Series. The Delivery Length Of Angle Steel Is Divided Into Fixed Length And Double Length. The Selection Range Of Fixed Length Of Domestic Angle Steel Is 3-9m, 4-12m, 4-19m, 6-19m According To The Different Specifications. The Length Selection Range Of Angle Steel Produced In Japan Is 6-15m.</p>
      </div>
      <div className="a55">
        <h1 className="hh">Specification</h1>
        <p className="content"  style={{ fontSize: '100%'}}>
        Angle Steel Is A Carbon Structural Steel For Construction, Which Is A Section Steel With A Simple Section.Mainly Used For Metal Components And The Frame Of A Workshop. In Use, It Is Required To Have Good Weldability, Plastic Deformation Performance And Certain Mechanical Strength. The Raw Material Billet For Producing Angle Steel Is Low Carbon Square Billet, And The Finished Angle Steel Is Delivered In Hot-rolled, Normalized Or Hot-rolled State.       </p>
      </div>
      <div className="a33">
        <h2>Product Details</h2>
        <div className="a22">
          <table border="3" className='custom-table'>
          <tbody>
    <tr>
      <td>Name</td>
      <td>Steel Angel Bar</td>
    </tr>
    <tr>
      <td>Standard</td>
      <td>JIS / ASTM / GB / DIN / EN / AISI</td>
    </tr>
    <tr>
      <td>Material</td>
      <td>
        Q235B, Q345B, Q420B/C, Q460C, SS400/SS540, S235JR/S235J0/S235J2, S275JR/S275J0/S275J2, S355JR/S355J0/S355J2/A36
      </td>
    </tr>
    <tr>
      <td>Length</td>
      <td>6m, 9m, 12m, or as customized</td>
    </tr>
    <tr>
      <td>Size</td>
      <td>Equal 20*20--250*250mm</td>
    </tr>
    <tr>
      <td>Technique</td>
      <td>Hot rolled or cold forming</td>
    </tr>
    <tr>
      <td>Tolerance</td>
      <td>Thickness: +/-0.02mm, Dimensions: +/-2mm</td>
    </tr>
    <tr>
      <td>Certificate</td>
      <td>ISO / CE / SGS</td>
    </tr>
    <tr>
      <td>Surface</td>
      <td>Black or Hot dip galvanized</td>
    </tr>
    <tr>
      <td>Packing</td>
      <td>In bundles tied with steel stripes or as per request</td>
    </tr>
    <tr>
      <td>Payment terms</td>
      <td>L/C at sight or T/T (30% as deposit)</td>
    </tr>
    <tr>
      <td>Delivery time</td>
      <td>Usually 7-15 days, or upon negotiation</td>
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

export default P21dd;
