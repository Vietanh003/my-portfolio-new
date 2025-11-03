import React from "react";
import styles from "../styles/Hero.module.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className={styles.title}>Viet Anh Nguyen</h2>

        <TypeAnimation
          sequence={[
            "Fullstack Developer 💻",
            1500,
            "Frontend Engineer 🎨",
            1500,
            "Backend Developer ⚙️",
            1500,
            "Problem Solver 🚀",
            1500,
          ]}
          wrapper="h4"
          className={styles.subtitle}
          repeat={Infinity}
        />

        <div className={styles.divider}></div>
      </motion.div>

      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <ArrowRight size={28} className={styles.icon} />
        <p className={styles.featured}>
          <u>Featured Projects</u>
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
