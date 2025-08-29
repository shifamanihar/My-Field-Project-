import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-4">
      <div className="container">
        <div className="row">
          {/* College Info */}
          <div className="col-md-4">
            <h5>🏫 RJ College</h5>
            <p>
              Hindi Vidya Prachar Samiti's Ramniranjan Jhunjhunwala College of
              Arts, Science & Commerce (Autonomous).
            </p>
            <p>Empowering students since 1963.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/courses" className="footer-link">Courses</Link></li>
              <li><Link to="/inquiry-form" className="footer-link">Enquiry</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/testimonials" className="footer-link">Testimonials</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Address: Ghatkopar (W), Mumbai - 400086</p>
            <p>Phone: +91-22-25151763</p>
            <p>Email: info@rjcollege.edu.in</p>
            <div className="social-links">
              <a href="#" className="footer-social">Facebook</a> | 
              <a href="#" className="footer-social"> Instagram</a> | 
              <a href="#" className="footer-social"> LinkedIn</a>
            </div>
          </div>
        </div>

        <hr className="bg-light" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} RJ College. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
