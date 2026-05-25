import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const pillars = [
  {
    name: "Deterministic Execution",
    snippet: "// Same input → same output. Always.",
    body: "C++ compiles to native machine code. No interpreter. No runtime. Given the same input, the output is always identical.",
  },
  {
    name: "Mathematical Verification",
    snippet: "// Every AI output is a hypothesis.",
    body: "Every AI output is a hypothesis. Our verification layer either proves it or rejects it before execution. No unvalidated AI decisions reach your business processes.",
  },
  {
    name: "Full Audit Trail",
    snippet: "// Input → Output → Proof.",
    body: "Every decision is logged — input state, AI response, verification result, execution output. Reproducible for any regulator, any time.",
  },
  {
    name: "Zero Garbage Collection",
    snippet: "// No GC pauses. No runtime overhead.",
    body: "Manual memory management in C++ eliminates the micro-pauses that make Python and Node.js unsuitable for mission-critical systems. Microsecond-level latency. Consistent under any load.",
  },
];

export default function Technology() {
  return (
    <section
      className="py-28 px-6"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel>Technology</SectionLabel>
          <h2
            className="font-bold text-[#f0ede8] leading-tight mb-4 max-w-3xl"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Built on C++.
            <br />
            Not because it is harder.
            <br />
            Because it is the only way.
          </h2>
          <p
            className="text-[#bbbbbb] mb-16 max-w-xl"
            style={{ fontSize: "17px", lineHeight: "1.65" }}
          >
            The infrastructure underneath every AutoFlow product is written in
            C++. That choice is not academic — it is what makes the guarantee
            possible.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillars.map((pillar, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className="p-8 rounded h-full"
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid #222222",
                }}
              >
                <p
                  className="font-mono mb-4"
                  style={{ fontSize: "12px", color: "#444444" }}
                >
                  {pillar.snippet}
                </p>
                <h3
                  className="font-bold text-[#f0ede8] mb-3"
                  style={{ fontSize: "19px" }}
                >
                  {pillar.name}
                </h3>
                <p
                  className="text-[#bbbbbb]"
                  style={{ fontSize: "16px", lineHeight: "1.65" }}
                >
                  {pillar.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
