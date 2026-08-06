import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/Contact.css";
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, Loader2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const TO = "nguyenvietanh.office@gmail.com";

const Contact = () => {
  const { t, lang } = useLanguage();
  const year = useMemo(() => new Date().getFullYear(), []);
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({ name: "", email: "", message: "", subject: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  // Prefill form from ?inquiry=<key> when coming from Hire me menu
  useEffect(() => {
    const inquiry = searchParams.get("inquiry");
    if (!inquiry) return;
    const subject = t(`hireMenu.prefill.${inquiry}Subject`);
    const body = t(`hireMenu.prefill.${inquiry}Body`);
    if (subject !== `hireMenu.prefill.${inquiry}Subject`) {
      setForm((p) => ({ ...p, subject, message: body }));
    }
  }, [searchParams, t, lang]);

  const onChange = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus({ state: "sending", msg: "" });
      // Open user's mail client with the prefilled content
      const subject = form.subject || `Message from ${form.name || "portfolio"}`;
      const body =
        `${form.message}\n\n— ${form.name || "Anonymous"}` +
        (form.email ? ` (${form.email})` : "");
      const mailto = `mailto:${TO}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;

      await new Promise((r) => setTimeout(r, 600));
      setStatus({ state: "sent", msg: t("contact.sent") });
    } catch {
      setStatus({ state: "error", msg: t("contact.error") });
    }
  };

  // Mouse tilt for aurora layer
  const onTiltMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", ((e.clientX - r.left) / r.width).toFixed(4));
    el.style.setProperty("--my", ((e.clientY - r.top) / r.height).toFixed(4));
  };
  const onTiltLeave = (e) => {
    const el = e.currentTarget;
    el.style.setProperty("--mx", "0.5");
    el.style.setProperty("--my", "0.5");
  };

  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=${encodeURIComponent(TO)}` +
    `&su=${encodeURIComponent("Liên hệ từ website")}` +
    `&body=${encodeURIComponent("Chào bạn,\n\nMình muốn liên hệ về...")}`;

  return (
    <div className="contact-shell" onMouseMove={onTiltMove} onMouseLeave={onTiltLeave}>
      <main className="contact">
        <header className="contact-hero">
          <div className="contact-badge">
            <Sparkles size={16} />
            <span>{t("contact.badge")}</span>
          </div>

          <h1 className="contact-title">{t("contact.title")}</h1>
          <p className="contact-subtitle">{t("contact.subtitle")}</p>
        </header>

        <section className="contact-grid">
          {/* LEFT */}
          <aside className="contact-card contact-left">
            <h2 className="card-title">{t("contact.detailsTitle")}</h2>
            <p className="card-subtitle">{t("contact.detailsSubtitle")}</p>

            <div className="info-list">
              <a className="info-item" href={gmailUrl} target="_blank" rel="noreferrer">
                <span className="info-ico"><Mail size={18} /></span>
                <span className="info-text">
                  <span className="info-label">{t("contact.infoEmail")}</span>
                  <span className="info-value">{TO}</span>
                </span>
              </a>

              <a className="info-item" href="tel:+84917386544">
                <span className="info-ico"><Phone size={18} /></span>
                <span className="info-text">
                  <span className="info-label">{t("contact.infoPhone")}</span>
                  <span className="info-value">+84 917 386 544</span>
                </span>
              </a>

              <div className="info-item" role="group" aria-label={t("contact.infoLocation")}>
                <span className="info-ico"><MapPin size={18} /></span>
                <span className="info-text">
                  <span className="info-label">{t("contact.infoLocation")}</span>
                  <span className="info-value">{t("contact.location")}</span>
                </span>
              </div>
            </div>

            <div className="note">
              <p>{t("contact.note")}</p>
            </div>

            <div className="mini-footer">
              <span className="dot" />
              <span>{t("contact.replies")}</span>
            </div>
          </aside>

          {/* RIGHT */}
          <section className="contact-card contact-right" aria-label="Contact form">
            <h2 className="card-title">{t("contact.formTitle")}</h2>
            <p className="card-subtitle">{t("contact.formSubtitle")}</p>

            <form className="form" onSubmit={onSubmit}>
              {form.subject && (
                <div className="field">
                  <label htmlFor="subject">{t("contact.labelSubject")}</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder={t("contact.placeholderSubject")}
                    value={form.subject}
                    onChange={onChange("subject")}
                  />
                </div>
              )}

              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">{t("contact.labelName")}</label>
                  <input
                    id="name"
                    type="text"
                    placeholder={t("contact.placeholderName")}
                    value={form.name}
                    onChange={onChange("name")}
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">{t("contact.labelEmail")}</label>
                  <input
                    id="email"
                    type="email"
                    placeholder={t("contact.placeholderEmail")}
                    value={form.email}
                    onChange={onChange("email")}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">{t("contact.labelMessage")}</label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder={t("contact.placeholderMessage")}
                  value={form.message}
                  onChange={onChange("message")}
                  required
                />
                <div className="hint">{t("contact.hint")}</div>
              </div>

              {status.state !== "idle" && (
                <div className={`status ${status.state}`} role="status" aria-live="polite">
                  {status.state === "sending" && <Loader2 className="spin" size={18} />}
                  {status.state === "sent" && <CheckCircle2 size={18} />}
                  {status.state === "error" && <span className="status-dot" />}
                  <span>{status.msg}</span>
                </div>
              )}

              <button className="btn" type="submit" disabled={status.state === "sending"}>
                {status.state === "sending" ? (
                  <>
                    <Loader2 className="spin" size={18} />
                    {t("contact.sending")}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t("contact.sendBtn")}
                  </>
                )}
              </button>
            </form>
          </section>
        </section>

        <footer className="contact-footer">
          © {year} <span>Viet Anh Nguyen</span>
        </footer>
      </main>
    </div>
  );
};

export default Contact;
