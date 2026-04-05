import { motion } from "framer-motion";
import {
  Sparkles,
  DraftingCompass,
  Boxes,
  FileText,
  Building2,
  Calculator,
  MapPinned,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import FloatingChatBox from "../components/FloatingChatBox";

const serviceCards = [
  {
    title: "Project Management",
    text: "We provide structured project management and coordination support to align design, detailing, fabrication, and field execution. Our focus on communication clarity, scheduling awareness, and real-world workflow integration helps projects move efficiently from concept through completion.",
    icon: Building2,
  },
  {
    title: "Structural Steel Detailing",
    text: "We deliver fabrication-ready detailing packages including shop drawings, erection drawings, and fully coordinated 3D models. Each deliverable is developed with constructability, field conditions, and fabrication efficiency in mind.",
    icon: DraftingCompass,
  },
  {
    title: "Misc. Steel Detailing",
    text: "We specialize in accurate detailing of stairs, railings, ladders, embeds, and platforms—ensuring proper fit, fabrication precision, and smooth installation for all miscellaneous steel components.",
    icon: Boxes,
  },
  {
    title: "Connection Design",
    text: "We support connection design workflows through technical coordination and detailing integration, helping resolve complex structural requirements while maintaining alignment between engineering intent and fabrication needs.",
    icon: FileText,
  },
  {
    title: "Estimation & Material Take-Offs",
    text: "Our estimation and quantity take-off services provide reliable data for bidding, budgeting, and material planning—helping clients reduce uncertainty, improve cost control, and accelerate decision-making.",
    icon: Calculator,
  },
  {
    title: "Field Verification in DMV Area",
    text: "We provide field verification services across Virginia, Maryland, and Washington, DC to confirm dimensions, identify discrepancies, and ensure that detailing aligns with real-world conditions.",
    icon: MapPinned,
  },
];

const valuePoints = [
  "Fabrication-ready deliverables",
  "Constructability-focused detailing",
  "Real-world field coordination",
  "Fast response and revision support",
  "Coverage across VA • MD • DC",
];

function ServiceItem({ item, isOpen, onClick }) {
  const Icon = item.icon;

  return (
    <div className={`service-item ${isOpen ? "open" : ""}`}>
      <button className="service-trigger" onClick={onClick} type="button">
        <div className="service-left">
          <div className="icon-badge">
            <Icon size={18} />
          </div>
          <span>{item.title}</span>
        </div>
        <ChevronDown size={18} className="service-chevron" />
      </button>

      <div className={`service-panel ${isOpen ? "show" : ""}`}>
        <div className="service-content">
          <p>{item.text}</p>

          <div className="service-actions">
            <NavLink to="/quote" className="btn btn-primary">
              Request Quote <ArrowRight size={16} />
            </NavLink>
            <NavLink to="/contact" className="btn btn-secondary">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="services-hero">
        <div
          className="page-bg"
          style={{ backgroundImage: "url('/images/theme-construction-skyline.jpg')" }}
        />
        <div className="page-bg-overlay services-overlay" />

        <motion.div
          className="container hero-content glass-hero services-hero-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="pill">
            <Sparkles size={14} /> Services
          </div>

          <h1>Engineering precision applied to real-world construction.</h1>

          <p className="lead">
            ArMil Engineering delivers steel detailing, coordination,
            estimation, and field support services designed for constructability,
            accuracy, and performance.
          </p>

          <div className="hero-actions">
            <NavLink to="/quote" className="btn btn-primary">
              Request a Quote
            </NavLink>
            <NavLink to="/projects" className="btn btn-secondary">
              View Projects
            </NavLink>
          </div>

          <p className="quote-line">
            Need estimation or take-off support? Request a quote today.
          </p>
        </motion.div>
      </section>

      <section className="page-section overlap-section">
        <div className="container page-stack">
          <div className="scroll-card">
            <div className="value-grid">
              {valuePoints.map((point) => (
                <div key={point} className="value-chip">
                  <CheckCircle2 size={18} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-card">
            <h2 className="section-title">Core Services</h2>

            <div className="services-accordion">
              {serviceCards.map((item, index) => (
                <ServiceItem
                  key={item.title}
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>

          <div className="scroll-card">
            <h2 className="section-title">Our Process</h2>

            <div className="process-grid services-process-grid">
              <div className="process-box">
                <div className="num">01</div>
                <h4>Review</h4>
                <p>We analyze project scope, drawings, and requirements.</p>
              </div>

              <div className="process-box">
                <div className="num">02</div>
                <h4>Coordinate</h4>
                <p>We align detailing, fabrication, and field conditions.</p>
              </div>

              <div className="process-box">
                <div className="num">03</div>
                <h4>Deliver</h4>
                <p>We provide accurate, buildable, and ready-to-use outputs.</p>
              </div>
            </div>
          </div>

          <div className="scroll-card services-final-cta">
            <h2>Let’s support your next project</h2>
            <p>
              Whether you need detailing, estimation, or field verification,
              we help you move forward with confidence and precision.
            </p>

            <div className="hero-actions center-actions">
              <NavLink to="/quote" className="btn btn-primary">
                Request a Quote
              </NavLink>
              <NavLink to="/contact" className="btn btn-secondary">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <FloatingChatBox />
    </>
  );
}