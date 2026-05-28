"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "$7.3B",
    label: ["B2B sales automation", " market", " by 2030"],
  },
  {
    number: "33M+",
    label: ["businesses doing", " outreach", " manually right now"],
  },
  {
    number: "80%",
    label: ["of B2B deals need", " 5+ follow-up", " touches"],
  },
  {
    number: "44%",
    label: ["of reps quit after", " first contact", ""],
  },
  {
    number: "2027",
    label: ["EU AI Act", " full enforcement", " deadline"],
  },
  {
    number: "$18T",
    label: ["machine-customer commerce", " projected", " by 2030"],
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col gap-2"
    >
      {/* Number with gradient effect on hover */}
      <motion.span
        className="font-bold leading-none tracking-tighter"
        style={{
          fontSize: "clamp(72px, 8vw, 112px)",
          background: "linear-gradient(180deg, #EDEBE6 0%, #9B9B9B 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {stat.number}
      </motion.span>

      {/* Label with animated accent */}
      <p
        className="text-[#9B9B9B] transition-colors duration-300 group-hover:text-[#B0B0B0]"
        style={{ fontSize: "15px", lineHeight: "1.5", maxWidth: "240px" }}
      >
        {stat.label[0]}
        <span
          className="transition-colors duration-300"
          style={{ color: "#D4580A" }}
        >
          {stat.label[1]}
        </span>
        {stat.label[2]}
      </p>
    </motion.div>
  );
}

export default function Numbers() {
  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "#090A0C" }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(196,30,0,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section eyebrow - huly style */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-[11px] font-semibold tracking-[0.25em] uppercase mb-4"
          style={{ color: "#5C5C5C" }}
        >
          The Market Opportunity
        </motion.p>

        {/* Section headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-bold text-[#EDEBE6] mb-20"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          Numbers That Matter
        </motion.h2>

        {/* Stats grid - huly.io style clean layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
