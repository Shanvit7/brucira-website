import { HTMLAttributes } from 'react';
import { cn } from "@/lib/utils";

interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  vertical?: boolean;
  repeat?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  applyMask?: boolean;
  duration?: number;
  gap?: number;
}

const Marquee = ({
  children,
  vertical = false,
  repeat = 2,
  pauseOnHover = false,
  reverse = false,
  className,
  applyMask = false,
  duration = 20,
  gap = 12,
  ...props
}: MarqueeProps) => (
  <div
    {...props}
    className={cn(
      "group relative flex overflow-hidden p-2",
      {
        "h-full flex-col": vertical,
        "w-full flex-row": !vertical,
      },
      className
    )}
    style={{
      '--duration': `${duration}s`,
      '--gap': `${gap}px`,
    } as React.CSSProperties}
  >
    <div 
      className={cn(
        "flex",
        {
          "animate-marquee-vertical flex-col": vertical,
          "animate-marquee-horizontal flex-row": !vertical,
          "group-hover:[animation-play-state:paused]": pauseOnHover,
          "[animation-direction:reverse]": reverse,
        }
      )}
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={`item-${index}`}
          className={cn("flex shrink-0", {
            "mb-[var(--gap)]": vertical,
            "mr-[var(--gap)]": !vertical,
          })}
        >
          {children}
        </div>
      ))}
    </div>
    {applyMask && (
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-10",
          {
            "bg-gradient-to-b from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50": vertical,
            "bg-gradient-to-r from-white/50 via-transparent to-white/50 dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50": !vertical,
          }
        )}
      />
    )}
  </div>
);

export default Marquee;