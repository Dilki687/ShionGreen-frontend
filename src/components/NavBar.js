import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.jpg"; // Correct path to the logo
import { useTranslation } from "react-i18next"; // Import i18next hook

const NavBar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(); // Initialize i18next translation hook

  // Function to change language
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage); // Change the language globally
    localStorage.setItem('language', selectedLanguage); // Store selected language in localStorage to persist language change
  };

  // Function to handle scroll to the About Us section
  const handleScrollToAbout = (e) => {
    e.preventDefault();
    navigate("/");

    setTimeout(() => {
      const aboutSection = document.getElementById("aboutSection");
      if (aboutSection) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const topOffset = aboutSection.offsetTop - navbarHeight;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  // Function to handle scroll to the Products section
  const handleScrollToProducts = (e) => {
    e.preventDefault();
    navigate("/");

    setTimeout(() => {
      const productsSection = document.getElementById("cinnamonCarouselSection");
      if (productsSection) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        const topOffset = productsSection.offsetTop - navbarHeight;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-navbar"
        style={{
          backgroundColor: "#113805",
          height: "70px",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={logo}
              alt="Shion Green Logo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <span
              className="fw-bold text-white"
              style={{
                fontFamily: "Poppins, Lato",
                fontSize: "1.5rem",
              }}
            >
              {t("brandName")}
            </span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ backgroundColor: "#113805" }}
          >
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  {t("home")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleScrollToAbout}>
                  {t("aboutUs")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactus">
                  {t("contactUs")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleScrollToProducts}>
                  {t("products")}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/orderform">
                  {t("placeOrder")}
                </a>
              </li>
            </ul>
            <div className="d-flex justify-content-center align-items-center mt-3 mt-lg-0">
              <select
                className="form-select form-select-sm bg-light border-0 w-auto"
                value={i18n.language} // Set the currently selected language as the value
                onChange={handleLanguageChange}
              >
                <option value="en">English</option>
                <option value="jp">Japanese</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
