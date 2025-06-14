import Link from "next/link";
import { useTheme } from "next-themes";

import { Icons } from "@/components/icons";
import { PageHeaderDescription } from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import HeroTitle from "./hero-title";
import IndexIndicator from "./index-indicator";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const color = resolvedTheme === "dark" ? "#ffffff12" : "#444cf710";
  return (
    <div
      className="relative overflow-visible pt-8"
      style={{
        backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: "calc(10px) calc(10px)",
      }}
    >
      <div className="container relative overflow-hidden py-16 md:py-48">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-4 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-2">
            <IndexIndicator />
            <HeroTitle className="mt-9" />

            <PageHeaderDescription className="relative mx-auto mb-4 w-fit text-center text-lg font-medium text-muted-foreground font-sans">
              Explore your data, build your dashboard, bring your team together.
            </PageHeaderDescription>
            <div className="relative mb-6 mt-3 flex items-start gap-4 duration-1000 ease-minor-spring animate-in fade-in-0 slide-in-from-bottom-3">
              <Link href="/docs/setup" className={cn(buttonVariants())}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
