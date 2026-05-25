import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — AutoFlow",
  description: "AutoFlow products: AI agents and deterministic execution infrastructure for enterprise operations.",
};

const products = [
  {
    tag: "AI Agent",
    status: "Available Now",
    statusColor: "#d4830a",
    name: "AutoFlow Outreach Agent",
    description:
      "An AI-powered outreach system that runs your entire B2B prospecting operation — email and LinkedIn — without human involvement. Deployed inside your own infrastructure.",
    href: "/products/outreach-agent",
    live: true,
  },
  {
    tag: "AI Agent",
    status: "In Development",
    statusColor: "#888888",
    name: "AutoFlow [Next Agent]",
    description: "Coming soon. New agents launching every cycle.",
    href: "/book",
    live: false,
  },
  {
    tag: "Infrastructure",
    status: "2026",
    statusColor: "#888888",
    name: "AutoFlow C++ Execution Engine",
    description:
      "Deterministic AI execution for enterprise-scale operations. Audit-ready. Reproducible. Compliant.",
    href: "/book",
    live: false,
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="pt-20 pb-28 px-6" style={{ backgroundColor: "#080808" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionLabel>Products</SectionLabel>
            <h1
              className="font-bold text-[#f0ede8] leading-tight mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
            >
              What AutoFlow Builds
            </h1>
            <p
              className="text-[#bbbbbb] max-w-xl"
              style={{ fontSize: "17px", lineHeight: "1.65" }}
            >
              Each product is built on the same deterministic C++ execution
              engine. Trustworthy by design.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-28 px-6" style={{ backgroundColor: "#080808" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  className="flex flex-col h-full p-8 rounded"
                  style={{
                    backgroundColor: "#161616",
                    border: "1px solid #222222",
                    borderTop: product.live ? "2px solid #d4830a" : "1px solid #222222",
                    opacity: product.live ? 1 : 0.75,
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded"
                      style={{ backgroundColor: "#222222", color: "#888888" }}
                    >
                      {product.tag}
                    </span>
                    <span
                      className="text-[10px] font-semibold tracking-widest uppercase"
                      style={{ color: product.statusColor }}
                    >
                      · {product.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#f0ede8] mb-3" style={{ fontSize: "19px" }}>
                    {product.name}
                  </h3>
                  <p className="text-[#bbbbbb] flex-1 mb-6" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    {product.description}
                  </p>
                  <Link
                    href={product.href}
                    className="text-sm font-medium text-[#d4830a] hover:text-[#e8960d] transition-colors"
                  >
                    {product.live ? "Learn More →" : "Register Interest →"}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
