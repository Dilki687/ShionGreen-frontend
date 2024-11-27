import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import logo from "../images/logo.jpg"; // Import logo

const Sidebar = () => {
  return (
    <div
      className="text-white d-flex flex-column"
      style={{
        width: "250px",
        minHeight: "100vh", 
        background: "#113805"// Ensures full height
      }}
    >
      {/* Admin Profile Icon */}
      <div className="position-absolute top-0 end-0 p-3">
        <a href="#" className="text-white">
          <i className="bi bi-person-circle" style={{ fontSize: "30px" }}></i>
        </a>
      </div>

      {/* Logo */}
      <div className="text-center py-4">
        <img
          src={logo} // Use imported logo here
          alt="Logo"
          className="img-fluid rounded-circle mb-3"
          style={{ width: "50px", height: "50px" }}
        />
      </div>

      {/* Navigation Items */}
      <ul className="nav flex-column px-3">
        <li className="nav-item mb-3">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-box me-2"></i> View Orders
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link text-white">
            <i className="bi bi-person-circle me-2"></i> Admin Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
