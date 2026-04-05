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
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import FloatingChatBox from "../components/FloatingChatBox";

const serviceCards = [
  {
    title: "Project Management",
    text: "We provide structured project coordination and management support to help keep teams aligned, communication clear, and execution efficient from concept through completion.",
    icon: Building2,
  },
  {
    title: "Structural Steel Detailing",
    text: "Our team delivers high-precision, fabrication-ready detailing packages including shop drawings, erection drawings, and coordinated models developed for constructability and field performance.",
    icon: DraftingCompass,
  },
  {
    title: "Misc. Steel Detailing",
    text: "We produce accurate detailing for stairs, railings, ladders, embeds, platforms, and other miscellaneous steel components to support smooth fabrication and installation.",
    icon: Boxes,
  },
  {
    title: "Connection Design",
    text: "We support connection design workflows through technical coordination and detailing assistance, helping teams resolve project requirements efficiently and clearly.",
    icon: FileText,
  },
  {
    title: "Estimation & Material Take-Offs",
    text: "Our quantity take-off and estimation services provide dependable information for bidding, budgeting, planning, and material control with greater confidence.",
    icon: Calculator,
  },
  {
    title: "Field Verification in DMV Area",
    text: "We provide field verification services across Virginia, Maryland, and Washington, DC to confirm dimensions, identify discrepancies, and improve alignment between drawings and site conditions.",
    icon: MapPinned,
  },
];

const valuePoints = [
  "Fabrication-ready deliverables",
  "Buildable, field-conscious detailing",
  "Responsive project coordination",
  "Support across VA, MD, and DC",
];

function ServiceAccordionItem({ item, isOpen, onClick }) {
  const Icon = item.icon;

  return (
    <motion.div
      className={`service-accordion-item ${isOpen ? "open" : ""}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      <button className="service-accordion-trigger" onClick={onClick} type="button">
        <div className="service-accordion-left">
          <div className="service-icon-shell">
            <div className="icon-badge">
              <Icon size={18} />
            </div>
          </div>
          <span>{item.title}</span>
        </div>
        <ChevronDown size={18} className="service-chevron" />
      </button>

      <div className={`service-accordion-panel ${isOpen ? "expanded" : ""}`}>
        <div className="service-accordion-content">
          <p>{item.text}</p>

          <div className="service-accordion-actions">
            <NavLink to="/quote" className="btn btn-primary">
              Request Quote
            </NavLink>
            <NavLink to="/contact" className="btn btn-secondary">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="services-hero premium-services-hero">
        <div
          className="page-bg"
          style={{ backgroundImage: "url('/images/theme-construction-skyline.jpg')" }}
        />
        <div className="page-bg-overlay premium-overlay" />

        <motion.div
          className="container standard-hero-content glass-hero premium-hero-card"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pill">
            <Sparkles size={14} />
            Premium Service Solutions
          </div>

          <h1>Specialized steel detailing and project support built for real-world execution.</h1>

          <p className="lead">
            ArMil Engineering provides practical, buildable support in structural steel
            detailing, misc. steel detailing, estimation, coordination, and field verification.
          </p>

          <p>
            We focus on clarity, constructability, responsiveness, and precision—helping clients
            move projects forward with confidence from concept through delivery.
          </p>

          <div className="hero-actions">
            <NavLink to="/quote" className="btn btn-primary">
              Request a Quote
            </NavLink>
            <NavLink to="/projects" className="btn btn-secondary">
              View Projects
            </NavLink>
          </div>

          <p className="quote-inline-text">
            Need estimation or take-off support? Request a quote and get a fast response.
          </p>
        </motion.div>
      </section>

      <section className="page-section overlap-section premium-services-main">
        <div className="container page-stack">
          <motion.div
            className="scroll-card premium-intro-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mini-pill">What We Deliver</div>
            <div className="services-intro-grid">
              <div>
                <h3>Services designed to support fabrication, coordination, and project delivery</h3>
                <p>
                  Our work is built around technical excellence, field awareness, and reliable
                  coordination. We do not just prepare drawings—we help teams build with better
                  clarity and fewer surprises.
                </p>
              </div>

              <div className="services-value-list">
                {valuePoints.map((point) => (
                  <div key={point} className="value-item">
                    <CheckCircle2 size={18} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="scroll-card premium-accordion-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <div className="mini-pill">Core Services</div>
            <h3 className="services-section-title">Explore our service areas</h3>

            <div className="services-accordion">
              {serviceCards.map((item, index) => (
                <ServiceAccordionItem
                  key={item.title}
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="scroll-card process-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <div className="mini-pill">Our Process</div>
            <h3>How we support your project</h3>

            <div className="process-grid">
              <div className="process-step">
                <div className="process-number">01</div>
                <h4>Review</h4>
                <p>We evaluate scope, drawings, specifications, and project requirements.</p>
              </div>

              <div className="process-step">
                <div className="process-number">02</div>
                <h4>Coordinate</h4>
                <p>We align detailing, constructability, and communication across the workflow.</p>
              </div>

              <div className="process-step">
                <div className="process-number">03</div>
                <h4>Deliver</h4>
                <p>We issue accurate, buildable deliverables designed for fabrication and field use.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="scroll-card services-bottom-cta premium-final-cta"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="cta-icon-top">
              <MessageCircle size={20} />
            </div>

            <h3>Let’s support your next project</h3>
            <p>
              Whether you need structural steel detailing, misc. steel support,
              connection coordination, take-offs, or field verification, ArMil is
              ready to help you move forward with precision and confidence.
            </p>

            <div className="hero-actions center-actions">
              <NavLink to="/quote" className="btn btn-primary">
                Request a Quote <ArrowRight size={16} />
              </NavLink>
              <NavLink to="/contact" className="btn btn-secondary">
                Speak With Us
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingChatBox />
    </>
  );
}