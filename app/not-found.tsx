import Link from "next/link";
import Footer from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <>
      <section
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
        style={{ backgroundColor: "#080808" }}
      >
        <p
          className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#e05c00] mb-6"
        >
          404
        </p>
        <h1
          className="font-bold text-[#f0ede8] leading-tight mb-6"
          style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
        >
          Page Not Found.
        </h1>
        <p
          className="text-[#bbbbbb] mb-10 max-w-md"
          style={{ fontSize: "17px", lineHeight: "1.65" }}
        >
          This page does not exist. The rest of AutoFlow does.
        </p>
        <Link
          href="/"
          className="px-8 py-4 bg-[#cc2200] text-[#f0ede8] font-medium rounded hover:bg-[#e02800] transition-colors"
        >
          Back to Home
        </Link>
      </section>
      <Footer />
    </>
  );
}
