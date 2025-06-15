import Link from "next/link";

import AnimatedBorderTrail from "@/animata/container/animated-border-trail";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export default function IndexIndicator() {
  return (
    <AnimatedBorderTrail
      contentClassName="rounded-[inherit]"
      className={cn(
        "absolute left-1/2 top-[-20px] -translate-x-1/2 transform rounded-full z-20",
      )}
    >
      <Link
        href="https://pynn.notaku.site/"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-zinc-800 flex items-center justify-center whitespace-nowrap",
        )}
      >
        <Icons.dashboard className="mr-2 h-4 w-4" />
        Learn more through our documentation
        <Icons.chevronRight className="ml-2 h-4 w-4" />
      </Link>
    </AnimatedBorderTrail>
  );
} 