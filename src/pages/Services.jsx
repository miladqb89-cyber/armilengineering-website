import { motion } from "framer-motion";
import {
  Sparkles,
  DraftingCompass,
  Boxes,
  FileText,
  Building2,
  Globe,
} from "lucide-react";

const serviceCards = [
  {
    title: "Steel Detailing",
    text: "We deliver fully coordinated, fabrication-ready steel detailing packages including shop drawings, erection drawings, and material take-offs.",
    icon: DraftingCompass,
  },
  {
    title: "3D Modeling (Tekla Structures)",
    text: "Our team utilizes Tekla Structures to develop highly detailed and accurate 3D models that reflect real-world conditions.",
    icon: Boxes,
  },
  {
    title: "Engineering Coordination & Support",
    text: "We provide comprehensive engineering coordination services, supporting connection design workflows and resolving technical challenges.",
    icon: FileText,
  },
  {
    title: "Project Coordination",
    text: "We work closely with contractors, fabricators, and engineers to streamline communication and ensure alignment across all stages.",
    icon: Building2,
  },
  {
    title: "Construction & Field Support",
    text: "During construction, we provide responsive support including revisions, field adjustments, and updated documentation.",
    icon: Globe,
  },
];

export default function Services() {
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
          <div className="pill"><Sparkles size={14} /> Services</div>
          <h1>Technical expertise aligned with real project needs.</h1>
          <p className="lead">
            Our service offering is designed to support fabrication, coordination,
            and construction execution with confidence.
          </p>
        </motion.div>
      </section>

      <section className="page-section overlap-section">
        <div className="container page-stack">
          <div className="cards-grid two">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="scroll-card">
                  <div className="icon-badge">
                    <Icon size={20} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}