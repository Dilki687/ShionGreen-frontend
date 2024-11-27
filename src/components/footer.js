import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../images/logo.jpg";

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Use the translation hook

  const handleScrollToProducts = (e) => {
    e.preventDefault();
    navigate("/");

    setTimeout(() => {
      const cinnamonSection = document.getElementById("cinnamonCarouselSection");
      if (cinnamonSection) {
        const navbarHeight = 70; // Adjust for your navbar height
        const topOffset = cinnamonSection.offsetTop - navbarHeight;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }
    }, 0);
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            footer img {
              width: 50px;
              height: 50px;
            }
            footer {
              padding: 10px 0;
            }
          }

          @media (max-width: 576px) {
            footer img {
              width: 40px;
              height: 40px;
            }
            footer .text-center {
              font-size: 14px;
            }
          }
        `}
      </style>
      <footer style={{ backgroundColor: "#113805", color: "white", padding: "20px 0" }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-12 mb-3">
              <img
                src={logo}
                alt={t("brandName")}
                className="rounded-circle"
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="col-12">
              <p className="mb-2">© {t("brandName")}. {t("footer.copyright")}</p>
            </div>
            <div className="col-12 mb-3">
              <div className="d-flex justify-content-center flex-wrap">
                <a href="#privacy" className="text-white mx-2 text-decoration-none">
                  {t("footer.privacy")}
                </a>
                <a href="#terms" className="text-white mx-2 text-decoration-none">
                  {t("footer.terms")}
                </a>
                <a href="/contactus" className="text-white mx-2 text-decoration-none">
                  {t("footer.help")}
                </a>
                <a
                  href="#"
                  className="text-white mx-2 text-decoration-none"
                  onClick={handleScrollToProducts}
                >
                  {t("footer.products")}
                </a>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex justify-content-center flex-wrap">
                <a href="#youtube" className="text-white mx-2">
                  <i className="fab fa-youtube fa-lg"></i>
                </a>
                <a href="#twitter" className="text-white mx-2">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#facebook" className="text-white mx-2">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#instagram" className="text-white mx-2">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
