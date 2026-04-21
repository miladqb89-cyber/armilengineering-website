import { useState } from "react";

const density = 490; // lb/ft³

export default function SteelWeightCalculator() {
  const [shape, setShape] = useState("plate");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [thickness, setThickness] = useState("");
  const [diameter, setDiameter] = useState("");
  const [result, setResult] = useState(null);

  function calculateWeight() {
    let volume = 0;

    // Convert inches³ → ft³ = /1728
    if (shape === "plate") {
      volume = (length * width * thickness) / 1728;
    }

    if (shape === "flat") {
      volume = (length * width * thickness) / 1728;
    }

    if (shape === "round") {
      const r = diameter / 2;
      volume = (Math.PI * r * r * length) / 1728;
    }

    if (shape === "pipe") {
      const rOuter = diameter / 2;
      const rInner = rOuter - thickness;
      volume =
        (Math.PI * (rOuter ** 2 - rInner ** 2) * length) / 1728;
    }

    if (shape === "hss_square") {
      const outer = width * width;
      const inner = (width - 2 * thickness) ** 2;
      volume = ((outer - inner) * length) / 1728;
    }

    if (shape === "hss_rect") {
      const outer = width * height;
      const inner =
        (width - 2 * thickness) *
        (height - 2 * thickness);
      volume = ((outer - inner) * length) / 1728;
    }

    if (shape === "angle") {
      const area =
        (width * thickness) +
        (height * thickness) -
        (thickness * thickness);
      volume = (area * length) / 1728;
    }

    const weight = volume * density;
    setResult(weight.toFixed(2));
  }

  return (
    <section className="page-section">
      <div className="container page-stack">
        <div className="scroll-card">
          <div className="mini-pill">Free Tool</div>
          <h1>Steel Weight Calculator</h1>
          <p>Supports multiple steel shapes for real-world use.</p>

          <div className="form-grid">
            <label>Shape</label>
            <select
              value={shape}
              onChange={(e) => setShape(e.target.value)}
            >
              <option value="plate">Plate</option>
              <option value="flat">Flat Bar</option>
              <option value="round">Round Bar</option>
              <option value="pipe">Pipe</option>
              <option value="hss_square">HSS Square</option>
              <option value="hss_rect">HSS Rectangular</option>
              <option value="angle">Angle (L)</option>
            </select>

            <label>Length (in)</label>
            <input
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />

            {(shape === "plate" ||
              shape === "flat" ||
              shape === "hss_square" ||
              shape === "hss_rect" ||
              shape === "angle") && (
              <>
                <label>Width (in)</label>
                <input
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                />
              </>
            )}

            {(shape === "hss_rect" || shape === "angle") && (
              <>
                <label>Height (in)</label>
                <input
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                />
              </>
            )}

            {(shape === "plate" ||
              shape === "flat" ||
              shape === "pipe" ||
              shape === "hss_square" ||
              shape === "hss_rect" ||
              shape === "angle") && (
              <>
                <label>Thickness (in)</label>
                <input
                  value={thickness}
                  onChange={(e) =>
                    setThickness(Number(e.target.value))
                  }
                />
              </>
            )}

            {(shape === "round" || shape === "pipe") && (
              <>
                <label>Diameter (in)</label>
                <input
                  value={diameter}
                  onChange={(e) =>
                    setDiameter(Number(e.target.value))
                  }
                />
              </>
            )}
          </div>

          <button className="btn btn-primary" onClick={calculateWeight}>
            Calculate
          </button>

          {result && (
            <div className="result-box">
              Weight: <strong>{result} lbs</strong>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}