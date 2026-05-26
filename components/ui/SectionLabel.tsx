interface SectionLabelProps {
  children: React.ReactNode;
  color?: "orange" | "muted";
}

export default function SectionLabel({
  children,
  color = "orange",
}: SectionLabelProps) {
  const colorClass =
    color === "orange" ? "text-[#D4580A]" : "text-[#5C5C5C]";

  return (
    <p
      className={`text-[11px] font-semibold tracking-[0.15em] uppercase ${colorClass} mb-4`}
    >
      {children}
    </p>
  );
}
