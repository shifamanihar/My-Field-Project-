import React from "react";
import "./About.css";
import campusImage from "../assets/campus.png";

const About = () => {
  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-text">
          <h1>About the College</h1>
          <p>
            <strong>History:</strong> Ramniranjan Jhunjhunwala College, located in Ghatkopar East, 
            has been nurturing students since its establishment, offering quality education in arts, commerce, and science.
          </p>
          <p>
            <strong>Accreditation:</strong> The college is accredited by the National Assessment and Accreditation Council (NAAC) 
            ensuring high standards of education and infrastructure.
          </p>
          <p>
            <strong>Achievements:</strong> The college boasts a record of academic excellence, 
            notable alumni, and a range of cultural and sports achievements over the years.
          </p>
        </div>

        {/* Optional Campus Image */}
        <div className="about-image">
          <img src={campusImage} alt="RJ College Campus" />
        </div>
      </div>
    </section>
  );
};

export default About;
