import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";

const products = [
  {
    tag: "AI Agent",
    status: "Available Now",
    statusColor: "#d4830a",
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
    statusColor: "#888888",
    name: "AutoFlow [Next Agent]",
    description: "Coming soon. New agents launching every cycle.",
    ctas: [{ label: "Join Waitlist", href: "/book", primary: false }],
    live: false,
  },
  {
    tag: "Infrastructure",
    status: "2026",
    statusColor: "#888888",
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
      className="py-28 px-6"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>Products</SectionLabel>
          <h2
            className="font-bold text-[#f0ede8] leading-tight mb-16"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            What AutoFlow Builds
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="flex flex-col h-full p-8 rounded"
                style={{
                  backgroundColor: "#161616",
                  border: "1px solid #222222",
                  borderTop: product.live
                    ? "2px solid #d4830a"
                    : "1px solid #222222",
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

                <h3
                  className="font-bold text-[#f0ede8] mb-3"
                  style={{ fontSize: "19px" }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-[#bbbbbb] flex-1 mb-6"
                  style={{ fontSize: "16px", lineHeight: "1.6" }}
                >
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {product.ctas.map((cta, j) => (
                    <Link
                      key={j}
                      href={cta.href}
                      className="text-sm font-medium transition-colors duration-150"
                      style={
                        cta.primary
                          ? {
                              padding: "8px 20px",
                              backgroundColor: "#cc2200",
                              color: "#f0ede8",
                              borderRadius: "4px",
                            }
                          : { color: "#d4830a" }
                      }
                    >
                      {cta.label}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
