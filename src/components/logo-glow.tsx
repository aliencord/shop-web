"use client";

import Image from "next/image";
import logo from "@/app/logo.png";

type LogoWithGlowProps = {
  size?: number;
  priority?: boolean;
  ring?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

export function LogoWithGlow({
  size = 64,
  priority = false,
  ring = "md",
  className,
}: LogoWithGlowProps) {
  const ringClass = `logo-chase--${ring}`;
  const combinedClassName = ["logo-chase", ringClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={combinedClassName}>
      <Image
        src={logo}
        alt="Amity logo"
        width={size}
        height={size}
        priority={priority}
        className="relative z-10 h-auto w-auto rounded-full border border-white/10"
      />
    </span>
  );
}
