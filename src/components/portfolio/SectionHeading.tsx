import { cn } from "@/lib/utils";
import { StarAccent } from "./StarAccent";
import { Badge } from "./Badge";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  accent?: ReactNode;
  tone?: "cream" | "forest";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  tone = "forest",
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className,
      )}
    >
      <Badge
        variant={tone === "cream" ? "outline" : "outline-cream"}
        size="sm"
        className="mb-5"
      >
        <StarAccent
          size={10}
          className={cn(tone === "cream" ? "text-amber" : "text-amber")}
        />
        {eyebrow}
      </Badge>
      <h2 className="font-display font-bold tracking-tight leading-[0.95] text-4xl md:text-6xl">
        {title}
        {accent ? <span className="text-amber"> {accent}</span> : null}
      </h2>
      <div
        className={cn(
          "mt-5 h-1 w-16 rounded-full",
          tone === "cream" ? "bg-ink" : "bg-amber",
        )}
      />
    </div>
  );
}
