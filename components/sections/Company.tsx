import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const team = [
  { name: "Abdullah", role: "Founder & CEO", note: "Building the infrastructure of the autonomous economy." },
];

const openRoles = ["Full-Stack Engineer", "AI/ML Engineer", "Enterprise Sales Lead"];

export default function Company() {
  return (
    <section
      className="py-28 px-6"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionLabel>Company</SectionLabel>
          <h2
            className="font-bold text-[#f0ede8] leading-tight mb-12"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Who Is Building This
          </h2>
        </FadeIn>

        {/* Founder Statement */}
        <FadeIn delay={0.1}>
          <div
            className="p-10 rounded mb-12"
            style={{ backgroundColor: "#161616", border: "1px solid #222222" }}
          >
            <p
              className="text-[#f0ede8] leading-relaxed mb-6"
              style={{ fontSize: "clamp(17px, 2vw, 20px)", lineHeight: "1.7" }}
            >
              I started AutoFlow at 17 because I kept watching companies lose
              deals to follow-ups that were never sent. The fix was obvious. The
              execution was not. So we built it.
            </p>
            <p
              className="text-[#bbbbbb] leading-relaxed mb-6"
              style={{ fontSize: "17px", lineHeight: "1.65" }}
            >
              We are not waiting for permission or perfect conditions. The people
              building with me now get a stake in what this becomes. We have no
              investors yet. That is a feature, not a bug — it means every
              decision we make is in service of the product and the people using
              it, not a cap table.
            </p>
            <p
              className="text-[#bbbbbb] leading-relaxed"
              style={{ fontSize: "17px", lineHeight: "1.65" }}
            >
              The problem we are solving has not been solved. The regulatory
              window is closing. We intend to be the infrastructure underneath
              every trustworthy AI system in the next decade.
            </p>
            <div className="mt-8 pt-8" style={{ borderTop: "1px solid #222222" }}>
              <p className="font-bold text-[#f0ede8]">Abdullah</p>
              <p className="text-[#888888] text-sm">Founder & CEO, AutoFlow</p>
            </div>
          </div>
        </FadeIn>

        {/* Team Grid */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {team.map((member, i) => (
              <div
                key={i}
                className="p-6 rounded"
                style={{ backgroundColor: "#161616", border: "1px solid #222222" }}
              >
                <p className="font-bold text-[#f0ede8] mb-1">{member.name}</p>
                <p className="text-[#e05c00] text-sm mb-2">{member.role}</p>
                <p className="text-[#888888] text-sm">{member.note}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Open Roles */}
        <FadeIn delay={0.3}>
          <div>
            <p
              className="text-[10px] font-semibold tracking-widest uppercase mb-4"
              style={{ color: "#d4830a" }}
            >
              We are hiring
            </p>
            <div className="flex flex-col gap-2">
              {openRoles.map((role, i) => (
                <a
                  key={i}
                  href="/careers"
                  className="flex items-center justify-between p-4 rounded group"
                  style={{ backgroundColor: "#161616", border: "1px solid #222222" }}
                >
                  <span className="text-[#f0ede8] font-medium">{role}</span>
                  <span className="text-[#d4830a] group-hover:text-[#e8960d] transition-colors">→</span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
