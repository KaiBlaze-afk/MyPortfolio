import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Adarsh</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#home" className="footer_link">
              Above
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://instagram.com/"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://snapchat.com"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxs-bell"></i>
          </a>
          <a
            href="https://twitter.com"
            className="footer_social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer_copy">&#169; Adarsh. All rights reserverd</span>
      </div>
    </footer>
  );
};

export default Footer;
