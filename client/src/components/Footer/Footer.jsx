import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer_contnier">
        <div className="footer_left">
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png"
            alt=""
          />
          <div className="input_button_div">
            <input type="text" placeholder="Your Email" />
            <button>Send</button>
          </div>
        </div>
        <div className="footer_mid">
          <div className="footer_mid_right">
            <h2>About</h2>
            <ul>
              <li>About us</li>
              <li>Our Partners</li>
              <li>Our Services</li>
            </ul>
          </div>

          <div className="footer_mid_right">
            <h2>Contact</h2>
            <ul>
              <li>Contact us</li>
              <li>FAQ page</li>
              <li>About me</li>
            </ul>
          </div>
          <div className="footer_mid_right">
            <h2>Follow us</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
