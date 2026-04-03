
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Mail, MapPin, Menu, X, ChevronRight, Sparkles, DraftingCompass,
  Boxes, FileText, Building2, Globe, Send, ShieldCheck, BadgeCheck, Wrench,
  LayoutTemplate, ArrowUpRight
} from "lucide-react";

const sections = [
  { id:"home", label:"Home", image:"/images/theme-steel-connection.jpg", eyebrow:"Engineering Precision. Delivered with Confidence.", title:"Advanced steel detailing, modeling, and engineering solutions.", intro:"ArMil Engineering & Detailing is a specialized provider of structural steel detailing and engineering support services. We combine advanced technology, industry expertise, and a deep understanding of construction workflows to deliver accurate, buildable solutions.", body:"Our approach focuses on precision, coordination, and performance—ensuring every project is executed to the highest standards from concept through completion." },
  { id:"about", label:"About", image:"/images/theme-abstract-structure.jpg", eyebrow:"About ArMil", title:"Built on precision, technical expertise, and commitment to quality.", intro:"ArMil Engineering & Detailing is built on a foundation of precision, technical expertise, and commitment to quality.", body:"We specialize in delivering steel detailing and engineering solutions that support the successful execution of construction projects across residential, commercial, and institutional sectors. Our mission is to provide reliable, accurate, and efficient services that add value to every stage of the project lifecycle—from initial design coordination to final installation." },
  { id:"services", label:"Services", image:"/images/theme-construction-skyline.jpg", eyebrow:"Services", title:"Technical expertise aligned with real project needs.", intro:"Our service offering is designed to support fabrication, coordination, and construction execution with confidence.", body:"Each service below is developed around constructability, clarity, workflow coordination, and project performance." },
  { id:"projects", label:"Projects", image:"/images/theme-steel-bridge.jpg", eyebrow:"Projects", title:"Technical excellence, detail, and dependable delivery.", intro:"Our portfolio reflects a commitment to technical excellence, attention to detail, and dependable delivery. Each project is approached with a tailored strategy to meet unique structural and architectural requirements.", body:"Project imagery can be replaced later with your real photos while keeping this premium scrolling layout intact." },
  { id:"contact", label:"Contact", image:"/images/theme-washington-dc.jpg", eyebrow:"Contact", title:"Partner with a team that understands precision, performance, and project success.", intro:"Contact ArMil Engineering & Detailing to discuss how we can support your next project with confidence and expertise.", body:"Use the quote form below to open a prepared email from your device, or reach us directly by email or phone." },
];

const serviceCards = [
  { title:"Steel Detailing", text:"We deliver fully coordinated, fabrication-ready steel detailing packages including shop drawings, erection drawings, and material take-offs. Every detail is developed with a focus on constructability, clarity, and compliance with project specifications and industry standards.", icon:DraftingCompass },
  { title:"3D Modeling (Tekla Structures)", text:"Our team utilizes Tekla Structures to develop highly detailed and accurate 3D models that reflect real-world conditions. This enables advanced visualization, clash detection, and seamless integration with project teams, reducing risk and improving overall efficiency.", icon:Boxes },
  { title:"Engineering Coordination & Support", text:"We provide comprehensive engineering coordination services, supporting connection design workflows, reviewing structural requirements, and resolving technical challenges. Our goal is to bridge the gap between design intent and fabrication reality.", icon:FileText },
  { title:"Project Coordination", text:"Effective coordination is critical to project success. We work closely with contractors, fabricators, and engineers to streamline communication, minimize conflicts, and ensure alignment across all stages of the project lifecycle.", icon:Building2 },
  { title:"Construction & Field Support", text:"During construction, we provide responsive support including revisions, field adjustments, and updated documentation. Our team ensures that changes are implemented efficiently while maintaining design integrity and accuracy.", icon:Globe },
];

const whyArmil = [
  { title:"Precision", text:"Every deliverable is built around clarity, constructability, and technical accuracy.", icon:ShieldCheck },
  { title:"Buildability", text:"We focus on real-world fabrication and field conditions, not just theoretical output.", icon:Wrench },
  { title:"Coordination", text:"We help connect design intent, detailing workflows, and project team communication.", icon:LayoutTemplate },
  { title:"Reliable Support", text:"Responsive revisions, field updates, and project follow-through support successful delivery.", icon:BadgeCheck },
];

const projects = [
  { title:"Durga Temple, VA", image:"project-durga-temple.jpg", address:"8400 Durga Pl, Fairfax Station, VA 22039", type:"Institutional", scope:"Complex structural steel detailing and coordination support", software:"Tekla Structures", deliverables:"3D model, shop drawings, erection drawings, coordination support", text:"A complex structural detailing project requiring high-level coordination between architectural and structural systems. The scope involved precise modeling and detailed documentation to support fabrication and on-site assembly." },
  { title:"Kite Stair, MD", image:"project-kite-stair.jpg", address:"9021 Bennett Creek Blvd, Urbana, MD 21704", type:"Custom Stair System", scope:"Custom stair detailing and connection coordination", software:"Tekla Structures", deliverables:"Stair detailing package, connection coordination, fabrication support", text:"A custom stair system developed with a focus on geometric precision and fabrication accuracy. The project required detailed connection design coordination and constructability-driven solutions." },
  { title:"Private Residence, VA", image:"project-private-house.jpg", address:"1900 Virginia Ave, Mclean, VA 22101", type:"Residential", scope:"Residential structural steel detailing and support", software:"Tekla Structures", deliverables:"Modeling, shop drawings, detailing support", text:"A residential structural steel project delivered with efficiency and clarity. The detailing scope supported seamless fabrication and installation while maintaining structural integrity and design intent." },
  { title:"YMCA Fence, VA", image:"project-ymca-fence.jpg", address:"2640 Shirlington Road, Arlington, VA 22206", type:"Community Facility", scope:"Structural and fencing detailing support", software:"Tekla Structures / Coordination workflow", deliverables:"Detailing package, installation documents, revision support", text:"A structural and fencing project emphasizing durability, alignment, and compliance with project specifications. Delivered with clear documentation to ensure efficient installation and long-term performance." },
];

function ScrollCard({ children, className = "" }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.7, ease: "easeOut" }} className={`scroll-card ${className}`}>
      {children}
    </motion.div>
  );
}
function Metric({ title, value }) {
  return <div className="metric-card"><div className="metric-label">{title}</div><div className="metric-value">{value}</div></div>;
}
function LabeledInput({ label, value, onChange, placeholder }) {
  return <div><label className="input-label">{label}</label><input className="text-input" placeholder={placeholder} value={value} onChange={(e)=>onChange(e.target.value)} /></div>;
}
function ContactFormCard() {
  const [form, setForm] = useState({ name:"", company:"", email:"", phone:"", projectType:"", details:"" });
  const onChange = (k,v) => setForm((p)=>({...p,[k]:v}));
  const submitMailto = () => {
    const subject = encodeURIComponent(`Project Inquiry - ${form.projectType || "New Project"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject Type: ${form.projectType}\n\nProject Details:\n${form.details}`);
    window.location.href = `mailto:armilengineering@yahoo.com?subject=${subject}&body=${body}`;
  };
  return (
    <ScrollCard>
      <h3>Request a Quote</h3>
      <p>Complete the form and it will open a ready-to-send email from your device to ArMil Engineering & Detailing.</p>
      <div className="form-grid">
        <LabeledInput label="Full Name" value={form.name} onChange={(v)=>onChange("name",v)} placeholder="Your name" />
        <LabeledInput label="Company" value={form.company} onChange={(v)=>onChange("company",v)} placeholder="Company name" />
        <LabeledInput label="Email" value={form.email} onChange={(v)=>onChange("email",v)} placeholder="name@example.com" />
        <LabeledInput label="Phone" value={form.phone} onChange={(v)=>onChange("phone",v)} placeholder="(000) 000-0000" />
        <div className="span-2"><LabeledInput label="Project Type" value={form.projectType} onChange={(v)=>onChange("projectType",v)} placeholder="Steel detailing, Tekla modeling, coordination..." /></div>
        <div className="span-2"><label className="input-label">Project Details</label><textarea className="text-input textarea" placeholder="Tell us about your project..." value={form.details} onChange={(e)=>onChange("details",e.target.value)} /></div>
        <div className="span-2"><button className="btn btn-primary" onClick={submitMailto}>Send Quote Request <ArrowUpRight size={16} /></button></div>
      </div>
    </ScrollCard>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = [];
    sections.forEach((section) => {
      const el = sectionRefs.current[section.id];
      if (!el) return;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(section.id); });
      }, { threshold: 0.45 });
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="bg-base" />
      <div className="bg-stage">
        <AnimatePresence mode="wait">
          {sections.map((section) => activeSection === section.id ? (
            <motion.div key={section.id} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.985 }} transition={{ duration: 1.1, ease: "easeInOut" }} className="bg-slide">
              <img src={section.image} alt={section.label} className="bg-image" />
              <div className="bg-overlay" />
              <div className="bg-radial" />
              <div className="bg-vignette" />
            </motion.div>
          ) : null)}
        </AnimatePresence>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <button onClick={() => scrollToSection("home")} className="brand">
            <div className="brand-logo"><img src="/images/hero-logo.jpg" alt="ArMil logo" /></div>
            <div><div className="brand-name">ArMiL</div><div className="brand-sub">Engineering & Detailing LLC</div></div>
          </button>
          <nav className="desktop-nav">
            {sections.map((section) => <button key={section.id} onClick={() => scrollToSection(section.id)} className={activeSection === section.id ? "active" : ""}>{section.label}</button>)}
          </nav>
          <div className="header-actions">
            <button onClick={() => scrollToSection("contact")} className="btn btn-primary desktop-only">Request a Quote</button>
            <button onClick={() => setMobileOpen((v) => !v)} className="mobile-btn">{mobileOpen ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </div>
        <AnimatePresence>{mobileOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mobile-nav"><div className="container mobile-nav-inner">{sections.map((section) => <button key={section.id} onClick={() => scrollToSection(section.id)}>{section.label}</button>)}</div></motion.div>}</AnimatePresence>
      </header>

      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-group"><span><Phone size={14} /> 571-317-5986</span><span><Mail size={14} /> armilengineering@yahoo.com</span></div>
          <div className="topbar-group"><span><MapPin size={14} /> Virginia • Maryland • Washington, DC</span></div>
        </div>
      </div>

      <main className="content-layer">
        {sections.map((section) => (
          <section key={section.id} id={section.id} ref={(el)=>sectionRefs.current[section.id]=el} className="story-section">
            <div className="container story-grid">
              <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.35 }} transition={{ duration: 0.8, ease: "easeOut" }} className="story-copy">
                <div className="pill"><Sparkles size={14} /> {section.eyebrow}</div>
                <h1>{section.title}</h1>
                <p className="lead">{section.intro}</p>
                <p>{section.body}</p>
                {section.id === "home" && <div className="hero-actions"><button onClick={() => scrollToSection("services")} className="btn btn-primary">Explore Services</button><button onClick={() => scrollToSection("projects")} className="btn btn-secondary">View Projects</button></div>}
              </motion.div>

              <div className="story-cards">
                {section.id === "home" && <>
                  <ScrollCard><div className="metrics-grid"><Metric title="Coverage" value="VA • MD • DC" /><Metric title="Support" value="Fast & Clear" /><Metric title="Focus" value="Buildable Solutions" /></div></ScrollCard>
                  <ScrollCard><div className="mini-pill">Technical Excellence</div><h3>Advanced detailing support for complex construction projects</h3><p>Precision, coordination, and performance define how we support fabrication, engineering workflows, and project execution.</p></ScrollCard>
                  <ScrollCard><h3>Why ArMil</h3><div className="why-grid">{whyArmil.map((item) => { const Icon = item.icon; return <div key={item.title} className="why-item"><div className="icon-badge small"><Icon size={16} /></div><div><div className="why-title">{item.title}</div><div className="why-text">{item.text}</div></div></div>; })}</div></ScrollCard>
                </>}

                {section.id === "about" && <>
                  <ScrollCard><h3>Who We Serve</h3><p>We support residential, commercial, and institutional projects and work alongside contractors, fabricators, and engineering teams that value precision, buildability, and clear communication.</p></ScrollCard>
                  <ScrollCard><h3>How We Work</h3><p>Our workflow is built around Tekla Structures modeling, coordinated detailing, responsive revisions, and fabrication-minded deliverables that support successful project execution.</p></ScrollCard>
                </>}

                {section.id === "services" && <div className="cards-grid two">{serviceCards.map((service) => { const Icon = service.icon; return <ScrollCard key={service.title}><div className="icon-badge"><Icon size={20} /></div><h3>{service.title}</h3><p>{service.text}</p></ScrollCard>; })}</div>}

                {section.id === "projects" && <div className="cards-grid two">{projects.map((project) => <ScrollCard key={project.title} className="project-card"><div className="project-image-wrap"><div className="placeholder-box"><div className="placeholder-label">Project Image</div><div className="placeholder-name">{project.image}</div></div></div><div className="project-meta-chip">{project.type}</div><h3 className="project-title">{project.title}</h3><p>{project.text}</p><div className="project-details"><div><span>Location</span><strong>{project.address}</strong></div><div><span>Scope</span><strong>{project.scope}</strong></div><div><span>Software</span><strong>{project.software}</strong></div><div><span>Deliverables</span><strong>{project.deliverables}</strong></div></div></ScrollCard>)}</div>}

                {section.id === "contact" && <>
                  <ScrollCard><div className="icon-badge"><Send size={20} /></div><h3>Contact ArMil Engineering & Detailing</h3><div className="contact-list"><div><Mail size={16} /><span>armilengineering@yahoo.com</span></div><div><Phone size={16} /><span>571-317-5986</span></div><div><MapPin size={16} /><span>Virginia • Maryland • Washington, DC</span></div></div></ScrollCard>
                  <ContactFormCard />
                  <ScrollCard className="final-cta"><div className="mini-pill">Let’s Build With Confidence</div><h3>Let’s support your next project with precision and confidence.</h3><p>From detailing and Tekla modeling to coordination and field support, ArMil is ready to help move your project forward.</p><div className="hero-actions"><button onClick={() => window.location.href = "mailto:armilengineering@yahoo.com"} className="btn btn-primary">Email ArMil</button><button onClick={() => window.location.href = "tel:5713175986"} className="btn btn-secondary">Call 571-317-5986</button></div></ScrollCard>
                </>}
              </div>
            </div>
          </section>
        ))}
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div><div className="footer-brand">ArMiL</div><p>Engineering Precision. Delivered with Confidence.</p></div>
          <div><div className="footer-heading">Quick Links</div><div className="footer-links">{sections.map((section) => <button key={section.id} onClick={() => scrollToSection(section.id)}>{section.label}</button>)}</div></div>
          <div><div className="footer-heading">Contact</div><div className="footer-text"><div>571-317-5986</div><div>armilengineering@yahoo.com</div><div>Virginia • Maryland • Washington, DC</div></div></div>
          <div><div className="footer-heading">SEO Keywords</div><div className="footer-text"><div>Steel Detailing</div><div>Tekla Structures</div><div>Engineering Coordination</div><div>Virginia / Maryland / DC</div></div></div>
        </div>
      </footer>
    </div>
  );
}
