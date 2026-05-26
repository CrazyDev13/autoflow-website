import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const pillars = [
  {
    num: "01",
    label: "Deterministic Execution",
    line: "Same input, same output — mathematically guaranteed.",
  },
  {
    num: "02",
    label: "Mathematical Verification",
    line: "Every AI output is a hypothesis that must be proven before execution.",
  },
  {
    num: "03",
    label: "Full Audit Trail",
    line: "Every decision logged: input, output, proof. Regulator-ready.",
  },
  {
    num: "04",
    label: "Zero GC Pauses",
    line: "Manual C++ memory management. Microsecond latency. No overhead.",
  },
  {
    num: "05",
    label: "EU AI Act Ready",
    line: "Explainability and audit trail built in — not bolted on.",
  },
  {
    num: "06",
    label: "Self-Hosted Deploy",
    line: "Runs inside your infrastructure. Your data never leaves.",
  },
];

export default function Technology() {
  return (
    <section
      className="py-28 px-6"
      style={{ backgroundColor: "#090A0C" }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <SectionLabel>Technology</SectionLabel>
          <h2
            className="font-bold text-[#EDEBE6] leading-tight mb-4 max-w-3xl"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Built on C++.
            <br />
            The only way to guarantee it.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px mt-16"
          style={{ backgroundColor: "#1E2023" }}
        >
          {pillars.map((pillar, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div
                className="p-7 flex flex-col gap-3"
                style={{ backgroundColor: "#090A0C" }}
              >
                <span
                  className="font-mono font-bold"
                  style={{ fontSize: "11px", color: "#C41E00" }}
                >
                  {pillar.num}
                </span>
                <h3
                  className="font-bold text-[#EDEBE6]"
                  style={{ fontSize: "17px", lineHeight: "1.2" }}
                >
                  {pillar.label}
                </h3>
                <p
                  className="text-[#9B9B9B]"
                  style={{ fontSize: "14px", lineHeight: "1.55" }}
                >
                  {pillar.line}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
