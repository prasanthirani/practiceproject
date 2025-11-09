import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !userName || !password || !confirmPassword) {
      setError("please fill out of all fields");
      setSuccess("");
      return;
    }

    if (password !== confirmPassword) {
      setError("password does not match with the confirmPassword");
      setSuccess("");
      return;
    }

    const newUser = { fullName, email, username, password };
    localStorage.setItem("user", JSON.stringify(newUser));

    setError("");
    setSuccess("Account created successfully! Redirecting to login...");

    // Redirect to Login after 2 seconds
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-icon">📝</div>
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <label>Full Name *</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label>Email *</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Username *</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password *</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Confirm Password *</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "limegreen" }}>{success}</p>}

          <button type="submit" className="signup-btn">
            SIGN UP
          </button>

          <div className="signup-links">
            <a href="/login">Already have an account? Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
