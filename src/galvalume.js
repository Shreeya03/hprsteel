
import React, { useEffect, useRef } from 'react';
import $ from 'jquery'; // Import jQuery (ensure it's installed via npm/yarn)
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './carbonsteel.css';
import Navbarr from './navbar';
import Footer from './footer';
function Galvalumee() {
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
    <h1 className="text-center font-weight-bold text-light mb-5 pb-3 display-4">Galvalume Steel</h1>
    <div className="card-group">
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230914104634967.webp" className="card-img-top" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <h5><a href="javascript:;">Galvalume Steel Coil</a></h5>
            </div>
          </div>
          <div className="card-footer bg-dark"><a href="javascript:;" className="text-secondary float-right"><span>&bull;&bull;&bull;</span></a></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230908100421458.webp" className="card-img-top" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <h5><a href="javascript:;">AZ150 Aluzinc Stee</a></h5>
            </div>
          </div>
          <div className="card-footer bg-dark"><a href="javascript:;" className="text-secondary float-right"><span>&bull;&bull;&bull;</span></a></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230918134611616.webp" className="card-img-top" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <h5><a href="javascript:;">Aluzinc Steel Coil</a></h5>
            </div>
          </div>
          <div className="card-footer bg-dark"><a href="javascript:;" className="text-secondary float-right"><span>&bull;&bull;&bull;</span></a></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230914091107998.webp" className="card-img-top" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <h5><a href="javascript:;">AZ 275 zincalume Steel Coil</a></h5>
            </div>
          </div>
          <div className="card-footer bg-dark"><a href="javascript:;" className="text-secondary float-right"><span>&bull;&bull;&bull;</span></a></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230921102302766.webp" className="card-img-top" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <h5><a href="javascript:;">Zincalume Aluzink Steel</a></h5>
            </div>
          </div>
          <div className="card-footer bg-dark"><a href="javascript:;" className="text-secondary float-right"><span>&bull;&bull;&bull;</span></a></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230921103620289.webp" className="card-img-top" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <h5><a href="javascript:;">Galvalume steel sheet</a></h5>
            </div>
          </div>
          <div className="card-footer bg-dark"><a href="javascript:;" className="text-secondary float-right"><span>&bull;&bull;&bull;</span></a></div>
        </div>
      </div><div className="col-md-4 py-3">
        <div className="card text-white bg-dark">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230914092127159.webp" className="card-img-top" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <h5><a href="javascript:;">AZ150 Zincalum Steel sheet</a></h5>
            </div>
          </div>
          <div className="card-footer bg-dark"><a href="javascript:;" className="text-secondary float-right"><span>&bull;&bull;&bull;</span></a></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230921103225327.webp" className="card-img-top" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <h5><a href="javascript:;">Hot Dipped Galvanized Steel Sheet</a></h5>
            </div>
          </div>
          <div className="card-footer bg-dark"><a href="javascript:;" className="text-secondary float-right"><span>&bull;&bull;&bull;</span></a></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230921103620289.webp@!jw400" className="card-img-top" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <h5><a href="javascript:;">Carbon steel DC01</a></h5>
            </div>
          </div>
          <div className="card-footer bg-dark"><a href="javascript:;" className="text-secondary float-right"><span>&bull;&bull;&bull;</span></a></div>
        </div>
      </div><div className="col-md-4 py-3">
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
  <Footer />
  </div>
  </div>
  );
}

export default Galvalumee;
