import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Printer } from "lucide-react";
import "../styles/CV.css";
import { useLanguage } from "../i18n/LanguageContext";

/* Contact — base64 so plaintext doesn't sit in the built HTML (same as Footer). */
const enc = {
  emailHref: "bWFpbHRvOnZhbmhkejI0NkBnbWFpbC5jb20=",
  emailText: "dmFuaGR6MjQ2QGdtYWlsLmNvbQ==",
  telHref: "dGVsOis4NDkxNzM4NjU0NA==",
  telText: "Kzg0IDkxNyAzODYgNTQ0",
  linkedin: "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL25ndXllbi12aWV0LWFuaC0=",
  github: "aHR0cHM6Ly9naXRodWIuY29tL1ZpZXRhbmgwMDM=",
};
const decode = (c) => {
  try {
    return atob(c);
  } catch {
    return "";
  }
};

/* Work Experience — mirrors cv.html: each entry carries its own Tech + Website/GitHub line. */
const WORK_HISTORY = [
  {
    company: "aboutPage.linksoft",
    date: "aboutPage.linksoftDate",
    role: "aboutPage.linksoftRole",
    bullets: ["aboutPage.linksoftR1", "aboutPage.linksoftR2", "aboutPage.linksoftR3"],
    tech: "Angular 13, TypeScript, RxJS, Chart.js, Leaflet, WPF, DevExpress, ASP.NET Web API 2 (C#), SQL Server, Oracle, MongoDB, HL7 FHIR R4, SignalR",
    linkLabel: "cvPage.websiteLabel",
    linkText: "https://ntbadt.medinet.org.vn",
    linkHref: "https://ntbadt.medinet.org.vn",
  },
  {
    company: "aboutPage.cyberskill",
    date: "aboutPage.cyberskillDate",
    role: "aboutPage.cyberskillRole",
    bullets: ["aboutPage.cyberskillR1", "aboutPage.cyberskillR2", "aboutPage.cyberskillR3"],
    tech: "Node.js, Express, TypeScript, Next.js 16, React 19, Tailwind CSS, Prisma, SQL Server, JWT, ExcelJS, VNPay & MoMo",
    linkLabel: "GitHub",
    linkText: "github.com/Vietanh003/pharmacy-management",
    linkHref: "https://github.com/Vietanh003/pharmacy-management",
  },
];

const CONTACTS = [
  {
    icon: Phone,
    href: decode(enc.telHref),
    text: decode(enc.telText),
  },
  {
    icon: Mail,
    href: decode(enc.emailHref),
    text: decode(enc.emailText),
  },
  {
    icon: MapPin,
    text: "District 12, Ho Chi Minh City",
  },
  {
    icon: Linkedin,
    href: decode(enc.linkedin),
    text: "linkedin.com/in/nguyen-viet-anh",
  },
  {
    icon: Github,
    href: decode(enc.github),
    text: "github.com/Vietanh003",
  }
];

/* Flat skill groups (label + single body paragraph) — mirrors cv.html exactly. */
const SKILLS = [
  {
    label: "aboutPage.skillBackend",
    body: "C# (ASP.NET Web API / MVC, .NET), Java (Spring Boot, Servlet/JSP), Node.js, Express.js. REST APIs, JWT / OAuth2, SignalR.",
  },
  {
    label: "aboutPage.skillDatabase",
    body: "SQL Server, Oracle, MySQL, MongoDB. ERD design, stored procedures & functions, query optimization.",
  },
  {
    label: "aboutPage.skillFrontend",
    body: "Angular (TypeScript, RxJS), React.js, Next.js. HTML5, CSS3, JavaScript, Bootstrap, Tailwind, Chart.js. WPF (XAML), DevExpress.",
  },
  {
    label: "aboutPage.skillTools",
    body: "Git, GitHub/GitLab, SVN, AI-assisted dev (Claude, Copilot), Postman, Swagger, Docker (basic), Visual Studio.",
  },
  {
    label: "aboutPage.skillSoft",
    body: "Problem-solving, teamwork & Agile/Scrum, communication, self-learning.",
  },
];

const CV = () => {
  const { t } = useLanguage();
  const [hasPhoto, setHasPhoto] = useState(false);

  // Use a real portrait if the user drops one at public/cv-photo.jpg
  useEffect(() => {
    const img = new Image();
    img.onload = () => setHasPhoto(true);
    img.onerror = () => setHasPhoto(false);
    img.src = process.env.PUBLIC_URL + "/cv-photo.jpg";
  }, []);

  return (
    <div className="cv-page">
      {/* Floating Print button (screen only, bottom-right, accent color) */}
      <button type="button" className="cv-print-fab no-print" onClick={() => window.print()}>
        <Printer size={17} aria-hidden="true" />
        {t("cvPage.print")}
      </button>

      {/* Paper */}
      <div className="cv-sheet" id="cv-sheet">
        {/* Masthead */}
        <div className="cv-masthead">
          <div className="cv-masthead-left">
            <h1 className="cv-name">Nguyen Viet Anh</h1>
            <p className="cv-role">{t("cvPage.role")}</p>
            <ul className="cv-contact">
              {CONTACTS.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.text}>
                    <Icon size={14} aria-hidden="true" />
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="cv-portrait">
            {hasPhoto ? (
              <img src={process.env.PUBLIC_URL + "/cv-photo.jpg"} alt="Nguyen Viet Anh" />
            ) : (
              <span>
                {t("cvPage.photo")}
                <br />
                cv-photo.jpg
              </span>
            )}
          </div>
        </div>

        {/* Objective */}
        <div className="cv-sec">
          <h2 className="cv-sec-title">{t("cvPage.objective")}</h2>
          <hr className="cv-sec-rule" />
          <p className="cv-para">{t("cvPage.summary")}</p>
        </div>

        <div className="cv-layout">
          <div className="cv-main">
            {/* Work Experience */}
            <div className="cv-sec" style={{ marginTop: 4 }}>
              <h2 className="cv-sec-title">{t("cvPage.experience")}</h2>
              <hr className="cv-sec-rule" />
              {WORK_HISTORY.map((exp) => (
                <div className="cv-entry" key={exp.company}>
                  <div className="cv-entry-head">
                    <p className="cv-entry-title">{t(exp.company)}</p>
                    <span className="cv-entry-date">{t(exp.date)}</span>
                  </div>
                  <p className="cv-entry-sub">{t(exp.role)}</p>
                  <ul className="cv-bullets">
                    {exp.bullets.map((b) => (
                      <li key={b}>{t(b)}</li>
                    ))}
                  </ul>
                  <p className="cv-kv">
                    <b>{t("cvPage.techLabel")}</b>: {exp.tech}
                  </p>
                  <p className="cv-kv">
                    <b>{exp.linkLabel === "GitHub" ? "GitHub" : t(exp.linkLabel)}</b>:{" "}
                    <a href={exp.linkHref} target="_blank" rel="noopener noreferrer">
                      {exp.linkText}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="cv-side">
            {/* Skills */}
            <div className="cv-sec">
              <h2 className="cv-sec-title">{t("cvPage.skills")}</h2>
              <hr className="cv-sec-rule" />
              {SKILLS.map((group) => (
                <div className="cv-skill-group" key={group.label}>
                  <p className="cv-skill-label">{t(group.label)}</p>
                  <div className="cv-skill-body">{group.body}</div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="cv-sec">
              <h2 className="cv-sec-title">{t("cvPage.education")}</h2>
              <hr className="cv-sec-rule" />
              <p className="cv-side-edu-title">{t("aboutPage.school")}</p>
              <p className="cv-side-edu-date">{t("aboutPage.schoolDate")}</p>
              <p className="cv-side-edu-major">{t("aboutPage.major")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;