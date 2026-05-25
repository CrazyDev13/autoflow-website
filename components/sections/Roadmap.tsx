import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const phases = [
  {
    phase: "Phase 1",
    period: "Now — Year 2",
    title: "AI Agents",
    active: true,
    items: [
      "AI Agents for B2B outreach and sales automation.",
      "Land with agents. Map enterprise infrastructure needs.",
      "Build the trust that opens the door to Phase 2.",
      "Target: Founders, sales leaders, B2B agencies.",
    ],
  },
  {
    phase: "Phase 2",
    period: "Year 2 — 5",
    title: "The Execution Engine",
    active: false,
    items: [
      "The C++ Deterministic Execution Engine.",
      "For regulated enterprises: finance, healthcare, logistics.",
      "EU AI Act full enforcement by 2027 makes this legally mandatory.",
      "Target: CIOs, Chief Compliance Officers, enterprise architecture teams.",
    ],
  },
  {
    phase: "Phase 3",
    period: "Year 5+",
    title: "The Autonomous Economy",
    active: false,
    items: [
      "A no-code PaaS on top of the deterministic engine.",
      "Digital Robots — autonomous agents that buy, negotiate, and execute transactions 24/7.",
      "By 2030, machine customers will influence $18 trillion in global commerce.",
      "AutoFlow controls the deterministic layer underneath.",
    ],
  },
];

export default function Roadmap() {
  return (
    <section
      className="py-28 px-6"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>Roadmap</SectionLabel>
          <h2
            className="font-bold text-[#f0ede8] leading-tight mb-16"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Thinking in decades.
          </h2>
        </FadeIn>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          {/* Timeline line */}
          <div className="relative mb-8">
            <div
              className="h-px w-full"
              style={{ backgroundColor: "#222222" }}
            />
            <div
              className="absolute left-0 top-0 h-px"
              style={{
                width: "33.33%",
                backgroundColor: "#e05c00",
              }}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {phases.map((phase, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div
                  className="p-8 rounded"
                  style={{
                    backgroundColor: "#161616",
                    border: `1px solid ${phase.active ? "#e05c00" : "#222222"}`,
                    opacity: phase.active ? 1 : 0.7,
                  }}
                >
                  <p
                    className="text-[10px] font-semibold tracking-widest uppercase mb-1"
                    style={{ color: phase.active ? "#e05c00" : "#888888" }}
                  >
                    {phase.phase}
                  </p>
                  <p className="text-[#888888] text-xs mb-4">{phase.period}</p>
                  <h3
                    className="font-bold text-[#f0ede8] mb-4"
                    style={{ fontSize: "21px" }}
                  >
                    {phase.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {phase.items.map((item, j) => (
                      <li
                        key={j}
                        className="text-[#bbbbbb]"
                        style={{ fontSize: "15px", lineHeight: "1.55" }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden flex flex-col gap-4">
          {phases.map((phase, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="p-6 rounded"
                style={{
                  backgroundColor: "#161616",
                  borderLeft: `3px solid ${phase.active ? "#e05c00" : "#333333"}`,
                  opacity: phase.active ? 1 : 0.7,
                }}
              >
                <p
                  className="text-[10px] font-semibold tracking-widest uppercase mb-1"
                  style={{ color: phase.active ? "#e05c00" : "#888888" }}
                >
                  {phase.phase} · {phase.period}
                </p>
                <h3
                  className="font-bold text-[#f0ede8] mb-3"
                  style={{ fontSize: "19px" }}
                >
                  {phase.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {phase.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-[#bbbbbb]"
                      style={{ fontSize: "15px", lineHeight: "1.55" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
