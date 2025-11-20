"use client";

import { LogoWithGlow } from "@/components/logo-glow";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background text-foreground">
      <LogoWithGlow size={144} ring="xl" priority className="animate-pulse [animation-duration:4s]" />
      <p className="text-xs font-semibold uppercase tracking-[0.45em] text-foreground/60">
        Loading
      </p>
    </div>
  );
}
