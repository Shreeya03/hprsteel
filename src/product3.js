import React, { useEffect, useRef } from 'react';
import $ from 'jquery'; // Import jQuery (ensure it's installed via npm/yarn)
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './product3.css';
import { Link } from 'react-router-dom';
function Steelwire() {
    const popoverRef = useRef(null);

    useEffect(() => {
      if (popoverRef.current) {
        $(popoverRef.current).popover();
      }
    }, []);// Run this effect only once after the component is mounted

  return (
    <div>
      <div className='nn'>
    <div classname="main ">
    <div className="container py-4">
    <Link to="/steelwire"><h1 className="text-center font-weight-bold text-light mb-5 pb-3 display-4">Steel Wire/Rod</h1></Link>
    <div className="card-group">
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
      
      {/* Other card components... */}
    </div>
  </div>
  </div>
  </div>
  </div>
  );
}

export default Steelwire;
