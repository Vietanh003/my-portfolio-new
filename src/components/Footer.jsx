import React from "react";
import "../styles/Footer.css";
import { useLanguage } from "../i18n/LanguageContext";

// Base64-encoded values so personal info doesn't appear in the
// static HTML (View Source / basic scrapers won't see plaintext).
// Decoded at runtime for display + on click for navigation.
const SOCIALS = [
  { label: "Facebook", code: "aHR0cHM6Ly93ZWIuZmFjZWJvb2suY29tL3NoYXJlLzFDanZFWXRaQUUvP21pYmV4dGlkPXd3WElmciZfcmRjPTEmX3Jkcg==" },
  { label: "LinkedIn", code: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tLw==" },
  { label: "GitHub",   code: "aHR0cHM6Ly9naXRodWIuY29tL1ZpZXRhbmgwMDM=" },
];

const EMAIL_HREF_CODE   = "bWFpbHRvOm5ndXllbnZpZXRhbmgub2ZmaWNlQGdtYWlsLmNvbQ==";
const EMAIL_TEXT_CODE   = "bmd1eWVudmlldGFuaC5vZmZpY2VAZ21haWwuY29t";
// telephone values removed (unused) to satisfy ESLint

const decode = (code) => {
  try { return atob(code); } catch { return ""; }
};

// click helper removed — anchors now use decoded hrefs directly

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-col">
          <h6><strong>{t("footer.meetMe")}</strong></h6>
          <ul>
            {SOCIALS.map(({ label, code }) => (
              <li key={label}>
                <a
                  href={decode(code)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h6><strong>{t("footer.address")}</strong></h6>
          <p>{t("footer.addressValue")}</p>
        </div>

        <div className="footer-col">
          <h6><strong>{t("footer.contact")}</strong></h6>
          <p>
            Email: {" "}
            <a href={decode(EMAIL_HREF_CODE)}>
              {decode(EMAIL_TEXT_CODE)}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
