import { Mail, Phone, MapPin, Send } from "lucide-react";
import ContactFormCard from "../components/ContactFormCard.jsx";

export default function Contact() {
  return (
    <>
      <section className="standard-hero">
        <div className="page-bg" style={{ backgroundImage: "url('/images/theme-washington-dc.jpg')" }}>
          <div className="page-bg-overlay" />
        </div>
        <div className="container standard-hero-content">
          <div className="pill">Contact</div>
          <h1>Partner with a team that understands precision, performance, and project success.</h1>
          <p className="lead">
            Contact ArMil Engineering & Detailing to discuss how we can support your next project with confidence and expertise.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container two-col-content">
          <div className="scroll-card">
            <div className="icon-badge"><Send size={20} /></div>
            <h3>Contact ArMil Engineering & Detailing</h3>
            <div className="contact-list">
              <div><Mail size={16} /><span>armilengineering@yahoo.com</span></div>
              <div><Phone size={16} /><span>571-317-5986</span></div>
              <div><MapPin size={16} /><span>Virginia • Maryland • Washington, DC</span></div>
            </div>
          </div>

          <ContactFormCard />
        </div>
      </section>
    </>
  );
}