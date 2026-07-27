import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold leading-none transition-colors",
  {
    variants: {
      variant: {
        amber: "bg-amber text-ink",
        ink: "bg-ink text-cream",
        rust: "bg-rust text-cream",
        outline: "border border-ink/30 text-ink bg-transparent",
        "outline-cream": "border border-cream/30 text-cream bg-transparent",
        cream: "bg-cream text-ink",
      },
      size: {
        sm: "px-3 py-1 text-[10px]",
        md: "px-4 py-1.5 text-xs",
        lg: "px-5 py-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "amber",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}
