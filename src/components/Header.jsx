import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
  };

  return (
    <header className="site-header fixed-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <div className="brand-logo">
            <img src="./images/hero-logo.jpg" alt="ArMil logo" />
          </div>
          <div>
            <div className="brand-name">ArMiL</div>
            <div className="brand-sub">Engineering &amp; Detailing LLC</div>
          </div>
        </NavLink>

        <nav className="desktop-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            About
          </NavLink>

          <div className="nav-dropdown">
            <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-link active nav-dropdown-trigger" : "nav-link nav-dropdown-trigger")}>
              <span>Services</span>
              <ChevronDown size={15} />
            </NavLink>

            <div className="nav-dropdown-menu">
              <a href="/services#project-management" className="nav-dropdown-link">
                Project Management
              </a>
              <a href="/services#structural-steel-detailing" className="nav-dropdown-link">
                Structural Steel Detailing
              </a>
              <a href="/services#misc-steel-detailing" className="nav-dropdown-link">
                Misc. Steel Detailing
              </a>
              <a href="/services#connection-design" className="nav-dropdown-link">
                Connection Design
              </a>
              <a href="/services#estimation-takeoffs" className="nav-dropdown-link">
                Estimation &amp; Material Take-Offs
              </a>
              <a href="/services#field-verification" className="nav-dropdown-link">
                Field Verification in DMV Area
              </a>
            </div>
          </div>

          <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Projects
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Contact
          </NavLink>

          <NavLink to="/quote" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Quote
          </NavLink>

          <div className="nav-dropdown">
            <NavLink to="/resources" className={({ isActive }) => (isActive ? "nav-link active nav-dropdown-trigger" : "nav-link nav-dropdown-trigger")}>
              <span>Resources</span>
              <ChevronDown size={15} />
            </NavLink>

            <div className="nav-dropdown-menu nav-dropdown-menu-right">
              <a href="/resources#steel-detailing-basics" className="nav-dropdown-link">
                Steel Detailing Basics
              </a>
              <a href="/resources#shop-vs-erection" className="nav-dropdown-link">
                Shop vs Erection Drawings
              </a>
              <a href="/resources#misc-steel" className="nav-dropdown-link">
                Miscellaneous Steel
              </a>
              <a href="/resources#field-verification" className="nav-dropdown-link">
                Field Verification
              </a>
              <a href="/resources#takeoffs" className="nav-dropdown-link">
                Material Take-Offs
              </a>
              <a href="/resources#connection-design-basics" className="nav-dropdown-link">
                Connection Design Basics
              </a>
            </div>
          </div>
        </nav>

        <div className="header-actions">
          <NavLink to="/quote" className="btn btn-primary desktop-only">
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

            <button
              type="button"
              className="mobile-dropdown-trigger"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <span>Services</span>
              <ChevronDown size={16} className={mobileServicesOpen ? "rotate-icon" : ""} />
            </button>

            {mobileServicesOpen && (
              <div className="mobile-submenu">
                <a href="/services#project-management" onClick={closeMenu}>Project Management</a>
                <a href="/services#structural-steel-detailing" onClick={closeMenu}>Structural Steel Detailing</a>
                <a href="/services#misc-steel-detailing" onClick={closeMenu}>Misc. Steel Detailing</a>
                <a href="/services#connection-design" onClick={closeMenu}>Connection Design</a>
                <a href="/services#estimation-takeoffs" onClick={closeMenu}>Estimation &amp; Material Take-Offs</a>
                <a href="/services#field-verification" onClick={closeMenu}>Field Verification in DMV Area</a>
              </div>
            )}

            <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
            <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            <NavLink to="/quote" onClick={closeMenu}>Quote</NavLink>

            <button
              type="button"
              className="mobile-dropdown-trigger"
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            >
              <span>Resources</span>
              <ChevronDown size={16} className={mobileResourcesOpen ? "rotate-icon" : ""} />
            </button>

            {mobileResourcesOpen && (
              <div className="mobile-submenu">
                <a href="/resources#steel-detailing-basics" onClick={closeMenu}>Steel Detailing Basics</a>
                <a href="/resources#shop-vs-erection" onClick={closeMenu}>Shop vs Erection Drawings</a>
                <a href="/resources#misc-steel" onClick={closeMenu}>Miscellaneous Steel</a>
                <a href="/resources#field-verification" onClick={closeMenu}>Field Verification</a>
                <a href="/resources#takeoffs" onClick={closeMenu}>Material Take-Offs</a>
                <a href="/resources#connection-design-basics" onClick={closeMenu}>Connection Design Basics</a>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}