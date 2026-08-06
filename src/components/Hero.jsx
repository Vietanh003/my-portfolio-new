import React from "react";
import styles from "../styles/Hero.module.css";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import devDeskImage from "../assets/images/pexels-jakubzerdzicki-34212896.jpg";
import { useLanguage } from "../i18n/LanguageContext";

const Waves = ({ side }) => (
  <svg
    className={`${styles.waves} ${side === "left" ? styles.wavesLeft : styles.wavesRight}`}
    viewBox="0 0 600 800"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    {Array.from({ length: 14 }).map((_, i) => (
      <ellipse
        key={i}
        cx={side === "left" ? -50 : 650}
        cy={400}
        rx={120 + i * 60}
        ry={300 + i * 30}
        fill="none"
        stroke="url(#waveStroke)"
        strokeWidth="1"
        opacity={0.45 - i * 0.025}
      />
    ))}
    <defs>
      <linearGradient id="waveStroke" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#a960ff" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#5b6cf0" stopOpacity="0.15" />
      </linearGradient>
    </defs>
  </svg>
);

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div
        className={styles.bgImage}
        style={{ backgroundImage: `url(${devDeskImage})` }}
        aria-hidden="true"
      />
      <div className={styles.bgOverlay} aria-hidden="true" />

      <Waves side="left" />
      <Waves side="right" />

      <div className={styles.content}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.greeting}>
            <span className={styles.dot} />
            {t("hero.greeting")}
          </span>
          <h1 className={styles.name}>Viet Anh</h1>
          <p className={styles.subtitle}>{t("hero.subtitle")}</p>

          <div className={styles.actions}>
            <Link to="/#projects" className={styles.primaryBtn}>
              {t("hero.viewWork")}
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className={styles.secondaryBtn}>
              {t("hero.getInTouch")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
