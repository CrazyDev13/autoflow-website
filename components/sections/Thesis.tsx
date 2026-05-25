import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const layers = [
  {
    num: "01",
    name: "Context Ingestion",
    tag: "C++",
    desc: "All structured data. Business rules. Compliance constraints. Fully deterministic. No randomness.",
  },
  {
    num: "02",
    name: "Intelligence",
    tag: "LLM",
    desc: "The AI model is called with a precisely structured prompt. This is the only probabilistic step in the system.",
    highlight: true,
  },
  {
    num: "03",
    name: "Mathematical Verification",
    tag: "C++ Core",
    desc: "Every LLM output is checked for consistency, confidence bounds, compliance, and reproducibility. If it fails any check — rejected.",
  },
  {
    num: "04",
    name: "Execution & Logging",
    tag: "C++",
    desc: "Direct machine code. No interpreter. No GC pauses. Microsecond latency. Every decision is logged with its full input and output state.",
  },
];

export default function Thesis() {
  return (
    <section
      className="py-28 px-6"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel>The AutoFlow Thesis</SectionLabel>
          <h2
            className="font-bold text-[#f0ede8] leading-tight mb-4 max-w-3xl"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            You do not need to replace the AI model.
            <br />
            <span style={{ color: "#cc2200" }}>You need to cage it.</span>
          </h2>
          <p
            className="text-[#bbbbbb] mb-16 max-w-2xl"
            style={{ fontSize: "17px", lineHeight: "1.65" }}
          >
            {"AutoFlow's answer is a C++ execution engine that sits between the AI model and the real-world action. Every AI output is treated as a hypothesis — not a decision — until it passes mathematical verification."}
          </p>
        </FadeIn>

        {/* Architecture Diagram */}
        <div className="relative">
          {/* Connecting line — hidden on mobile */}
          <div
            className="hidden md:block absolute left-[2.75rem] top-10 bottom-10 w-px"
            style={{ backgroundColor: "#222222" }}
          />

          <div className="flex flex-col gap-0">
            {layers.map((layer, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative flex gap-6 py-6">
                  {/* Number bubble */}
                  <div
                    className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: layer.highlight ? "#cc2200" : "#161616",
                      border: `1px solid ${layer.highlight ? "#cc2200" : "#222222"}`,
                      color: "#f0ede8",
                    }}
                  >
                    {layer.num}
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 p-6 rounded"
                    style={{
                      backgroundColor: layer.highlight ? "#1a0a08" : "#111111",
                      border: `1px solid ${layer.highlight ? "#cc2200" : "#222222"}`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-semibold tracking-widest uppercase px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: layer.highlight ? "#cc2200" : "#222222",
                          color: layer.highlight ? "#f0ede8" : "#888888",
                        }}
                      >
                        {layer.tag}
                      </span>
                      <h3
                        className="font-bold text-[#f0ede8]"
                        style={{ fontSize: "17px" }}
                      >
                        {layer.name}
                      </h3>
                    </div>
                    <p
                      className="text-[#bbbbbb]"
                      style={{ fontSize: "16px", lineHeight: "1.6" }}
                    >
                      {layer.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Result statement */}
        <FadeIn delay={0.4}>
          <div
            className="mt-8 p-8 rounded text-center"
            style={{ backgroundColor: "#111111", border: "1px solid #222222" }}
          >
            <p
              className="font-bold text-[#f0ede8] mb-2"
              style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}
            >
              Given the same input and the same rules — always the same output.
            </p>
            <p className="text-[#888888] text-base">
              That is the mathematical guarantee Python cannot provide.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
