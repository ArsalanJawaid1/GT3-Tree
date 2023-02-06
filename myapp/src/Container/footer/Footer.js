import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <h1> Do you want to step in to the future before others</h1>
        <button> Request Early Access</button>
      </div>

      <div className="footer_bottom">
        <div className="footer_left">
          <h3> GPT-3</h3>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer_right">
          <ul>
            <li>Links</li>
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contacts</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>Contacts</li>
          </ul>
          <ul>
            <li>Get in touch</li>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li> 085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <p className="lastpara"> © 2021 GPT-3. All rights reserved.</p>
    </div>
  );
};

export default Footer;
