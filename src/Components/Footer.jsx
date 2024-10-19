import React from 'react';
import './footer.css'; // Add your CSS styling for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are committed to connecting farmers with buyers directly, promoting
            a fair marketplace with transparency and efficiency.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@farmmarket.com</p>
          <p>Phone: +91-1234567890</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src="facebook_icon.png" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img src="twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src="instagram_icon.png.webp" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 FarmMarket. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
