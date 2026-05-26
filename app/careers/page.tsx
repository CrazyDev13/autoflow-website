import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — AutoFlow",
  description: "Join AutoFlow. Equity-first. Builder culture. Real problem. No permission required.",
};

const roles = [
  {
    title: "Full-Stack Engineer",
    type: "Full-time · Remote",
    desc: "Build the web platform, product interfaces, and APIs that sit on top of the C++ execution engine. TypeScript, Next.js, Rust optional.",
  },
  {
    title: "AI/ML Engineer",
    type: "Full-time · Remote",
    desc: "Design and tune the prompting layer, intent detection, and output verification that connects the LLM to the deterministic core.",
  },
  {
    title: "Enterprise Sales Lead",
    type: "Full-time · Remote",
    desc: "Own enterprise pipeline from first call to signed contract. You will be selling to CTOs and CIOs at regulated businesses.",
  },
];

const perks = [
  "Equity from day one",
  "Fully remote",
  "Direct access to the founder",
  "Real ownership over your domain",
  "No investors to answer to — yet",
  "Building something that has not been built",
];

export default function CareersPage() {
  return (
    <>
      <section className="pt-20 pb-28 px-6" style={{ backgroundColor: "#090A0C" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>Careers</SectionLabel>
            <h1
              className="font-bold text-[#EDEBE6] leading-tight mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              Build something
              <br />
              that matters.
            </h1>
            <p
              className="text-[#9B9B9B] max-w-xl"
              style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: "1.65" }}
            >
              AutoFlow is a small team solving a large problem. The people who
              join now get equity, ownership, and a front-row seat to building
              infrastructure that will be used by enterprises globally.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-28 px-6" style={{ backgroundColor: "#0F1012" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>Open Roles</SectionLabel>
            <h2
              className="font-bold text-[#EDEBE6] leading-tight mb-16"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              We are hiring across the stack.
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {roles.map((role, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  className="p-8 rounded flex flex-col md:flex-row md:items-start md:justify-between gap-6"
                  style={{ backgroundColor: "#141416", border: "1px solid #1E2023" }}
                >
                  <div className="flex-1">
                    <p
                      className="text-[10px] font-semibold tracking-widest uppercase mb-2"
                      style={{ color: "#5C5C5C" }}
                    >
                      {role.type}
                    </p>
                    <h3
                      className="font-bold text-[#EDEBE6] mb-3"
                      style={{ fontSize: "19px" }}
                    >
                      {role.title}
                    </h3>
                    <p
                      className="text-[#9B9B9B]"
                      style={{ fontSize: "16px", lineHeight: "1.6" }}
                    >
                      {role.desc}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="mailto:hello@autoflow.ai"
                      className="inline-block px-6 py-3 bg-[#C41E00] text-[#EDEBE6] text-sm font-medium rounded hover:bg-[#E02200] transition-colors whitespace-nowrap"
                    >
                      Apply →
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-28 px-6" style={{ backgroundColor: "#090A0C" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>What You Get</SectionLabel>
            <h2
              className="font-bold text-[#EDEBE6] leading-tight mb-12"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              Equity-first. Builder culture.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {perks.map((perk, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div
                  className="p-6 rounded"
                  style={{ backgroundColor: "#0F1012", border: "1px solid #1E2023" }}
                >
                  <span
                    className="text-[#C9860A] mr-2 font-bold"
                    style={{ fontSize: "18px" }}
                  >
                    →
                  </span>
                  <span
                    className="text-[#EDEBE6]"
                    style={{ fontSize: "16px" }}
                  >
                    {perk}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center" style={{ backgroundColor: "#0F1012" }}>
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2
              className="font-bold text-[#EDEBE6] leading-tight mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              {"Don't see your role?"}
            </h2>
            <p className="text-[#9B9B9B] mb-8" style={{ fontSize: "17px", lineHeight: "1.65" }}>
              If you are a builder who thinks this problem is important, email
              us. We read every message.
            </p>
            <a
              href="mailto:hello@autoflow.ai"
              className="inline-block px-8 py-4 bg-[#C41E00] text-[#EDEBE6] font-medium rounded hover:bg-[#E02200] transition-colors"
            >
              hello@autoflow.ai
            </a>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
