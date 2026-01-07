import React, { useMemo, useState } from "react";
import "../styles/Contact.css";
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle2, Loader2 } from "lucide-react";

const to = "nguyenvietanh.office@gmail.com";
const subject = "Liên hệ từ website";
const body = "Chào bạn,\n\nMình muốn liên hệ về...";

const gmailUrl =
  `https://mail.google.com/mail/?view=cm&fs=1` +
  `&to=${encodeURIComponent(to)}` +
  `&su=${encodeURIComponent(subject)}` +
  `&body=${encodeURIComponent(body)}`;


const Contact = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" }); // idle | sending | sent | error

  const onChange = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus({ state: "sending", msg: "" });
      await new Promise((r) => setTimeout(r, 800));
      setStatus({ state: "sent", msg: "Message sent! I’ll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus({ state: "error", msg: "Something went wrong. Please try again." });
    }
  };

  // ✅ Mouse tilt: set CSS variables --mx --my on container
  const onTiltMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;  // 0..1
    const y = (e.clientY - r.top) / r.height; // 0..1
    el.style.setProperty("--mx", x.toFixed(4));
    el.style.setProperty("--my", y.toFixed(4));
  };

  const onTiltLeave = (e) => {
    const el = e.currentTarget;
    el.style.setProperty("--mx", "0.5");
    el.style.setProperty("--my", "0.5");
  };

  return (
    <div className="contact-shell" onMouseMove={onTiltMove} onMouseLeave={onTiltLeave}>
      <main className="contact">
        <header className="contact-hero">
          <div className="contact-badge">
            <Sparkles size={16} />
            <span>Let’s build something</span>
          </div>

          <h1 className="contact-title">Get in touch</h1>
          <p className="contact-subtitle">
            Have a question, an idea, or a project? Send a message — I usually reply within 24 hours.
          </p>
        </header>

        <section className="contact-grid">
          {/* LEFT */}
          <aside className="contact-card contact-left">
            <h2 className="card-title">Contact details</h2>
            <p className="card-subtitle">Fastest ways to reach me.</p>

            <div className="info-list">
 <a className="info-item" href={gmailUrl} target="_blank" rel="noreferrer">
  <span className="info-ico"><Mail size={18} /></span>
  <span className="info-text">
    <span className="info-label">Email</span>
    <span className="info-value">{to}</span>
  </span>
</a>

              <a className="info-item" href="tel:+8411119999">
                <span className="info-ico"><Phone size={18} /></span>
                <span className="info-text">
                  <span className="info-label">Phone</span>
                  <span className="info-value">+84 1111 9999</span>
                </span>
              </a>

              <div className="info-item" role="group" aria-label="Location">
                <span className="info-ico"><MapPin size={18} /></span>
                <span className="info-text">
                  <span className="info-label">Location</span>
                  <span className="info-value">Ho Chi Minh City</span>
                </span>
              </div>
            </div>

            <div className="note">
              <p>
                Prefer a quick chat? Email is best. If you include your timeline + budget, I can respond faster.
              </p>
            </div>

            <div className="mini-footer">
              <span className="dot" />
              <span>Typically responds within 24 hours</span>
            </div>
          </aside>

          {/* RIGHT */}
          <section className="contact-card contact-right" aria-label="Contact form">
            <h2 className="card-title">Send a message</h2>
            <p className="card-subtitle">I’ll read every message.</p>

            <form className="form" onSubmit={onSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" type="text" placeholder="Enter your name" value={form.name} onChange={onChange("name")} required />
                </div>

                <div className="field">
                  <label htmlFor="email">Email address</label>
                  <input id="email" type="email" placeholder="Enter your email" value={form.email} onChange={onChange("email")} required />
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="6" placeholder="Write your message..." value={form.message} onChange={onChange("message")} required />
                <div className="hint">Tip: share context + goals + deadline.</div>
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
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send message
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
