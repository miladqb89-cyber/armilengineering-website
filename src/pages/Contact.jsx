import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="standard-hero">
        <div
          className="page-bg"
          style={{ backgroundImage: "url('./images/theme-washington-dc.jpg')" }}
        />
        <div className="page-bg-overlay" />

        <motion.div
          className="container standard-hero-content glass-hero"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pill">
            <Sparkles size={14} /> Contact
          </div>

          <h1>
            Partner with a team that understands precision, performance, and
            project success.
          </h1>

          <p className="lead">
            Contact ArMil Engineering &amp; Detailing to discuss how we can
            support your next project with confidence and expertise.
          </p>
        </motion.div>
      </section>

      <section className="page-section overlap-section">
        <div className="container page-stack">
          <div className="cards-grid two">
            <div className="scroll-card">
              <div className="icon-badge">
                <Mail size={20} />
              </div>

              <h3>Contact ArMil Engineering &amp; Detailing</h3>

              <div className="contact-list">
                <div>
                  <Mail size={16} />
                  <a href="mailto:info@armilengineering.com">
                    info@armilengineering.com
                  </a>
                </div>

                <div>
                  <Phone size={16} />
                  <a href="tel:+15713175986">571-317-5986</a>
                </div>

                <div>
                  <MapPin size={16} />
                  <span>Virginia • Maryland • Washington, DC</span>
                </div>
              </div>
            </div>

            <div className="scroll-card">
              <h3>Request a Quote</h3>
              <p>
                Share your project details through our dedicated quote form and
                our team will get back to you as soon as possible.
              </p>

              <div className="contact-cta-actions">
                <Link to="/quote" className="btn btn-primary">
                  Go to Quote Form
                </Link>

                <a
                  href="mailto:info@armilengineering.com?subject=Project Inquiry"
                  className="btn btn-secondary"
                >
                  Email Us Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}