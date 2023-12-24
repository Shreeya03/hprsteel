import React, { useRef, useEffect,useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './p1.css';
import Navbarr from './navbar';
import Footer from './footer';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
    'https://hkimg.bjyyb.net/sites/81500/81692/20230914101143804.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230912134237132.webp',
    'https://hkimg.bjyyb.net/sites/81500/81692/20230914101145950.webp',
    // Add more slide URLs as needed
];

const P1dd = () => {
    return (
        <div>
        <Navbarr />
    <div>
        
    
       
        
        
      <h1 className="head1">Carbon Steel Wire For Screw Bolt Nut</h1>
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
        Black Annealed <br></br>
High Quality 2.00mm Soft Black Annealed Wire Uncoated Wire<br></br>

BLACK ANNEALED WIRE<br></br>
Black annealed wire is also called black iron wire，soft annealed wire and annealed iron wire.It includes annealed wire and black oiled wire.Annealed wire is obtained by means of thermalannealing. It’s made of carbon steel wire. Annealed wire offers excellent
flexibility and softness through the process of oxygen free annealing. And the black oiled wire is formed via the process of wire-drawing, anneal, and fuel oil injection. We can do it into straight cutting wire and also do according to customers' special requirement.
Galvanized wire is divided into hot dipped galvanized wire and cold galvanized wire (electro galvanized wire). Galvanized wire has good toughness and flexibility, the maximum amount of zinc can reach 350 g /sqm. With zinc coating thickness, corrosion resistance and other characteristics.
        </p>
      </div>
      <div className="a55">
        <h1 className="hh">Specification</h1>
        <p className="content"  style={{ fontSize: '100%'}}>
        Galvanized Iron Wire is designed to prevent rusting and shiny silver in color. It is solid,durable and extremely versatile, it is widely used by landscapers, craft makers, building and constructions,ribbon manufacturers, jewelers and contractors.Its aversion to rust makes it extremely useful around the shipyard,in the backyard, etc.        </p>
      </div>
      <div className="a33">
        <h2>Product Details</h2>
        <div className="a22">
          <table border="3" className='custom-table'>
          <tbody>
    <tr>
      <td>Product Name</td>
      <td>Carbon Steel Wire</td>
    </tr>
    <tr>
      <td>Steel Grade</td>
      <td>Q195-Q235, Q235, SAE 1008-1018, 45#, 50#, 55#, 60#, 70#</td>
    </tr>
    <tr>
      <td>Type</td>
      <td>Drawn Wire</td>
    </tr>
    <tr>
      <td>Diameter</td>
      <td>5.5-16mm, etc.</td>
    </tr>
    <tr>
      <td>Coil weight</td>
      <td>1.8~2.1 metric tons</td>
    </tr>
    <tr>
      <td>Application</td>
      <td>
        PC Wires are applied to prestressed and post-tensioning technology in various shapes of prestressed concrete structures and civil engineering construction, such as large scale railroad, highway bridges, building trusses, overhead crane beams, industrial and prefabricated concrete floor, wall board, TV tower, and nuclear power station.
      </td>
    </tr>
    <tr>
      <td>Packing</td>
      <td>
        <ol>
          <li>Plastic cloth inside, Woven bag outside. Different color woven bag for different sizes.</li>
          <li>Loading in container or by bulk vessel.</li>
          <li>According to customer's requirements.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>Delivery Time</td>
      <td>3-15 working days after receipt of deposit</td>
    </tr>
    <tr>
      <td>Payment terms</td>
      <td>L/C T/T (30% deposit)</td>
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

export default P1dd;
