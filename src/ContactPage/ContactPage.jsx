import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left: College Contact Info */}
        <div className="contact-info">
          <h2>Contact RJ College, Ghatkopar</h2>
          <p>For inquiries about courses, admissions, or other college-related information, reach out to us through the following details:</p>
          <ul>
            <li><strong>Address:</strong> Ramni Ranjan Jhunjhunwala College, R.J. College Road, Near Ghatkopar Station, Ghatkopar East, Mumbai, Maharashtra 400077, India</li>
            <li><strong>Phone:</strong> +91 22 2500 1234 | +91 22 2500 5678</li>
            <li><strong>Email:</strong> info@rjcollege.ac.in | admissions@rjcollege.ac.in</li>
            <li><strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</li>
            <li><strong>Departments:</strong> Arts, Commerce, Science, Computer Science, Management, Media Studies</li>
          </ul>

          <div className="social-links">
            <a href="https://www.facebook.com/rjcollegeghatkopar" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com/rjcollegeghk" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://www.linkedin.com/school/rj-college-ghatkopar" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/rjcollegeghatkopar" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-form-container">
          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Optional: Google Map */}
      <div className="map-container">
        <iframe
          title="RJ College Ghatkopar"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.123456789!2d72.8801234!3d19.0912345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7abcdef123:0xabcdef123456!2sRamni%20Ranjan%20Jhunjhunwala%20College%20RJ%20College%2C%20Ghatkopar!5e0!3m2!1sen!2sin!4v1692145678901!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactPage;
