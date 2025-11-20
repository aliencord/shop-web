"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function NotFound() {
  const router = useRouter();
  const patrioticBeam =
    "linear-gradient(90deg, #BF0A30 0%, rgba(255,255,255,0.85) 50%, #002868 100%)";
  const overlayShadow = "inset 0 4px 250px 16px rgba(11,55,120,0.35)";

  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden px-6 sm:px-8 py-16 md:py-24 min-h-[70svh] bg-black flex items-center justify-center">
        {/* Foreground fade overlay above image, below content (hero-style patriotic shadow) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: "rgba(0,0,0,0.6)",
            boxShadow: overlayShadow,
          }}
        />

        {/* Top patriotic gradient bar */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 z-20">
          <div
            className="h-[4px] w-full opacity-40 blur-[2px]"
            style={{ background: patrioticBeam }}
            aria-hidden
          />
          <div
            className="h-[2px] w-full -mt-[3px]"
            style={{ background: patrioticBeam }}
            aria-hidden
          />
        </div>

        <div className="relative z-20 mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-primary">404</h1>
          <p className="mt-2 text-xl font-semibold">Page Not Found</p>
          <p className="mt-1 text-muted-foreground">
            The page you are looking for doesn&apos;t exist or was moved.
          </p>
          <p className="mt-1 text-muted-foreground">
            If you believe this page exists, please contact support @discord.gg/amityrust or via our portal.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2">
            <Button
              onClick={goBack}
              className="rounded-full px-5 gap-2"
              aria-label="Back to Previous Page"
            >
              <FaArrowLeft size={16} aria-hidden />
              Back to Previous Page
            </Button>
            <Button
              onClick={() => router.push("/")}
              variant="outline"
              className="rounded-full px-5 gap-2 border-primary/60 text-primary hover:bg-primary/10"
              aria-label="Back to Home"
            >
              <FaHouse size={16} aria-hidden />
              Back to Home
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
