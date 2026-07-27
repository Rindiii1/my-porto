import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { StarAccent } from "./StarAccent";

interface TimelineProps {
  items: TimelineItemProps[];
  dotTone?: "amber" | "rust" | "alternating";
  className?: string;
}

export interface TimelineItemProps {
  period: string;
  title: string;
  subtitle?: string;
  description?: string;
  dotColor?: "amber" | "rust";
}

export function Timeline({ items, dotTone = "alternating", className }: TimelineProps) {
  return (
    <ol className={cn("relative space-y-6", className)}>
      <span
        aria-hidden
        className="absolute left-[7px] top-2 bottom-2 border-l border-dashed border-current opacity-30"
      />
      {items.map((item, i) => {
        const dot =
          dotTone === "amber"
            ? "bg-amber"
            : dotTone === "rust"
            ? "bg-rust"
            : i % 2 === 0
            ? "bg-amber"
            : "bg-rust";
        return (
          <li key={i} className="relative pl-8">
            <span
              className={cn(
                "absolute left-0 top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full ring-4 ring-current/10",
                dot,
                "text-current",
              )}
            >
              <StarAccent size={8} className="text-ink" />
            </span>
            <div className="font-display text-lg font-bold leading-tight">
              {item.period}
            </div>
            <div className="mt-1 text-sm font-semibold opacity-90">{item.title}</div>
            {item.subtitle ? (
              <div className="text-xs opacity-70 mt-0.5">{item.subtitle}</div>
            ) : null}
            {item.description ? (
              <p className="text-xs opacity-70 mt-1.5 leading-relaxed">
                {item.description}
              </p>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
