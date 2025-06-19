"use client";

import Link from "next/link";
import { useTheme } from "next-themes";

import BlurryBlob from "@/animata/background/blurry-blob";
import { PageHeaderDescription } from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import HeroTitle from "./hero-title";
import IndexIndicator from "./index-indicator";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const color = resolvedTheme === "dark" ? "#ffffff12" : "#444cf710";
  return (
    <div
      className="relative h-[calc(67vh+400px)] overflow-hidden bg-white"
      style={{
        backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: "calc(10px) calc(10px)",
      }}
    >
      <div className="relative w-full overflow-hidden py-16 md:py-32">
        <div className="relative mx-auto flex w-full flex-col items-center justify-center gap-8">
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <IndexIndicator />
            <HeroTitle className="mt-9" />

            <PageHeaderDescription className="relative mx-auto mt-6 text-center font-sans text-lg font-medium text-muted-foreground">
              Pynn is the AI-native infrastructure that powers automated startup
              assessments—branded, scalable, and built for early-stage investing.
            </PageHeaderDescription>
            <div className="relative mb-6 mt-3 flex w-full flex-col items-center gap-4 duration-1000 ease-minor-spring animate-in fade-in-0 slide-in-from-bottom-3">
              <div className="absolute left-1/2 top-[120%] -z-10 -translate-x-1/2 -translate-y-1/2 scale-150">
                <BlurryBlob firstBlobColor="bg-orange-400" secondBlobColor="bg-red-300" />
              </div>
              <div className="flex items-center justify-center gap-4">
                <Link href="/docs/setup" className={cn(buttonVariants())}>
                  Sign Up
                </Link>
                <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }))}>
                  Talk to sales
                </Link>
              </div>
              <div className="relative mx-auto h-auto w-[80vw]">
                <img
                  src="/images/hero-image.png"
                  alt="Hero Image"
                  className="mt-8 h-auto w-full rounded-2xl border shadow-[0_-4px_12px_-1px_rgba(0,0,0,0.1)]"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[20%] rounded-b-2xl bg-gradient-to-t from-white to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
