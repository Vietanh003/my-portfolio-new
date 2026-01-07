import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  // khóa scroll khi mở menu mobile
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* Brand */}
        <NavLink to="/" className={styles.brand} onClick={closeMenu}>
          <img className={styles.brandLogo} src={logo} alt="Logo" />
          <span className={styles.brandText}>Viet Anh</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className={styles.navDesktop} aria-label="Primary">
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            Info
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            Contact
          </NavLink>
        </nav>

        {/* Right actions */}
        <div className={styles.actions}>
          <a className={styles.cta} href="mailto:nguyenvietanh.office@gmail.com">
            Hire me
          </a>

          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayShow : ""}`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      {/* Mobile drawer */}
      <aside className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`} aria-hidden={!menuOpen}>
        <div className={styles.drawerTop}>
          <NavLink to="/" className={styles.drawerBrand} onClick={closeMenu}>
            <img className={styles.drawerLogo} src={logo} alt="Logo" />
            <span className={styles.drawerText}>Viet Anh</span>
          </NavLink>
          <button className={styles.drawerClose} onClick={closeMenu} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <div className={styles.drawerLinks}>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? styles.drawerActive : styles.drawerLink)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => (isActive ? styles.drawerActive : styles.drawerLink)}>
            Info
          </NavLink>
          <NavLink to="/projects" onClick={closeMenu} className={({ isActive }) => (isActive ? styles.drawerActive : styles.drawerLink)}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? styles.drawerActive : styles.drawerLink)}>
            Contact
          </NavLink>
        </div>

        <div className={styles.drawerFooter}>
          <a className={styles.drawerCta} href="mailto:nguyenvietanh.office@gmail.com" onClick={closeMenu}>
            Hire me
          </a>
          <div className={styles.drawerHint}>Usually reply within 24h</div>
        </div>
      </aside>
    </header>
  );
};

export default Header;
