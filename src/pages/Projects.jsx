import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import ModelModal from "../components/ModelModal";
import ImageLightbox from "../components/ImageLightbox";

const projects = [
  {
    title: "Durga Temple, VA",
    image: "project-durga-temple.jpg",
    images: ["./images/project-durga-temple.jpg"],
    address: "8400 Durga Pl, Fairfax Station, VA 22039",
    type: "Institutional",
    scope: "Complex structural steel detailing and coordination support",
    software: "Tekla Structures",
    deliverables: "3D model, shop drawings, erection drawings, coordination support",
    text:
      "A complex structural detailing project requiring high-level coordination between architectural and structural systems.",
  },
  {
    title: "Kite Stair, MD",
    image: "project-kite-stair.jpg",
    images: ["./images/project-kite-stair.jpg"],
    imageClass: "contain-image",
    has3D: true,
    model: "./models/steel-model.glb",
    address: "9021 Bennett Creek Blvd, Urbana, MD 21704",
    type: "Custom Stair System",
    scope: "Custom stair detailing and connection coordination",
    software: "Tekla Structures",
    deliverables: "Stair detailing package, connection coordination, fabrication support",
    text:
      "A custom stair system developed with a focus on geometric precision and fabrication accuracy.",
  },
  {
    title: "Private Residence, VA",
    image: "project-private-house.jpg",
    images: ["./images/project-private-house.jpg"],
    address: "1900 Virginia Ave, Mclean, VA 22101",
    type: "Residential",
    scope: "Residential structural steel detailing and support",
    software: "Tekla Structures",
    deliverables: "Modeling, shop drawings, detailing support",
    text:
      "A residential structural steel project delivered with efficiency and clarity.",
  },
  {
    title: "YMCA Fence, VA",
    image: "project-ymca-fence.jpg",
    images: ["./images/project-ymca-fence.jpg"],
    address: "2640 Shirlington Road, Arlington, VA 22206",
    type: "Community Facility",
    scope: "Structural and fencing detailing support",
    software: "Tekla Structures / Coordination workflow",
    deliverables: "Detailing package, installation documents, revision support",
    text:
      "A structural and fencing project emphasizing durability, alignment, and compliance.",
  },
];

export default function Projects() {
  const [activeModelProject, setActiveModelProject] = useState(null);
  const [lightboxProject, setLightboxProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (activeModelProject || lightboxProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModelProject, lightboxProject]);

  const openLightbox = (project) => {
    setLightboxProject(project);
    setLightboxIndex(0);
  };

  const closeLightbox = () => {
    setLightboxProject(null);
    setLightboxIndex(0);
  };

  const prevLightbox = () => {
    if (!lightboxProject?.images?.length) return;
    setLightboxIndex((prev) =>
      prev === 0 ? lightboxProject.images.length - 1 : prev - 1
    );
  };

  const nextLightbox = () => {
    if (!lightboxProject?.images?.length) return;
    setLightboxIndex((prev) =>
      prev === lightboxProject.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <section className="standard-hero">
        <div
          className="page-bg"
          style={{ backgroundImage: "url('./images/theme-steel-bridge.jpg')" }}
        />
        <div className="page-bg-overlay" />

        <motion.div
          className="container standard-hero-content glass-hero"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pill"><Sparkles size={14} /> Projects</div>
          <h1>Technical excellence, detail, and dependable delivery.</h1>
          <p className="lead">
            Our portfolio reflects a commitment to technical excellence, attention
            to detail, and dependable delivery.
          </p>
        </motion.div>
      </section>

      <section className="page-section overlap-section">
        <div className="container page-stack">
          <div className="cards-grid two">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpenModel={setActiveModelProject}
                onOpenLightbox={openLightbox}
              />
            ))}
          </div>
        </div>
      </section>

      <ModelModal
        open={!!activeModelProject}
        onClose={() => setActiveModelProject(null)}
        title={activeModelProject?.title || ""}
        modelPath={activeModelProject?.model || ""}
      />

      <ImageLightbox
        open={!!lightboxProject}
        images={lightboxProject?.images || []}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
        title={lightboxProject?.title || ""}
      />
    </>
  );
}