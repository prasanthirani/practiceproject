import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [error, setError] = useState(" ");
  const navigate = useNavigate();

  const validUser = {
    username: "admin",
    password: "1234",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("please enter the fields!");
      return;
    }

    if (username === validUser.username && password === validUser.password) {
      setError("");
      alert("logIn successful!");
      navigate("/home");
    } else {
      setError("enter valid username & password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-icon">👤</div>
        <h2>Member Login</h2>

        <form onSubmit={handleSubmit}>
          <label>Username *</label>
          <input
            type="text"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password *</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

          <button type="submit" className="login-btn">
            LOGIN
          </button>

          <div className="login-links">
            <a href="/signup">Don't have an account?</a>
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
