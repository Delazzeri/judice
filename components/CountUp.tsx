"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
};

export default function CountUp({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1500,
}: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - progress) * (1 - progress);
          setValue(target * eased);

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setValue(target);
          }
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <p
      ref={ref}
      className="text-4xl font-bold text-zinc-900 sm:text-5xl"
    >
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </p>
  );
}
