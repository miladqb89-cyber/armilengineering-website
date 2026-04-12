import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const initialForm = {
  company: "",
  contact: "",
  email: "",
  phone: "",
  service: "",
  projectName: "",
  location: "",
  deadline: "",
  budget: "",
  fileLink: "",
  referralSource: "",
  details: "",
};

export default function Quote() {
  const formRef = useRef(null);

  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        {
          publicKey: "YOUR_PUBLIC_KEY",
        }
      );

      setStatus({
        type: "success",
        message:
          "Your quote request has been sent successfully. We will review your information and get back to you soon.",
      });

      setForm(initialForm);

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("EmailJS send error:", error);
      setStatus({
        type: "error",
        message:
          "We could not send your request right now. Please try again in a moment or contact us directly.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <section className="standard-hero">
        <div
          className="page-bg"
          style={{ backgroundImage: "url('./images/theme-steel-connection.jpg')" }}
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
            Share your detailing, estimation, modeling, or field support needs,
            and our team will review your request and respond as soon as
            possible.
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
            <div className="quote-form-head">
              <h2>Request a Project Quote</h2>
              <p>
                Please complete the form below with as much detail as possible.
                You may also include a shared link to drawings, PDFs, sketches,
                or reference files.
              </p>
            </div>

            <form ref={formRef} className="quote-form" onSubmit={handleSubmit}>
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
                  placeholder="Contact Name *"
                  value={form.contact}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
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
                  <option value="">Select Service *</option>
                  <option value="Project Management">Project Management</option>
                  <option value="Structural Steel Detailing">
                    Structural Steel Detailing
                  </option>
                  <option value="Misc. Steel Detailing">
                    Misc. Steel Detailing
                  </option>
                  <option value="Connection Design">
                    Connection Design
                  </option>
                  <option value="Estimation & Material Take-Offs">
                    Estimation & Material Take-Offs
                  </option>
                  <option value="Field Verification in DMV Area">
                    Field Verification in DMV Area
                  </option>
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

                <input
                  type="text"
                  name="deadline"
                  placeholder="Needed By / Deadline"
                  value={form.deadline}
                  onChange={handleChange}
                />

                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option value="">Estimated Budget Range (optional)</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                  <option value="$3,000 - $7,500">$3,000 - $7,500</option>
                  <option value="$7,500 - $15,000">$7,500 - $15,000</option>
                  <option value="$15,000+">$15,000+</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>

                <input
                  type="url"
                  name="fileLink"
                  placeholder="Google Drive / Dropbox / OneDrive file link"
                  value={form.fileLink}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="referralSource"
                  placeholder="How did you hear about us?"
                  value={form.referralSource}
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="details"
                rows="8"
                placeholder="Project details, scope, schedule, required deliverables, drawings available, and anything else you'd like us to know... *"
                value={form.details}
                onChange={handleChange}
                required
              />

              <div className="quote-form-footer">
                <p className="quote-note">
                  Fields marked with * are recommended for a faster and more
                  accurate response.
                </p>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={sending}
                >
                  <Send size={16} />
                  {sending ? "Sending..." : "Submit Quote Request"}
                </button>
              </div>

              {status.message && (
                <p
                  className={`form-status ${
                    status.type === "success" ? "form-status-success" : "form-status-error"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}