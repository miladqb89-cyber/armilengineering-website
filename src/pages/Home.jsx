import { Sparkles, Phone, Mail, MapPin, ShieldCheck, Wrench, LayoutTemplate, BadgeCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

const whyArmil = [
  { title: "Precision", text: "Every deliverable is built around clarity, constructability, and technical accuracy.", icon: ShieldCheck },
  { title: "Buildability", text: "We focus on real-world fabrication and field conditions, not just theoretical output.", icon: Wrench },
  { title: "Coordination", text: "We help connect design intent, detailing workflows, and project team communication.", icon: LayoutTemplate },
  { title: "Reliable Support", text: "Responsive revisions, field updates, and project follow-through support successful delivery.", icon: BadgeCheck },
];

export default function Home() {
  return (
    <>
      <section className="hero-page">
        <div className="hero-page-bg">
          <img src="/images/theme-steel-connection.jpg" alt="Engineering background" className="hero-page-image" />
          <div className="hero-page-overlay" />
        </div>

        <div className="container hero-page-content">
          <div className="pill"><Sparkles size={14} /> Engineering Precision. Delivered with Confidence.</div>
          <h1 className="hero-page-title">Advanced steel detailing, modeling, and engineering solutions.</h1>
          <p className="hero-page-lead">
            ArMil Engineering & Detailing combines advanced technology, industry expertise, and a deep understanding
            of construction workflows to deliver accurate, buildable solutions.
          </p>
          <div className="hero-actions">
            <NavLink to="/services" className="btn btn-primary">Explore Services</NavLink>
            <NavLink to="/projects" className="btn btn-secondary">View Projects</NavLink>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container cards-grid two">
          <div className="scroll-card">
            <h3>Coverage</h3>
            <div className="metrics-grid">
              <div className="metric-card"><div className="metric-label">Region</div><div className="metric-value">VA • MD • DC</div></div>
              <div className="metric-card"><div className="metric-label">Support</div><div className="metric-value">Fast & Clear</div></div>
              <div className="metric-card"><div className="metric-label">Focus</div><div className="metric-value">Buildable Solutions</div></div>
            </div>
          </div>

          <div className="scroll-card">
            <h3>Advanced detailing support</h3>
            <p>
              Precision, coordination, and performance define how we support fabrication,
              engineering workflows, and project execution.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="scroll-card">
            <h3>Why ArMil</h3>
            <div className="why-grid">
              {whyArmil.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="why-item">
                    <div className="icon-badge small"><Icon size={16} /></div>
                    <div>
                      <div className="why-title">{item.title}</div>
                      <div className="why-text">{item.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container scroll-card">
          <h3>Contact ArMil Engineering & Detailing</h3>
          <div className="contact-list">
            <div><Mail size={16} /><span>armilengineering@yahoo.com</span></div>
            <div><Phone size={16} /><span>571-317-5986</span></div>
            <div><MapPin size={16} /><span>Virginia • Maryland • Washington, DC</span></div>
          </div>
        </div>
      </section>
    </>
  );
}