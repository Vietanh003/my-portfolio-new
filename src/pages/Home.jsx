import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.page}>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
};

export default Home;
