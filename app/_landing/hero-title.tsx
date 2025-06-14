import { Plus_Jakarta_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

const titleFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
});

export default function HeroTitle({ className }: { className?: string }) {
  return (
    <div className={cn("group relative z-10 inline-block", className)}>
      <h1
        className={cn(
          "select-none px-0 text-center text-6xl font-extrabold text-stone-800 transition-opacity delay-1000 dark:text-gray-100 md:px-0 md:text-7xl",
          titleFont.className,
        )}
      >
        AI Powered Data <br /><span className="text-orange-600">Platform</span>
      </h1>
    </div>
  );
}
