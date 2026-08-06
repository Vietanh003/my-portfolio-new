import React from "react";
import { useParams, Link } from "react-router-dom";
import { Play, ExternalLink, Github, Globe } from "lucide-react";
import "../styles/ProjectDetail.css";
import Footer from "../components/Footer";
import parmaImage from "../assets/images/parma.png";
import emrImage from "../assets/images/emr.svg";
import { useLanguage } from "../i18n/LanguageContext";

const projectsMeta = {
  emr: {
    tech: "Angular 13, TypeScript, RxJS, Chart.js, Leaflet, ASP.NET Web API 2 (C#), SQL Server, Oracle, MongoDB, HL7 FHIR R4, SignalR, JWT",
    live: "https://ntbadt.medinet.org.vn",
    image: emrImage,
  },
  pharmacy: {
    tech: "Node.js, Express, TypeScript, Next.js 16, React 19, Tailwind CSS, Prisma, SQL Server, JWT, ExcelJS, VNPay & MoMo",
    github: "https://github.com/Vietanh003/medicare-pharmacy.git",
    video:
      "https://1drv.ms/v/c/f6fad0bcd22a17ca/ERywnZAAZgZFpTCKVEnd3PgB5KFbElUgJ34XWGkYwAZamw",
    image: parmaImage,
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { t } = useLanguage();

  const meta = projectsMeta[projectId];

  if (!meta) {
    return (
      <div className="project-not-found">
        <h2>{t("projectDetail.notFound")}</h2>
        <Link to="/projects">← {t("projectDetail.back")}</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        {/* Left Column */}
        <div className="detail-left">
          <img
            src={meta.image}
            alt={t(`projectsData.${projectId}.title`)}
            className="detail-image"
          />

          {meta.video && (
            <a
              href={meta.video}
              target="_blank"
              rel="noopener noreferrer"
              className="video-card"
              aria-label={t("projectDetail.demo")}
            >
              <span className="video-card-icon" aria-hidden="true">
                <Play size={20} fill="currentColor" />
              </span>
              <span className="video-card-text">
                <span className="video-card-title">{t("projectDetail.demo")}</span>
                <span className="video-card-host">OneDrive</span>
              </span>
              <ExternalLink size={16} className="video-card-arrow" aria-hidden="true" />
            </a>
          )}
        </div>

        {/* Right Column */}
        <div className="detail-right">
          <h2 className="detail-title">{t(`projectsData.${projectId}.title`)}</h2>

          <div className="detail-section">
            <h4>{t("projectDetail.intro")}</h4>
            <p>{t(`projectsData.${projectId}.intro`)}</p>
          </div>

          <div className="detail-section">
            <h4>{t("projectDetail.work")}</h4>
            <p>{t(`projectsData.${projectId}.work`)}</p>
          </div>

          <div className="detail-section">
            <h4>{t("projectDetail.tech")}</h4>
            <p>{meta.tech}</p>
          </div>

          <div className="detail-links">
            {meta.live && (
              <a
                href={meta.live}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-link demo"
              >
                <Globe size={16} aria-hidden="true" />
                {t("projectDetail.live")}
              </a>
            )}

            {meta.github && (
              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-link github"
              >
                <Github size={16} aria-hidden="true" />
                {t("projectDetail.github")}
              </a>
            )}

            {meta.video && (
              <a
                href={meta.video}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-link demo"
              >
                <Play size={16} fill="currentColor" aria-hidden="true" />
                {t("projectDetail.demo")}
              </a>
            )}
          </div>

          <Link to="/projects" className="detail-back">
            ← {t("projectDetail.back")}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;