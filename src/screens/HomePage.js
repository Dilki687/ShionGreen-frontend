import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";
import cinnamonImage1 from "../images/cinnamon1.jpeg";
import cinnamonImage2 from "../images/cinnamon2.jpeg";
import cinnamonImage3 from "../images/cinnamon3.jpeg";
import cinnamonImage4 from "../images/cinnamon4.jpeg";
import pepperImage1 from "../images/pepper1.jpeg";
import pepperImage2 from "../images/pepper2.jpeg";
import pepperImage3 from "../images/pepper3.jpeg";
import pepperImage4 from "../images/pepper4.jpeg";
import pepperImage5 from "../images/pepper5.jpeg";
import bannervideo from "../videos/bannervideo.mp4";
import logo2 from "../images/logo2.jpeg";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const HomePage = () => {
  const { t } = useTranslation(); // Initialize translation function
  const navigate = useNavigate();

  const handleAddOrderClick = () => {
    navigate("/orderform");
  };

  return (
    <div>
      {/* Video Banner */}
      <div className="position-relative banner">
        <video
          className="w-100 h-100 position-absolute"
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: "cover" }}
        >
          <source src={bannervideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 banner-overlay"></div>

        {/* Content */}
        <div className="position-absolute banner-content text-center text-white p-3">
          <motion.h1
            className="fw-bold display-4"
            style={{
              fontFamily: "Poppins, Lato",
              fontSize: "4rem",
              lineHeight: "1.2",
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            {t("brandName")} {/* Use translation */}
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            {t("welcomeM")} {/* Use translation */}
          </motion.p>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleAddOrderClick}
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              backgroundColor: "#113805",
              border: "none",
              outline: "none",
            }}
          >
            {t("placeOrder")} {/* Use translation */}
          </button>
        </div>
      </div>

      {/* Cinnamon and Pepper Boxes */}
      <div className="container mt-5">
        <div className="row">
          <motion.div
            className="col-md-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-3 bg-light text-dark rounded">
              <h3>{t("cinnamon")}</h3> {/* Use translation */}
              <p>
                {t("cinnamonDescription")} {/* Add new translation key */}
              </p>
              <a
                href="#"
                className="text-primary"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  navigate("/"); // Navigate to the home page

                  // Scroll to the section after navigating
                  setTimeout(() => {
                    const cinnamonSection = document.getElementById(
                      "cinnamonCarouselSection"
                    );
                    if (cinnamonSection) {
                      const navbarHeight = 70; // Adjust for your navbar height
                      const topOffset =
                        cinnamonSection.offsetTop - navbarHeight; // Offset by navbar height
                      window.scrollTo({
                        top: topOffset,
                        behavior: "smooth", // Smooth scroll effect
                      });
                    }
                  }, 0); // Timeout to ensure the page has time to load
                }}
              >
                {t("readMore")} {/* Use translation */}
              </a>
            </div>
          </motion.div>
          <motion.div
            className="col-md-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-3 bg-light text-dark rounded">
              <h3>{t("pepper")}</h3> {/* Use translation */}
              <p>
                {t("pepperDescription")} {/* Add new translation key */}
              </p>
              <a
                href="#"
                className="text-primary"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  navigate("/"); // Navigate to the home page

                  // Scroll to the section after navigating
                  setTimeout(() => {
                    const pepperSection = document.getElementById(
                      "pepperCarouselSection"
                    );
                    if (pepperSection) {
                      const navbarHeight = 70; // Adjust for your navbar height
                      const topOffset = pepperSection.offsetTop - navbarHeight; // Offset by navbar height
                      window.scrollTo({
                        top: topOffset,
                        behavior: "smooth", // Smooth scroll effect
                      });
                    }
                  }, 0); // Timeout to ensure the page has time to load
                }}
              >
                {t("readMore")} {/* Use translation */}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="aboutSection" className="container mt-5">
        <div className="p-4 bg-light text-dark border rounded">
          <h2 className="text-center mb-3">{t("aboutUs")}</h2> {/* Use translation */}
          <p>
            {t("aboutUsDescription")} {/* Add new translation key */}
          </p>
        </div>
      </div>
{/* Sliding Images Section for Cinnamon */}
<div id="cinnamonCarouselSection" className="container mt-5">
        <h2 className="text-center mb-4">{t('cinnamon')}</h2>
        <div
          id="cinnamonCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={cinnamonImage1}
                className="d-block w-100"
                alt="Cinnamon 1"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={cinnamonImage2}
                className="d-block w-100"
                alt="Cinnamon 2"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={cinnamonImage3}
                className="d-block w-100"
                alt="Cinnamon 3"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={cinnamonImage4}
                className="d-block w-100"
                alt="Cinnamon 4"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#cinnamonCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">{t('previous')}</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#cinnamonCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">{t('next')}</span>
          </button>
        </div>

        <p className="slider-paragraph">
          {t('cinnamonParagraph')}
        </p>
      </div>

      {/* Sliding Images Section for Pepper */}
      <div id="pepperCarouselSection" className="container mt-5">
        <h2 className="text-center mb-4">{t('pepper')}</h2>
        <div
          id="pepperCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={pepperImage1}
                className="d-block w-100"
                alt="Pepper 1"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={pepperImage2}
                className="d-block w-100"
                alt="Pepper 2"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={pepperImage3}
                className="d-block w-100"
                alt="Pepper 3"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={pepperImage4}
                className="d-block w-100"
                alt="Pepper 4"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={pepperImage5}
                className="d-block w-100"
                alt="Pepper 5"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#pepperCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">{t('previous')}</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#pepperCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">{t('next')}</span>
          </button>
        </div>

        <p className="slider-paragraph">
          {t('pepperParagraph')}
        </p>
      </div>

      {/* Our Brands Section */}
      <div className="container mt-5 text-center">
        <h2>{t('ourBrands')}</h2>
        <div
          className="brand-logo-container mt-4"
          style={{ marginBottom: "60px" }}
        >
          <img
            src={logo2} // Replace with your logo image path
            alt="Brand Logo"
            className="rounded-circle"
            style={{
              width: "150px", // You can adjust the size as needed
              height: "150px",
              objectFit: "cover", // Ensures the image fits well inside the circle
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;