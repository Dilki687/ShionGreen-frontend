import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle traditional signup input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle traditional signup submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/auth/signup",
        formData
      );
      console.log("Signup Success:", data);
      navigate("/login");
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
    }
  };

  // Handle Google signup success
  const handleGoogleSignupSuccess = async (credentialResponse) => {
    try {
      const tokenId = credentialResponse.credential;
      console.log("Google Token ID:", tokenId);

      // Send the Google token to the backend
      const { data } = await axios.post("http://localhost:5000/auth/google-signup", {
        tokenId,
      });

      console.log("Google Signup Success:", data);
      navigate("/login");
    } catch (error) {
      console.error("Google Signup Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Signup
          </button>
        </form>
        <div className="text-center mt-4">
          <h5 className="text-muted">Or signup with:</h5>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <GoogleLogin
              onSuccess={handleGoogleSignupSuccess}
              onError={() => console.error("Google Signup Error")}
            />
          </GoogleOAuthProvider>
        </div>
        <div className="text-center mt-4">
          <p className="text-muted">
            Already have an account?{" "}
            <a href="/login" className="text-decoration-none">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
