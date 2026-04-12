import { useEffect, useState } from "react";
import "./HomeHeroSlider.css";

const slides = [
  {
    id: 1,
    image: "./images/slide-1-company.jpg",
    headline: "Engineering Precision. Built for Results.",
    subtext:
      "We deliver high-quality structural steel detailing, engineering support, and construction solutions with accuracy, speed, and reliability.",
    buttonText: "View Our Services",
    buttonLink: "/services",
  },
  {
    id: 2,
    image: "./images/slide-2-steel.png",
    headline: "Structural Steel Detailing Experts",
    subtext:
      "Fabrication-ready shop drawings and 3D models using Tekla Structures, helping reduce errors and keep your project moving smoothly.",
    buttonText: "Explore Detailing Services",
    buttonLink: "/services",
  },
  {
    id: 3,
    image: "./images/slide-3-takeoff.gif",
    headline: "Accurate Estimation & Material Take-Offs",
    subtext:
      "We provide precise quantity take-offs and estimating support to help contractors bid smarter, plan better, and save time.",
    buttonText: "Request a Quote",
    buttonLink: "/contact?subject=Request%20a%20Quote",
  },
  {
    id: 4,
    image: "./images/slide-4-project.jpg",
    headline: "From Design to Field Execution",
    subtext:
      "From project management to field verification in the DMV area, we support real-world coordination and practical execution.",
    buttonText: "See Our Projects",
    buttonLink: "/projects",
  },
  {
    id: 5,
    image: "./images/slide-5-trust.jpg",
    headline: "Trusted by Contractors & Fabricators",
    subtext:
      "We build long-term partnerships through responsiveness, dependable service, and consistent high-quality deliverables.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

export default function HomeHeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url("${slide.image}")` }}
        >
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="hero-tag">ArMil Engineering & Detailing</span>
            <h1>{slide.headline}</h1>
            <p>{slide.subtext}</p>
            <a className="hero-btn" href={slide.buttonLink}>
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}

      <button className="hero-arrow hero-arrow-left" onClick={goPrev} aria-label="Previous slide">
        ‹
      </button>

      <button className="hero-arrow hero-arrow-right" onClick={goNext} aria-label="Next slide">
        ›
      </button>

      <div className="hero-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`hero-dot ${index === current ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}