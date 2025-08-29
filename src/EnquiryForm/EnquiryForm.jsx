import React, { useState } from "react";
import "./EnquiryForm.css";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your enquiry has been submitted.");
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  return (
    <section className="enquiry-section">
      <div className="enquiry-container">
        <h2 className="enquiry-title">Enquire About Our Courses</h2>
        <p className="enquiry-subtitle">Fill out the form below and our team will get back to you soon.</p>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input type="text" name="course" placeholder="Course of Interest" value={formData.course} onChange={handleChange} />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="btn-submit">Submit Enquiry</button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
