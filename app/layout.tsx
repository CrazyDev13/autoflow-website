import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AutoFlow — Building the Infrastructure of the Autonomous Economy",
  description:
    "AutoFlow builds the execution layer that makes AI trustworthy for enterprise operations. Deterministic. Audit-ready. Compliant.",
  openGraph: {
    title: "AutoFlow",
    description:
      "AutoFlow builds the execution layer that makes AI trustworthy for enterprise operations.",
    url: "https://autoflow.ai",
    siteName: "AutoFlow",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} data-scroll-behavior="smooth">
      <body className="min-h-full w-full flex flex-col bg-[#080808] text-[#f0ede8]">
        <Nav />
        <main className="flex-1 w-full pt-16 pb-20 md:pb-0">{children}</main>
      </body>
    </html>
  );
}
