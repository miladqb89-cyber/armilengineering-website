import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="standard-hero">
        <div
          className="page-bg"
          style={{ backgroundImage: "url('/images/theme-abstract-structure.jpg')" }}
        />
        <div className="page-bg-overlay" />

        <motion.div
          className="container standard-hero-content glass-hero"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pill"><Sparkles size={14} /> About ArMil</div>
          <h1>Built on precision, technical expertise, and commitment to quality.</h1>
          <p className="lead">
            ArMil Engineering &amp; Detailing is built on a foundation of precision,
            technical expertise, and commitment to quality.
          </p>
        </motion.div>
      </section>

      <section className="page-section overlap-section">
        <div className="container page-stack">
          <div className="cards-grid two">
            <div className="scroll-card">
              <h3>Who We Serve</h3>
              <p>
                We support residential, commercial, and institutional projects and work
                alongside contractors, fabricators, and engineering teams that value
                precision, buildability, and clear communication.
              </p>
            </div>

            <div className="scroll-card">
              <h3>How We Work</h3>
              <p>
                Our workflow is built around Tekla Structures modeling, coordinated
                detailing, responsive revisions, and fabrication-minded deliverables
                that support successful project execution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}