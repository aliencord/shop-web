"use client";

import React, { useMemo } from "react";

type Props = {
  title?: string;
};

export default function TicketsChart({ title }: Props) {
  const width = 640;
  const height = 180;
  const data = useMemo(() => {
    // Filler weekly data
    const weeks = Array.from({ length: 8 }, (_, i) => `W${i + 1}`);
    const made = weeks.map((_, i) => 10 + ((i * 7) % 13) + (i % 3) * 3);
    const closed = weeks.map((_, i) => 8 + ((i * 5) % 11) + ((i + 1) % 3) * 4);
    return { weeks, made, closed };
  }, []);

  const maxVal = Math.max(...data.made, ...data.closed, 1);
  const barW = width / (data.weeks.length * 2 + 2);

  const y = (v: number) => height - (v / maxVal) * (height - 16) - 8;

  return (
    <div className="flex h-full flex-col rounded-xl border bg-background p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium">{title ?? "Tickets: Made vs Closed"}</h3>
      </div>
      <div className="relative w-full flex-1">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full">
          {/* grid */}
          <g opacity={0.08}>
            {Array.from({ length: 4 }).map((_, i) => (
              <line key={i} x1={0} x2={width} y1={((i + 1) * height) / 5} y2={((i + 1) * height) / 5} stroke="currentColor" />
            ))}
          </g>
          {/* bars */}
          {data.weeks.map((_, i) => {
            const xGroup = (i + 1) * barW * 2;
            return (
              <g key={i}>
                <rect x={xGroup - barW * 0.9} y={y(data.made[i])} width={barW * 0.8} height={height - y(data.made[i]) - 8} fill="#3b82f6" rx={2} />
                <rect x={xGroup} y={y(data.closed[i])} width={barW * 0.8} height={height - y(data.closed[i]) - 8} fill="#10b981" rx={2} />
              </g>
            );
          })}
        </svg>
      </div>
      <div className="mt-2 flex items-center gap-4 text-xs">
        <div className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-sm" style={{ backgroundColor: "#3b82f6" }} /> <span className="text-muted-foreground">Made</span></div>
        <div className="flex items-center gap-2"><span className="inline-block h-2 w-2 rounded-sm" style={{ backgroundColor: "#10b981" }} /> <span className="text-muted-foreground">Closed</span></div>
      </div>
    </div>
  );
}

