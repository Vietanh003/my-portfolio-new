import React from "react";
import "../styles/About.css";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="about-page">
      <div className="container">
        {/* HERO INTRO */}
        <h2 className="section-title">{t("aboutPage.title")}</h2>
        <p className="intro-text">
          {t("aboutPage.introBefore")}{" "}
          <span className="highlight">{t("aboutPage.introRole")}</span>
          {t("aboutPage.introAfter")}
        </p>

        {/* EDUCATION */}
        <h3 className="sub-title">{t("aboutPage.education")}</h3>
        <div className="education-item">
          <h4>{t("aboutPage.school")}</h4>
          <p className="education-date">{t("aboutPage.schoolDate")}</p>
          <p>{t("aboutPage.major")}</p>
        </div>

        {/* SKILLS */}
        <h3 className="sub-title">{t("aboutPage.skills")}</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>{t("aboutPage.skillBackend")}</h4>
            <ul>
              <li>C# (ASP.NET Web API / MVC, .NET) <span className="level expert">{t("aboutPage.levelExpert")}</span></li>
              <li>Java (Spring Boot, Servlet/JSP) <span className="level advanced">{t("aboutPage.levelAdvanced")}</span></li>
              <li>Node.js, Express.js <span className="level advanced">{t("aboutPage.levelAdvanced")}</span></li>
              <li>RESTful API, JWT Auth, SignalR <span className="level expert">{t("aboutPage.levelExpert")}</span></li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>{t("aboutPage.skillDatabase")}</h4>
            <ul>
              <li>SQL Server, Oracle, MySQL <span className="level advanced">{t("aboutPage.levelAdvanced")}</span></li>
              <li>MongoDB (NoSQL) <span className="level advanced">{t("aboutPage.levelAdvanced")}</span></li>
              <li>ERD, Stored Procedures, Functions <span className="level advanced">{t("aboutPage.levelAdvanced")}</span></li>
              <li>Query Optimization, Indexing <span className="level intermediate">{t("aboutPage.levelIntermediate")}</span></li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>{t("aboutPage.skillFrontend")}</h4>
            <ul>
              <li>Angular (TypeScript, RxJS) <span className="level advanced">{t("aboutPage.levelAdvanced")}</span></li>
              <li>HTML5, CSS3, JavaScript <span className="level advanced">{t("aboutPage.levelAdvanced")}</span></li>
              <li>React.js, Next.js <span className="level intermediate">{t("aboutPage.levelIntermediate")}</span></li>
              <li>Bootstrap, Tailwind, Chart.js <span className="level advanced">{t("aboutPage.levelAdvanced")}</span></li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>{t("aboutPage.skillHealthcare")}</h4>
            <ul>
              <li>HL7 FHIR R4 <span className="level advanced">{t("aboutPage.levelAdvanced")}</span></li>
              <li>MoH (BYT) &amp; Social-Insurance (VSS) standards <span className="level advanced">{t("aboutPage.levelAdvanced")}</span></li>
              <li>HSM Digital Signature <span className="level intermediate">{t("aboutPage.levelIntermediate")}</span></li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>{t("aboutPage.skillTools")}</h4>
            <ul>
              <li>Git, GitHub/GitLab <span className="level expert">{t("aboutPage.levelExpert")}</span></li>
              <li>AI-assisted dev (Claude, Copilot) <span className="level advanced">{t("aboutPage.levelAdvanced")}</span></li>
              <li>Postman, Swagger <span className="level advanced">{t("aboutPage.levelAdvanced")}</span></li>
              <li>Docker (basic), VS Code, Visual Studio <span className="level intermediate">{t("aboutPage.levelIntermediate")}</span></li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>{t("aboutPage.skillSoft")}</h4>
            <ul>
              <li>Problem-solving & Critical Thinking <span className="level advanced">{t("aboutPage.levelAdvanced")}</span></li>
              <li>Teamwork & Agile/Scrum <span className="level intermediate">{t("aboutPage.levelIntermediate")}</span></li>
              <li>Communication & Presentation <span className="level advanced">{t("aboutPage.levelAdvanced")}</span></li>
              <li>Self-learning & Adaptability <span className="level expert">{t("aboutPage.levelExpert")}</span></li>
            </ul>
          </div>
        </div>

        {/* WORK EXPERIENCE */}
        <h3 className="sub-title">{t("aboutPage.experience")}</h3>

        <div className="experience-item">
          <h4>{t("aboutPage.linksoft")}</h4>
          <p className="experience-date">{t("aboutPage.linksoftDate")}</p>
          <p className="position">{t("aboutPage.linksoftRole")}</p>
          <ul className="responsibilities">
            <li>{t("aboutPage.linksoftR1")}</li>
            <li>{t("aboutPage.linksoftR2")}</li>
            <li>{t("aboutPage.linksoftR3")}</li>
            <li>{t("aboutPage.linksoftR4")}</li>
          </ul>
        </div>

        <div className="experience-item">
          <h4>{t("aboutPage.cyberskill")}</h4>
          <p className="experience-date">{t("aboutPage.cyberskillDate")}</p>
          <p className="position">{t("aboutPage.cyberskillRole")}</p>
          <ul className="responsibilities">
            <li>{t("aboutPage.cyberskillR1")}</li>
            <li>{t("aboutPage.cyberskillR2")}</li>
            <li>{t("aboutPage.cyberskillR3")}</li>
            <li>{t("aboutPage.cyberskillR4")}</li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
