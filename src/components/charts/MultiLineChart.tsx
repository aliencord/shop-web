"use client";

import React, { useMemo } from "react";

type Series = { name: string; data: number[]; color?: string };

type Props = {
  title?: string;
  series?: Series[];
  points?: number;
  height?: number;
};

function buildPath(values: number[], w: number, h: number, pad = 8) {
  const n = values.length;
  if (n === 0) return "";
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const innerW = w - pad * 2;
  const innerH = h - pad * 2;
  const stepX = innerW / Math.max(n - 1, 1);

  const y = (v: number) => pad + innerH - ((v - min) / span) * innerH;
  return values
    .map((v, i) => `${i === 0 ? "M" : "L"}${pad + i * stepX},${y(v)}`)
    .join(" ");
}

const defaultPalette = [
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
];

export default function MultiLineChart({ title, series, points = 24, height = 180 }: Props) {
  const data = useMemo<Series[]>(() => {
    if (series && series.length) return series;
    // Fallback filler data: 3 servers with pseudo-random load
    const rand = (seed: number) => {
      let x = seed;
      return () => (x = (1103515245 * x + 12345) % 2147483648);
    };
    const mk = (seed: number) => {
      const r = rand(seed);
      return Array.from({ length: points }, (_, i) => 20 + (r() % 40) + Math.round(10 * Math.sin(i / 2)));
    };
    return [
      { name: "Server A", data: mk(1), color: defaultPalette[0] },
      { name: "Server B", data: mk(2), color: defaultPalette[1] },
      { name: "Server C", data: mk(3), color: defaultPalette[2] },
    ];
  }, [series, points]);

  const width = 640; // rendered responsively via viewBox

  return (
    <div className="flex h-full flex-col rounded-xl border bg-background p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium">{title ?? "Users Online (by server)"}</h3>
      </div>
      <div className="relative w-full flex-1">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full">
          {/* grid */}
          <g opacity={0.08}>
            {Array.from({ length: 4 }).map((_, i) => (
              <line key={i} x1={0} x2={width} y1={((i + 1) * height) / 5} y2={((i + 1) * height) / 5} stroke="currentColor" />
            ))}
          </g>
          {data.map((s, idx) => (
            <path key={s.name} d={buildPath(s.data, width, height)} fill="none" stroke={s.color ?? defaultPalette[idx % defaultPalette.length]} strokeWidth={2} />
          ))}
        </svg>
      </div>
      <div className="mt-2 flex flex-wrap gap-3 text-xs">
        {data.map((s, idx) => (
          <div key={s.name} className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-sm" style={{ backgroundColor: s.color ?? defaultPalette[idx % defaultPalette.length] }} />
            <span className="text-muted-foreground">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

