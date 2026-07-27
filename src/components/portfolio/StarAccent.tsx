import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

interface StarAccentProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export function StarAccent({ className, size = 16, ...rest }: StarAccentProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={cn("inline-block", className)}
      {...rest}
    >
      <path d="M12 1.5c.5 5.2 4.8 9.5 10 10-5.2.5-9.5 4.8-10 10-.5-5.2-4.8-9.5-10-10 5.2-.5 9.5-4.8 10-10z" />
    </svg>
  );
}
