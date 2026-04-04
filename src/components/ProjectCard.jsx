import { ArrowUpRight, Expand } from "lucide-react";

export default function ProjectCard({ project, onOpenModel, onOpenLightbox }) {
  return (
    <div className="scroll-card project-card premium-project-card">
      <div className="project-image-wrap project-image-clickable">
        <img
          src={`/images/${project.image}`}
          alt={project.title}
          className={`project-image ${project.imageClass || ""}`}
        />

        <button
          type="button"
          className="project-image-overlay-btn"
          onClick={() => onOpenLightbox(project)}
        >
          <Expand size={18} />
          <span>View Full Image</span>
        </button>
      </div>

      <div className="project-meta-chip">{project.type}</div>
      <h3 className="project-title">{project.title}</h3>
      <p>{project.text}</p>

      {project.has3D && (
        <div className="project-model-cta">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => onOpenModel(project)}
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
  );
}