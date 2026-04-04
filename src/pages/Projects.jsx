import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  {
    title: "Durga Temple, VA",
    image: "project-durga-temple.jpg",
    address: "8400 Durga Pl, Fairfax Station, VA 22039",
    type: "Institutional",
    scope: "Complex structural steel detailing and coordination support",
    software: "Tekla Structures",
    deliverables: "3D model, shop drawings, erection drawings, coordination support",
    text:
      "A complex structural detailing project requiring high-level coordination between architectural and structural systems. The scope involved precise modeling and detailed documentation to support fabrication and on-site assembly.",
  },
  {
    title: "Kite Stair, MD",
    image: "project-kite-stair.jpg",
    imageClass: "contain-image",
    has3D: true,
    model: "/models/steel-model.glb",
    address: "9021 Bennett Creek Blvd, Urbana, MD 21704",
    type: "Custom Stair System",
    scope: "Custom stair detailing and connection coordination",
    software: "Tekla Structures",
    deliverables: "Stair detailing package, connection coordination, fabrication support",
    text:
      "A custom stair system developed with a focus on geometric precision and fabrication accuracy. The project required detailed connection design coordination and constructability-driven solutions.",
  },
  {
    title: "Private Residence, VA",
    image: "project-private-house.jpg",
    address: "1900 Virginia Ave, Mclean, VA 22101",
    type: "Residential",
    scope: "Residential structural steel detailing and support",
    software: "Tekla Structures",
    deliverables: "Modeling, shop drawings, detailing support",
    text:
      "A residential structural steel project delivered with efficiency and clarity. The detailing scope supported seamless fabrication and installation while maintaining structural integrity and design intent.",
  },
  {
    title: "YMCA Fence, VA",
    image: "project-ymca-fence.jpg",
    address: "2640 Shirlington Road, Arlington, VA 22206",
    type: "Community Facility",
    scope: "Structural and fencing detailing support",
    software: "Tekla Structures / Coordination workflow",
    deliverables: "Detailing package, installation documents, revision support",
    text:
      "A structural and fencing project emphasizing durability, alignment, and compliance with project specifications. Delivered with clear documentation to ensure efficient installation and long-term performance.",
  },
];

export default function Projects() {
  return (
    <>
      <section className="standard-hero">
        <div className="page-bg" style={{ backgroundImage: "url('/images/theme-steel-bridge.jpg')" }}>
          <div className="page-bg-overlay" />
        </div>
        <div className="container standard-hero-content">
          <div className="pill">Projects</div>
          <h1>Technical excellence, detail, and dependable delivery.</h1>
          <p className="lead">
            Our portfolio reflects a commitment to technical excellence, attention to detail, and dependable delivery.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="cards-grid two">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}