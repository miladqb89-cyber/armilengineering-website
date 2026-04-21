import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  LayoutTemplate,
  BadgeCheck,
  MessageCircle,
  Calculator,
  ArrowRight,
  Boxes,
  Store,
  SmilePlus,
  BookOpen,
  Sparkles,
  FileText,
  Package,
  PenTool,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import HomeHeroSlider from "../components/HomeHeroSlider";
import FloatingChatBox from "../components/FloatingChatBox";

const whyArmil = [
  {
    title: "Precision",
    text: "Every deliverable is developed with clarity, technical accuracy, and practical application in mind.",
    icon: ShieldCheck,
  },
  {
    title: "Buildability",
    text: "We focus on solutions that support fabrication, coordination, and real project conditions.",
    icon: Wrench,
  },
  {
    title: "Coordination",
    text: "Our workflow supports stronger communication between design, detailing, and project teams.",
    icon: LayoutTemplate,
  },
  {
    title: "Reliable Support",
    text: "We provide responsive revisions, updates, and project follow-through when support is needed.",
    icon: BadgeCheck,
  },
];

const freeTools = [
  "Steel Weight Calculator",
  "Plate Weight Calculator",
  "Beam Size Lookup",
  "Bolt Weight Calculator",
  "Weld Size Calculator",
  "HSS / Pipe Reference",
];

const teklaStoreItems = [
  "Custom Components",
  "Tekla Macros",
  "Report Templates",
  "Drawing Styles",
  "Numbering Rules",
  "Environment Packs",
];

const constructionTools = [
  "Rebar Calculator",
  "Change Order Calculator",
  "Anchor Bolt Helper",
  "Plate Nesting Optimizer",
];

const funContent = [
  "Project Highlights",
  "Steel Price Trend Widget",
  "Before / After Tekla Gallery",
  "Tekla Model Photo Gallery",
  "Industry Visuals",
  "Featured Project Views",
];

const seoContent = [
  "Glossary of Steel Terms",
  "Tekla Tips Blog",
  "Case Studies",
  "Field Coordination Articles",
  "Technical Checklists",
  "Detailing Guides",
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
            src="./images/theme-steel-connection.jpg"
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

function FeatureGrid({ items, icon: Icon }) {
  return (
    <div className="why-grid">
      {items.map((item) => (
        <div key={item} className="why-item">
          <div className="icon-badge small">
            <Icon size={16} />
          </div>
          <div>
            <div className="why-title">{item}</div>
          </div>
        </div>
      ))}
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
            <h3>Steel detailing, Tekla support, and practical project solutions</h3>
            <p>
              ArMil Engineering &amp; Detailing provides steel detailing, Tekla
              modeling, coordination support, and practical technical resources to
              help projects move forward with clarity, accuracy, and confidence.
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
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className="mini-pill">Tools</div>
            <h3>Practical tools for steel detailing and estimating workflows</h3>
            <p>
              Access useful calculators and reference tools designed to support
              steel detailing, estimating, and fabrication-related project needs.
            </p>
            <FeatureGrid items={freeTools} icon={Calculator} />
            <div style={{ marginTop: "18px" }}>
              <NavLink to="/tools" className="btn btn-primary">
                Explore Tools <ArrowRight size={16} />
              </NavLink>
            </div>
          </motion.div>

          <motion.div
            className="scroll-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.14 }}
          >
            <div className="mini-pill">Digital Resources</div>
            <h3>Tekla tools, templates, and workflow resources</h3>
            <p>
              Explore developing digital resources and workflow-focused tools
              designed to support Tekla users, detailers, and steel project teams.
            </p>
            <FeatureGrid items={teklaStoreItems} icon={Store} />
            <div style={{ marginTop: "18px" }}>
              <NavLink to="/store" className="btn btn-primary">
                Visit Store <ArrowRight size={16} />
              </NavLink>
            </div>
          </motion.div>

          <motion.div
            className="scroll-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            <div className="mini-pill">Project Support Tools</div>
            <h3>Technical tools for project planning and workflow support</h3>
            <p>
              A growing collection of tools intended to support estimation,
              coordination, material review, and steel project planning.
            </p>
            <FeatureGrid items={constructionTools} icon={Boxes} />
            <div style={{ marginTop: "18px" }}>
              <NavLink to="/tools" className="btn btn-secondary">
                View All Tools
              </NavLink>
            </div>
          </motion.div>

          <motion.div
            className="scroll-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            <div className="mini-pill">Before / After</div>
            <h3>From concept to completed steel presentation</h3>
            <p>
              Compare concept visuals with finished project presentation to
              highlight detailing quality, coordination, and overall project clarity.
            </p>
            <BeforeAfterSlider />
          </motion.div>

          <motion.div
            className="scroll-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="mini-pill">Industry Highlights</div>
            <h3>Visual content and featured steel-related updates</h3>
            <p>
              Highlight selected visuals, project features, and steel-focused
              content that reflects the practical side of detailing and
              coordination work.
            </p>
            <FeatureGrid items={funContent} icon={SmilePlus} />
          </motion.div>

          <motion.div
            className="scroll-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            <div className="mini-pill">Resources</div>
            <h3>Technical articles, references, and project insights</h3>
            <p>
              Explore selected resources covering steel detailing concepts,
              drawing practices, field coordination, and related technical topics.
            </p>
            <FeatureGrid items={seoContent} icon={BookOpen} />
            <div style={{ marginTop: "18px" }}>
              <NavLink to="/resources" className="btn btn-secondary">
                Explore Resources
              </NavLink>
            </div>
          </motion.div>

          <motion.div
            className="scroll-card cta-strip"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <div className="cta-grid">
              <div className="cta-box">
                <div className="icon-badge">
                  <Calculator size={20} />
                </div>
                <h3>Need detailing or project support?</h3>
                <p>
                  Request a quote for steel detailing, take-offs, Tekla modeling,
                  connection support, or field-related revisions.
                </p>
                <NavLink to="/quote" className="btn btn-primary">
                  Request a Quote <ArrowRight size={16} />
                </NavLink>
              </div>

              <div className="cta-box">
                <div className="icon-badge">
                  <Package size={20} />
                </div>
                <h3>Looking for workflow resources?</h3>
                <p>
                  Explore tools, templates, and developing digital resources
                  designed to support practical detailing workflows.
                </p>
                <NavLink to="/store" className="btn btn-secondary">
                  Browse Resources
                </NavLink>
              </div>

              <div className="cta-box">
                <div className="icon-badge">
                  <MessageCircle size={20} />
                </div>
                <h3>Need to discuss a project?</h3>
                <p>
                  Use the chat box to send a quick inquiry about services,
                  project requirements, or available support.
                </p>
                <NavLink to="/contact" className="btn btn-secondary">
                  Contact Us
                </NavLink>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="scroll-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.26 }}
          >
            <div className="mini-pill">Capabilities</div>
            <h3>Expanding technical support and digital workflow resources</h3>
            <div className="why-grid">
              <div className="why-item">
                <div className="icon-badge small">
                  <FileText size={16} />
                </div>
                <div>
                  <div className="why-title">Structured Support Options</div>
                  <div className="why-text">
                    Flexible support for workflow tools, custom resources, and
                    project-based needs.
                  </div>
                </div>
              </div>

              <div className="why-item">
                <div className="icon-badge small">
                  <PenTool size={16} />
                </div>
                <div>
                  <div className="why-title">Digital Resource Access</div>
                  <div className="why-text">
                    A dedicated area for presenting workflow resources, templates,
                    and support tools.
                  </div>
                </div>
              </div>

              <div className="why-item">
                <div className="icon-badge small">
                  <Sparkles size={16} />
                </div>
                <div>
                  <div className="why-title">Technical Tool Development</div>
                  <div className="why-text">
                    Ongoing development of practical calculators and technical
                    reference tools.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingChatBox />
    </>
  );
}