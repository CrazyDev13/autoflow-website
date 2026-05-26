import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function FinalCTA() {
  return (
    <section
      className="py-36 px-6 text-center"
      style={{ backgroundColor: "#090A0C" }}
    >
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2
            className="font-bold text-[#EDEBE6] leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            Start With a Conversation.
          </h2>
          <p
            className="text-[#9B9B9B] mb-10 max-w-xl mx-auto"
            style={{ fontSize: "17px", lineHeight: "1.65" }}
          >
            We will show you exactly what AutoFlow looks like inside your
            business — and give you a clear answer on whether the pilot makes
            sense.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/book"
              className="w-full sm:w-auto px-8 py-4 bg-[#C41E00] text-[#EDEBE6] font-medium rounded hover:bg-[#E02200] transition-colors duration-150 text-base"
            >
              Book a Pilot Call
            </Link>
            <Link
              href="/research"
              className="text-[#C9860A] text-base hover:text-[#D4580A] transition-colors duration-150"
            >
              Read the Full Thesis →
            </Link>
          </div>

          <p className="text-[#5C5C5C] text-sm">
            Pilot: $800 one-time. Full refund if no results in 8 days.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
