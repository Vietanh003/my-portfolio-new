import React from "react";
import { Facebook, Linkedin, Github } from "lucide-react";
import styles from "../styles/SocialRail.module.css";

// Zalo icon (chat bubble + Z) — Lucide doesn't ship one
const ZaloIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12c0 1.7.43 3.31 1.18 4.71L2 22l5.29-1.18C8.69 21.57 10.3 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-3 7h6v1.4L11 14h4v1.5H9V14l4-3.6H9V9z"
    />
  </svg>
);

// URLs are base64-encoded so they don't appear as plain text in the
// rendered HTML / View Source. Decoded on click. This is obfuscation,
// not encryption — anyone reading the JS bundle can still atob it,
// but it stops bots scraping HTML and hides personal info from casual viewers.
const links = [
  { name: "Zalo",     code: "aHR0cHM6Ly96YWxvLm1lLzA5MTczODY1NDQ=",                                                                                  Icon: ZaloIcon },
  { name: "Facebook", code: "aHR0cHM6Ly93ZWIuZmFjZWJvb2suY29tL3NoYXJlLzFDanZFWXRaQUUvP21pYmV4dGlkPXd3WElmciZfcmRjPTEmX3Jkcg==",                       Icon: Facebook },
  { name: "LinkedIn", code: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tLw==",                                                                                  Icon: Linkedin },
  { name: "GitHub",   code: "aHR0cHM6Ly9naXRodWIuY29tL1ZpZXRhbmgwMDM=",                                                                              Icon: Github  },
];

const openEncoded = (code) => (e) => {
  e.preventDefault();
  try {
    const url = atob(code);
    window.open(url, "_blank", "noopener,noreferrer");
  } catch (_) {
    /* malformed code — silently ignore */
  }
};

const SocialRail = () => (
  <aside className={styles.rail} aria-label="Social links">
    <ul className={styles.list}>
      {links.map(({ name, code, Icon }) => (
        <li key={name}>
          <a
            href="#"
            onClick={openEncoded(code)}
            className={styles.item}
            aria-label={name}
            title={name}
            rel="noopener noreferrer"
          >
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
    <span className={styles.line} aria-hidden="true" />
  </aside>
);

export default SocialRail;
