
import React, { useEffect, useRef } from 'react';
import $ from 'jquery'; // Import jQuery (ensure it's installed via npm/yarn)
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './carbonsteel.css';
import Navbarr from './navbar';
import Footer from './footer';
import { Link } from 'react-router-dom';
function CarbonSteell() {
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
    <h1 className="text-center font-weight-bold text-light mb-5 pb-3 display-4">Carbon Steel</h1>
    <div className="card-group">
   <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100 ">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230921091341876.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
            <Link to="/p1d"><h4>Carbon steel DC01</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230921090510447.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p2d"><h4>Cr Carbon Steel</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230908095727503.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p3d"><h4>ms carbon steel coil</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230908095726569.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p4d"><h4>Cold Rolled Steel Coil</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230921090140346.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p5d"><h4>Cold Rolled Steel Coil</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230908095606285.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p6d"><h4>A36 Carbon Steel Coil</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div><div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://usimg.bjyyb.net/sites/81500/81692/20230908100905433.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p7d"><h4>Carbon Steel Sheet</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      
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
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230913154706212.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p11d"><h4>EH32 marine steel plate</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230913155436887.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p12d"><h4>EH36 marine steel plate</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230913155435830.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p13d"><h4>Shipbuilding Marine grade steel</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230913155436887.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p14d"><h4>Marine grade steel</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230913154706212.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p15d"><h4>BV AH32 Marine grade steel</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230913155437857.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p16d"><h4>Marine grade steel</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230921090140346.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p17d"><h4>Q355NH Corten Steel Plate</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230913161129516.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p18d"><h4>weathering steel plate</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-80">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230913154705138.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p19d"><h4>Corten Steel</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-80">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230913161130427.webp" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p20d"><h4>Corrosion Resistant steel</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-80">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230908095607408.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p21d"><h4>Hot Rolled Carbon Steel Coil</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      {/* <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230908095607113.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p1d"><h4>Hot Rolled Carbon Steel Coil</h4></Link>
            </div>
          </div>
          <div className="card-footer bg-dark"></div>
        </div>
      </div>
      <div className="col-md-4 py-3">
        <div className="card text-white bg-dark w-60 h-100">
          <img src="https://hkimg.bjyyb.net/sites/81500/81692/20230912143856511.webp@!jw400" className="card-img-top w-60 h-100" alt="Card Component" />
          <div className="card-body">
            <div className="card-title">
              <Link to="/p1d"><h4>Hot Rolled Carbon Steel Coil</h4></Link>
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

export default CarbonSteell;
