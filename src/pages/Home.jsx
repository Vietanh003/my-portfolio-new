import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import ProjectsHighlight from '../components/ProjectsHighlight';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.page}>
      <Hero />
      <AboutSection />
      <section className={styles.section}>
        <div className={styles.container}>
          <ProjectsSection />
        </div>
      </section>
      <ProjectsHighlight />
      <Footer />
    </main>
  );
};

export default Home;
