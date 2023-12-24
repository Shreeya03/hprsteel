
import React, { useEffect, useRef } from 'react';
import $ from 'jquery'; // Import jQuery (ensure it's installed via npm/yarn)
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './carbonsteel.css';
import Navbarr from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
function Steelwiree() {
    const popoverRef = useRef(null);

    useEffect(() => {
      if (popoverRef.current) {
        $(popoverRef.current).popover();
      }
    }, []);// Run this effect only once after the component is mounted

  return (
    <div>
    <Navbarr />
    <div>
        
      <div className='no'>
    <div classname="main ">
    <div className="container py-4">
    <h1 className="text-center font-weight-bold text-light mb-5 pb-3 display-4">Steelwire/Rod</h1>
    <div className="card-group">
    <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100 ">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230921115918301.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
            <Link to="/p1dd"><h4>Carbon Steel Wire For Screw Bolt Nut</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230918141051529.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p2dd"><h4>Iron Binding Wire</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230921112312265.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p3dd"><h4>reinforcing rod metal</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230912143126467.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p4dd"><h4>ST12 Steel Round Bar</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230912140221458.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p5dd"><h4>hrb500 Steel Rebar</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230912143127244.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p6dd"><h4>40 cr Cold Drawn Steel Rod</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div><div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230912140152569.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p7dd"><h4>HRB400 Steel Rebar</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230912140222613.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p8dd"><h4>Steel Rebar</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div><div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230912135151634.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p9dd"><h4>Carbon Steel Round Bar</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230912135151743.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p10dd"><h4>Carbon Steel Round Bar</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230914101145273.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p11dd"><h4>Carbon Steel Round Bar</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230912143126467.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p12dd"><h4>Square Steel Bar</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230914101145950.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p13dd"><h4>nail making wire  5.5mm</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230912134237132.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p14dd"><h4>Black Annealed MS Binding wire</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230914101143302.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p15dd"><h4>Black  Steel Wire</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230921114925115.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p16dd"><h4>Structural Iron Angle Bar</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230912114554802.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p17dd"><h4>L Shape Angle steel</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230921112111845.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p18dd"><h4>HRB400 Steel Rebar</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-80">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230912114554802.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p19dd"><h4>Angle iron bar</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-80">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230912114553517.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p20dd"><h4>Angle Steel</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-80">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230912114552804.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p21dd"><h4>Ms  Angle Steel</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      {/* <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-80">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230912140152123.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p22dd"><h4>Steel Rebar</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-80">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230912114552322.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p23dd"><h4>Unequal Angle Steel</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-80">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230914101143302.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p24dd"><h4>Q195 low carbon steel wire</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-80">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230921114606764.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p25dd"><h4>mild steel black tube</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-80">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230908100633401.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p26dd"><h4>seamless  Steel Pipe</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-80">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230921113006514.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p27dd"><h4>Scaffolding Tube</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-80">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230921113835409.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p28dd"><h4>Pressure Boiler Tubes</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-80">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230921112639248.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p29dd"><h4>Black Carbon Square Tube</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-80">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230921113536572.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p30dd"><h4>Erw Rectangular Steel Pipe</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div> */}
      {/* Other card components... */}
    </div>
  </div>
  </div>
  </div>
  <Footer />
  </div>
  </div>
  );
}

export default Steelwiree;
