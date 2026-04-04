import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">ArMiL</div>
          <p>Engineering Precision. Delivered with Confidence.</p>
        </div>

        <div>
          <div className="footer-heading">Quick Links</div>
          <div className="footer-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>

        <div>
          <div className="footer-heading">Contact</div>
          <div className="footer-text">
            <div>571-317-5986</div>
            <div>armilengineering@yahoo.com</div>
            <div>Virginia • Maryland • Washington, DC</div>
          </div>
        </div>

        <div>
          <div className="footer-heading">Capabilities</div>
          <div className="footer-text">
            <div>Steel Detailing</div>
            <div>Tekla Structures</div>
            <div>Engineering Coordination</div>
            <div>Project Support</div>
          </div>
        </div>
      </div>
    </footer>
  );
}