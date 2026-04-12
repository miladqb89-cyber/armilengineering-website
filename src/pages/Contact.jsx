import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";

function LabeledInput({ label, value, onChange, placeholder, name, type = "text" }) {
  return (
    <div>
      <label className="input-label">{label}</label>
      <input
        className="text-input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "",
    details: "",
  });

  const onChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

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
          <div className="pill"><Sparkles size={14} /> Contact</div>
          <h1>Partner with a team that understands precision, performance, and project success.</h1>
          <p className="lead">
            Contact ArMil Engineering &amp; Detailing to discuss how we can support
            your next project with confidence and expertise.
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
                <div><Mail size={16} /><span>Info@armilengineering.com</span></div>
                <div><Phone size={16} /><span>571-317-5986</span></div>
                <div><MapPin size={16} /><span>Virginia • Maryland • Washington, DC</span></div>
              </div>
            </div>

            <div className="scroll-card">
              <h3>Request a Quote</h3>
              <p>Send us your project information and our team will get back to you.</p>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="form-grid"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <LabeledInput label="Full Name" name="name" value={form.name} onChange={(v) => onChange("name", v)} placeholder="Your name" />
                <LabeledInput label="Company" name="company" value={form.company} onChange={(v) => onChange("company", v)} placeholder="Company name" />
                <LabeledInput label="Email" name="email" type="email" value={form.email} onChange={(v) => onChange("email", v)} placeholder="name@example.com" />
                <LabeledInput label="Phone" name="phone" value={form.phone} onChange={(v) => onChange("phone", v)} placeholder="(000) 000-0000" />

                <div className="span-2">
                  <LabeledInput
                    label="Project Type"
                    name="projectType"
                    value={form.projectType}
                    onChange={(v) => onChange("projectType", v)}
                    placeholder="Steel detailing, Tekla modeling, coordination..."
                  />
                </div>

                <div className="span-2">
                  <label className="input-label">Project Details</label>
                  <textarea
                    className="text-input textarea"
                    name="details"
                    placeholder="Tell us about your project..."
                    value={form.details}
                    onChange={(e) => onChange("details", e.target.value)}
                  />
                </div>

                <div className="span-2">
                  <button type="submit" className="btn btn-primary">
                    Send Quote Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}