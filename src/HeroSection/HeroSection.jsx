// src/HeroSection/HeroSection.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import { FaComments } from "react-icons/fa";
import chatbotIllustration from '../assets/Chatbot-illustration.png';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartChat = () => {
    navigate("/chat");  
  };

  return (
   <section className="hero-chat-section">
  {/* Content on Left */}
  <div className="hero-chat-content">
    <h1>
      Ask Anything <br /> About <span> ramniranjan jhunjhunwala college</span>
    </h1>
    <p className="subtitle">
      24x7 College Info Chatbot – Fast & Accurate Answers
    </p>
    <button onClick={handleStartChat} className="start-chat-btn">
      <FaComments style={{ marginRight: "8px" }} /> Start Chat
    </button>
  </div>

  {/* Image on Right */}
  <div className="hero-chat-image">
    <img
      src={chatbotIllustration}
      alt="Chatbot Illustration"
      className="chat-illustration"
    />
  </div>
</section>

  );
};

export default HeroSection;
