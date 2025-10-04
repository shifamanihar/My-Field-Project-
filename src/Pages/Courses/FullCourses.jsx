import React from "react";
import "./FullCourses.css";

const fullCoursesData = [
  {
    category: "UG Courses",
    courses: [
      { name: "B.A. (Arts)", duration: "3 Years", fees: "₹21,900", details: "Hindi, Marathi, Politics, Sociology, Psychology, Economics, Maths, History, English etc." },
      { name: "B.Com (General)", duration: "3 Years", fees: "₹57,645", details: "General commerce studies." },
      { name: "B.Sc (Computer Science)", duration: "4.43 Years", fees: "₹69,580", details: "Computer science and related subjects." },
    ]
  },
  {
    category: "PG Courses",
    courses: [
      { name: "M.Sc. (Computer Science)", duration: "2 Years", fees: "₹100,000", details: "Advanced computer science studies." },
      { name: "M.A. (History)", duration: "2 Years", fees: "₹21,910", details: "History post graduation." },
    ]
  },
  {
    category: "Diploma Courses",
    courses: [
      { name: "PG Diploma", duration: "1 Year", fees: "₹10,000", details: "Various postgraduate diplomas." },
    ]
  }
];

const handleGoOfficialWeb = () => {
    const OFFICIAL_COURSE_URL = "https://www.rjcollege.edu.in/?s=all+courses";
    window.open(OFFICIAL_COURSE_URL, '_blank');
};

const FullCourses = () => {
  return (
    <section className="full-courses-page">
      <h1>All Courses at RJ College</h1>
      {fullCoursesData.map((cat, idx) => (
        <div key={idx} className="course-category">
          <h2>{cat.category}</h2>
          <div className="courses-grid">
            {cat.courses.map((course, i) => (
              <div key={i} className="course-card">
                <h3>{course.name}</h3>
                <p><strong>Duration:</strong> {course.duration}</p>
                <p><strong>Fees:</strong> {course.fees}</p>
                <p>{course.details}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* --- New Button Added Below --- */}
      <div className="official-web-btn-container">
          <button 
              onClick={handleGoOfficialWeb} 
              className="official-web-btn"
          >
              Go Official Web
          </button>
      </div>
    </section>
  );
};

export default FullCourses;
