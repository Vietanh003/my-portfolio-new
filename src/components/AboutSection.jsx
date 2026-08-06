import React from "react";
import "../styles/AboutSection.css";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="about-section">
      <div className="about-container">
        <span className="about-kicker">{t("aboutHome.kicker")}</span>
        <h2 className="about-title">{t("aboutHome.title")}</h2>
        <p className="about-text">
          {t("aboutHome.introBefore")}{" "}
          <span className="highlight">{t("aboutHome.introRole")}</span>
          {t("aboutHome.introAfter")}
        </p>

        <p className="about-link">
          <Link to="/about">{t("aboutHome.link")}</Link>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
