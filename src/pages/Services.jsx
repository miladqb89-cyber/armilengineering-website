import { DraftingCompass, Boxes, FileText, Building2, Globe } from "lucide-react";

const serviceCards = [
  {
    title: "Steel Detailing",
    text: "We deliver fully coordinated, fabrication-ready steel detailing packages including shop drawings, erection drawings, and material take-offs.",
    icon: DraftingCompass,
  },
  {
    title: "3D Modeling (Tekla Structures)",
    text: "Highly detailed 3D models that reflect real-world conditions and support advanced visualization and coordination.",
    icon: Boxes,
  },
  {
    title: "Engineering Coordination & Support",
    text: "Supporting connection design workflows, reviewing structural requirements, and resolving technical challenges.",
    icon: FileText,
  },
  {
    title: "Project Coordination",
    text: "Working closely with contractors, fabricators, and engineers to reduce conflicts and improve alignment.",
    icon: Building2,
  },
  {
    title: "Construction & Field Support",
    text: "Responsive support including revisions, field adjustments, and updated documentation.",
    icon: Globe,
  },
];

export default function Services() {
  return (
    <>
      <section className="standard-hero">
        <div className="page-bg" style={{ backgroundImage: "url('/images/theme-construction-skyline.jpg')" }}>
          <div className="page-bg-overlay" />
        </div>
        <div className="container standard-hero-content">
          <div className="pill">Services</div>
          <h1>Technical expertise aligned with real project needs.</h1>
          <p className="lead">
            Our service offering is designed to support fabrication, coordination, and construction execution with confidence.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="cards-grid two">
            {serviceCards.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="scroll-card">
                  <div className="icon-badge"><Icon size={20} /></div>
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