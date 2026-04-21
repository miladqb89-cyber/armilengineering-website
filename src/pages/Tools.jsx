import { motion } from "framer-motion";
import {
  Calculator,
  ArrowRight,
  Scale,
  Square,
  Bolt,
  Ruler,
  CircleDot,
  Building2,
  Package,
  ShieldCheck,
  Store,
  CheckCircle2,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const featuredTools = [
  {
    id: "steel-weight-calculator",
    title: "Steel Weight Calculator",
    icon: Scale,
    desc: "Calculate approximate steel weight for plate, flat bar, round bar, pipe, HSS, and angle sections.",
    badge: "Available",
    link: "/tools/steel-weight",
  },
  {
    id: "plate-weight-calculator",
    title: "Plate Weight Calculator",
    icon: Square,
    desc: "Quick weight reference for steel plates based on thickness, width, and length.",
    badge: "Coming Soon",
    link: "#",
  },
  {
    id: "bolt-weight-calculator",
    title: "Bolt Weight Calculator",
    icon: Bolt,
    desc: "Estimate bolt weight for common project takeoff and procurement reference.",
    badge: "Coming Soon",
    link: "#",
  },
  {
    id: "weld-size-calculator",
    title: "Weld Size Calculator",
    icon: Ruler,
    desc: "Practical weld size and throat reference for detailing and shop review.",
    badge: "Coming Soon",
    link: "#",
  },
  {
    id: "hss-pipe-reference",
    title: "HSS / Pipe Reference",
    icon: CircleDot,
    desc: "Reference common HSS and pipe dimensions for everyday steel workflow use.",
    badge: "Coming Soon",
    link: "#",
  },
  {
    id: "beam-size-lookup",
    title: "Beam Size Lookup",
    icon: Building2,
    desc: "Fast lookup area for common beam profile information and comparison.",
    badge: "Coming Soon",
    link: "#",
  },
];

const advancedTools = [
  {
    id: "change-order-calculator-pro",
    title: "Change Order Calculator",
    desc: "Expanded support for material, labor, equipment, and pricing review.",
  },
  {
    id: "anchor-bolt-helper",
    title: "Anchor Bolt Helper",
    desc: "Practical planning support for anchor layout and field coordination needs.",
  },
  {
    id: "plate-nesting-optimizer",
    title: "Plate Nesting Optimizer",
    desc: "A dedicated workflow tool for improving material usage and layout planning.",
  },
  {
    id: "material-takeoff-generator",
    title: "Material Takeoff Generator",
    desc: "Structured takeoff support for project review and estimating workflows.",
  },
];

const pageBenefits = [
  "Useful technical references in one place",
  "Practical support for steel detailing workflows",
  "Faster access to common calculations and references",
  "A growing resource area for project teams and clients",
];

export default function ToolsPage() {
  return (
    <section className="page-section">
      <div className="container page-stack">
        <motion.div
          className="scroll-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mini-pill">Tools</div>
          <div className="tools-hero">
            <div>
              <h1 className="tools-title">Steel & Detailing Tools</h1>
              <p className="tools-subtext">
                Practical calculators and reference tools designed to support
                steel detailing, estimating, coordination, and fabrication workflows.
              </p>

              <div className="tools-actions">
                <NavLink to="/tools/steel-weight" className="btn btn-primary">
                  Open Steel Weight Calculator <ArrowRight size={16} />
                </NavLink>
                <NavLink to="/quote" className="btn btn-secondary">
                  Request a Custom Tool
                </NavLink>
              </div>
            </div>

            <div className="tools-summary-card">
              <div className="tools-summary-row">
                <span>Available Now</span>
                <strong>Steel Weight Calculator</strong>
              </div>
              <div className="tools-summary-row">
                <span>Primary Use</span>
                <strong>Steel Workflow Support</strong>
              </div>
              <div className="tools-summary-row">
                <span>Suitable For</span>
                <strong>Fabricators, Detailers, PMs</strong>
              </div>
              <div className="tools-summary-row">
                <span>Collection</span>
                <strong>Growing Tool Library</strong>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="all-tools"
          className="scroll-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          <div className="mini-pill">Featured Tools</div>
          <h2>Current and upcoming tools</h2>
          <p>
            Explore ArMil’s collection of calculators and technical references
            developed to support practical steel project needs.
          </p>

          <div className="tools-grid">
            {featuredTools.map((tool) => {
              const Icon = tool.icon;
              const isAvailable = tool.link !== "#";

              return (
                <div key={tool.title} id={tool.id} className="tool-card">
                  <div className="tool-card-top">
                    <div className="icon-badge">
                      <Icon size={20} />
                    </div>
                    <span className={`tool-badge ${isAvailable ? "" : "pro"}`}>
                      {tool.badge}
                    </span>
                  </div>

                  <h3>{tool.title}</h3>
                  <p>{tool.desc}</p>

                  <div className="tool-card-actions">
                    {isAvailable ? (
                      <NavLink to={tool.link} className="btn btn-primary">
                        <Calculator size={16} />
                        Open Tool
                      </NavLink>
                    ) : (
                      <button className="btn btn-secondary" type="button">
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          id="pro-tools"
          className="scroll-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="mini-pill">Additional Tools</div>
          <h2>Extended workflow support</h2>
          <p>
            Additional tools can be added to support estimating, project planning,
            material review, and steel coordination requirements.
          </p>

          <div className="tools-grid compact">
            {advancedTools.map((tool) => (
              <div key={tool.title} id={tool.id} className="tool-card pro">
                <div className="tool-card-top">
                  <div className="icon-badge small">
                    <Package size={16} />
                  </div>
                  <span className="tool-badge pro">Planned</span>
                </div>

                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>

                <div className="tool-card-actions">
                  <NavLink to="/quote" className="btn btn-secondary">
                    Ask About This
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="scroll-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="mini-pill">Why It Helps</div>
          <h2>Technical value for project teams</h2>

          <div className="why-grid">
            {pageBenefits.map((item) => (
              <div key={item} className="why-item">
                <div className="icon-badge small">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div className="why-title">{item}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="scroll-card cta-strip"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="cta-grid">
            <div className="cta-box">
              <div className="icon-badge">
                <ShieldCheck size={20} />
              </div>
              <h3>Need a specific tool?</h3>
              <p>
                Ask about a custom calculator or project-specific workflow helper
                tailored to your requirements.
              </p>
              <NavLink to="/quote" className="btn btn-primary">
                Request a Quote
              </NavLink>
            </div>

            <div className="cta-box">
              <div className="icon-badge">
                <Store size={20} />
              </div>
              <h3>Looking for digital resources?</h3>
              <p>
                Visit the store to explore workflow-focused products, templates,
                and future downloadable resources.
              </p>
              <NavLink to="/store" className="btn btn-secondary">
                Visit Store
              </NavLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}