import { motion } from "framer-motion";
import { BookOpen, Wrench, Layers, Ruler, Sparkles } from "lucide-react";

const resources = [
  {
    title: "What is Structural Steel Detailing?",
    text: "Structural steel detailing is the process of creating detailed drawings and models used for fabrication and erection. These include shop drawings, erection plans, and connection details that guide the entire construction process.",
    icon: Layers,
  },
  {
    title: "Shop Drawings vs Erection Drawings",
    text: "Shop drawings are used in fabrication shops to produce steel components, while erection drawings are used in the field to assemble and install those components accurately.",
    icon: Ruler,
  },
  {
    title: "What is Miscellaneous Steel?",
    text: "Miscellaneous steel includes items like stairs, railings, ladders, embeds, and platforms. These elements require precise detailing to ensure proper fit, safety, and finish quality.",
    icon: Wrench,
  },
  {
    title: "Why Field Verification Matters",
    text: "Field verification helps confirm actual site dimensions and conditions, reducing errors and preventing costly rework during fabrication and installation.",
    icon: BookOpen,
  },
  {
    title: "Understanding Material Take-Offs",
    text: "Material take-offs quantify steel components needed for a project. Accurate take-offs are essential for budgeting, procurement, and scheduling.",
    icon: Layers,
  },
  {
    title: "Connection Design Basics",
    text: "Connection design ensures that steel members are safely and efficiently connected. Proper coordination between detailing and engineering is critical for successful execution.",
    icon: Sparkles,
  },
];

export default function Resources() {
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

          <h1>Practical insights into steel detailing and construction workflows.</h1>

          <p className="lead">
            Explore key concepts in structural steel detailing, coordination,
            fabrication, and field execution.
          </p>
        </motion.div>
      </section>

      <section className="page-section overlap-section">
        <div className="container page-stack">
          <div className="cards-grid two">
            {resources.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="scroll-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="icon-badge">
                    <Icon size={20} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}