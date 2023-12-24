import React from 'react';
import './footer.css';
function Footer() {
  return (
    <div style={{ width: '100%' }}><iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56027.76665552478!2d77.03378958000106!3d28.63769091915628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No-607%2C%20Ground%20Floor%2C%20Kh%20No%2031%2F4%2F2%20Meera%20Enclav%2C%20Nangloi%2C%20West%20Delhi%2C%20New%20Delhi%2C%20Delhi%2C%20India%2C%20110041.!5e0!3m2!1sen!2sin!4v1703402689526!5m2!1sen!2sin"
    width="600"
    height="450"
    style={{ width: '100%'}}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
    <footer className="footer-distributed" id='contact'>
      <div className="footer-left">
        <h3>HPR Steel<span>Pvt Lt</span></h3>
        <p className="footer-links">
          <a href="#" className="link-1">Home</a>
          <a href="#">About Us</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
          {/* <a href="#">Faq</a>
          <a href="#">Contact</a> */}
        </p>
        {/* <p className="footer-company-name">Company Name © 2015</p> */}
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>Ground Floor, PLOT No. 607. KH No. 31/4/2. <span>MEERA ENCLAVE, RADHEY SHYAM, BLOCK D. RANHOLLA,</span> NANGLOI, New Delhi, West Delhi, Delhi, 110041</p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>+91 9899582784</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:hprsteel@outlook.com">hprsteel@outlook.com</a></p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the Owner</span>
          Owned and managed by Deepak Bansal and Surbhi bansal
        </p>
      </div>
    </footer></div>
  );
}

export default Footer;
