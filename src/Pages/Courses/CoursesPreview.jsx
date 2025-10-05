import React from "react";
import { useNavigate } from "react-router-dom";
import "./CoursesPreview.css";

const previewCourses = [
  { name: "B.A. (Arts)", duration: "3 Years" },
  { name: "B.Com (General)", duration: "3 Years" },
  { name: "B.Sc (Computer Science)", duration: "4 Years" },
];

const CoursesPreview = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/full-courses");
  };

  return (
    <section className="courses-preview">
      <h2>Our Popular Courses</h2>
      <div className="preview-grid">
        {previewCourses.map((course, index) => (
          <div key={index} className="preview-card">
            <h3>{course.name}</h3>
            <p><strong>Duration:</strong> {course.duration}</p>
          </div>
        ))}
      </div>
      <button className="view-all-btn" onClick={handleViewAll}>
        View All Courses
      </button>
    </section>
  );
};

export default CoursesPreview;
