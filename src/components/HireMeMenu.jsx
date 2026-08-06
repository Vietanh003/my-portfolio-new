import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Briefcase,
  Zap,
  MessageCircle,
  Users,
  ArrowUpRight,
  ChevronDown,
  HandCoins,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "../styles/HireMeMenu.module.css";

// Each option has a stable key; translations supply the visible text.
const inquiries = [
  { key: "project", icon: Briefcase },
  { key: "feature", icon: Zap },
  { key: "consult", icon: MessageCircle },
  { key: "collab", icon: Users },
];

const HireMeMenu = ({
  position = "bottom",
  fullWidth = false,
  iconOnly = false,
  triggerClassName,
  onSelect,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleSelect = (inquiryKey) => (e) => {
    e.preventDefault();
    setOpen(false);
    onSelect?.();
    navigate(`/contact?inquiry=${inquiryKey}`);
  };

  const handleSimpleSelect = () => {
    setOpen(false);
    onSelect?.();
  };

  return (
    <div
      className={`${styles.wrap} ${fullWidth ? styles.wrapFull : ""}`}
      ref={ref}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={
          iconOnly
            ? `${triggerClassName || ""} ${open ? styles.triggerIconActive : ""}`
            : `${styles.trigger} ${fullWidth ? styles.triggerFull : ""}`
        }
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={iconOnly ? t("nav.hireMe") : undefined}
      >
        {iconOnly ? (
          <HandCoins size={20} aria-hidden="true" />
        ) : (
          <>
            {t("nav.hireMe")}
            <ChevronDown
              size={14}
              className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
            />
          </>
        )}
      </button>

      {open && (
        <div
          className={`${styles.menu} ${
            position === "top" ? styles.menuTop : styles.menuBottom
          } ${fullWidth ? styles.menuFull : ""}`}
          role="menu"
        >
          <div className={styles.menuHeader}>{t("hireMenu.header")}</div>

          {inquiries.map(({ key, icon: Icon }) => (
            <a
              key={key}
              href={`/contact?inquiry=${key}`}
              onClick={handleSelect(key)}
              className={styles.item}
              role="menuitem"
            >
              <span className={styles.itemIcon}>
                <Icon size={16} />
              </span>
              <span className={styles.itemText}>
                <span className={styles.itemTitle}>
                  {t(`hireMenu.options.${key}.title`)}
                </span>
                <span className={styles.itemDesc}>
                  {t(`hireMenu.options.${key}.desc`)}
                </span>
              </span>
              <ArrowUpRight size={14} className={styles.itemArrow} />
            </a>
          ))}

          <div className={styles.divider} />

          <Link
            to="/contact"
            className={styles.itemSimple}
            onClick={handleSimpleSelect}
            role="menuitem"
          >
            {t("hireMenu.formLink")} →
          </Link>
        </div>
      )}
    </div>
  );
};

export default HireMeMenu;
