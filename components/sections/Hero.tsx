"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen -mt-16 flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: "#080808" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(204,34,0,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#e05c00] mb-8"
        >
          The Trust Infrastructure for the AI Era
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-bold leading-[1.08] tracking-tight text-[#f0ede8] mb-6"
          style={{
            fontSize: "clamp(44px, 8vw, 112px)",
          }}
        >
          AI That Enterprises
          <br />
          <span style={{ color: "#f0ede8" }}>Can Actually Trust.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-[#bbbbbb] mb-10 max-w-2xl mx-auto"
          style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: "1.65" }}
        >
          {"Today's AI is powerful. It is not deterministic."}
          <br />
          AutoFlow builds the execution layer that makes it trustworthy.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/book"
            className="w-full sm:w-auto px-8 py-4 bg-[#cc2200] text-[#f0ede8] font-medium rounded hover:bg-[#e02800] transition-colors duration-150 text-base"
          >
            Book a Pilot Call
          </Link>
          <Link
            href="/research"
            className="text-[#d4830a] text-base hover:text-[#e8960d] transition-colors duration-150 flex items-center gap-1"
          >
            Read Our Thesis →
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[#888888]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
