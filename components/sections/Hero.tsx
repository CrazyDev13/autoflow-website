"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[100dvh] -mt-16 flex flex-col items-center justify-start pt-32 md:pt-40 px-6 text-center overflow-hidden"
      style={{ backgroundColor: "#090A0C" }}
    >
      {/* Background gradient orbs - huly.io style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top center glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(196,30,0,0.15) 0%, transparent 70%)" }}
        />
        {/* Bottom right glow */}
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(212,88,10,0.1) 0%, transparent 70%)" }}
        />
        {/* Bottom left glow */}
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, rgba(201,134,10,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold tracking-wider uppercase border"
            style={{
              backgroundColor: "rgba(196,30,0,0.1)",
              borderColor: "rgba(196,30,0,0.3)",
              color: "#D4580A",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C41E00] animate-pulse" />
            The Trust Infrastructure for the AI Era
          </span>
        </motion.div>

        {/* Main Headline - huly.io style massive typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-bold tracking-tight mb-6 leading-[0.95]"
          style={{ fontSize: "clamp(48px, 10vw, 128px)" }}
        >
          <span
            className="block"
            style={{
              background: "linear-gradient(180deg, #EDEBE6 0%, #9B9B9B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI That Enterprises
          </span>
          <span
            className="block mt-2"
            style={{
              background: "linear-gradient(90deg, #C41E00 0%, #D4580A 50%, #C9860A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Can Actually Trust.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-[#9B9B9B] mb-10 mx-auto max-w-2xl"
          style={{ fontSize: "clamp(17px, 2vw, 22px)", lineHeight: "1.5" }}
        >
          Deterministic execution. Full audit trail. EU AI Act ready.
          <br className="hidden sm:block" />
          <span style={{ color: "#5C5C5C" }}>C++ verification layer for enterprise AI agents.</span>
        </motion.p>

        {/* CTA Group - huly.io style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Primary CTA with glow */}
          <Link
            href="/book"
            className="group relative w-full sm:w-auto px-8 py-4 font-medium rounded-lg overflow-hidden transition-all duration-300"
            style={{
              backgroundColor: "#C41E00",
              color: "#EDEBE6",
              boxShadow: "0 0 30px rgba(196, 30, 0, 0.3), 0 4px 20px rgba(196, 30, 0, 0.2)",
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Book a Pilot Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/research"
            className="w-full sm:w-auto px-6 py-4 font-medium rounded-lg border transition-all duration-300 hover:bg-white/5"
            style={{
              borderColor: "#2A2D32",
              color: "#9B9B9B",
            }}
          >
            Read the Thesis
          </Link>
        </motion.div>

        {/* Architecture Diagram with perspective - huly style */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-5xl mx-auto"
          style={{ perspective: "1000px" }}
        >
          {/* Glow behind diagram */}
          <div
            className="absolute inset-0 blur-3xl -z-10"
            style={{
              background: "radial-gradient(ellipse at center, rgba(196,30,0,0.15) 0%, transparent 60%)",
              transform: "translateY(20%)",
            }}
          />

          <div
            className="relative w-full rounded-xl overflow-hidden border"
            style={{
              aspectRatio: "680/780",
              borderColor: "#1E2023",
              backgroundColor: "rgba(15, 16, 18, 0.6)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 25px 80px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03) inset",
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-[#C41E00] to-transparent" />
            <div className="absolute top-0 left-0 w-px h-20 bg-gradient-to-b from-[#C41E00] to-transparent" />
            <div className="absolute top-0 right-0 w-20 h-px bg-gradient-to-l from-[#D4580A] to-transparent" />
            <div className="absolute top-0 right-0 w-px h-20 bg-gradient-to-b from-[#D4580A] to-transparent" />

            <Image
              src="/autoflow_architecture.svg"
              alt="AutoFlow 4-Layer Deterministic Architecture"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </motion.div>

        {/* Trust badges - huly style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[#5C5C5C] text-xs"
        >
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L9.5 6H14L10.5 8.5L12 13L8 10.5L4 13L5.5 8.5L2 6H6.5L8 2Z" fill="#C9860A" fillOpacity="0.5"/>
            </svg>
            <span>Deterministic by Design</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2a6 6 0 0 1 6 6c0 3.31-2.69 6-6 6s-6-2.69-6-6a6 6 0 0 1 6-6zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" fill="#C41E00" fillOpacity="0.5"/>
              <path d="M7 7h2v4H7V7z" fill="#C41E00"/>
            </svg>
            <span>Full Audit Trail</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="6" width="12" height="8" rx="1" stroke="#D4580A" strokeWidth="1.5" strokeOpacity="0.5"/>
              <path d="M5 6V4a3 3 0 0 1 6 0v2" stroke="#D4580A" strokeWidth="1.5" strokeOpacity="0.5"/>
            </svg>
            <span>EU AI Act Compliant</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
