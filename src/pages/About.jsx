export default function About() {
  return (
    <section className="page-section top-space">
      <div className="container page-grid">
        <div className="page-copy">
          <div className="pill">About ArMil</div>
          <h1 className="page-title">Built on precision, technical expertise, and commitment to quality.</h1>
          <p className="page-lead">
            ArMil Engineering & Detailing is built on a foundation of precision, technical expertise, and commitment to quality.
          </p>
          <p>
            We specialize in delivering steel detailing and engineering solutions that support the successful execution
            of construction projects across residential, commercial, and institutional sectors.
          </p>
        </div>

        <div className="story-cards">
          <div className="scroll-card">
            <h3>Who We Serve</h3>
            <p>
              We support residential, commercial, and institutional projects and work alongside contractors,
              fabricators, and engineering teams that value precision, buildability, and clear communication.
            </p>
          </div>

          <div className="scroll-card">
            <h3>How We Work</h3>
            <p>
              Our workflow is built around Tekla Structures modeling, coordinated detailing, responsive revisions,
              and fabrication-minded deliverables that support successful project execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}