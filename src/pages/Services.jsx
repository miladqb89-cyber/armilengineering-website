import { motion } from "framer-motion";
import {
  Sparkles,
  DraftingCompass,
  Boxes,
  FileText,
  Building2,
  Globe,
  Calculator,
  MapPinned,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import FloatingChatBox from "../components/FloatingChatBox";

const serviceCards = [
  {
    title: "Project Management",
    text: "Structured coordination support to help project teams stay aligned from planning through execution.",
    icon: Building2,
  },
  {
    title: "Structural Steel Detailing",
    text: "Fabrication-ready shop drawings, erection drawings, and coordinated detailing packages developed for accuracy and constructability.",
    icon: DraftingCompass,
  },
  {
    title: "Misc. Steel Detailing",
    text: "Detailing support for stairs, railings, platforms, embeds, and custom miscellaneous steel components.",
    icon: Boxes,
  },
  {
    title: "Connection Design Support",
    text: "Engineering coordination support to streamline connection design workflows and resolve technical issues efficiently.",
    icon: FileText,
  },
  {
    title: "Estimation & Material Take-Offs",
    text: "Clear and reliable quantity take-offs and estimating support to improve planning, pricing, and material control.",
    icon: Calculator,
  },
  {
    title: "Field Verification in DMV Area",
    text: "On-site support and field verification services across Virginia, Maryland, and Washington, DC for better project accuracy.",
    icon: MapPinned,
  },
];

function ServiceAccordionItem({ item, isOpen, onClick }) {
  const Icon = item.icon;

  return (
    <div className={`service-accordion-item ${isOpen ? "open" : ""}`}>
      <button className="service-accordion-trigger" onClick={onClick}>
        <div className="service-accordion-left">
          <div className="icon-badge">
            <Icon size={18} />
          </div>
          <span>{item.title}</span>
        </div>
        <ChevronDown size={18} className="service-chevron" />
      </button>

      {isOpen && (
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
      )}
    </div>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="standard-hero">
        <div
          className="page-bg"
          style={{ backgroundImage: "url('/images/theme-construction-skyline.jpg')" }}
        />
        <div className="page-bg-overlay" />

        <motion.div
          className="container standard-hero-content glass-hero"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pill">
            <Sparkles size={14} /> Services
          </div>
          <h1>Technical expertise aligned with real project needs.</h1>
          <p className="lead">
            ArMil provides practical, buildable support for steel detailing,
            project coordination, estimation, and field verification.
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
            Need estimation or take-off support? Request a quote.
          </p>
        </motion.div>
      </section>

      <section className="page-section overlap-section">
        <div className="container page-stack">
          <motion.div
            className="scroll-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mini-pill">What We Do</div>
            <h3>Services designed to support fabrication and construction delivery</h3>
            <p>
              Our work is built around technical clarity, constructability, and
              project responsiveness. Explore our service areas below.
            </p>
          </motion.div>

          <motion.div
            className="scroll-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
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
            className="scroll-card services-bottom-cta"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3>Let’s support your next project</h3>
            <p>
              Whether you need structural steel detailing, misc. steel support,
              take-offs, or field verification, we can help you move forward with confidence.
            </p>
            <div className="hero-actions">
              <NavLink to="/quote" className="btn btn-primary">
                Request a Quote
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