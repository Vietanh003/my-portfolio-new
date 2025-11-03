import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // cài: npm install lucide-react

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>

        {/* Hamburger icon for mobile */}
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation */}
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>Info</Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMenu}>Projects</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
