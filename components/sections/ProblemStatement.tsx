import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const problems = [
  {
    headline: "The same input produces a different output every time.",
    body: "Every AI system in use today is built on probabilistic models. Ask the same question twice — get two different answers. For creative tools, this is a feature. For enterprise revenue operations and compliance workflows, it is a structural failure.",
  },
  {
    headline: "AI does not know when it is wrong.",
    body: "Hallucination is not a bug to be patched. It is an architectural property of transformer models. The model cannot access ground truth — it generates what is statistically plausible, which may have no relationship to what is actually true.",
  },
  {
    headline: "You cannot prove why the AI made that decision.",
    body: "When an AI agent qualifies a lead, rejects an application, or routes a deal — there is no mechanism to prove the reasoning. Under the EU AI Act, that is not just an operational problem. It is a legal liability.",
  },
  {
    headline: "Python and Node.js make this worse, not better.",
    body: "Garbage collection pauses. Non-deterministic execution timing. Dynamic typing errors caught in production. Every AI agent built today has two layers of unpredictability stacked on each other. There is no point in the system where a guarantee is possible.",
  },
];

export default function ProblemStatement() {
  return (
    <section
      className="py-28 px-6"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionLabel>The Problem</SectionLabel>
          <h2
            className="font-bold text-[#f0ede8] leading-tight mb-16"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Enterprise AI has a reliability problem.
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {problems.map((p, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div
                className="p-8 rounded"
                style={{
                  backgroundColor: "#161616",
                  borderLeft: "3px solid #cc2200",
                }}
              >
                <h3
                  className="font-bold text-[#f0ede8] mb-3"
                  style={{ fontSize: "clamp(17px, 2vw, 21px)" }}
                >
                  {p.headline}
                </h3>
                <p
                  className="text-[#bbbbbb] leading-relaxed"
                  style={{ fontSize: "17px", lineHeight: "1.65" }}
                >
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
