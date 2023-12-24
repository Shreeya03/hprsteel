import React, { useEffect, useRef } from 'react';
import $ from 'jquery'; // Import jQuery (ensure it's installed via npm/yarn)
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';
import { Link } from 'react-router-dom';
function CarbonSteel() {
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
    <Link to="/carbonsteel"><h1 className="text-center font-weight-bold text-light mb-5 pb-3 display-4">Carbon Steel</h1></Link>
    <div className="card-group">
    <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230913154706212.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p8d"><h4>weathering steel plate</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div><div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230921085832956.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p9d"><h4>Hot Rolled Carbon Steel Coil</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230921085542458.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p10d"><h4>Steel Plate Sheet SS400</h4></Link>
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

export default CarbonSteel;
