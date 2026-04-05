import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Resources from "./pages/Resources";

export default function App() {
  return (
    <div className="site-shell">
      <div className="bg-base" />
      <Header />

      <main className="page-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}