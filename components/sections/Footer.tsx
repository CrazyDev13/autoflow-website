import Link from "next/link";

const navColumns = [
  {
    title: "Products",
    links: [
      { label: "Outreach Agent", href: "/products/outreach-agent" },
      { label: "All Products", href: "/products" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "The AutoFlow Thesis", href: "/research" },
      { label: "Deterministic AI", href: "/research#deterministic" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8 px-6"
      style={{
        backgroundColor: "#090A0C",
        borderTop: "1px solid #1E2023",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Logo + tagline */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-[#EDEBE6] font-bold text-xl tracking-tight block mb-3"
            >
              AutoFlow
            </Link>
            <p className="text-[#5C5C5C] text-sm leading-relaxed max-w-xs">
              Building the Infrastructure of the Autonomous Economy.
            </p>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <p
                className="text-[10px] font-semibold tracking-widest uppercase mb-4"
                style={{ color: "#5C5C5C" }}
              >
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#9B9B9B] text-sm hover:text-[#EDEBE6] transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-8"
          style={{ borderTop: "1px solid #1E2023" }}
        >
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@autoflow.ai"
              className="text-[#9B9B9B] text-sm hover:text-[#EDEBE6] transition-colors"
            >
              hello@autoflow.ai
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9B9B9B] text-sm hover:text-[#EDEBE6] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9B9B9B] text-sm hover:text-[#EDEBE6] transition-colors"
            >
              X / Twitter
            </a>
          </div>
          <Link
            href="/book"
            className="px-5 py-2 bg-[#C41E00] text-[#EDEBE6] text-sm font-medium rounded hover:bg-[#E02200] transition-colors duration-150"
          >
            Book a Call
          </Link>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-6"
          style={{ borderTop: "1px solid #1E2023" }}
        >
          <p className="text-[#5C5C5C] text-xs">
            © 2025 AutoFlow. All rights reserved.
          </p>
          <p className="text-[#5C5C5C] text-xs">
            Karachi, Pakistan · Building globally.
          </p>
        </div>
      </div>
    </footer>
  );
}
