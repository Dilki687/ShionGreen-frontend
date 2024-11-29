import React, { useState, useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  // Handle changes in the email and password fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle traditional login (email/password)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data Submitted:", formData);

    try {
      const { data } = await axios.post(
        "https://shion-green-backend.vercel.app/auth/login",
        formData
      );
      console.log("Login Success:", data);
      navigate("/admin");
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);

      // Update error message state based on server response
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message); // Assuming the backend sends a `message` field
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  // Handle Google login success
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      const tokenId = credentialResponse.credential;
      console.log("Token ID:", tokenId); // Log the token to ensure it's valid

      const { data } = await axios.post("https://shion-green-backend.vercel.app/auth/google", {
        tokenId, // Send the token ID to the backend
      });

      console.log("Google Login Success:", data);
      localStorage.setItem("token", data.token);
      navigate("/admin");
    } catch (error) {
      console.error("Google Login Error:", error);
      setErrorMessage("Google login failed. Please try again.");
    }
  };
  

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        {errorMessage && ( // Conditionally render the error message
          <div className="alert alert-danger text-center">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <h5 className="text-muted">Or login with:</h5>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={() => {
                console.error("Google Login Error");
                setErrorMessage("Google login failed. Please try again.");
              }}
            />
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};

export default Login;
