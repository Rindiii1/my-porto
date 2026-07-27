import { cn } from "@/lib/utils";
import type { CSSProperties, ComponentProps } from "react";

type OutlineColor = "amber" | "cream" | "rust" | "ink";

interface OutlineTextProps extends ComponentProps<"span"> {
  text: string;
  color?: OutlineColor;
  strokeWidth?: number;
}

const colorMap: Record<OutlineColor, string> = {
  amber: "var(--color-amber)",
  cream: "var(--color-cream)",
  rust: "var(--color-rust)",
  ink: "var(--color-ink)",
};

export function OutlineText({
  text,
  color = "amber",
  strokeWidth = 1,
  className,
  style,
  ...rest
}: OutlineTextProps) {
  const merged: CSSProperties = {
    WebkitTextStroke: `${strokeWidth}px ${colorMap[color]}`,
    color: "transparent",
    ...style,
  };
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none select-none absolute font-display font-bold whitespace-nowrap",
        className,
      )}
      style={merged}
      {...rest}
    >
      {text}
    </span>
  );
}
