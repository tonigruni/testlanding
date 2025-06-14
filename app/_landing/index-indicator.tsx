import Link from "next/link";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function IndexIndicator() {
  return (
    <Link
      href="#"
      className={cn(
        buttonVariants({ variant: "outline" }),
        "absolute left-1/2 top-[-20px] -translate-x-1/2 transform rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow-md transition-all duration-300 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-zinc-800 z-20",
      )}
    >
      <Icons.dashboard className="mr-2 h-4 w-4" />
      Index 1.1 - Customer Facing Dashboards
      <Icons.chevronRight className="ml-2 h-4 w-4" />
    </Link>
  );
} 