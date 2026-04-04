import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

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

export default function ContactFormCard() {
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
            Send Quote Request <ArrowUpRight size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}