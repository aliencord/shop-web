"use client";

import React, { useMemo } from "react";

type HealthItem = {
  name: string;
  status: "ok" | "warn" | "down";
  value?: string;
};

export default function SystemHealth() {
  const items = useMemo<HealthItem[]>(() => {
    // Filler system health
    return [
      { name: "API", status: "ok", value: "98 ms" },
      { name: "Database", status: "ok", value: "Healthy" },
      { name: "Auth", status: "warn", value: "Intermittent" },
      { name: "Workers", status: "ok", value: "4 active" },
      { name: "Cache", status: "ok", value: "Hit 92%" },
      { name: "Queue", status: "ok", value: "Depth 7" },
    ];
  }, []);

  const color = (s: HealthItem["status"]) =>
    s === "ok" ? "bg-emerald-500" : s === "warn" ? "bg-amber-500" : "bg-rose-500";

  return (
    <div className="rounded-xl border bg-background p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium">System Health</h3>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.name} className="flex items-center justify-between rounded-lg border p-3">
            <div className="flex items-center gap-3">
              <span className={`inline-block h-2.5 w-2.5 rounded-full ${color(it.status)}`} />
              <span className="text-sm font-medium">{it.name}</span>
            </div>
            <div className="text-xs text-muted-foreground">{it.value ?? it.status.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

