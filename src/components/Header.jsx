import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const [mobileStoreOpen, setMobileStoreOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isServicesActive = location.pathname === "/services";
  const isResourcesActive = location.pathname === "/resources";
  const isToolsActive =
    location.pathname === "/tools" ||
    location.pathname.startsWith("/tools/");
  const isStoreActive =
    location.pathname === "/store" ||
    location.pathname.startsWith("/store/");

  const closeMenu = () => {
    setOpen(false);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
    setMobileToolsOpen(false);
    setMobileStoreOpen(false);
  };

  const goToSection = (path, sectionId) => {
    closeMenu();
    sessionStorage.setItem("pendingSectionScroll", sectionId);

    if (location.pathname === path) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    } else {
      navigate(path);
    }
  };

  const goToHashSection = (path, hashId) => {
    closeMenu();

    if (location.pathname === path) {
      setTimeout(() => {
        const element = document.getElementById(hashId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    } else {
      navigate(`${path}#${hashId}`);
    }
  };

  useEffect(() => {
    const pendingSection = sessionStorage.getItem("pendingSectionScroll");
    if (!pendingSection) return;

    const timer = setTimeout(() => {
      const element = document.getElementById(pendingSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        sessionStorage.removeItem("pendingSectionScroll");
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    if (!location.hash) return;

    const hashId = location.hash.replace("#", "");
    const timer = setTimeout(() => {
      const element = document.getElementById(hashId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 180);

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`site-header fixed-header ${
        scrolled ? "header-scrolled" : ""
      }`}
    >
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

          <div className="nav-dropdown">
            <NavLink
              to="/services"
              className={() =>
                isServicesActive
                  ? "nav-link active nav-dropdown-trigger"
                  : "nav-link nav-dropdown-trigger"
              }
            >
              <span>Services</span>
              <ChevronDown size={15} />
            </NavLink>

            <div className="nav-dropdown-menu">
              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToSection("/services", "project-management")}
              >
                Project Management
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() =>
                  goToSection("/services", "structural-steel-detailing")
                }
              >
                Structural Steel Detailing
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToSection("/services", "misc-steel-detailing")}
              >
                Misc. Steel Detailing
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToSection("/services", "connection-design")}
              >
                Connection Design
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToSection("/services", "estimation-takeoffs")}
              >
                Estimation &amp; Material Take-Offs
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToSection("/services", "field-verification")}
              >
                Field Verification in DMV Area
              </button>
            </div>
          </div>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </NavLink>

          <div className="nav-dropdown">
            <NavLink
              to="/tools"
              className={() =>
                isToolsActive
                  ? "nav-link active nav-dropdown-trigger"
                  : "nav-link nav-dropdown-trigger"
              }
            >
              <span>Tools</span>
              <ChevronDown size={15} />
            </NavLink>

            <div className="nav-dropdown-menu">
              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToHashSection("/tools", "all-tools")}
              >
                All Tools
              </button>

              <NavLink
                to="/tools/steel-weight"
                className="nav-dropdown-link"
                onClick={closeMenu}
              >
                Steel Weight Calculator
              </NavLink>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() =>
                  goToHashSection("/tools", "plate-weight-calculator")
                }
              >
                Plate Weight Calculator
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() =>
                  goToHashSection("/tools", "weld-size-calculator")
                }
              >
                Weld Size Calculator
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() =>
                  goToHashSection("/tools", "bolt-weight-calculator")
                }
              >
                Bolt Weight Calculator
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() =>
                  goToHashSection("/tools", "hss-pipe-reference")
                }
              >
                HSS / Pipe Reference
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToHashSection("/tools", "beam-size-lookup")}
              >
                Beam Size Lookup
              </button>
            </div>
          </div>

          <div className="nav-dropdown">
            <NavLink
              to="/store"
              className={() =>
                isStoreActive
                  ? "nav-link active nav-dropdown-trigger"
                  : "nav-link nav-dropdown-trigger"
              }
            >
              <span>Store</span>
              <ChevronDown size={15} />
            </NavLink>

            <div className="nav-dropdown-menu">
              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToHashSection("/store", "all-products")}
              >
                All Products
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToHashSection("/store", "custom-components")}
              >
                Custom Components
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToHashSection("/store", "tekla-macros")}
              >
                Tekla Macros
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToHashSection("/store", "report-templates")}
              >
                Report Templates
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToHashSection("/store", "drawing-styles")}
              >
                Drawing Styles
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToHashSection("/store", "numbering-rules")}
              >
                Numbering Rules
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToHashSection("/store", "environment-packs")}
              >
                Environment Packs
              </button>
            </div>
          </div>

          <div className="nav-dropdown">
            <NavLink
              to="/resources"
              className={() =>
                isResourcesActive
                  ? "nav-link active nav-dropdown-trigger"
                  : "nav-link nav-dropdown-trigger"
              }
            >
              <span>Resources</span>
              <ChevronDown size={15} />
            </NavLink>

            <div className="nav-dropdown-menu nav-dropdown-menu-right">
              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() =>
                  goToSection("/resources", "steel-detailing-basics")
                }
              >
                Steel Detailing Basics
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToSection("/resources", "shop-vs-erection")}
              >
                Shop vs Erection Drawings
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToSection("/resources", "misc-steel")}
              >
                Miscellaneous Steel
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToSection("/resources", "field-verification")}
              >
                Field Verification
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() => goToSection("/resources", "takeoffs")}
              >
                Material Take-Offs
              </button>

              <button
                type="button"
                className="nav-dropdown-link"
                onClick={() =>
                  goToSection("/resources", "connection-design-basics")
                }
              >
                Connection Design Basics
              </button>
            </div>
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/quote"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Quote
          </NavLink>
        </nav>

        <div className="header-actions">
          <NavLink to="/quote" className="btn btn-primary desktop-only">
            Request a Quote
          </NavLink>

          <button
            className="mobile-btn"
            onClick={() => setOpen(!open)}
            type="button"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav">
          <div className="container mobile-nav-inner">
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>

            <button
              type="button"
              className="mobile-dropdown-trigger"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                className={mobileServicesOpen ? "rotate-icon" : ""}
              />
            </button>

            {mobileServicesOpen && (
              <div className="mobile-submenu">
                <button
                  type="button"
                  onClick={() => goToSection("/services", "project-management")}
                >
                  Project Management
                </button>

                <button
                  type="button"
                  onClick={() =>
                    goToSection("/services", "structural-steel-detailing")
                  }
                >
                  Structural Steel Detailing
                </button>

                <button
                  type="button"
                  onClick={() =>
                    goToSection("/services", "misc-steel-detailing")
                  }
                >
                  Misc. Steel Detailing
                </button>

                <button
                  type="button"
                  onClick={() => goToSection("/services", "connection-design")}
                >
                  Connection Design
                </button>

                <button
                  type="button"
                  onClick={() => goToSection("/services", "estimation-takeoffs")}
                >
                  Estimation &amp; Material Take-Offs
                </button>

                <button
                  type="button"
                  onClick={() => goToSection("/services", "field-verification")}
                >
                  Field Verification in DMV Area
                </button>
              </div>
            )}

            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </NavLink>

            <button
              type="button"
              className="mobile-dropdown-trigger"
              onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
            >
              <span>Tools</span>
              <ChevronDown
                size={16}
                className={mobileToolsOpen ? "rotate-icon" : ""}
              />
            </button>

            {mobileToolsOpen && (
              <div className="mobile-submenu">
                <button
                  type="button"
                  onClick={() => goToHashSection("/tools", "all-tools")}
                >
                  All Tools
                </button>

                <NavLink to="/tools/steel-weight" onClick={closeMenu}>
                  Steel Weight Calculator
                </NavLink>

                <button
                  type="button"
                  onClick={() =>
                    goToHashSection("/tools", "plate-weight-calculator")
                  }
                >
                  Plate Weight Calculator
                </button>

                <button
                  type="button"
                  onClick={() =>
                    goToHashSection("/tools", "weld-size-calculator")
                  }
                >
                  Weld Size Calculator
                </button>

                <button
                  type="button"
                  onClick={() =>
                    goToHashSection("/tools", "bolt-weight-calculator")
                  }
                >
                  Bolt Weight Calculator
                </button>

                <button
                  type="button"
                  onClick={() =>
                    goToHashSection("/tools", "hss-pipe-reference")
                  }
                >
                  HSS / Pipe Reference
                </button>

                <button
                  type="button"
                  onClick={() => goToHashSection("/tools", "beam-size-lookup")}
                >
                  Beam Size Lookup
                </button>
              </div>
            )}

            <button
              type="button"
              className="mobile-dropdown-trigger"
              onClick={() => setMobileStoreOpen(!mobileStoreOpen)}
            >
              <span>Store</span>
              <ChevronDown
                size={16}
                className={mobileStoreOpen ? "rotate-icon" : ""}
              />
            </button>

            {mobileStoreOpen && (
              <div className="mobile-submenu">
                <button
                  type="button"
                  onClick={() => goToHashSection("/store", "all-products")}
                >
                  All Products
                </button>

                <button
                  type="button"
                  onClick={() =>
                    goToHashSection("/store", "custom-components")
                  }
                >
                  Custom Components
                </button>

                <button
                  type="button"
                  onClick={() => goToHashSection("/store", "tekla-macros")}
                >
                  Tekla Macros
                </button>

                <button
                  type="button"
                  onClick={() =>
                    goToHashSection("/store", "report-templates")
                  }
                >
                  Report Templates
                </button>

                <button
                  type="button"
                  onClick={() => goToHashSection("/store", "drawing-styles")}
                >
                  Drawing Styles
                </button>

                <button
                  type="button"
                  onClick={() => goToHashSection("/store", "numbering-rules")}
                >
                  Numbering Rules
                </button>

                <button
                  type="button"
                  onClick={() =>
                    goToHashSection("/store", "environment-packs")
                  }
                >
                  Environment Packs
                </button>
              </div>
            )}

            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>

            <NavLink to="/quote" onClick={closeMenu}>
              Quote
            </NavLink>

            <button
              type="button"
              className="mobile-dropdown-trigger"
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            >
              <span>Resources</span>
              <ChevronDown
                size={16}
                className={mobileResourcesOpen ? "rotate-icon" : ""}
              />
            </button>

            {mobileResourcesOpen && (
              <div className="mobile-submenu">
                <button
                  type="button"
                  onClick={() =>
                    goToSection("/resources", "steel-detailing-basics")
                  }
                >
                  Steel Detailing Basics
                </button>

                <button
                  type="button"
                  onClick={() => goToSection("/resources", "shop-vs-erection")}
                >
                  Shop vs Erection Drawings
                </button>

                <button
                  type="button"
                  onClick={() => goToSection("/resources", "misc-steel")}
                >
                  Miscellaneous Steel
                </button>

                <button
                  type="button"
                  onClick={() =>
                    goToSection("/resources", "field-verification")
                  }
                >
                  Field Verification
                </button>

                <button
                  type="button"
                  onClick={() => goToSection("/resources", "takeoffs")}
                >
                  Material Take-Offs
                </button>

                <button
                  type="button"
                  onClick={() =>
                    goToSection("/resources", "connection-design-basics")
                  }
                >
                  Connection Design Basics
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}