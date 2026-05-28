"use client";

import { motion } from "framer-motion";

const problems = [
  {
    headline: "Same input. Different output.",
    sub: "Transformers are non-deterministic by design.",
  },
  {
    headline: "AI cannot know it's wrong.",
    sub: "Hallucination is architectural — not a patchable bug.",
  },
  {
    headline: "No proof. No audit trail.",
    sub: "EU AI Act requires explainability. Probabilistic AI cannot deliver.",
  },
  {
    headline: "Python makes it worse.",
    sub: "GC pauses and dynamic typing add a second layer of unpredictability.",
  },
];

export default function ProblemStatement() {
  return (
    <section
      className="py-32 px-6"
      style={{ backgroundColor: "#0F1012" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-6"
          style={{ color: "#D4580A" }}
        >
          The Problem
        </motion.p>

        {/* Headline - dramatic size */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bold leading-[1.05] mb-16"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#EDEBE6" }}
        >
          Enterprise AI has a{" "}
          <span style={{ color: "#9B9B9B" }}>reliability problem.</span>
        </motion.h2>

        {/* Problem cards - single accent (red border) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-7 rounded h-full"
              style={{
                backgroundColor: "#141416",
                borderLeft: "3px solid #C41E00",
              }}
            >
              {/* Headline - 20px (smaller than section headline) */}
              <h3
                className="font-bold mb-2"
                style={{ fontSize: "20px", lineHeight: "1.3", color: "#EDEBE6" }}
              >
                {p.headline}
              </h3>
              {/* Sub - 15px body */}
              <p
                style={{ fontSize: "15px", lineHeight: "1.5", color: "#9B9B9B" }}
              >
                {p.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
