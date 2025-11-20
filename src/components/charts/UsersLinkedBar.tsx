"use client";

import React from "react";

type Props = {
  total: number;
  linked: number;
  notLinked: number;
};

export default function UsersLinkedBar({ total, linked, notLinked }: Props) {
  const safeTotal = Math.max(total, 0);
  const l = Math.max(Math.min(linked, safeTotal), 0);
  const n = Math.max(Math.min(notLinked, safeTotal - l), 0);
  const linkedPct = safeTotal ? (l / safeTotal) * 100 : 0;
  const notLinkedPct = safeTotal ? (n / safeTotal) * 100 : 0;

  return (
    <div className="flex h-full flex-col rounded-xl border bg-background p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-medium">Users Overview</h3>
        <span className="text-xs text-muted-foreground">Total: {safeTotal}</span>
      </div>
      <div className="relative mb-3 h-8 w-full overflow-hidden rounded-md border">
        <div
          className="h-full bg-emerald-500/80"
          style={{ width: `${linkedPct}%` }}
          title={`Linked: ${l}`}
        />
        <div
          className="absolute left-0 top-0 h-full bg-rose-500/80"
          style={{
            width: `${linkedPct + notLinkedPct}%`,
            mixBlendMode: "multiply" as React.CSSProperties["mixBlendMode"],
          }}
          title={`Not Linked: ${n}`}
        />
      </div>
      <div className="mt-auto grid grid-cols-2 gap-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-emerald-500" />
          <div className="flex w-full items-center justify-between">
            <span className="text-muted-foreground">Linked</span>
            <span className="font-medium">{l}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-rose-500" />
          <div className="flex w-full items-center justify-between">
            <span className="text-muted-foreground">Not Linked</span>
            <span className="font-medium">{n}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
