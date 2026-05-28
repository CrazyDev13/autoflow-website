"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    num: "01",
    label: "Deterministic Execution",
    line: "Same input, same output — mathematically guaranteed.",
  },
  {
    num: "02",
    label: "Mathematical Verification",
    line: "Every AI output is a hypothesis that must be proven before execution.",
    highlight: true,
  },
  {
    num: "03",
    label: "Full Audit Trail",
    line: "Every decision logged: input, output, proof. Regulator-ready.",
  },
  {
    num: "04",
    label: "Zero GC Pauses",
    line: "Manual C++ memory management. Microsecond latency. No overhead.",
  },
  {
    num: "05",
    label: "EU AI Act Ready",
    line: "Explainability and audit trail built in — not bolted on.",
  },
  {
    num: "06",
    label: "Self-Hosted Deploy",
    line: "Runs inside your infrastructure. Your data never leaves.",
  },
];

export default function Technology() {
  return (
    <section
      className="py-32 px-6"
      style={{ backgroundColor: "#090A0C" }}
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
          Technology
        </motion.p>

        {/* Headline - dramatic size */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bold leading-[1.05] mb-16 max-w-3xl"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#EDEBE6" }}
        >
          Built on C++.
          <br />
          <span style={{ color: "#9B9B9B" }}>The only way to guarantee it.</span>
        </motion.h2>

        {/* Grid - single accent on highlighted pillar only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: "#1E2023" }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-7 flex flex-col gap-3 group"
              style={{
                backgroundColor: pillar.highlight ? "#180806" : "#090A0C",
                border: pillar.highlight ? "1px solid #C41E00" : "none",
              }}
            >
              {/* Number - single accent on pillar 02 */}
              <span
                className="font-mono font-bold"
                style={{
                  fontSize: "11px",
                  color: pillar.highlight ? "#C41E00" : "#5C5C5C",
                }}
              >
                {pillar.num}
              </span>
              {/* Label - 17px */}
              <h3
                className="font-bold"
                style={{
                  fontSize: "17px",
                  lineHeight: "1.2",
                  color: pillar.highlight ? "#EDEBE6" : "#9B9B9B",
                }}
              >
                {pillar.label}
              </h3>
              {/* Description - 15px */}
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.55",
                  color: pillar.highlight ? "#9B9B9B" : "#5C5C5C",
                }}
              >
                {pillar.line}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
