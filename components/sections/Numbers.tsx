import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  { number: "$7.3B", label: "B2B sales automation market by 2030", context: "11.4% annual growth" },
  { number: "33M+", label: "US small businesses doing outreach manually", context: "Right now, today" },
  { number: "80%", label: "of B2B deals require 5+ follow-up touches", context: "Most never get them" },
  { number: "44%", label: "of reps give up after the first contact", context: "The rest of the deal dies there" },
  { number: "2027", label: "EU AI Act full enforcement", context: "Deterministic AI becomes legally mandatory" },
  { number: "€35M", label: "Maximum penalty for EU AI Act non-compliance", context: "Or 7% of global annual turnover" },
  { number: "$18T", label: "Machine-customer influence on global commerce by 2030", context: "McKinsey projection" },
  { number: "$4.4T", label: "AI productivity add by 2030", context: "McKinsey projection" },
];

export default function Numbers() {
  return (
    <section
      className="py-28 px-6"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>The Scale</SectionLabel>
          <h2
            className="font-bold text-[#f0ede8] leading-tight mb-16"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            The problem is not theoretical.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "#222222" }}>
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div
                className="p-8 flex flex-col"
                style={{ backgroundColor: "#080808" }}
              >
                <span
                  className="font-bold text-[#f0ede8] leading-none mb-3"
                  style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
                >
                  {stat.number}
                </span>
                <span
                  className="text-[#bbbbbb] mb-2"
                  style={{ fontSize: "14px", lineHeight: "1.4" }}
                >
                  {stat.label}
                </span>
                <span
                  className="text-[#d4830a] mt-auto"
                  style={{ fontSize: "12px" }}
                >
                  {stat.context}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
