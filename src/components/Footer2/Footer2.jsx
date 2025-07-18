import React from 'react';
import './Footer2.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer2 = () => {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row row-cols-2 row-cols-md-6 g-4">

          <div>
            <h6 className="text-white mb-3">Home</h6>
            <ul className="list-unstyled">
              <li>Categories</li>
              <li>Devices</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h6 className="text-white mb-3">Movies</h6>
            <ul className="list-unstyled">
              <li>Genres</li>
              <li>Trending</li>
              <li>New Release</li>
              <li>Popular</li>
            </ul>
          </div>

          <div>
            <h6 className="text-white mb-3">Shows</h6>
            <ul className="list-unstyled">
              <li>Genres</li>
              <li>Trending</li>
              <li>New Release</li>
              <li>Popular</li>
            </ul>
          </div>

          <div>
            <h6 className="text-white mb-3">Support</h6>
            <ul className="list-unstyled">
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h6 className="text-white mb-3">Subscription</h6>
            <ul className="list-unstyled">
              <li>Plans</li>
              <li>Features</li>
            </ul>
          </div>

          <div>
            <h6 className="text-white mb-3">Connect With Us</h6>
            <div className="d-flex gap-2">
              <div className="icon-box"><FaFacebookF /></div>
              <div className="icon-box"><FaTwitter /></div>
              <div className="icon-box"><FaLinkedinIn /></div>
            </div>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-wrap justify-content-between text-secondary small rights">
          <div>©2023 Cup Entertainment, All Rights Reserved</div>
          <div className="d-flex gap-3">
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
