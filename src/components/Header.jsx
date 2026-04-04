import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <div className="brand-logo">
            <img src="/images/hero-logo.jpg" alt="ArMil logo" />
          </div>
          <div>
            <div className="brand-name">ArMiL</div>
            <div className="brand-sub">Engineering & Detailing LLC</div>
          </div>
        </NavLink>

        <nav className="desktop-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        </nav>

        <div className="header-actions">
          <NavLink to="/contact" className="btn btn-primary desktop-only">
            Request a Quote
          </NavLink>

          <button
            className="mobile-btn"
            onClick={() => setMobileOpen((v) => !v)}
            type="button"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
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