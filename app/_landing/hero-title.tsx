import { cn } from "@/lib/utils";

export default function HeroTitle({ className }: { className?: string }) {
  return (
    <div className={cn("group relative z-10 inline-block", className)}>
      <h1
        className={cn(
          "select-none px-0 text-center text-5xl font-semibold text-stone-800 transition-opacity delay-1000 dark:text-gray-100 md:px-0 md:text-6xl font-gilroy",
        )}
      >
        AI-Powered <br />Startup Intelligence
      </h1>
    </div>
  );
}
