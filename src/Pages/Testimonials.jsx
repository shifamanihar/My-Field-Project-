// src/Pages/Testimonials.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Testimonials.css";

const Stat = ({ label, value, note }) => (
  <div className="col-6 col-md-3 mb-3">
    <div className="p-3 border rounded-4 h-100">
      <div className="fs-4 fw-bold">{value}</div>
      <div className="text-secondary small">{label}</div>
      {note ? <div className="text-muted small mt-1">{note}</div> : null}
    </div>
  </div>
);

const Pill = ({ children }) => (
  <span className="badge rounded-pill text-bg-light border me-2 mb-2">{children}</span>
);

export default function Testimonials() {
  const navigate = useNavigate();

  return (
    <div className="testimonials-page">
      <div className="container py-4 py-md-5">
        {/* Hero */}
        <section className="text-center mb-5">
          <h1 className="display-6 fw-bold">Student Stories & Alumni of  ramniranjan jhunjhunwala college</h1>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: 820 }}>
            Real outcomes, recognised quality, and a network of graduates across industry.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-primary rounded-pill px-4"
              onClick={() => navigate("/contact")}
            >
              Share Your Testimonial
            </button>
            <button
              className="btn btn-outline-secondary rounded-pill px-4"
              onClick={() =>
                window.open("https://www.rjcollege.edu.in/alumni", "_blank")
              }
            >
              Join Alumni Network
            </button>
          </div>
        </section>

        {/* ...rest of sections remain unchanged... */}

        {/* Student Voices — CTA */}
        <section className="mb-5">
          <div className="row g-4 align-items-center">
            <div className="col-md-7">
              <h2 className="h4 fw-bold mb-2">Student Voices</h2>
              <p className="text-secondary mb-3">
                Have you studied at RJ College? Share your journey—academics, campus life,
                placements, research, clubs, and achievements.
              </p>
              <div className="d-flex gap-2 mt-3">
                <button
                  className="btn btn-primary rounded-pill px-4"
                  onClick={() => navigate("/contact")}
                >
                  Submit Testimonial
                </button>
                <button
                  className="btn btn-outline-secondary rounded-pill px-4"
                  onClick={() => navigate("/chat")}
                >
                  Ask a Question
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Callout */}
        <section className="text-center p-4 border rounded-4 bg-light-subtle">
          <div className="fw-bold mb-1">Want to know more?</div>
          <div className="text-secondary mb-3">
            Browse courses, admissions, and campus facilities.
          </div>
          <div className="d-flex justify-content-center gap-2">
            <button
              className="btn btn-outline-primary rounded-pill px-4"
              onClick={() => navigate("/courses")}
            >
              View Courses
            </button>
            <button
              className="btn btn-outline-secondary rounded-pill px-4"
              onClick={() =>
                window.open("https://www.rjcollege.edu.in/admissions", "_blank")
              }
            >
              Admissions
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
