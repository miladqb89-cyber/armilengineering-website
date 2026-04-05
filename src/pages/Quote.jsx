import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Send } from "lucide-react";

export default function Quote() {
  const [form, setForm] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    service: "",
    projectName: "",
    location: "",
    details: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = encodeURIComponent(`Quote Request - ${form.service || "Project Inquiry"}`);
    const body = encodeURIComponent(
      `Company: ${form.company}
Contact: ${form.contact}
Email: ${form.email}
Phone: ${form.phone}
Service Needed: ${form.service}
Project Name: ${form.projectName}
Location: ${form.location}

Project Details:
${form.details}`
    );

    window.location.href = `mailto:armilengineering@yahoo.com?subject=${subject}&body=${body}`;
  }

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
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pill">
            <Calculator size={14} /> Request a Quote
          </div>
          <h1>Tell us about your project.</h1>
          <p className="lead">
            Share your detailing, estimation, modeling, or field support needs
            and we’ll help you move forward with clarity.
          </p>
        </motion.div>
      </section>

      <section className="page-section overlap-section">
        <div className="container page-stack">
          <motion.div
            className="scroll-card quote-form-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact Name"
                  value={form.contact}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                />
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option value="Project Management">Project Management</option>
                  <option value="Structural Steel Detailing">Structural Steel Detailing</option>
                  <option value="Misc. Steel Detailing">Misc. Steel Detailing</option>
                  <option value="Connection Design">Connection Design</option>
                  <option value="Estimation & Material Take-Offs">Estimation & Material Take-Offs</option>
                  <option value="Field Verification in DMV Area">Field Verification in DMV Area</option>
                </select>
                <input
                  type="text"
                  name="projectName"
                  placeholder="Project Name"
                  value={form.projectName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Project Location"
                  value={form.location}
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="details"
                rows="7"
                placeholder="Project details, scope, schedule, drawings available, and anything else you'd like us to know..."
                value={form.details}
                onChange={handleChange}
                required
              />

              <button type="submit" className="btn btn-primary">
                <Send size={16} />
                Submit Quote Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}