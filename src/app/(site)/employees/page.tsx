import type { Metadata } from "next";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GiMechanicGarage, GiWrench } from "react-icons/gi";

type Member = {
  name: string;
  role: string;
};

const leadership: Member[] = [
  { name: "Frank", role: "CEO" },
  { name: "Grayson", role: "President" },
];

const technicians: Member[] = [
  { name: "Apolinar", role: "Technician" },
  { name: "Joesph", role: "Technician" },
  { name: "Kaleb", role: "Technician" },
  { name: "Nicholas", role: "Technician" },
];

const focusPoints = [
  "Clear points of contact for approvals and updates.",
  "Leadership stays in sync with the bays and timelines.",
  "Technicians track what was serviced before handoff.",
];

export const metadata: Metadata = {
  title: "Employees | Power System Services",
  description: "Meet the leadership and technicians who keep every repair on track.",
};

export default function EmployeesPage() {
  return (
    <div className="min-h-screen bg-[#040509] text-white">
      <section className="relative overflow-hidden px-6 pb-16 pt-14 sm:pt-16 md:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 12%, rgba(242,153,74,0.25), transparent 42%)," +
              "radial-gradient(circle at 80% 0%, rgba(77,208,225,0.2), transparent 48%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(145deg, rgba(5,6,9,0.94), rgba(10,12,18,0.97) 52%, rgba(4,5,9,0.98))",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.45em] text-[#f2994a]/90">
            <div className="pill-chase">
              <div className="pill-inner inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2">
                <GiMechanicGarage className="h-4 w-4 text-[#f2994a]" />
                <span className="text-[10px] tracking-[0.55em] text-[#f7c78a]">Shop roster</span>
              </div>
            </div>
            <div className="rounded-full border border-white/10 px-3 py-1 text-[10px] tracking-[0.4em] text-[#4dd0e1]">
              Employees
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-end">
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold uppercase leading-tight tracking-tight text-white sm:text-5xl">
                The crew keeping your equipment alive.
              </h1>
              <p className="max-w-3xl text-base text-[#c3c9da] sm:text-lg">
                Leadership sets direction and stays close to each job. Our technicians execute the work with
                steady, detail-first service so every piece of equipment leaves ready to run.
              </p>
            </div>

            <div className="metal-panel rounded-3xl p-6 text-[#d5dbe7]">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#4dd0e1]">
                How we work
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {focusPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <AiOutlineCheckCircle className="mt-0.5 h-5 w-5 text-[#f2994a]" />
                    <span className="text-[#c5cbdb]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#4dd0e1]">
              Leadership
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {leadership.map((member) => (
                <article
                  key={member.name}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_40px_rgba(0,0,0,0.5)] transition hover:border-[#f2994a] hover:shadow-[0_26px_56px_rgba(0,0,0,0.58)]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f2994a] to-transparent opacity-80" />
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-2xl font-semibold text-white">{member.name}</h2>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f7c78a]">
                      {member.role}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-[#c5cbdb]">
                    Front-of-house direction that keeps estimates, approvals, and the shop floor aligned.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#4dd0e1]">
              Technicians
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Hands-on team in the bay.</h2>
            <p className="max-w-3xl text-sm text-[#c3c9da] sm:text-base">
              When equipment lands in the shop, these technicians are the ones rebuilding, testing, and
              documenting work before it leaves.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technicians.map((member) => (
              <article
                key={member.name}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0e13] p-5 transition hover:border-[#f2994a] hover:shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#4dd0e1] to-transparent opacity-70" />
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f2994a]">
                    {member.role}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[#c5cbdb]">
                  Detail-first work on diagnostics, repairs, and checkouts before every handoff.
                </p>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-[#c3c9da]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0c0f15] text-[#f2994a]">
              <GiWrench className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-[0.4em] text-[#4dd0e1]">
                Need the crew
              </div>
              <p className="text-sm text-[#d5dbe7]">
                Call or email and we will route you to the right technician or leadership contact for your job.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
