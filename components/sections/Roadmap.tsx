"use client";

import { motion } from "framer-motion";

const phases = [
  {
    phase: "Phase 1",
    period: "Now",
    title: "AI Agents",
    desc: "Deployed. Generating revenue.",
    active: true,
  },
  {
    phase: "Phase 2",
    period: "2026",
    title: "C++ Engine",
    desc: "Deterministic. Compliant. Enterprise-grade.",
    active: false,
  },
  {
    phase: "Phase 3",
    period: "2028+",
    title: "Digital Robots",
    desc: "Autonomous. Transacting. 24/7.",
    active: false,
  },
];

export default function Roadmap() {
  return (
    <section
      className="py-32 px-6"
      style={{ backgroundColor: "#0F1012" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-6"
          style={{ color: "#D4580A" }}
        >
          Roadmap
        </motion.p>

        {/* Headline - dramatic size */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bold leading-[1.05] mb-20"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#EDEBE6" }}
        >
          Thinking in decades.
        </motion.h2>

        {/* Timeline connector + cards */}
        <div className="relative">
          {/* Horizontal line — desktop */}
          <div className="hidden md:block absolute top-[28px] left-0 right-0 h-px" style={{ backgroundColor: "#1E2023" }} />
          {/* Active progress — phase 1 done */}
          <div className="hidden md:block absolute top-[28px] left-0 h-px" style={{ width: "16.67%", backgroundColor: "#D4580A" }} />

          {/* Phase cards - single accent on active phase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex flex-col"
              >
                {/* Node dot - accent on active */}
                <div className="hidden md:flex items-center mb-6">
                  <div
                    className="w-3.5 h-3.5 rounded-full shrink-0 relative z-10"
                    style={{
                      backgroundColor: phase.active ? "#D4580A" : "#1E2023",
                      border: `2px solid ${phase.active ? "#D4580A" : "#2A2D32"}`,
                      boxShadow: phase.active ? "0 0 12px rgba(212,88,10,0.4)" : "none",
                    }}
                  />
                </div>

                {/* Card - single accent on active phase */}
                <div
                  className="p-7 rounded flex-1"
                  style={{
                    backgroundColor: phase.active ? "#180806" : "#141416",
                    border: `1px solid ${phase.active ? "#D4580A" : "#1E2023"}`,
                    opacity: phase.active ? 1 : 0.6,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-[10px] font-semibold tracking-widest uppercase"
                      style={{ color: phase.active ? "#D4580A" : "#5C5C5C" }}
                    >
                      {phase.phase}
                    </span>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: phase.active ? "rgba(212,88,10,0.15)" : "#1A1C1F",
                        color: phase.active ? "#D4580A" : "#5C5C5C",
                      }}
                    >
                      {phase.period}
                    </span>
                    {phase.active && (
                      <span
                        className="text-[9px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded"
                        style={{ backgroundColor: "#C41E00", color: "#EDEBE6" }}
                      >
                        Live
                      </span>
                    )}
                  </div>

                  {/* Title - 28px (smaller than section headline 64px) */}
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontSize: "28px",
                      lineHeight: "1.2",
                      color: phase.active ? "#EDEBE6" : "#9B9B9B",
                    }}
                  >
                    {phase.title}
                  </h3>
                  {/* Description - 15px body */}
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.5",
                      color: phase.active ? "#9B9B9B" : "#5C5C5C",
                    }}
                  >
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
