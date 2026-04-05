import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  BookOpen,
  Wrench,
  Layers,
  Ruler,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const resources = [
  {
    id: "steel-detailing-basics",
    title: "What is Structural Steel Detailing?",
    short:
      "The foundation of fabrication-ready drawings and models.",
    text:
      "Structural steel detailing is the process of producing detailed drawings and 3D models used for fabrication and erection. These include shop drawings, erection plans, and connection details that guide fabrication shops and field crews throughout construction.",
    images: [
      "/images/resource-detailing-1.jpg",
      "/images/resource-detailing-2.jpg",
      "/images/resource-detailing-3.jpg",
    ],
    icon: Layers,
  },
  {
    id: "shop-vs-erection",
    title: "Shop Drawings vs Erection Drawings",
    short:
      "Understanding how fabrication and field drawings differ.",
    text:
      "Shop drawings are used in fabrication shops to produce steel components with exact dimensions, welds, and materials. Erection drawings are used on-site to guide installation, showing placement, sequencing, and connections.",
    images: [
      "/images/resource-shop-1.jpg",
      "/images/resource-shop-2.jpg",
      "/images/resource-shop-3.jpg",
    ],
    icon: Ruler,
  },
  {
    id: "misc-steel",
    title: "What is Miscellaneous Steel?",
    short:
      "Special components that complete the structure.",
    text:
      "Miscellaneous steel includes stairs, railings, ladders, embeds, platforms, and other non-primary steel elements. These require precise detailing to ensure proper fit, safety, and coordination with architectural and structural systems.",
    images: [
      "/images/resource-misc-1.jpg",
      "/images/resource-misc-2.jpg",
      "/images/resource-misc-3.jpg",
    ],
    icon: Wrench,
  },
  {
    id: "field-verification",
    title: "Why Field Verification Matters",
    short:
      "Ensuring drawings match real-world conditions.",
    text:
      "Field verification confirms dimensions and conditions on-site before fabrication. This helps prevent costly errors, reduces rework, and ensures that detailing aligns with actual construction conditions.",
    images: [
      "/images/resource-field-1.jpg",
      "/images/resource-field-2.jpg",
      "/images/resource-field-3.jpg",
    ],
    icon: BookOpen,
  },
  {
    id: "takeoffs",
    title: "Understanding Material Take-Offs",
    short:
      "Accurate quantities for budgeting and planning.",
    text:
      "Material take-offs quantify steel components required for a project. Accurate take-offs are essential for estimating costs, procurement planning, and scheduling, helping teams reduce uncertainty and control budgets.",
    images: [
      "/images/resource-takeoff-1.jpg",
      "/images/resource-takeoff-2.jpg",
      "/images/resource-takeoff-3.jpg",
    ],
    icon: Layers,
  },
  {
    id: "connection-design-basics",
    title: "Connection Design Basics",
    short:
      "How steel members are safely connected.",
    text:
      "Connection design ensures structural elements transfer loads safely and efficiently. Coordination between engineers and detailers is critical to ensure connections are both structurally sound and practical for fabrication and installation.",
    images: [
      "/images/resource-connection-1.jpg",
      "/images/resource-connection-2.jpg",
      "/images/resource-connection-3.jpg",
    ],
    icon: Sparkles,
  },
];

function ResourceCard({ item, isOpen, onToggle }) {
  const Icon = item.icon;
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % item.images.length);
    }, 2200);

    return () => clearInterval(timer);
  }, [isOpen, item.images.length]);

  return (
    <motion.div
      id={item.id}
      className={`resource-card ${isOpen ? "open" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="resource-image-wrap">
        {item.images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`resource-image ${i === imgIndex ? "active" : ""}`}
            alt=""
          />
        ))}
        <div className="resource-overlay" />
      </div>

      <div className="resource-body">
        <div className="icon-badge">
          <Icon size={18} />
        </div>

        <h3>{item.title}</h3>
        <p className="resource-short">{item.short}</p>

        <div className={`resource-expand ${isOpen ? "show" : ""}`}>
          <p>{item.text}</p>
        </div>

        <button className="resource-btn" onClick={onToggle}>
          {isOpen ? "Show Less" : "Learn More"}
          <ChevronDown className={isOpen ? "rotate" : ""} size={16} />
        </button>
      </div>
    </motion.div>
  );
}

export default function Resources() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <section className="standard-hero">
        <div
          className="page-bg"
          style={{ backgroundImage: "url('/images/theme-steel-connection.jpg')" }}
        />
        <div className="page-bg-overlay" />

        <motion.div
          className="container standard-hero-content glass-hero"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="pill">
            <BookOpen size={14} /> Knowledge Center
          </div>

          <h1>Practical insights into steel detailing.</h1>

          <p className="lead">
            Learn key concepts that improve coordination, accuracy,
            and project performance.
          </p>
        </motion.div>
      </section>

      <section className="page-section overlap-section">
        <div className="container page-stack">
          <div className="resources-grid">
            {resources.map((item, index) => (
              <ResourceCard
                key={item.title}
                item={item}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>

          <div className="scroll-card services-final-cta">
            <h2>Want help applying this knowledge?</h2>
            <p>
              ArMil Engineering supports your projects with real-world
              expertise in detailing, estimation, and coordination.
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
    </>
  );
}