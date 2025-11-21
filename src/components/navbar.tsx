"use client";

import Link from "next/link";
import { LogoWithGlow } from "@/components/logo-glow";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-center md:justify-between px-4 sm:px-6 md:h-24">
        {/* Mobile logo */}
        <div className="flex md:min-w-[9rem] md:items-center">
          <Link
            href="/"
            className="inline-flex md:hidden"
            aria-label="Amity home"
          >
            <LogoWithGlow size={60} ring="sm" priority />
          </Link>
        </div>

        {/* Desktop menu with centered logo */}
        <nav aria-label="Main" className="hidden items-center text-sm md:flex">
          <Link
            href="/"
            className="inline-flex px-3 leading-none"
            aria-label="Amity home"
          >
            <LogoWithGlow size={64} ring="sm" priority />
          </Link>
        </nav>

        <div className="hidden md:flex md:min-w-[10rem] md:justify-end">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-full border-white/20 px-4 font-semibold uppercase tracking-[0.22em]"
          >
            <Link href="/employees">Our Team</Link>
          </Button>
        </div>
      </div>

      <div className="border-t border-border md:hidden">
        <div className="mx-auto flex max-w-7xl justify-center px-4 py-3">
          <Link
            href="/employees"
            className="text-[11px] font-semibold uppercase tracking-[0.34em] text-foreground/80 underline-offset-4 hover:underline"
          >
            Our Team
          </Link>
        </div>
      </div>
    </header>
  );
}
