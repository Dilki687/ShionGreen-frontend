import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ContactUs.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";  // Import useTranslation hook

const ContactUs = () => {
  const { t } = useTranslation();  // Initialize the translation function

  return (
    <div className="contact-us">
      {/* Banner Section */}
      <motion.div
        className="banner-section text-white text-center py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>{t("contactUs")}</h1> {/* Dynamic translation */}
        <p className="lead">{t("stayConnected")}</p>
      </motion.div>

      {/* Content Section */}
      <div className="container my-5">
        <motion.h2
          className="text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {t("questionsIssues")}
        </motion.h2>
        <motion.p
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {t("welcomeMessage")}
        </motion.p>

        {/* Contact Details Section */}
        <div className="row text-center">
          {/* General Enquiries Card */}
          <motion.div
            className="col-md-6 col-lg-3 mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
          >
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{t("generalEnquiries")}</h5> {/* Dynamic translation */}
                <p className="card-text">
                  📞 +8180-4781-7117 <br /> 
                </p>
              </div>
            </div>
          </motion.div>

          {/* Consumer Enquiries Card */}
          <motion.div
            className="col-md-6 col-lg-3 mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.7 }}
          >
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{t("consumerEnquiries")}</h5> {/* Dynamic translation */}
                <p className="card-text">
                  📞 +8170-1052-6962 <br /> 
                </p>
              </div>
            </div>
          </motion.div>

          {/* Another General Enquiries Card */}
          <motion.div
            className="col-md-6 col-lg-3 mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.9 }}
          >
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{t("generalEnquiries")}</h5> {/* Dynamic translation */}
                <p className="card-text">
                📧 shionideals@gmail.com<br /> 
                </p>
              </div>
            </div>
          </motion.div>

          {/* Another General Enquiries Card */}
          <motion.div
            className="col-md-6 col-lg-3 mb-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 2.1 }}
          >
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{t("generalEnquiries")}</h5> {/* Dynamic translation */}
                <p className="card-text">
                📧 shiongreen@gmail.com <br /> 
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
