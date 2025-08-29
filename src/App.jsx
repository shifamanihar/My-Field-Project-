// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home";    
import FullCourses from "./Pages/Courses/FullCourses";
import EnquiryForm from "./EnquiryForm/EnquiryForm";
import ContactPage from "./ContactPage/ContactPage";
import ChatPage from "./ChatPage/ChatPage";
import Footer from "./Footer/Footer";

function Layout() {
  const location = useLocation();

  // agar /chat page hai to header-footer hide karo
  const isChatPage = location.pathname === "/chat";

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {!isChatPage && <Header />}

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/full-courses" element={<FullCourses />} />
          <Route path="/inquiry-form" element={<EnquiryForm />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/courses" element={<FullCourses />} />
        </Routes>
      </div>

      {!isChatPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
