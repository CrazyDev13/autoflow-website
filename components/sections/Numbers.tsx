import FadeIn from "@/components/ui/FadeIn";

const stats = [
  {
    number: "$7.3B",
    label: ["B2B sales automation", " market", " by 2030"],
    accent: 1,
  },
  {
    number: "33M+",
    label: ["businesses doing", " outreach", " manually right now"],
    accent: 1,
  },
  {
    number: "80%",
    label: ["of B2B deals need", " 5+ follow-up", " touches"],
    accent: 1,
  },
  {
    number: "44%",
    label: ["of reps quit after", " first contact", ""],
    accent: 1,
  },
  {
    number: "2027",
    label: ["EU AI Act", " full enforcement", " deadline"],
    accent: 1,
  },
  {
    number: "$18T",
    label: ["machine-customer commerce", " projected", " by 2030"],
    accent: 1,
  },
];

export default function Numbers() {
  return (
    <section
      className="py-28 px-6"
      style={{ backgroundColor: "#090A0C" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-16">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="flex flex-col gap-3">
                <span
                  className="font-bold text-[#EDEBE6] leading-none tracking-tight"
                  style={{ fontSize: "clamp(80px, 9vw, 120px)" }}
                >
                  {stat.number}
                </span>
                <p
                  className="text-[#9B9B9B]"
                  style={{ fontSize: "15px", lineHeight: "1.45", maxWidth: "220px" }}
                >
                  {stat.label[0]}
                  <span style={{ color: "#D4580A" }}>{stat.label[1]}</span>
                  {stat.label[2]}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
