import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function FinalCTA() {
  return (
    <section
      className="py-36 px-6 text-center"
      style={{ backgroundColor: "#080808" }}
    >
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2
            className="font-bold text-[#f0ede8] leading-tight mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            Start With a Conversation.
          </h2>
          <p
            className="text-[#bbbbbb] mb-10 max-w-xl mx-auto"
            style={{ fontSize: "17px", lineHeight: "1.65" }}
          >
            We will show you exactly what AutoFlow looks like inside your
            business — and give you a clear answer on whether the pilot makes
            sense.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/book"
              className="w-full sm:w-auto px-8 py-4 bg-[#cc2200] text-[#f0ede8] font-medium rounded hover:bg-[#e02800] transition-colors duration-150 text-base"
            >
              Book a Pilot Call
            </Link>
            <Link
              href="/research"
              className="text-[#d4830a] text-base hover:text-[#e8960d] transition-colors duration-150"
            >
              Read the Full Thesis →
            </Link>
          </div>

          <p className="text-[#888888] text-sm">
            Pilot: $800 one-time. Full refund if no results in 8 days.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
