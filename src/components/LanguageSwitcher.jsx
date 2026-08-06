import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "../styles/LanguageSwitcher.module.css";

/* ====== Flag SVGs (compact, recognisable) ====== */

const FlagVN = ({ size = 20 }) => (
  <svg
    width={size * 1.4}
    height={size}
    viewBox="0 0 30 20"
    aria-hidden="true"
    role="img"
  >
    <rect width="30" height="20" fill="#DA251D" />
    <polygon
      points="15,4.4 16.18,8.06 20.04,8.06 16.93,10.32 18.11,13.99 15,11.73 11.89,13.99 13.07,10.32 9.96,8.06 13.82,8.06"
      fill="#FFFF00"
    />
  </svg>
);

const FlagEN = ({ size = 20 }) => (
  <svg
    width={size * 1.4}
    height={size}
    viewBox="0 0 60 30"
    aria-hidden="true"
    role="img"
  >
    <clipPath id="flagEnClip">
      <rect width="60" height="30" />
    </clipPath>
    <g clipPath="url(#flagEnClip)">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        stroke="#C8102E"
        strokeWidth="4"
        clipPath="url(#flagEnClip)"
      />
      <path d="M30,0 V30 M0,15 H60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

/* ====== Switcher button ====== */

const LanguageSwitcher = ({ variant = "pill", className }) => {
  const { lang, toggleLang, t } = useLanguage();

  const flag = lang === "en" ? <FlagEN size={16} /> : <FlagVN size={16} />;

  const ariaLabel =
    lang === "en"
      ? `Switch to Vietnamese`
      : `Chuyển sang tiếng Anh`;

  // variant === "icon" → mobile bottom dock circle button
  // variant === "pill" → desktop pill style with flag + code
  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={toggleLang}
        className={`${styles.icon} ${className || ""}`}
        aria-label={ariaLabel}
        title={t("langSwitch.label")}
      >
        {flag}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleLang}
      className={`${styles.pill} ${className || ""}`}
      aria-label={ariaLabel}
      title={t("langSwitch.label")}
    >
      {flag}
      <span className={styles.code}>{lang.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher;
