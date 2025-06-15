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
      className="relative overflow-hidden h-[calc(67vh+400px)] bg-white"
      style={{
        backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: "calc(10px) calc(10px)",
      }}
    >
      <div className="relative overflow-hidden py-16 md:py-32 w-full">
        <div className="relative mx-auto flex w-full flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <IndexIndicator />
            <HeroTitle className="mt-9" />

            <PageHeaderDescription className="relative mx-auto mt-6 text-center text-lg font-medium text-muted-foreground font-sans">
              Pynn is the AI-native infrastructure that powers automated startup assessments—branded, scalable, and built for early-stage investing.
            </PageHeaderDescription>
            <div className="relative mb-6 mt-3 flex flex-col items-center gap-4 duration-1000 ease-minor-spring animate-in fade-in-0 slide-in-from-bottom-3 w-full">
              <div className="absolute top-[120%] left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 scale-150">
                <BlurryBlob
                  firstBlobColor="bg-orange-400"
                  secondBlobColor="bg-red-300"
                />
              </div>
              <div className="flex items-center justify-center gap-4">
                <Link href="/docs/setup" className={cn(buttonVariants())}>
                  Sign Up
                </Link>
                <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }))}>
                  Talk to sales
                </Link>
              </div>
              <div className="relative w-[80vw] h-auto mx-auto">
                <img
                  src="/images/hero-image.png"
                  alt="Hero Image"
                  className="mt-8 rounded-2xl border shadow-[0_-4px_12px_-1px_rgba(0,0,0,0.1)] w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-white to-transparent rounded-b-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
