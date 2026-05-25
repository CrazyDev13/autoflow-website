import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium transition-colors duration-150 rounded text-sm";
  const widthClass = fullWidth ? "w-full" : "";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "px-6 py-3 bg-[#cc2200] text-[#f0ede8] hover:bg-[#e02800]",
    secondary:
      "px-6 py-3 border border-[#222222] text-[#f0ede8] hover:border-[#444444] hover:text-white",
    ghost:
      "px-2 py-1 text-[#d4830a] hover:text-[#e8960d] underline-offset-4",
  };

  const classes = `${base} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
