"use client";

import React from "react";

import BentoDemo from "@/components/bento-demo";

export default function BentoSection(): React.JSX.Element {
  return (
    <section className="container mx-auto py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Powerful Features</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover the tools and features that make our platform stand out.
        </p>
      </div>
      <div className="mt-16">
        <BentoDemo />
      </div>
    </section>
  );
}
