"use client";

import React, { Suspense } from "react";
import { useTheme } from "next-themes";
import { useInView } from "framer-motion";

import BentoDemo from "@/components/bento-demo";
import { cn } from "@/lib/utils";

import FreeTrialDark from "./_landing/free-trial-dark";
import FreeTrialSection from "./_landing/free-trial-section";
import Hero from "./_landing/hero";
import SiteFooter from "./_landing/site-footer";

const SkeletonSection = React.lazy(() => import("./_landing/skeleton-section"));
const Testimonials = React.lazy(() => import("./_landing/testimonials"));

function LazySection({
  component: Component,
  className,
}: {
  className?: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}) {
  const divRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(divRef, {
    once: true,
  });

  return (
    <div
      className={cn("min-h-52 w-full", {
        "duration-1000 ease-in-out animate-in fade-in-0 slide-in-from-bottom-24": isInView,
      })}
      ref={divRef}
    >
      <Suspense
        fallback={
          <div
            className={cn(
              "h-full min-h-32 w-full animate-pulse bg-foreground/10 blur-xl",
              className,
            )}
          />
        }
      >
        <Component />
      </Suspense>
    </div>
  );
}

export default function IndexPage() {
  const { resolvedTheme } = useTheme();
  const color = resolvedTheme === "dark" ? "#ffffff12" : "#444cf710";

  return (
    <div className="relative overflow-x-hidden overflow-y-visible bg-transparent">
      <Hero />
      <LazySection component={SkeletonSection} />
      <div
        className="relative w-full bg-white px-4 py-12"
        style={{
          backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
          backgroundSize: "calc(10px) calc(10px)",
        }}
      >
        <div className="mx-auto w-[80vw]">
          <div className="group relative z-10 mb-12 inline-block w-full text-center">
            <h1 className="select-none px-0 text-center font-gilroy text-5xl font-semibold text-stone-800 transition-opacity delay-1000 dark:text-gray-100 md:px-0 md:text-6xl">
              Explore Our Features
            </h1>
            <p className="relative mx-auto mt-6 max-w-2xl text-center font-sans text-lg font-medium text-muted-foreground">
              Discover the powerful tools and capabilities that make our platform stand out. From
              seamless integrations to advanced analytics, see how we can transform your workflow.
            </p>
          </div>
          <BentoDemo />
        </div>
      </div>
      <FreeTrialSection />
      <LazySection component={Testimonials} className="container mx-auto min-h-96" />
      <FreeTrialDark />
      <SiteFooter />
    </div>
  );
}
