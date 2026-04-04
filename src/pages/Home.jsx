import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Wrench, LayoutTemplate, BadgeCheck } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const whyArmil = [
  {
    title: "Precision",
    text: "Every deliverable is built around clarity, constructability, and technical accuracy.",
    icon: ShieldCheck,
  },
  {
    title: "Buildability",
    text: "We focus on real-world fabrication and field conditions, not just theoretical output.",
    icon: Wrench,
  },
  {
    title: "Coordination",
    text: "We help connect design intent, detailing workflows, and project team communication.",
    icon: LayoutTemplate,
  },
  {
    title: "Reliable Support",
    text: "Responsive revisions, field updates, and project follow-through support successful delivery.",
    icon: BadgeCheck,
  },
];

function Metric({ title, value }) {
  return (
    <div className="metric-card">
      <div className="metric-label">{title}</div>
      <div className="metric-value">{value}</div>
    </div>
  );
}

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  return (
    <div className="before-after-wrap">
      <div className="before-after-stage">
        <img
          src="/images/project-kite-stair.jpg"
          alt="After"
          className="before-after-image"
        />

        <div
          className="before-after-overlay"
          style={{ width: `${position}%` }}
        >
          <img
            src="/images/theme-steel-connection.jpg"
            alt="Before"
            className="before-after-image"
          />
        </div>

        <div className="before-after-divider" style={{ left: `${position}%` }}>
          <div className="before-after-handle" />
        </div>

        <div className="before-label">Concept / Model View</div>
        <div className="after-label">Project / Built Presentation</div>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="before-after-range"
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="page-hero">
        <div
          className="page-bg"
          style={{ backgroundImage: "url('/images/theme-steel-connection.jpg')" }}
        />
        <div className="page-bg-overlay" />

        <motion.div
          className="container page-hero-content glass-hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="pill">
            <Sparkles size={14} />
            Engineering Precision. Delivered with Confidence.
          </div>

          <h1>Advanced steel detailing, modeling, and engineering solutions.</h1>

          <p className="lead">
            ArMil Engineering &amp; Detailing is a specialized provider of structural steel
            detailing and engineering support services. We combine advanced technology,
            industry expertise, and a deep understanding of construction workflows to
            deliver accurate, buildable solutions.
          </p>

          <p>
            Our approach focuses on precision, coordination, and performance—ensuring
            every project is executed to the highest standards from concept through completion.
          </p>

          <div className="hero-actions">
            <NavLink to="/services" className="btn btn-primary">
              Explore Services
            </NavLink>
            <NavLink to="/projects" className="btn btn-secondary">
              View Projects
            </NavLink>
          </div>
        </motion.div>
      </section>

      <section className="page-section overlap-section">
        <div className="container page-stack">
          <div className="scroll-card">
            <div className="metrics-grid">
              <Metric title="Coverage" value="VA • MD • DC" />
              <Metric title="Support" value="Fast & Clear" />
              <Metric title="Focus" value="Buildable Solutions" />
            </div>
          </div>

          <div className="scroll-card">
            <div className="mini-pill">Technical Excellence</div>
            <h3>Advanced detailing support for complex construction projects</h3>
            <p>
              Precision, coordination, and performance define how we support fabrication,
              engineering workflows, and project execution.
            </p>
          </div>

          <div className="scroll-card">
            <h3>Why ArMil</h3>
            <div className="why-grid">
              {whyArmil.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="why-item">
                    <div className="icon-badge small">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="why-title">{item.title}</div>
                      <div className="why-text">{item.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="scroll-card">
            <div className="mini-pill">Before / After</div>
            <h3>Engineering visualization with presentation impact</h3>
            <p>
              Compare conceptual/model-driven visuals with project-ready presentation output.
              This kind of visual storytelling helps clients understand coordination quality
              and detailing clarity.
            </p>
            <BeforeAfterSlider />
          </div>
        </div>
      </section>
    </>
  );
}