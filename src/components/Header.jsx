import React from "react";
import styles from "../styles/Header.module.css";
import { NavLink } from "react-router-dom";
import { Home, User, Mail, FileText } from "lucide-react";
import HireMeMenu from "./HireMeMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import SocialRail from "./SocialRail";
import { useLanguage } from "../i18n/LanguageContext";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const showSocialRail = location.pathname !== "/cv";

  return (
    <>
      {/* ==================== DESKTOP-ONLY — floating social rail (left) ==================== */}
      {showSocialRail && <SocialRail />}

      {/* ==================== DESKTOP — floating pill nav (top) ==================== */}
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <nav className={styles.navDesktop} aria-label="Primary">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              {t("nav.home")}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              {t("nav.about")}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              {t("nav.contact")}
            </NavLink>
            <NavLink
              to="/cv"
              className={({ isActive }) => (isActive ? styles.active : styles.link)}
            >
              {t("nav.cv")}
            </NavLink>
          </nav>

          <div className={styles.actions}>
            <LanguageSwitcher variant="pill" />
            <div className={styles.ctaWrap}>
              <HireMeMenu />
            </div>
          </div>
        </div>
      </header>

      {/* ==================== MOBILE — bottom dock nav ==================== */}
      <nav className={styles.bottomNav} aria-label="Mobile navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${styles.dockItem} ${isActive ? styles.dockItemActive : ""}`
          }
          aria-label={t("nav.home")}
        >
          <Home size={20} strokeWidth={1.75} aria-hidden="true" />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${styles.dockItem} ${isActive ? styles.dockItemActive : ""}`
          }
          aria-label={t("nav.about")}
        >
          <User size={20} strokeWidth={1.75} aria-hidden="true" />
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${styles.dockItem} ${isActive ? styles.dockItemActive : ""}`
          }
          aria-label={t("nav.contact")}
        >
          <Mail size={20} strokeWidth={1.75} aria-hidden="true" />
        </NavLink>
        <NavLink
          to="/cv"
          className={({ isActive }) =>
            `${styles.dockItem} ${isActive ? styles.dockItemActive : ""}`
          }
          aria-label={t("nav.cv")}
        >
          <FileText size={20} strokeWidth={1.75} aria-hidden="true" />
        </NavLink>

        <span className={styles.dockDivider} aria-hidden="true" />

        <LanguageSwitcher variant="icon" />

        <HireMeMenu
          iconOnly
          position="top"
          triggerClassName={styles.dockItem}
        />
      </nav>
    </>
  );
};

export default Header;
