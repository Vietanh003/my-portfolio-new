// src/pages/ProjectsPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProjectsPage.css";
import Footer from "../components/Footer";
import parmaImage from "../assets/images/parma.png";
import emrImage from "../assets/images/emr.svg";
import { useLanguage } from "../i18n/LanguageContext";

const projectsMeta = [
  {
    id: "emr",
    image: emrImage,
    tech: "Angular 13, ASP.NET Web API (C#), SQL Server, Oracle, MongoDB, HL7 FHIR, SignalR",
  },
  {
    id: "pharmacy",
    image: parmaImage,
    tech: "Node.js, Express, TypeScript, Next.js 16, React 19, Tailwind CSS, Prisma, SQL Server, JWT, ExcelJS, VNPay & MoMo",
  },
];

const ProjectsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h2 className="page-title">{t("projectsPage.title")}</h2>
        <p className="page-subtitle">{t("projectsPage.subtitle")}</p>

        <div className="projects-grid">
          {projectsMeta.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={t(`projectsData.${project.id}.title`)}
                className="project-img"
              />
              <div className="project-info">
                <h3>{t(`projectsData.${project.id}.title`)}</h3>
                <p className="short-desc">{t(`projectsData.${project.id}.shortPage`)}</p>
                <p className="tech-stack">
                  <strong>{t("projectsPage.techLabel")}</strong> {project.tech}
                </p>
                <Link to={`/projects/${project.id}`} className="more-btn">
                  {t("projectsPage.moreInfo")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
