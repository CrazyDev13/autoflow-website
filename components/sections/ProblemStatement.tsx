import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const problems = [
  {
    headline: "Same input. Different output.",
    sub: "Transformers are non-deterministic by design.",
  },
  {
    headline: "AI cannot know it's wrong.",
    sub: "Hallucination is architectural — not a patchable bug.",
  },
  {
    headline: "No proof. No audit trail.",
    sub: "EU AI Act requires explainability. Probabilistic AI cannot deliver.",
  },
  {
    headline: "Python makes it worse.",
    sub: "GC pauses and dynamic typing add a second layer of unpredictability.",
  },
];

export default function ProblemStatement() {
  return (
    <section
      className="py-28 px-6"
      style={{ backgroundColor: "#0F1012" }}
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionLabel>The Problem</SectionLabel>
          <h2
            className="font-bold text-[#EDEBE6] leading-tight mb-16"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Enterprise AI has a reliability problem.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div
                className="p-7 rounded h-full"
                style={{
                  backgroundColor: "#141416",
                  borderLeft: "3px solid #C41E00",
                }}
              >
                <h3
                  className="font-bold text-[#EDEBE6] mb-2"
                  style={{ fontSize: "clamp(18px, 2vw, 22px)", lineHeight: "1.2" }}
                >
                  {p.headline}
                </h3>
                <p
                  className="text-[#9B9B9B]"
                  style={{ fontSize: "15px", lineHeight: "1.5" }}
                >
                  {p.sub}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
