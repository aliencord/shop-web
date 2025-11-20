"use client";

import { useCallback, useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollTop = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const [showUp, setShowUp] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (typeof window !== "undefined") {
        setShowUp(window.scrollY > 16);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true } as AddEventListenerOptions);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 px-6 py-4 sm:px-8 md:grid-cols-3">
        <div className="order-2 md:order-none text-center md:text-left text-xs text-muted-foreground">
          {"\u00A9"} {year} Power System Services
        </div>
        <div className="order-1 md:order-none text-center text-xs font-extrabold tracking-widest">
          Quality Service You Can Trust
        </div>
        <div className="flex justify-start md:justify-end">
          <Button
            type="button"
            onClick={scrollTop}
            variant="outline"
            size="sm"
            aria-label="Back to top"
            className="gap-2 hidden md:inline-flex"
          >
            <LuArrowUp size={16} />
            <span>Back to top</span>
          </Button>
        </div>
      </div>

      <button
        type="button"
        onClick={scrollTop}
        aria-label="Scroll to top"
        className={`fixed bottom-4 right-4 z-50 md:hidden inline-flex items-center justify-center rounded-full border border-border bg-card p-3 text-foreground shadow-lg transition-opacity ${showUp ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <LuArrowUp size={20} />
      </button>
    </footer>
  );
}