import { motion } from "framer-motion";
import {
  Store,
  ArrowRight,
  Download,
  Settings2,
  FileText,
  Layers,
  Hash,
  Package,
  CheckCircle2,
  ShoppingCart,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const featuredProducts = [
  {
    id: "custom-components",
    title: "Custom Components",
    price: "Available by Request",
    icon: Settings2,
    badge: "Featured",
    desc: "Reusable Tekla tools built to support common modeling and detailing workflows.",
    features: [
      "Workflow-focused setup",
      "Reusable project support",
      "Practical detailing application",
    ],
  },
  {
    id: "tekla-macros",
    title: "Tekla Macros",
    price: "Coming Soon",
    icon: Download,
    badge: "Planned",
    desc: "Automation tools designed to reduce repetitive actions and improve workflow speed.",
    features: [
      "Cleaner repetitive tasks",
      "Faster common actions",
      "Better workflow consistency",
    ],
  },
  {
    id: "report-templates",
    title: "Report Templates",
    price: "Coming Soon",
    icon: FileText,
    badge: "Planned",
    desc: "Structured templates for reporting, lists, summaries, and project output support.",
    features: [
      "Professional formatting",
      "Clearer output structure",
      "Project-friendly organization",
    ],
  },
];

const allProducts = [
  {
    id: "all-products",
    title: "All Products",
    price: "Store Overview",
    icon: Store,
    desc: "Overview of ArMil’s current and planned digital workflow resources.",
  },
  {
    id: "custom-components",
    title: "Custom Components",
    price: "By Request",
    icon: Settings2,
    desc: "Parametric tools for common detailing tasks and repeatable steel workflows.",
  },
  {
    id: "tekla-macros",
    title: "Tekla Macros",
    price: "Coming Soon",
    icon: Download,
    desc: "Automation helpers for repetitive modeling and drawing activities.",
  },
  {
    id: "report-templates",
    title: "Report Templates",
    price: "Coming Soon",
    icon: FileText,
    desc: "Templates intended to support reporting and project data presentation.",
  },
  {
    id: "drawing-styles",
    title: "Drawing Styles",
    price: "Coming Soon",
    icon: Layers,
    desc: "Drawing presentation improvements for cleaner and more consistent output.",
  },
  {
    id: "numbering-rules",
    title: "Numbering Rules",
    price: "Coming Soon",
    icon: Hash,
    desc: "Structured rule sets for more organized and repeatable numbering workflows.",
  },
  {
    id: "environment-packs",
    title: "Environment Packs",
    price: "Coming Soon",
    icon: Package,
    desc: "Grouped workflow resources including settings, templates, and filters.",
  },
];

const benefits = [
  "A professional place to present digital resources",
  "Clear visibility for current and upcoming offerings",
  "An organized path for custom workflow support",
  "A structured foundation for future downloadable products",
];

export default function StorePage() {
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
          <div className="mini-pill">Store</div>
          <div className="store-hero">
            <div>
              <h1 className="store-title">Digital Tools & Workflow Resources</h1>
              <p className="store-subtext">
                Explore ArMil’s collection of digital tools, templates, and workflow
                resources developed for steel detailing and Tekla-based support.
              </p>

              <div className="store-actions">
                <NavLink to="/quote" className="btn btn-primary">
                  Request Custom Support <ArrowRight size={16} />
                </NavLink>
                <NavLink to="/contact" className="btn btn-secondary">
                  Contact Us
                </NavLink>
              </div>
            </div>

            <div className="store-summary-card">
              <div className="store-summary-row">
                <span>Current Focus</span>
                <strong>Custom Support</strong>
              </div>
              <div className="store-summary-row">
                <span>Product Types</span>
                <strong>Tools, Templates, Packs</strong>
              </div>
              <div className="store-summary-row">
                <span>Use</span>
                <strong>Workflow & Detailing Support</strong>
              </div>
              <div className="store-summary-row">
                <span>Availability</span>
                <strong>Current + Planned Resources</strong>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="featured-products"
          className="scroll-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          <div className="mini-pill">Featured</div>
          <h2>Highlighted workflow resources</h2>
          <p>
            Featured product areas intended to support productivity, workflow consistency,
            and project delivery needs.
          </p>

          <div className="store-grid three">
            {featuredProducts.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} id={item.id} className="store-card featured">
                  <div className="store-card-top">
                    <div className="icon-badge">
                      <Icon size={20} />
                    </div>
                    <span className="store-badge">{item.badge}</span>
                  </div>

                  <h3>{item.title}</h3>
                  <div className="store-price">{item.price}</div>
                  <p>{item.desc}</p>

                  <div className="store-feature-list">
                    {item.features.map((feature) => (
                      <div key={feature} className="store-feature-item">
                        <CheckCircle2 size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="store-card-actions">
                    <NavLink to="/quote" className="btn btn-primary">
                      <ShoppingCart size={16} />
                      Ask About This
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          id="all-products"
          className="scroll-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="mini-pill">Product Areas</div>
          <h2>Current and planned categories</h2>
          <p>
            Browse the product areas developed to support workflow improvement,
            documentation, and repeatable project tasks.
          </p>

          <div className="store-grid three">
            {allProducts.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} id={item.id} className="store-card">
                  <div className="store-card-top">
                    <div className="icon-badge small">
                      <Icon size={16} />
                    </div>
                    <div className="store-price small">{item.price}</div>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  <div className="store-card-actions">
                    <NavLink to="/quote" className="btn btn-secondary">
                      Learn More
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="scroll-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="mini-pill">Why It Matters</div>
          <h2>Organized support for digital workflow needs</h2>
          <div className="why-grid">
            {benefits.map((item) => (
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
      </div>
    </section>
  );
}