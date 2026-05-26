import FadeIn from "@/components/ui/FadeIn";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Pilot Call — AutoFlow",
  description: "Book a 30-minute call with AutoFlow. We will show you exactly what the system looks like inside your business.",
};

export default function BookPage() {
  return (
    <>
      <section className="pt-20 pb-16 px-6" style={{ backgroundColor: "#090A0C" }}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#D4580A] mb-6">
              Book a Call
            </p>
            <h1
              className="font-bold text-[#EDEBE6] leading-tight mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
            >
              The First Step Is a
              <br />
              30-Minute Call.
            </h1>
            <p
              className="text-[#9B9B9B] mb-4"
              style={{ fontSize: "17px", lineHeight: "1.65" }}
            >
              We will show you exactly what AutoFlow looks like inside your
              business — and give you a clear answer on whether the pilot makes
              sense.
            </p>
            <p className="text-[#5C5C5C] text-sm mb-12">
              Pilot: $800 one-time. Full refund if no results in 8 days.
            </p>
          </FadeIn>

          {/* Cal.com embed placeholder */}
          <FadeIn delay={0.15}>
            <div
              className="rounded overflow-hidden"
              style={{ border: "1px solid #1E2023" }}
            >
              {/* Replace the src below with your actual Cal.com embed URL */}
              <iframe
                src="https://cal.com/autoflow/pilot?embed=true&theme=dark"
                width="100%"
                height="700"
                frameBorder="0"
                style={{ backgroundColor: "#0F1012" }}
                title="Book a Pilot Call"
              />
            </div>
            <p className="text-[#5C5C5C] text-xs mt-4 text-center">
              Powered by Cal.com · Replace the embed URL with your actual calendar link.
            </p>
          </FadeIn>
        </div>
      </section>
      <Footer />
    </>
  );
}
