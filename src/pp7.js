import React, { useRef, useEffect,useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './p1.css';
import Navbarr from './navbar';
import Footer from './footer';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    'https://hkimg.bjyyb.net/sites/81500/81692/20230912140152569.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230912140221458.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230912140152123.webp',
    // Add more slide URLs as needed
];

const P7dd = () => {
    return (
        <div>
        <Navbarr />
    <div>
        
    
       
        
        
      <h1 className="head1">HRB400 Steel Rebar</h1>
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
        Rebar is the common name for hot rolled ribbed steel bars. The grade of ordinary hot-rolled steel bar is composed of HRB and the minimum yield point of the grade. H, R, and B are the first letters of the three words Hotrolled, Ribbed, and Bars respectively. Hot-rolled ribbed steel bars are divided into three grades: Grade II HRB335 (the old grade is 20MnSi), Grade III HRB400 (the old grades are 20MnSiV, 20MnSiNb, 20Mnti), and Grade IV HRB500.
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
      <td>Deformed Steel Rebars, Rebar</td>
    </tr>
    <tr>
      <td>Material</td>
      <td>Q195, Q235, Q345; ASTM A53 GrA, GrB; STKM11, ST37, ST52, 16Mn, etc.</td>
    </tr>
    <tr>
      <td>Size</td>
      <td>6mm, 8mm, 10mm, 12mm, 13mm, 14mm, 16mm, 20mm, 22mm, 25mm, 30mm, 32mm, 40mm, 50mm</td>
    </tr>
    <tr>
      <td>Length</td>
      <td>5m-14m, 5.8m, 6m, 10m-12m, 12m or as customer's actual request</td>
    </tr>
    <tr>
      <td>Standard</td>
      <td>BS4449-2005, GB1449.2-2007, JIS G3112-2004, ASTM A615-A615M-04a</td>
    </tr>
    <tr>
      <td>Grade</td>
      <td>Grade A, Grade B, Grade C</td>
    </tr>
    <tr>
      <td>Section Shape</td>
      <td>Spiral Shape, Herringbone Shape, Crescent Shape</td>
    </tr>
    <tr>
      <td>Technique</td>
      <td>Steel Rebar Iron Rod</td>
    </tr>
    <tr>
      <td>Packing</td>
      <td>Bundle, or with all kinds of colors PVC or as your requirements</td>
    </tr>
    <tr>
      <td>Ends</td>
      <td>Plain end/Beveled, protected by plastic caps on both ends, cut square, grooved, threaded and coupling, etc.</td>
    </tr>
    <tr>
      <td>Surface Treatment</td>
      <td>
        <ol>
          <li>Galvanized</li>
          <li>PVC, Black, and color painting</li>
          <li>Transparent oil, anti-rust oil</li>
          <li>According to client's requirement</li>
        </ol>
      </td>
    </tr>
    
    <tr>
      <td>Certificates</td>
      <td>ISO9001-2008</td>
    </tr>
    <tr>
      <td>Delivery Time</td>
      <td>Usually within 15 days after receipt of advance payment</td>
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

export default P7dd;
