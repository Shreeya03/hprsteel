import React, { useRef, useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './p1.css';
import Navbarr from './navbar';
import Footer from './footer';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  'https://hkimg.bjyyb.net/sites/81500/81692/20230908095727503.webp',
  'https://hkimg.bjyyb.net/sites/81500/81692/20230913155437857.webp',
  'https://hkimg.bjyyb.net/sites/81500/81692/20230913155435830.webp',
  // Add more slide URLs as needed
];

const P12d = () => {
  return (
    <div>
      <Navbarr />
      <div>





        <h1 className="head1">EH36 marine steel plate</h1>
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
          <p className="content" style={{ fontSize: '100%' }}>
            Our products have ASTM, BV DIN, ISO, EN, JIS, GB and other standards. Various materials welcome to inquire
            We have an inventory of 60000+ tons, which can be delivered quickly and also support custom size production

            We also sell wear-resisting steel plate, spring steel plate, other alloy steel plate, details can see other product pages or email to consult us

            Shipbuilding steel plate refers to the carbon and alloy steel plate used in offshore and marine contructions, common grades are

            A,B, D, E, AH32/36/40, DH32/36/40, and EH32/36/40 which ranged from different strength. The plates usually used to manufacture

            ship hulls, bulkheads, upper decks and hatch covers for tankers, bulk carriers, container ships and LNG carriers.For the high

            strength shipbuilding plates like AH36, DH36, EH36 steel plate, they have been widely used in high stress areas of ships,

            comparing with general strength steel, they are offering the same strength with the smaller thickness.
          </p>
        </div>
        <div className="a55">
          <h1 className="hh">USES OF STEEL IN SHIPBUILDING</h1>
          <p className="content" style={{ fontSize: '100%' }}>
            Modern shipbuilding steel plate is well suited for the manufacturing of boats, ships, marine vessels, and other structures, as it is light in weight, high in tensile strength, and better in corrosion resistance than any other traditional shipbuilding steel plate, making it much better for more efficient construction. Most of the offshore and marine structures are created using carbon and alloy steel plates. Ship hulls, upper decks, bulkheads, anchor chains, bulk carriers, as well as container ships all rely on the material properties of these shipbuilding steels.        </p>
        </div>
        <div className="a33">
          <h2>Product Details</h2>
          <div className="a22">
            <table border="3" className='custom-table'>
              <tbody>
                <tr>
                  <td>Standard</td>
                  <td>ASTM, DIN, ISO, EN, JIS, GB, etc.</td>
                </tr>
                <tr>
                  <td>Material</td>
                  <td>4130, A36, SS400, a516, a572, A53, q195, s235jr, s355jr, A283-D, A135-A, A53-A, A106-A, A179-C, A214-C, A192, A226, A315-B, A53-B, A106-B, A178-C, A210-A-1, A210-C, A333-1.6, A333-7.9, A333-3.4, A333-8, A334-8, A335-P1, A369-FP1, A250-T1, A209-T1, A335-P2, A369-FP2, A199-T11, A213-T11, A335-P22, A369-FP22, A199-T22, A213-T22, A213-T5, A335-P9, A369-FP9, A199-T9, A213-T9, 523M15, En46, 150M28, 150M19, 527A19, 530A30, etc.</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>
                    Length: 1m-12m, or as required,
                      Width: 0.6m-4m, or as required,
                        Thickness: 0.1mm-300mm, or as required
                      </td>
                    </tr>
                    <tr>
                      <td>Surface</td>
                      <td>Clean, blasting and painting according to customer requirement.</td>
                    </tr>
                    <tr>
                      <td>Application</td>
                      <td>
                        There are many uses and a large amount. It is mainly used in railways, bridges, and various construction projects to manufacture various metal components that bear static loads, as well as unimportant mechanical parts and general welded parts that do not require heat treatment. Usually used for welding, riveting, and bolting hot-rolled steel plates, steel strips, section steels and steel bars for engineering structures.
                      </td>
                    </tr>
                    <tr>
                      <td>Certificates</td>
                      <td>CE, ROHS, ISO, SGS, BV.</td>
                    </tr>
                    <tr>
                      <td>Package</td>
                      <td>Standard export package, or as required.</td>
                    </tr>
                    <tr>
                      <td>Price term</td>
                      <td>FOB, CIF, CFR, CNF, Ex-work</td>
                    </tr>
                    <tr>
                      <td>Payment</td>
                      <td>T/T, L/C, Western Union, etc.</td>
                    </tr>
                    <tr>
                      <td>Delivery time</td>
                      <td>Within 7-15 workdays after receiving deposit or L/C.</td>
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

      export default P12d;
