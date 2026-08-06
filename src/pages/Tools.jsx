import React from "react";
import { Link } from "react-router-dom";
import { Cloud, Dices, ArrowUpRight } from "lucide-react";
import "../styles/Tools.css";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

const tools = [
  {
    id: "weather",
    to: "/tools/weather",
    Icon: Cloud,
    accent: "blue",
  },
  {
    id: "dice",
    to: "/tools/dice",
    Icon: Dices,
    accent: "purple",
  },
];

const Tools = () => {
  const { t } = useLanguage();

  return (
    <div className="tools-page">
      <div className="tools-container">
        <h2 className="tools-title">{t("tools.title")}</h2>
        <p className="tools-subtitle">{t("tools.subtitle")}</p>

        <div className="tools-grid">
          {tools.map(({ id, to, Icon, accent }) => (
            <Link key={id} to={to} className={`tool-card tool-card--${accent}`}>
              <span className="tool-card__icon" aria-hidden="true">
                <Icon size={28} strokeWidth={1.6} />
              </span>
              <div className="tool-card__body">
                <h3 className="tool-card__title">{t(`tools.${id}.cardTitle`)}</h3>
                <p className="tool-card__desc">{t(`tools.${id}.cardDesc`)}</p>
              </div>
              <ArrowUpRight size={18} className="tool-card__arrow" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tools;
