import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import ModelViewer from "./ModelViewer";

function ModelModal({ open, onClose, title, modelPath }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="model-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="model-modal-panel"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          <div className="model-modal-header">
            <div>
              <div className="mini-pill">Interactive 3D Model</div>
              <h3 className="model-modal-title">{title}</h3>
            </div>
            <button className="model-close-btn" onClick={onClose} type="button">
              <X size={18} />
            </button>
          </div>

          <p className="model-modal-text">
            Rotate the model by hand to explore geometry, proportions, and detailing.
          </p>

          <ModelViewer modelPath={modelPath} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProjectCard({ project }) {
  const [openModel, setOpenModel] = useState(false);

  return (
    <>
      <div className="scroll-card project-card premium-project-card">
        <div className="project-image-wrap">
          <img
            src={`/images/${project.image}`}
            alt={project.title}
            className={`project-image ${project.imageClass || ""}`}
          />
        </div>

        <div className="project-meta-chip">{project.type}</div>
        <h3 className="project-title">{project.title}</h3>
        <p>{project.text}</p>

        {project.has3D && (
          <div className="project-model-cta">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setOpenModel(true)}
            >
              View 3D Model <ArrowUpRight size={16} />
            </button>
          </div>
        )}

        <div className="project-details">
          <div>
            <span>Location</span>
            <strong>{project.address}</strong>
          </div>
          <div>
            <span>Scope</span>
            <strong>{project.scope}</strong>
          </div>
          <div>
            <span>Software</span>
            <strong>{project.software}</strong>
          </div>
          <div>
            <span>Deliverables</span>
            <strong>{project.deliverables}</strong>
          </div>
        </div>
      </div>

      <ModelModal
        open={openModel}
        onClose={() => setOpenModel(false)}
        title={project.title}
        modelPath={project.model}
      />
    </>
  );
}