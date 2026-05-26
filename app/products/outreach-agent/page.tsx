import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutoFlow Outreach Agent — AI-Powered B2B Prospecting",
  description:
    "AutoFlow Outreach Agent runs your entire B2B prospecting operation — email and LinkedIn — without human involvement.",
};

const steps = [
  {
    num: "01",
    title: "Prospect Selection",
    desc: "Pulls prospects from your database. Decides who to contact and when based on your business rules.",
  },
  {
    num: "02",
    title: "Personalized Messaging",
    desc: "AI writes a unique, personalized message for each prospect. Not a template. A message that adapts to sequence position.",
  },
  {
    num: "03",
    title: "Multi-Channel Send",
    desc: "Sends across email and LinkedIn simultaneously. Coordinated, not duplicated.",
  },
  {
    num: "04",
    title: "Intent Detection",
    desc: "Detects reply intent: interested / not interested / follow up later. Routes accordingly.",
  },
  {
    num: "05",
    title: "Automated Follow-Up",
    desc: "Follows up automatically — 4 touches over 14 days. Calibrated for each contact.",
  },
  {
    num: "06",
    title: "Lead Routing",
    desc: "Routes warm leads to you. Handles everything else. 24/7.",
  },
];

const buyers = [
  {
    title: "Founder doing their own outreach",
    desc: "You are spending 3–4 hours a day on prospecting. You should be spending that time closing. AutoFlow runs the entire top-of-funnel while you focus on conversations that matter.",
  },
  {
    title: "Sales VP managing an SDR team",
    desc: "Your SDRs are expensive, inconsistent, and churn fast. AutoFlow delivers predictable pipeline volume at a fraction of the cost — deployed inside your own infrastructure.",
  },
];

export default function OutreachAgentPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-20 pb-28 px-6"
        style={{ backgroundColor: "#090A0C" }}
      >
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>AI Agent · Available Now</SectionLabel>
            <h1
              className="font-bold text-[#EDEBE6] leading-tight mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              AutoFlow
              <br />
              Outreach Agent
            </h1>
            <p
              className="text-[#9B9B9B] mb-10 max-w-2xl"
              style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: "1.65" }}
            >
              An AI-powered outreach system that runs your entire B2B
              prospecting operation — email and LinkedIn — without human
              involvement. Deployed inside your own infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-4 bg-[#C41E00] text-[#EDEBE6] font-medium rounded hover:bg-[#E02200] transition-colors text-base text-center"
              >
                Book a Pilot
              </Link>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-4 text-center text-[#C9860A] hover:text-[#D4580A] transition-colors text-base"
              >
                See How It Works →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6-Step Flow */}
      <section
        id="how-it-works"
        className="py-28 px-6"
        style={{ backgroundColor: "#0F1012" }}
      >
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>How It Works</SectionLabel>
            <h2
              className="font-bold text-[#EDEBE6] leading-tight mb-16"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Six steps. Zero humans.
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div
                  className="flex gap-6 p-6 rounded items-start"
                  style={{ backgroundColor: "#141416", border: "1px solid #1E2023" }}
                >
                  <span
                    className="font-bold text-[#5C5C5C] flex-shrink-0 w-8 pt-0.5"
                    style={{ fontSize: "13px" }}
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3
                      className="font-bold text-[#EDEBE6] mb-2"
                      style={{ fontSize: "17px" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#9B9B9B]"
                      style={{ fontSize: "16px", lineHeight: "1.6" }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-28 px-6" style={{ backgroundColor: "#090A0C" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>Who It&apos;s For</SectionLabel>
            <h2
              className="font-bold text-[#EDEBE6] leading-tight mb-16"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Built for two kinds of buyers.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {buyers.map((buyer, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="p-8 rounded h-full"
                  style={{
                    backgroundColor: "#0F1012",
                    border: "1px solid #1E2023",
                    borderTop: "2px solid #C41E00",
                  }}
                >
                  <h3
                    className="font-bold text-[#EDEBE6] mb-4"
                    style={{ fontSize: "19px" }}
                  >
                    {buyer.title}
                  </h3>
                  <p
                    className="text-[#9B9B9B]"
                    style={{ fontSize: "16px", lineHeight: "1.65" }}
                  >
                    {buyer.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-28 px-6" style={{ backgroundColor: "#0F1012" }}>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <SectionLabel>Why Not The Others</SectionLabel>
            <h2
              className="font-bold text-[#EDEBE6] leading-tight mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Most outreach tools are sequence managers.
              <br />
              <span style={{ color: "#C41E00" }}>
                AutoFlow is an execution engine.
              </span>
            </h2>
            <p
              className="text-[#9B9B9B] max-w-2xl"
              style={{ fontSize: "17px", lineHeight: "1.65" }}
            >
              Other platforms give you templates, send limits, and dashboards.
              You still decide who to contact, what to say, and when to follow
              up. AutoFlow makes every one of those decisions. You see the warm
              leads. Nothing else lands on your desk.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {[
              { label: "Deployed in your infrastructure", sub: "Your data never leaves your environment." },
              { label: "Deterministic execution", sub: "Same rules, same output, every time." },
              { label: "Full audit trail", sub: "Every decision logged. EU AI Act ready." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  className="p-6 rounded"
                  style={{ backgroundColor: "#141416", border: "1px solid #1E2023" }}
                >
                  <p className="font-bold text-[#EDEBE6] mb-2" style={{ fontSize: "16px" }}>
                    {item.label}
                  </p>
                  <p className="text-[#5C5C5C] text-sm">{item.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-28 px-6" style={{ backgroundColor: "#090A0C" }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <SectionLabel>Pricing</SectionLabel>
            <h2
              className="font-bold text-[#EDEBE6] leading-tight mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              If the system does not generate results in 8 days, you pay nothing.
            </h2>
            <p
              className="text-[#9B9B9B] mb-12"
              style={{ fontSize: "17px", lineHeight: "1.65" }}
            >
              That is how confident we are in what we built.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div
              className="p-10 rounded mb-6 text-left"
              style={{
                backgroundColor: "#0F1012",
                border: "1px solid #1E2023",
                borderTop: "2px solid #C9860A",
              }}
            >
              <div className="grid grid-cols-3 gap-8 mb-8">
                {[
                  { num: "$800", label: "One-time setup fee" },
                  { num: "8 days", label: "Paid pilot period" },
                  { num: "100%", label: "Full refund if no results" },
                ].map((item, i) => (
                  <div key={i}>
                    <p
                      className="font-bold text-[#EDEBE6] mb-1"
                      style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
                    >
                      {item.num}
                    </p>
                    <p className="text-[#5C5C5C] text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
              <div
                className="pt-6"
                style={{ borderTop: "1px solid #1E2023" }}
              >
                <p className="text-[#9B9B9B] text-sm mb-1">Ongoing retainer</p>
                <p className="font-bold text-[#EDEBE6] text-lg">
                  $150 – $700 / month{" "}
                  <span className="text-[#5C5C5C] font-normal text-sm">
                    (volume-based)
                  </span>
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[#5C5C5C] text-sm">
              The pilot starts at $800. Your first qualified meeting pays for it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Book */}
      <section className="py-28 px-6" style={{ backgroundColor: "#0F1012" }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2
              className="font-bold text-[#EDEBE6] leading-tight mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 56px)" }}
            >
              Start the pilot.
            </h2>
            <p
              className="text-[#9B9B9B] mb-10"
              style={{ fontSize: "17px", lineHeight: "1.65" }}
            >
              Book a 30-minute call. We will show you exactly what AutoFlow
              looks like inside your business.
            </p>
            <Link
              href="/book"
              className="inline-block px-10 py-4 bg-[#C41E00] text-[#EDEBE6] font-medium rounded hover:bg-[#E02200] transition-colors text-base"
            >
              Book a Pilot Call
            </Link>
            <p className="text-[#5C5C5C] text-sm mt-6">
              Pilot: $800 one-time. Full refund if no results in 8 days.
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </>
  );
}
