import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Wrench,
  LayoutTemplate,
  BadgeCheck,
  MessageCircle,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import HomeHeroSlider from "../components/HomeHeroSlider";
import FloatingChatBox from "../components/FloatingChatBox";

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
          src="./images/project-kite-stair.jpg"
          alt="Project presentation"
          className="before-after-image"
        />

        <div
          className="before-after-overlay"
          style={{ width: `${position}%` }}
        >
          <img
            src="/images/theme-steel-connection.jpg"
            alt="Model concept"
            className="before-after-image"
          />
        </div>

        <div
          className="before-after-divider"
          style={{ left: `${position}%` }}
        >
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
      <HomeHeroSlider />

      <section className="page-section overlap-section">
        <div className="container page-stack">
          <motion.div
            className="scroll-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="metrics-grid">
              <Metric title="Coverage" value="VA • MD • DC" />
              <Metric title="Support" value="Fast & Clear" />
              <Metric title="Focus" value="Buildable Solutions" />
            </div>
          </motion.div>

          <motion.div
            className="scroll-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <div className="mini-pill">Technical Excellence</div>
            <h3>Advanced detailing support for complex construction projects</h3>
            <p>
              ArMil Engineering &amp; Detailing supports fabrication,
              coordination, and project execution with a practical,
              construction-focused mindset.
            </p>
          </motion.div>

          <motion.div
            className="scroll-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
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
          </motion.div>

          <motion.div
            className="scroll-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="mini-pill">Before / After</div>
            <h3>Engineering visualization with presentation impact</h3>
            <p>
              Compare conceptual/model-driven visuals with project-ready
              presentation output to show coordination quality and detailing clarity.
            </p>
            <BeforeAfterSlider />
          </motion.div>

          <motion.div
            className="scroll-card cta-strip"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="cta-grid">
              <div className="cta-box">
                <div className="icon-badge">
                  <Calculator size={20} />
                </div>
                <h3>Need estimation or take-off support?</h3>
                <p>
                  Request a quote for detailing, take-offs, modeling, or field support.
                </p>
                <NavLink to="/quote" className="btn btn-primary">
                  Request a Quote <ArrowRight size={16} />
                </NavLink>
              </div>

              <div className="cta-box">
                <div className="icon-badge">
                  <MessageCircle size={20} />
                </div>
                <h3>Need quick help?</h3>
                <p>
                  Use the chat box on the lower right to send a fast project inquiry.
                </p>
                <NavLink to="/contact" className="btn btn-secondary">
                  Contact Us
                </NavLink>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingChatBox />
    </>
  );
}