import React, { useEffect, useRef } from 'react';
import $ from 'jquery'; // Import jQuery (ensure it's installed via npm/yarn)
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './product2.css';
import { Link } from 'react-router-dom';
function Galval() {
    const popoverRef = useRef(null);

    useEffect(() => {
      if (popoverRef.current) {
        $(popoverRef.current).popover();
      }
    }, []);// Run this effect only once after the component is mounted

  return (
    <div>
      <div className='nnn'>
    <div classname="main ">
    <div className="container py-4">
    <Link to="/galvalume"> <h1 className="text-center font-weight-bold text-light mb-5 pb-3 display-4">Galvalume Steel</h1></Link>
    <div className="card-group">
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark">
          <img src="https://source.unsplash.com/random/800x400/?caferacer" className="card-img-top" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <h5><a href="javascript:;">Carbon steel DC01</a></h5>
            </div>
          </div>
          <div className="card-footer bg-dark"><a href="javascript:;" className="text-secondary float-right"><span>&bull;&bull;&bull;</span></a></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark">
          <img src="https://source.unsplash.com/random/800x400/?caferacer" className="card-img-top" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <h5><a href="javascript:;">Carbon steel DC01</a></h5>
            </div>
          </div>
          <div className="card-footer bg-dark"><a href="javascript:;" className="text-secondary float-right"><span>&bull;&bull;&bull;</span></a></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark">
          <img src="https://source.unsplash.com/random/800x400/?caferacer" className="card-img-top" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <h5><a href="javascript:;">Carbon steel DC01</a></h5>
            </div>
          </div>
          <div className="card-footer bg-dark"><a href="javascript:;" className="text-secondary float-right"><span>&bull;&bull;&bull;</span></a></div>
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

export default Galval;
