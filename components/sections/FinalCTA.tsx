"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section
      className="py-36 px-6 text-center relative overflow-hidden"
      style={{ backgroundColor: "#090A0C" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,30,0,0.12) 0%, transparent 70%)" }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-6"
          style={{ color: "#D4580A" }}
        >
          Get Started
        </motion.p>

        {/* Headline - dramatic size */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bold leading-[1.05] mb-6"
          style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "#EDEBE6" }}
        >
          Start With a Conversation.
        </motion.h2>

        {/* Sub-headline - 18px */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 max-w-xl mx-auto"
          style={{ fontSize: "18px", lineHeight: "1.6", color: "#5C5C5C" }}
        >
          We will show you exactly what AutoFlow looks like inside your
          business — and give you a clear answer on whether the pilot makes
          sense.
        </motion.p>

        {/* CTA - highest contrast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Link
            href="/book"
            className="group relative w-full sm:w-auto px-10 py-5 font-medium rounded-lg overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: "#C41E00",
              color: "#EDEBE6",
              boxShadow: "0 0 40px rgba(196, 30, 0, 0.4), 0 8px 30px rgba(196, 30, 0, 0.3)",
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
              Book a Pilot Call
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
          <Link
            href="/research"
            className="text-[#9B9B9B] text-base hover:text-[#EDEBE6] transition-colors duration-200"
          >
            Read the Full Thesis →
          </Link>
        </motion.div>

        {/* Caption - 14px muted */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm"
          style={{ color: "#5C5C5C" }}
        >
          Pilot: $800 one-time. Full refund if no results in 8 days.
        </motion.p>
      </div>
    </section>
  );
}
