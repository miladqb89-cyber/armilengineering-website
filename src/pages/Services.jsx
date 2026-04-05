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
} from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FloatingChatBox from "../components/FloatingChatBox";

const services = [
  {
    id: "project-management",
    title: "Project Management",
    shortText:
      "Structured project coordination to keep design, detailing, fabrication, and execution aligned.",
    detailText:
      "We provide organized project management support to improve communication, coordination, and progress tracking throughout the life of the project. Our approach helps teams stay aligned from planning through execution while reducing delays and improving workflow clarity.",
    images: [
      "/images/service-project-management-1.jpg",
      "/images/service-project-management-2.jpg",
      "/images/service-project-management-3.jpg",
    ],
    icon: Building2,
  },
  {
    id: "structural-steel-detailing",
    title: "Structural Steel Detailing",
    shortText:
      "Fabrication-ready shop drawings, erection drawings, and coordinated 3D models.",
    detailText:
      "Our structural steel detailing services are developed with constructability, field conditions, and fabrication efficiency in mind. We produce clear, accurate, and buildable deliverables that support smoother production, fewer errors, and better coordination between project stakeholders.",
    images: [
      "/images/service-structural-steel-1.jpg",
      "/images/service-structural-steel-2.jpg",
      "/images/service-structural-steel-3.jpg",
    ],
    icon: DraftingCompass,
  },
  {
    id: "misc-steel-detailing",
    title: "Misc. Steel Detailing",
    shortText:
      "Accurate detailing for stairs, railings, ladders, embeds, and platforms.",
    detailText:
      "We specialize in miscellaneous steel detailing for components that require both technical precision and practical fit. Our work supports accurate fabrication, proper installation, and a clean final result across a wide range of project types.",
    images: [
      "/images/service-misc-steel-1.jpg",
      "/images/service-misc-steel-2.jpg",
      "/images/service-misc-steel-3.jpg",
    ],
    icon: Boxes,
  },
  {
    id: "connection-design",
    title: "Connection Design",
    shortText:
      "Technical coordination to support efficient and accurate connection design workflows.",
    detailText:
      "We assist with connection design coordination to help align engineering requirements with fabrication needs. This service supports better clarity, reduced conflicts, and smoother communication across the detailing and engineering process.",
    images: [
      "/images/service-connection-design-1.jpg",
      "/images/service-connection-design-2.jpg",
      "/images/service-connection-design-3.jpg",
    ],
    icon: FileText,
  },
  {
    id: "estimation-takeoffs",
    title: "Estimation & Material Take-Offs",
    shortText:
      "Reliable quantity take-offs and estimating support for bidding and planning.",
    detailText:
      "Our take-off and estimation services provide dependable quantity information for budgeting, bidding, procurement, and material planning. This helps clients improve cost visibility, reduce uncertainty, and make informed project decisions faster.",
    images: [
      "/images/service-estimation-1.jpg",
      "/images/service-estimation-2.jpg",
      "/images/service-estimation-3.jpg",
    ],
    icon: Calculator,
  },
  {
    id: "field-verification",
    title: "Field Verification in DMV Area",
    shortText:
      "On-site verification services across Virginia, Maryland, and Washington, DC.",
    detailText:
      "We provide field verification to confirm dimensions, identify discrepancies, and ensure that drawings align with actual site conditions. This service improves coordination quality and helps reduce costly revisions or installation issues later in the project.",
    images: [
      "/images/service-field-verification-1.jpg",
      "/images/service-field-verification-2.jpg",
      "/images/service-field-verification-3.jpg",
    ],
    icon: MapPinned,
  },
];

function ServiceCard({ item, isOpen, onToggle }) {
  const Icon = item.icon;
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setImageIndex(0);
      return;
    }

    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % item.images.length);
    }, 2200);

    return () => clearInterval(timer);
  }, [isOpen, item.images.length]);

  return (
    <motion.div
      id={item.id}
      className={`service-detail-card ${isOpen ? "open" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="service-detail-image-wrap">
        {item.images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`${item.title} ${idx + 1}`}
            className={`service-detail-image ${idx === imageIndex ? "active" : ""}`}
          />
        ))}
        <div className="service-detail-image-overlay" />

        <div className="service-slider-dots">
          {item.images.map((_, idx) => (
            <span
              key={idx}
              className={`service-slider-dot ${idx === imageIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>

      <div className="service-detail-body">
        <div className="service-detail-top">
          <div className="icon-badge">
            <Icon size={18} />
          </div>
          <h3>{item.title}</h3>
        </div>

        <p className="service-detail-short">{item.shortText}</p>

        <div className={`service-detail-expand ${isOpen ? "show" : ""}`}>
          <p>{item.detailText}</p>

          <div className="service-detail-actions">
            <NavLink to="/quote" className="btn btn-primary">
              Request Quote
            </NavLink>
            <NavLink to="/contact" className="btn btn-secondary">
              Contact Us
            </NavLink>
          </div>
        </div>

        <button
          type="button"
          className="service-learn-more"
          onClick={onToggle}
        >
          {isOpen ? "Show Less" : "Learn More"}
          <ChevronDown
            size={16}
            className={`learn-more-icon ${isOpen ? "rotate" : ""}`}
          />
        </button>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

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
            Explore our core services below. Each area is designed to support
            buildability, coordination, accuracy, and project performance.
          </p>
        </motion.div>
      </section>

      <section className="page-section overlap-section">
        <div className="container page-stack">
          <div className="scroll-card">
            <div className="services-card-grid">
              {services.map((item, index) => (
                <ServiceCard
                  key={item.title}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>

          <div className="scroll-card services-final-cta">
            <h2>Need help with your next project?</h2>
            <p>
              Whether you need detailing, take-offs, project coordination, or
              field verification, ArMil is ready to support your work with
              clarity and precision.
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