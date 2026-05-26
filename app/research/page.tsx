import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research — AutoFlow",
  description: "AutoFlow's technical writing on deterministic AI, the C++ execution layer, and the EU AI Act.",
};

const thesis = [
  {
    title: "The Probabilistic Problem",
    body: "Every AI system in production today is built on transformer models. Transformer models are probabilistic by design — they generate the most statistically likely next token. This is not a flaw in any individual model. It is an architectural property of the entire paradigm.",
  },
  {
    title: "Why Patching Does Not Work",
    body: "Guardrails, filtering layers, and prompt engineering reduce the frequency of failure. They do not eliminate it. You cannot add determinism to a probabilistic system through a wrapper. You need a separate deterministic layer that controls what the probabilistic system is allowed to do.",
  },
  {
    title: "The C++ Execution Engine",
    body: "AutoFlow's execution engine is written in C++. C++ compiles to native machine code with no garbage collection, no runtime interpretation, and deterministic memory management. Given identical inputs and business rules, the output is always identical. That is the guarantee.",
  },
  {
    title: "The Regulatory Forcing Function",
    body: "The EU AI Act enters full enforcement in 2027. Article 13 requires high-risk AI systems to be interpretable and auditable. Article 9 requires risk management systems. Neither requirement can be satisfied by a probabilistic system alone. The deterministic layer is not optional — it is the compliance mechanism.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <section className="pt-20 pb-28 px-6" style={{ backgroundColor: "#090A0C" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>Research</SectionLabel>
            <h1
              className="font-bold text-[#EDEBE6] leading-tight mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              The AutoFlow Thesis
            </h1>
            <p
              className="text-[#9B9B9B] max-w-xl"
              style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: "1.65" }}
            >
              Why the enterprise AI reliability problem requires a
              deterministic execution layer — and why that layer must be
              written in C++.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Thesis sections */}
      <section className="pb-28 px-6" style={{ backgroundColor: "#090A0C" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-16">
            {thesis.map((section, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div>
                  <p
                    className="text-[10px] font-semibold tracking-widest uppercase mb-4"
                    style={{ color: "#5C5C5C" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2
                    className="font-bold text-[#EDEBE6] mb-4"
                    style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
                  >
                    {section.title}
                  </h2>
                  <p
                    className="text-[#9B9B9B]"
                    style={{ fontSize: "17px", lineHeight: "1.75" }}
                  >
                    {section.body}
                  </p>
                </div>
                {i < thesis.length - 1 && (
                  <div
                    className="mt-16 h-px"
                    style={{ backgroundColor: "#1E2023" }}
                  />
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-28 px-6" style={{ backgroundColor: "#0F1012" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>Coming Soon</SectionLabel>
            <h2
              className="font-bold text-[#EDEBE6] leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Full technical whitepapers launching in 2026.
            </h2>
            <p
              className="text-[#9B9B9B] mb-8 max-w-xl"
              style={{ fontSize: "17px", lineHeight: "1.65" }}
            >
              In-depth coverage of the four-layer architecture, EU AI Act
              compliance design, and benchmarks from the C++ execution engine.
            </p>
            <Link
              href="/book"
              className="inline-block px-8 py-4 bg-[#C41E00] text-[#EDEBE6] font-medium rounded hover:bg-[#E02200] transition-colors"
            >
              Get Notified
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
