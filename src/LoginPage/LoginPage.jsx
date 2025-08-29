// import React from "react";
// import "./LoginPage.css";
// import { FcGoogle } from "react-icons/fc";
// import examIllustration from "../assets/exam-illustration.png";


// export default function LoginPage() {
//   return (
//     <div className="login-container">

//       {/* Left Section */}
//       <div className="login-left">
//         <img src={examIllustration} alt="Exam Illustration" className="illustration" />
//         <h1>Exam Mastery Hub</h1>
//         <p>
//           Unleash Your Academic Success with Exam Mastery Hub's Exam Excellence Platform
//         </p>
//       </div>

//       {/* Right Section */}
//       <div className="login-right">
//         <h2 className="brand">
//           MASTERY <span>HUB</span>
//         </h2>

//         <form>
//           <label>Username or email</label>
//           <input type="text" placeholder="johnsmith007" />

//           <label>Password</label>
//           <input type="password" placeholder="••••••••" />
//           <a href="#" className="forgot-link">Forgot password?</a>

//           <button type="submit" className="btn-primary">Sign in</button>

//           <div className="divider">
//             <span>or</span>
//           </div>

//           <button className="btn-google">
//             <FcGoogle size={20} style={{ marginRight: "8px" }} />
//             Sign in with Google
//           </button>

//           <p className="signup-text">
//             Are you new? <a href="#">Create an Account</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./LoginPage.css";
import { FcGoogle } from "react-icons/fc";
import examIllustration from "../assets/exam-illustration.png";

// Firebase imports
import { auth, provider } from "./firebase";  
import { signInWithPopup } from "firebase/auth";

export default function LoginPage() {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log("User Info:", result.user);
      })
      .catch((error) => {
        console.error("Google Sign-In Error:", error);
      });
  };

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="login-left">
        <img src={examIllustration} alt="Exam Illustration" className="illustration" />
        <h1>Exam Mastery Hub</h1>
        <p>
          Unleash Your Academic Success with Exam Mastery Hub's Exam Excellence Platform
        </p>
      </div>

      {/* Right Section */}
      <div className="login-right">
        <h2 className="brand">
          MASTERY <span>HUB</span>
        </h2>

        <form>
          <label>Username or email</label>
          <input type="text" placeholder="johnsmith007" />

          <label>Password</label>
          <input type="password" placeholder="••••••••" />
          <a href="#" className="forgot-link">Forgot password?</a>

          <button type="submit" className="btn-primary">Sign in</button>

          <div className="divider">
            <span>or</span>
          </div>

          {/* Google Sign-In Button */}
          <button
            type="button"
            className="btn-google"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle size={20} style={{ marginRight: "8px" }} />
            Sign in with Google
          </button>

          <p className="signup-text">
            Are you new? <a href="#">Create an Account</a>
          </p>
        </form>
      </div>
    </div>
  );
}
