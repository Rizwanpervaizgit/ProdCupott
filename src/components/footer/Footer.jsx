import React from 'react';
import './Footer.css'; // Import external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#start-free-trial-section" className="footer-link">Terms of Use</a>
        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        <a href="#start-free-trial-section" className="footer-link">Cookie Preferences</a>
        <a href="#start-free-trial-section" className="footer-link">Help Center</a>
      </div>
      <p className="footer-title">CUP Entertainment Global Limited</p>
      <p><i className="fas fa-phone"></i> +97155290862</p>
      <p><i className="fas fa-envelope"></i> Support@cupentertainment.com</p>
      <p>Rm 1203, 12/F, TOWER 3 CHINA HONG KONG CITY, 33 CANTON RD TSIM SHA TSUI HONG KONG</p>
      <p>&copy; 2025 CUP Entertainment. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
