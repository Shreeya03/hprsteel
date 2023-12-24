import React from 'react'
import Navbarr from './navbar';
import About from './about';
import Head from './heading';
import CarbonSteel from './product';
import Galval from './product2';
import Steelwire from './product3';
import VideoPlayer from './video';
import Footer from './footer';
function Mm() {
    return (
        <div>
            <Navbarr/>
            <Head />
            <About />
            <CarbonSteel />
            {/* <Galval /> */}
            <Steelwire />
            <VideoPlayer />
            <Footer />


        </div>
    )
}

export default Mm
