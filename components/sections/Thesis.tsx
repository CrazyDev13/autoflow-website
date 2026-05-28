"use client";

import { motion } from "framer-motion";

const layers = [
  {
    num: "01",
    name: "Context Ingestion",
    tag: "C++",
    desc: "All structured data. Business rules. Compliance constraints. Fully deterministic. No randomness.",
  },
  {
    num: "02",
    name: "Intelligence",
    tag: "LLM",
    desc: "The AI model is called with a precisely structured prompt. This is the only probabilistic step in the system.",
    highlight: true,
  },
  {
    num: "03",
    name: "Mathematical Verification",
    tag: "C++ Core",
    desc: "Every LLM output is checked for consistency, confidence bounds, compliance, and reproducibility. If it fails any check — rejected.",
  },
  {
    num: "04",
    name: "Execution & Logging",
    tag: "C++",
    desc: "Direct machine code. No interpreter. No GC pauses. Microsecond latency. Every decision is logged with its full input and output state.",
  },
];

export default function Thesis() {
  return (
    <section
      className="py-32 px-6"
      style={{ backgroundColor: "#090A0C" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow - single accent */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-6"
          style={{ color: "#D4580A" }}
        >
          The AutoFlow Thesis
        </motion.p>

        {/* Headline - dramatic size hierarchy */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bold leading-[1.05] mb-6 max-w-4xl"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#EDEBE6" }}
        >
          You do not need to replace the AI model.
          <br />
          <span style={{ color: "#9B9B9B" }}>You need to cage it.</span>
        </motion.h2>

        {/* Sub-headline - 18px */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 max-w-2xl"
          style={{ fontSize: "18px", lineHeight: "1.6", color: "#5C5C5C" }}
        >
          {"AutoFlow's answer is a C++ execution engine that sits between the AI model and the real-world action. Every AI output is treated as a hypothesis — not a decision — until it passes mathematical verification."}
        </motion.p>

        {/* Architecture Diagram */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute left-[2.75rem] top-10 bottom-10 w-px"
            style={{ backgroundColor: "#1E2023" }}
          />

          <div className="flex flex-col gap-0">
            {layers.map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6 py-6"
              >
                {/* Number bubble - single accent on layer 02 */}
                <div
                  className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: layer.highlight ? "#C41E00" : "#141416",
                    border: `1px solid ${layer.highlight ? "#C41E00" : "#1E2023"}`,
                    color: "#EDEBE6",
                  }}
                >
                  {layer.num}
                </div>

                {/* Content card */}
                <div
                  className="flex-1 p-6 rounded"
                  style={{
                    backgroundColor: "#0F1012",
                    border: `1px solid ${layer.highlight ? "#C41E00" : "#1E2023"}`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {/* Tag - muted except for highlighted layer */}
                    <span
                      className="text-xs font-semibold tracking-widest uppercase px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: layer.highlight ? "#C41E00" : "#1E2023",
                        color: layer.highlight ? "#EDEBE6" : "#5C5C5C",
                      }}
                    >
                      {layer.tag}
                    </span>
                    {/* Title - 17px body size */}
                    <h3
                      className="font-bold"
                      style={{ fontSize: "17px", color: "#EDEBE6" }}
                    >
                      {layer.name}
                    </h3>
                  </div>
                  {/* Description - 16px body size */}
                  <p
                    style={{ fontSize: "16px", lineHeight: "1.6", color: "#9B9B9B" }}
                  >
                    {layer.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Result statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-8 rounded text-center"
          style={{ backgroundColor: "#0F1012", border: "1px solid #1E2023" }}
        >
          {/* Result headline - smaller than section headline */}
          <p
            className="font-bold mb-2"
            style={{ fontSize: "clamp(18px, 2.5vw, 24px)", color: "#EDEBE6" }}
          >
            Given the same input and the same rules — always the same output.
          </p>
          <p style={{ fontSize: "16px", color: "#5C5C5C" }}>
            That is the mathematical guarantee Python cannot provide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
