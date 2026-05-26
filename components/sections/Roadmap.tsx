import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const phases = [
  {
    phase: "Phase 1",
    period: "Now",
    title: "AI Agents",
    desc: "Deployed. Generating revenue.",
    active: true,
  },
  {
    phase: "Phase 2",
    period: "2026",
    title: "C++ Engine",
    desc: "Deterministic. Compliant. Enterprise-grade.",
    active: false,
  },
  {
    phase: "Phase 3",
    period: "2028+",
    title: "Digital Robots",
    desc: "Autonomous. Transacting. 24/7.",
    active: false,
  },
];

export default function Roadmap() {
  return (
    <section
      className="py-28 px-6"
      style={{ backgroundColor: "#0F1012" }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel>Roadmap</SectionLabel>
          <h2
            className="font-bold text-[#EDEBE6] leading-tight mb-20"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Thinking in decades.
          </h2>
        </FadeIn>

        {/* Timeline connector + cards */}
        <div className="relative">
          {/* Horizontal line — desktop */}
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px" style={{ backgroundColor: "#1E2023" }} />
          {/* Active progress — phase 1 done */}
          <div className="hidden md:block absolute top-[28px] left-0 h-px" style={{ width: "16.67%", backgroundColor: "#D4580A" }} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="flex flex-col">
                  {/* Node dot */}
                  <div className="hidden md:flex items-center mb-6">
                    <div
                      className="w-3.5 h-3.5 rounded-full shrink-0 relative z-10"
                      style={{
                        backgroundColor: phase.active ? "#D4580A" : "#1E2023",
                        border: `2px solid ${phase.active ? "#D4580A" : "#2A2D32"}`,
                        boxShadow: phase.active ? "0 0 12px rgba(212,88,10,0.4)" : "none",
                      }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="p-7 rounded flex-1"
                    style={{
                      backgroundColor: "#141416",
                      border: `1px solid ${phase.active ? "#D4580A" : "#1E2023"}`,
                      opacity: phase.active ? 1 : 0.65,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-[10px] font-semibold tracking-widest uppercase"
                        style={{ color: phase.active ? "#D4580A" : "#5C5C5C" }}
                      >
                        {phase.phase}
                      </span>
                      <span
                        className="text-[10px] font-mono px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: phase.active ? "#1E0A00" : "#1A1C1F",
                          color: phase.active ? "#D4580A" : "#5C5C5C",
                        }}
                      >
                        {phase.period}
                      </span>
                      {phase.active && (
                        <span
                          className="text-[9px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded"
                          style={{ backgroundColor: "#C41E00", color: "#EDEBE6" }}
                        >
                          Live
                        </span>
                      )}
                    </div>

                    <h3
                      className="font-bold text-[#EDEBE6] mb-2"
                      style={{ fontSize: "clamp(22px, 2.5vw, 28px)" }}
                    >
                      {phase.title}
                    </h3>
                    <p
                      className="text-[#9B9B9B]"
                      style={{ fontSize: "14px", lineHeight: "1.5" }}
                    >
                      {phase.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
