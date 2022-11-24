import React from 'react';
import logo from '../../../assests/images/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-32 bg-black text-white mt-6">
      <div>
        <img src={logo} className="rounded-3xl h-32" alt="" />
        <p>
          Phone Resale
          <br />
          Buy your desired used phone 
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a href="/" className="link link-hover">
          Apple
        </a>
        <a href="/" className="link link-hover">
          Samsung
        </a>
        <a href="/" className="link link-hover">
          OnePlus
        </a>
        
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href="/" className="link link-hover">
          About us
        </a>
        <a href="/" className="link link-hover">
          Contact
        </a>
        <a href="/" className="link link-hover">
          Jobs
        </a>
        <a href="/" className="link link-hover">
          Press kit
        </a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href="/" className="link link-hover">
          Terms of use
        </a>
        <a href="/" className="link link-hover">
          Privacy policy
        </a>
        <a href="/" className="link link-hover">
          Cookie policy
        </a>
      </div>
    </footer>
      <div className="text-center mt-16 mb-5">
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
        </div>
    );
};

export default Footer;