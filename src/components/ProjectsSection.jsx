import React from "react";
import "../styles/ProjectsSection.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

import parmaImage from "../assets/images/parma.png";
import emrImage from "../assets/images/emr.svg";

const projectsMeta = [
  {
    id: "pharmacy",
    image: parmaImage,
    tags: ["ASP.NET Core", "SQL Server", "CRUD", "Auth"],
  },
  {
    id: "emr",
    image: emrImage,
    tags: ["Angular 13", "ASP.NET Web API", "FHIR", "SignalR"],
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__head">
          <div>
            <p className="projects__kicker">{t("projectsHome.kicker")}</p>
            <h3 className="projects__title">{t("projectsHome.title")}</h3>
            <p className="projects__sub">{t("projectsHome.subtitle")}</p>
          </div>
        </div>

        <div className="projects__grid">
          {projectsMeta.map((p) => (
            <article key={p.id} className="pCard">
              <Link to={`/projects/${p.id}`} className="pCard__media" aria-label={t(`projectsData.${p.id}.title`)}>
                <img src={p.image} alt={t(`projectsData.${p.id}.title`)} loading="lazy" />
              </Link>

              <div className="pCard__body">
                <h5 className="pCard__title">{t(`projectsData.${p.id}.title`)}</h5>
                <p className="pCard__desc">{t(`projectsData.${p.id}.shortHome`)}</p>

                <div className="pCard__tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="pCard__footer">
                  <Link to={`/projects/${p.id}`} className="pCard__cta">
                    {t("projectsHome.moreInfo")} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
