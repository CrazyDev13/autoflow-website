"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    tag: "AI Agent",
    status: "Available Now",
    name: "AutoFlow Outreach Agent",
    description:
      "An AI-powered outreach system that runs your entire B2B prospecting operation — email and LinkedIn — without human involvement. Deployed inside your own infrastructure.",
    ctas: [
      { label: "Learn More →", href: "/products/outreach-agent", primary: false },
      { label: "Book a Pilot", href: "/book", primary: true },
    ],
    live: true,
  },
  {
    tag: "AI Agent",
    status: "In Development",
    name: "AutoFlow [Next Agent]",
    description: "Coming soon. New agents launching every cycle.",
    ctas: [{ label: "Join Waitlist", href: "/book", primary: false }],
    live: false,
  },
  {
    tag: "Infrastructure",
    status: "2026",
    name: "AutoFlow C++ Execution Engine",
    description:
      "Deterministic AI execution for enterprise-scale operations. Audit-ready. Reproducible. Compliant.",
    ctas: [{ label: "Register Interest", href: "/book", primary: false }],
    live: false,
  },
];

export default function Products() {
  return (
    <section
      className="py-32 px-6"
      style={{ backgroundColor: "#0F1012" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-6"
          style={{ color: "#D4580A" }}
        >
          Products
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
          What AutoFlow Builds
        </motion.h2>

        {/* Product cards - single accent on live product only */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col h-full p-8 rounded"
              style={{
                backgroundColor: "#141416",
                border: "1px solid #1E2023",
                borderTop: product.live
                  ? "2px solid #D4580A"
                  : "1px solid #1E2023",
                opacity: product.live ? 1 : 0.7,
              }}
            >
              {/* Tag row */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: product.live ? "rgba(212,88,10,0.15)" : "#1E2023",
                    color: product.live ? "#D4580A" : "#5C5C5C",
                  }}
                >
                  {product.tag}
                </span>
                <span
                  className="text-[10px] font-semibold tracking-widest uppercase"
                  style={{ color: product.live ? "#D4580A" : "#5C5C5C" }}
                >
                  · {product.status}
                </span>
              </div>

              {/* Title - 17px body hierarchy */}
              <h3
                className="font-bold mb-3"
                style={{ fontSize: "17px", color: "#EDEBE6" }}
              >
                {product.name}
              </h3>

              {/* Description - 15px body */}
              <p
                className="flex-1 mb-6"
                style={{ fontSize: "15px", lineHeight: "1.6", color: "#9B9B9B" }}
              >
                {product.description}
              </p>

              {/* CTAs - high contrast primary */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {product.ctas.map((cta, j) => (
                  <Link
                    key={j}
                    href={cta.href}
                    className="text-sm font-medium transition-all duration-200"
                    style={
                      cta.primary
                        ? {
                            padding: "10px 20px",
                            backgroundColor: "#C41E00",
                            color: "#EDEBE6",
                            borderRadius: "6px",
                            boxShadow: "0 4px 20px rgba(196,30,0,0.25)",
                          }
                        : { color: "#9B9B9B", padding: "10px 0" }
                    }
                  >
                    {cta.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
