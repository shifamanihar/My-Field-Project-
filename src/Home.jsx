import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import About from "./Pages/About";
import CoursesPreview from "./Pages/Courses/CoursesPreview";
import Testimonials from "./Pages/Testimonials";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Courses Section */}
      <section id="courses">
        <CoursesPreview />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
