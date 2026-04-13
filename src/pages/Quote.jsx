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
      // ✅ SEND EMAIL TO YOU
      await emailjs.sendForm(
        "service_hdtlqow",
        "template_zw6eef4",
        formRef.current,
        "LLLFa7fk49l4IGgR7"
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
          "Something went wrong. Please try again or contact us directly.",
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
          transition={{ duration: 0.8 }}
        >
          <div className="pill">
            <Calculator size={14} /> Request a Quote
          </div>

          <h1>Tell us about your project.</h1>

          <p className="lead">
            Share your detailing, estimation, modeling, or field support needs.
          </p>
        </motion.div>
      </section>

      <section className="page-section overlap-section">
        <div className="container page-stack">
          <motion.div
            className="scroll-card quote-form-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <form ref={formRef} className="quote-form" onSubmit={handleSubmit}>
              <div className="form-grid">

                <input name="company" placeholder="Company Name" onChange={handleChange} />

                <input name="contact" placeholder="Contact Name *" required onChange={handleChange} />

                <input type="email" name="email" placeholder="Email Address *" required onChange={handleChange} />

                <input name="phone" placeholder="Phone Number" onChange={handleChange} />

                <select name="service" required onChange={handleChange}>
                  <option value="">Select Service *</option>
                  <option>Project Management</option>
                  <option>Structural Steel Detailing</option>
                  <option>Misc. Steel Detailing</option>
                  <option>Connection Design</option>
                  <option>Estimation & Material Take-Offs</option>
                  <option>Field Verification in DMV Area</option>
                </select>

                <input name="projectName" placeholder="Project Name" onChange={handleChange} />

                <input name="location" placeholder="Project Location" onChange={handleChange} />

                <input name="deadline" placeholder="Deadline" onChange={handleChange} />

                <select name="budget" onChange={handleChange}>
                  <option value="">Budget Range</option>
                  <option>Under $1,000</option>
                  <option>$1,000 - $3,000</option>
                  <option>$3,000 - $7,500</option>
                  <option>$7,500 - $15,000</option>
                  <option>$15,000+</option>
                </select>

                <input name="fileLink" placeholder="File Link (Drive/Dropbox)" onChange={handleChange} />

                <input name="referralSource" placeholder="How did you hear about us?" onChange={handleChange} />

              </div>

              <textarea
                name="details"
                rows="6"
                placeholder="Project details..."
                required
                onChange={handleChange}
              />

              <button type="submit" className="btn btn-primary" disabled={sending}>
                <Send size={16} />
                {sending ? "Sending..." : "Submit Quote Request"}
              </button>

              {status.message && (
                <p className={`form-status ${status.type}`}>
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