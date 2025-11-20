import type { IconType } from "react-icons";
import { AiOutlineClockCircle, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import {
  GiBatteryPack,
  GiGears,
  GiMechanicGarage,
  GiSettingsKnobs,
  GiWrench,
} from "react-icons/gi";

type Service = {
  title: string;
  description: string;
  icon: IconType;
};

const services: Service[] = [
  {
    title: "Oil Changes",
    description:
      "Full oil and oil-filter changes with premium lubricants tailored for service rigs and equipment.",
    icon: GiBatteryPack,
  },
  {
    title: "Fuel Filters",
    description:
      "Rapid filter swaps and system rinses that keep contaminants out of pumps, injectors, and carburetors.",
    icon: GiSettingsKnobs,
  },
  {
    title: "Tire Pressure",
    description:
      "Digital gauges and high-capacity inflators keep tires sized and sealed for load-bearing duty.",
    icon: GiGears,
  },
  {
    title: "Cleaning & Coolant Flush",
    description:
      "Equipment washing, coolant drains, and fluid flushes that prevent overheating and corrosion.",
    icon: GiWrench,
  },
];

const stats = [
  { label: "Seasoned crew hours", value: "28 yrs" },
  { label: "Systems restored", value: "1,400+" },
  { label: "Average turnaround", value: "48 hrs" },
];

const timeline = [
  {
    phase: "Welcome & Assessment",
    detail:
      "When your equipment is delivered we log everything about your hardware.",
  },
  {
    phase: "Service & Repair",
    detail:
      "We assign the appropriate technicans to the job, and they start servicing your equipment as soon as possible.",
  },
  {
    phase: "Review & Validation",
    detail:
      "After your equipment has been serviced another assigned technican reviews your hardware to make sure it is ready to be returned.",
  },
  {
    phase: "Handoff & Departure",
    detail:
      "We walk you through what was changed to your equipment.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#040509] text-white">
      <section className="relative overflow-hidden px-6 py-16 sm:py-20 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(circle at top left, rgba(242,153,74,0.24), transparent 45%)," +
              "radial-gradient(circle at 60% 10%, rgba(77,208,225,0.22), transparent 50%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(5,6,9,0.92), rgba(12,13,19,0.95) 55%, rgba(4,5,9,0.98))",
          }}
        />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.45em] text-[#f2994a]/90">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1">
              <GiMechanicGarage className="h-4 w-4 text-[#f2994a]" />
              <span className="text-[10px] tracking-[0.7em] text-[#f7c78a]">
                Quick Service
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Power System Services
            </h1>
            <p className="max-w-3xl text-base text-[#c3c9da] sm:text-lg">
              We service your small engine equipment, from lawn mowers to chainsaws, ensuring they run
              smoothly all season long.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="mailto:938824@ccpsweb.org"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2994a] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#050608] shadow-lg shadow-[#f2994a]/60 transition hover:opacity-95"
            >
              <AiOutlineMail className="h-4 w-4" />
              Contact us
            </a>
            <a
              href="https://forms.gle/TK5aYVWVZMsw4ZRH9"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-[#f2994a]"
            >
              Purchase services
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-[0.4em] text-[#cfd5e2]/90">
            <div className="flex items-center gap-2 text-[#f5f6fb]">
              <AiOutlineClockCircle className="h-4 w-4 text-[#4dd0e1]" />
              Mon – Fri · 11am – 12:30pm
            </div>
            <div className="flex items-center gap-2 text-[#f5f6fb]">
              <AiOutlinePhone className="h-4 w-4 text-[#f2994a]" />
              Same-day response
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16" id="services">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#4dd0e1]">
              SERVICES
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              What we service.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[#f2994a]"
                >
                  <div className="mb-5 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-[#0c0f15] p-4 text-[#f2994a] transition group-hover:border-[#f2994a]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm text-[#c5cbdb]">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#f2994a]/80">
              PROCESS
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Every job is logged and validated before it leaves our shop.
            </h2>
            <div className="space-y-4">
              {timeline.map((step) => (
                <div key={step.phase} className="rounded-2xl border border-white/5 bg-[#0b0e13] p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#4dd0e1]">
                    {step.phase}
                  </p>
                  <p className="mt-2 text-sm text-[#d5dbe7]">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
