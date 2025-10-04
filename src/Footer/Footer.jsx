import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Reusable function to handle both navigation and scrolling
    const handleNavigation = (path, sectionId) => {
        // This function handles scrolling to sections on the homepage
        if (path !== "/") {
            navigate(path);
            // FIX: Scroll to top immediately after navigating to a new page
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 0); 
        } else {
            // If we are already on the home page, just scroll
            if (location.pathname === "/") {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            } else {
                // If we are on a different page, navigate home first, then scroll
                navigate("/");
                setTimeout(() => {
                    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
                }, 300); // Small delay to allow navigation to complete
            }
        }
    };

    // Function specifically for scrolling to sections on the homepage
    const handleScroll = (sectionId) => {
        handleNavigation("/", sectionId);
    };

    // New function for navigation to a dedicated page (Enquiry/Contact)
    const handleNavigateToTop = (path) => {
        handleNavigation(path, null);
    };


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
                    {/* Home: Scroll to hero section (assuming ID is 'hero') */}
                  <li>
                        <button onClick={() => handleScroll("hero")} className="footer-link-btn">Home</button>
                    </li>
                    {/* About Us: Scroll to about section (assuming ID is 'about') */}
                  <li>
                        <button onClick={() => handleScroll("about")} className="footer-link-btn">About Us</button>
                    </li>
                    {/* Courses: Scroll to courses section (assuming ID is 'courses') */}
                  <li>
                        <button onClick={() => handleScroll("courses")} className="footer-link-btn">Courses</button>
                    </li>
                    {/* Enquiry: Navigate to /inquiry-form (uses new handler) */}
                  <li>
                        <button onClick={() => handleNavigateToTop("/inquiry-form")} className="footer-link-btn">Enquiry</button>
                    </li>
                    {/* Contact: Navigate to /contact (uses new handler) */}
                  <li>
                        <button onClick={() => handleNavigateToTop("/contact")} className="footer-link-btn">Contact</button>
                    </li>
                    {/* Testimonials: Scroll to testimonials section (assuming ID is 'testimonials') */}
                  <li>
                        <button onClick={() => handleScroll("testimonials")} className="footer-link-btn">Testimonials</button>
                    </li>
                </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-4">
                <h5>Contact Us</h5>
                <p>Address: Ghatkopar (W), Mumbai - 400086</p>
                <p>Phone: +91-22-25151763</p>
                <p>
                    Email: 
                    <a href="mailto:rjcollege@rjcollege.edu.in" className="footer-link">
                        rjcollege@rjcollege.edu.in
                    </a>
                </p>
                <div className="social-links">
                  <a href="https://www.facebook.com/rjcollege/?locale=hi_IN" className="footer-social" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                  <a href="https://www.instagram.com/rjcollege/?hl=en" className="footer-social" target="_blank" rel="noopener noreferrer"> Instagram</a> | 
                  <a href="https://www.linkedin.com/school/rjcmumbai/?originalSubdomain=in" className="footer-social" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
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
