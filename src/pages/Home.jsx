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
  "Guess the Connection",
  "Steel Price Trend Widget",
  "Before / After Tekla Gallery",
  "Tekla Model Photo Gallery",
  "Steel Memes",
  "Detailer Quizzes",
];

const seoContent = [
  "Glossary of Steel Terms",
  "Tekla Tips Blog",
  "Case Studies",
  "Free Checklists",
  "Premium Checklists",
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
            <h3>Steel detailing, Tekla support, and practical tools for real projects</h3>
            <p>
              ArMil Engineering &amp; Detailing now goes beyond portfolio presentation.
              We support fabrication, coordination, estimation, and digital workflow
              improvement with practical tools, expert support, and industry-focused resources.
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
            <div className="mini-pill">Free Tools</div>
            <h3>Traffic-driving tools visitors will actually use</h3>
            <p>
              Add useful free tools to increase traffic, improve SEO, and keep
              estimators, fabricators, engineers, and detailers coming back.
            </p>
            <FeatureGrid items={freeTools} icon={Calculator} />
            <div style={{ marginTop: "18px" }}>
              <NavLink to="/tools" className="btn btn-primary">
                Explore Free Tools <ArrowRight size={16} />
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
            <div className="mini-pill">Tekla Store</div>
            <h3>Turn your expertise into paid Tekla products</h3>
            <p>
              Offer downloadable Tekla tools and templates that create value for
              other detailers while opening a new revenue stream for ArMil.
            </p>
            <FeatureGrid items={teklaStoreItems} icon={Store} />
            <div style={{ marginTop: "18px" }}>
              <NavLink to="/store" className="btn btn-primary">
                Visit Tekla Store <ArrowRight size={16} />
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
            <div className="mini-pill">Construction Tools</div>
            <h3>Free and premium tools for estimators, PMs, and fabricators</h3>
            <p>
              Mix helpful free tools with advanced paid tools so the site supports
              both lead generation and product sales.
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
            <h3>Engineering visualization with presentation impact</h3>
            <p>
              Compare conceptual/model-driven visuals with project-ready
              presentation output to show coordination quality and detailing clarity.
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
            <div className="mini-pill">Fun & Engagement</div>
            <h3>Make the website memorable and worth revisiting</h3>
            <p>
              Add light, professional engagement features that fit the steel and
              detailing world while increasing repeat visits.
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
            <div className="mini-pill">SEO Content</div>
            <h3>Build authority with content that ranks and sells</h3>
            <p>
              Educational content helps your website rank better, attract search
              traffic, and support both service inquiries and digital product sales.
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
                <h3>Need estimation or take-off support?</h3>
                <p>
                  Request a quote for detailing, take-offs, modeling, connection support,
                  or field-driven project revisions.
                </p>
                <NavLink to="/quote" className="btn btn-primary">
                  Request a Quote <ArrowRight size={16} />
                </NavLink>
              </div>

              <div className="cta-box">
                <div className="icon-badge">
                  <Package size={20} />
                </div>
                <h3>Want ready-to-use Tekla products?</h3>
                <p>
                  Explore downloadable macros, components, templates, and detailing
                  resources built for practical workflows.
                </p>
                <NavLink to="/store" className="btn btn-secondary">
                  Browse Store
                </NavLink>
              </div>

              <div className="cta-box">
                <div className="icon-badge">
                  <MessageCircle size={20} />
                </div>
                <h3>Need quick help?</h3>
                <p>
                  Use the chat box on the lower right to send a fast project inquiry
                  or ask about services, tools, and deliverables.
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
            <div className="mini-pill">What’s Coming</div>
            <h3>A stronger ArMil platform for visitors, leads, and digital sales</h3>
            <div className="why-grid">
              <div className="why-item">
                <div className="icon-badge small">
                  <FileText size={16} />
                </div>
                <div>
                  <div className="why-title">Pricing Structure</div>
                  <div className="why-text">
                    Clear pricing for macros, custom components, report templates, and packs.
                  </div>
                </div>
              </div>

              <div className="why-item">
                <div className="icon-badge small">
                  <PenTool size={16} />
                </div>
                <div>
                  <div className="why-title">Download Store Layout</div>
                  <div className="why-text">
                    A clean product page system for free and paid Tekla downloads.
                  </div>
                </div>
              </div>

              <div className="why-item">
                <div className="icon-badge small">
                  <Sparkles size={16} />
                </div>
                <div>
                  <div className="why-title">Calculator Logic</div>
                  <div className="why-text">
                    Interactive React calculators to make the site more useful and searchable.
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