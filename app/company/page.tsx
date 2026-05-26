import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company — AutoFlow",
  description: "AutoFlow is building the execution layer that makes AI trustworthy for regulated enterprise operations.",
};

const values = [
  {
    title: "Determinism over convention",
    desc: "We chose C++ not because it is fashionable but because it is correct. Every architectural decision starts with the guarantee we need to make.",
  },
  {
    title: "Honesty as strategy",
    desc: "We tell customers exactly what the system can and cannot do. Overclaiming is the fastest way to lose the trust we are in the business of building.",
  },
  {
    title: "Equity for builders",
    desc: "The people who build AutoFlow with us now get a stake in what it becomes. That is not a recruiting line — it is how we think about fairness.",
  },
  {
    title: "No investors yet",
    desc: "That is a feature. Every decision we make is in service of the product and the people using it, not a cap table.",
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-28 px-6" style={{ backgroundColor: "#090A0C" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>Company</SectionLabel>
            <h1
              className="font-bold text-[#EDEBE6] leading-tight mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              Building the Infrastructure
              <br />
              of the Autonomous Economy.
            </h1>
            <p
              className="text-[#9B9B9B] max-w-2xl"
              style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: "1.65" }}
            >
              AutoFlow is a software company building the deterministic execution
              layer that makes AI trustworthy for enterprise operations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 px-6" style={{ backgroundColor: "#0F1012" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>Mission</SectionLabel>
            <h2
              className="font-bold text-[#EDEBE6] leading-tight mb-8"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Every trustworthy AI system
              <br />
              will run on deterministic infrastructure.
              <br />
              <span style={{ color: "#C41E00" }}>We are building that infrastructure.</span>
            </h2>
            <p
              className="text-[#9B9B9B] max-w-2xl"
              style={{ fontSize: "17px", lineHeight: "1.65" }}
            >
              The EU AI Act. The demand for audit trails. The failure of
              probabilistic-only systems in regulated industries. These are not
              trends — they are the conditions that make our work mandatory.
              We intend to be the infrastructure layer underneath every
              trustworthy AI system in the next decade.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder */}
      <section className="py-28 px-6" style={{ backgroundColor: "#090A0C" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>Founding Story</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div
              className="p-10 rounded"
              style={{ backgroundColor: "#0F1012", border: "1px solid #1E2023" }}
            >
              <p
                className="text-[#EDEBE6] leading-relaxed mb-6"
                style={{ fontSize: "clamp(17px, 2vw, 20px)", lineHeight: "1.7" }}
              >
                I started AutoFlow at 17 because I kept watching companies lose
                deals to follow-ups that were never sent. The fix was obvious.
                The execution was not. So we built it.
              </p>
              <p
                className="text-[#9B9B9B] leading-relaxed mb-6"
                style={{ fontSize: "17px", lineHeight: "1.65" }}
              >
                We are not waiting for permission or perfect conditions. The
                people building with me now get a stake in what this becomes.
                We have no investors yet. That is a feature, not a bug — it
                means every decision we make is in service of the product and
                the people using it, not a cap table.
              </p>
              <p
                className="text-[#9B9B9B] leading-relaxed"
                style={{ fontSize: "17px", lineHeight: "1.65" }}
              >
                The problem we are solving has not been solved. The regulatory
                window is closing. We intend to be the infrastructure underneath
                every trustworthy AI system in the next decade.
              </p>
              <div className="mt-8 pt-8" style={{ borderTop: "1px solid #1E2023" }}>
                <p className="font-bold text-[#EDEBE6]">Abdullah</p>
                <p className="text-[#5C5C5C] text-sm">Founder & CEO, AutoFlow</p>
                <p className="text-[#5C5C5C] text-sm">Karachi, Pakistan</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6" style={{ backgroundColor: "#0F1012" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>How We Work</SectionLabel>
            <h2
              className="font-bold text-[#EDEBE6] leading-tight mb-16"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              What we believe.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  className="p-8 rounded h-full"
                  style={{ backgroundColor: "#141416", border: "1px solid #1E2023" }}
                >
                  <h3 className="font-bold text-[#EDEBE6] mb-3" style={{ fontSize: "17px" }}>
                    {v.title}
                  </h3>
                  <p className="text-[#9B9B9B]" style={{ fontSize: "16px", lineHeight: "1.65" }}>
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center" style={{ backgroundColor: "#090A0C" }}>
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2
              className="font-bold text-[#EDEBE6] leading-tight mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              We are hiring.
            </h2>
            <p className="text-[#9B9B9B] mb-8" style={{ fontSize: "17px", lineHeight: "1.65" }}>
              Builders who want equity, ownership, and a real problem to solve.
            </p>
            <Link
              href="/careers"
              className="inline-block px-8 py-4 bg-[#C41E00] text-[#EDEBE6] font-medium rounded hover:bg-[#E02200] transition-colors"
            >
              View Open Roles
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
