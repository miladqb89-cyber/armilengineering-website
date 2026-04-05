import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header fixed-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <div className="brand-logo">
            <img src="/images/hero-logo.jpg" alt="ArMil logo" />
          </div>
          <div>
            <div className="brand-name">ArMiL</div>
            <div className="brand-sub">Engineering &amp; Detailing LLC</div>
          </div>
        </NavLink>

        <nav className="desktop-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Services</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Contact</NavLink>
          <NavLink to="/quote" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Quote</NavLink>
          <NavLink to="/resources" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Resources</NavLink>
        </nav>

        <div className="header-actions">
          <NavLink to="/contact" className="btn btn-primary desktop-only">
            Request a Quote
          </NavLink>

          <button className="mobile-btn" onClick={() => setOpen(!open)} type="button">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav">
          <div className="container mobile-nav-inner">
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
            <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}