"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen -mt-16 flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: "#090A0C" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(196,30,0,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#D4580A] mb-8"
        >
          The Trust Infrastructure for the AI Era
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-bold leading-[1.08] tracking-tight text-[#EDEBE6] mb-5"
          style={{ fontSize: "clamp(44px, 8vw, 112px)" }}
        >
          AI That Enterprises
          <br />
          Can Actually Trust.
        </motion.h1>

        {/* Single sub-line — max 15 words */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="text-[#9B9B9B] mb-10 mx-auto"
          style={{ fontSize: "clamp(16px, 1.8vw, 20px)" }}
        >
          Deterministic execution. Full audit trail. EU AI Act ready.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
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
            Read the Thesis →
          </Link>
        </motion.div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="w-full max-w-3xl mx-auto"
        >
          <div
            className="rounded-lg overflow-hidden"
            style={{ border: "1px solid #1E2023", backgroundColor: "#0F1012" }}
          >
            {/* Diagram header bar */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderBottom: "1px solid #1E2023" }}
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#C41E00", opacity: 0.7 }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#C9860A", opacity: 0.5 }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#1E2023" }} />
              <span className="ml-2 text-[11px] font-mono text-[#5C5C5C]">autoflow — execution engine</span>
            </div>

            {/* Diagram body */}
            <div className="px-6 py-8 flex flex-col gap-3">
              {/* Row 1: input */}
              <div className="flex items-center gap-3">
                <div
                  className="flex-1 flex items-center gap-3 px-4 py-3 rounded text-left"
                  style={{ backgroundColor: "#141416", border: "1px solid #1E2023" }}
                >
                  <span className="text-[11px] font-mono text-[#5C5C5C] w-16 shrink-0">INPUT</span>
                  <span className="text-[13px] text-[#9B9B9B]">AI model output (probabilistic)</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <span className="text-[#2A2D32] text-lg font-light">↓</span>
              </div>

              {/* Row 2: verification — highlighted */}
              <div
                className="flex items-center gap-3 px-4 py-3 rounded"
                style={{ backgroundColor: "#180806", border: "1px solid #C41E00" }}
              >
                <span className="text-[11px] font-mono w-16 shrink-0" style={{ color: "#C41E00" }}>VERIFY</span>
                <span className="text-[13px] text-[#EDEBE6] font-medium">C++ Mathematical Verification Layer</span>
                <span className="ml-auto text-[11px] font-mono text-[#C41E00]">AutoFlow</span>
              </div>

              {/* Arrow */}
              <div className="flex justify-center gap-16">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[#2A2D32] text-lg font-light">↓</span>
                  <span className="text-[10px] text-[#D4580A] font-mono">PASS</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[#2A2D32] text-lg font-light">↓</span>
                  <span className="text-[10px] text-[#5C5C5C] font-mono">FAIL</span>
                </div>
              </div>

              {/* Row 3: outcomes */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="px-4 py-3 rounded text-left"
                  style={{ backgroundColor: "#141416", border: "1px solid #1E2023" }}
                >
                  <span className="text-[11px] font-mono text-[#D4580A] block mb-1">EXECUTE</span>
                  <span className="text-[12px] text-[#9B9B9B]">Deterministic action + full audit log</span>
                </div>
                <div
                  className="px-4 py-3 rounded text-left"
                  style={{ backgroundColor: "#141416", border: "1px solid #1E2023" }}
                >
                  <span className="text-[11px] font-mono text-[#5C5C5C] block mb-1">REJECT</span>
                  <span className="text-[12px] text-[#9B9B9B]">Escalate to human + log reason</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[#5C5C5C]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
