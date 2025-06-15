"use client";

import type React from "react";

import { AnimatedList } from "@/components/magicui/animated-list";
import { cn } from "@/lib/utils";

interface MatchItem {
  name: string;
  matchScore: number;
  logo: React.ReactNode;
  color: string;
}

const StartupLogos = {
  Pynn: () => (
    <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
        <div className="h-3 w-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
      </div>
    </div>
  ),
  FlowSync: () => (
    <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500">
      <div className="flex space-x-1">
        <div className="h-6 w-1 rounded-full bg-white"></div>
        <div className="mt-1 h-4 w-1 rounded-full bg-white"></div>
        <div className="mt-0.5 h-5 w-1 rounded-full bg-white"></div>
      </div>
    </div>
  ),
  EcoTrack: () => (
    <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600">
      <div className="relative">
        <div className="h-5 w-5 rounded-full border-2 border-white"></div>
        <div className="absolute left-1 top-1 h-3 w-3 rounded-full bg-white"></div>
      </div>
    </div>
  ),
  MindBridge: () => (
    <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-red-500">
      <div className="flex items-center space-x-1">
        <div className="h-2 w-2 rounded-full bg-white"></div>
        <div className="h-0.5 w-3 rounded-full bg-white"></div>
        <div className="h-2 w-2 rounded-full bg-white"></div>
      </div>
    </div>
  ),
  CraftLab: () => (
    <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600">
      <div className="relative">
        <div className="h-4 w-4 rotate-45 transform bg-white"></div>
        <div className="absolute left-1 top-1 h-2 w-2 rotate-45 transform bg-gradient-to-br from-pink-500 to-rose-600"></div>
      </div>
    </div>
  ),
  DataVault: () => (
    <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="relative">
        <div className="h-4 w-5 rounded-sm bg-white"></div>
        <div className="absolute left-0.5 top-0.5 h-1 w-4 rounded-sm bg-gradient-to-r from-indigo-500 to-purple-600"></div>
        <div className="absolute left-0.5 top-2 h-1 w-4 rounded-sm bg-gradient-to-r from-indigo-500 to-purple-600"></div>
      </div>
    </div>
  ),
  TechFlow: () => (
    <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600">
      <div className="flex items-center space-x-0.5">
        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
        <div className="h-0.5 w-2 rounded-full bg-white"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
        <div className="h-0.5 w-2 rounded-full bg-white"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
      </div>
    </div>
  ),
  GreenAI: () => (
    <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600">
      <div className="relative">
        <div className="h-4 w-4 rounded-full border-2 border-white"></div>
        <div className="absolute left-1.5 top-1.5 h-1 w-1 rounded-full bg-white"></div>
        <div className="absolute -top-1 left-1.5 h-2 w-1 rounded-full bg-white"></div>
      </div>
    </div>
  ),
};

let matches = [
  {
    name: "Pynn",
    matchScore: 94,
    logo: <StartupLogos.Pynn />,
    color: "#6366f1",
  },
  {
    name: "FlowSync",
    matchScore: 27,
    logo: <StartupLogos.FlowSync />,
    color: "#8b5cf6",
  },
  {
    name: "EcoTrack",
    matchScore: 92,
    logo: <StartupLogos.EcoTrack />,
    color: "#10b981",
  },
  {
    name: "MindBridge",
    matchScore: 18,
    logo: <StartupLogos.MindBridge />,
    color: "#f59e0b",
  },
  {
    name: "CraftLab",
    matchScore: 85,
    logo: <StartupLogos.CraftLab />,
    color: "#ef4444",
  },
  {
    name: "DataVault",
    matchScore: 96,
    logo: <StartupLogos.DataVault />,
    color: "#06b6d4",
  },
  {
    name: "TechFlow",
    matchScore: 12,
    logo: <StartupLogos.TechFlow />,
    color: "#8b5cf6",
  },
  {
    name: "GreenAI",
    matchScore: 91,
    logo: <StartupLogos.GreenAI />,
    color: "#10b981",
  },
];

matches = Array.from({ length: 10 }, () => matches).flat();

const MatchCard = ({ name, matchScore, logo }: MatchItem) => {
  const getMatchStatus = (score: number) => {
    if (score >= 90) {
      return {
        text: "Match",
        bgColor: "bg-green-100 dark:bg-green-900/20",
        textColor: "text-green-700 dark:text-green-400",
      };
    }
    if (score < 30) {
      return {
        text: "No Match",
        bgColor: "bg-red-100 dark:bg-red-900/20",
        textColor: "text-red-700 dark:text-red-400",
      };
    }
    return {
      text: "Partial",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
      textColor: "text-yellow-700 dark:text-yellow-400",
    };
  };

  const matchStatus = getMatchStatus(matchScore);

  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[500px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-4">
        {logo}
        <div className="flex flex-1 flex-col">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-lg font-medium dark:text-white">
                You matched with <span className="font-bold">{name}</span>
              </span>
              <span className="text-2xl font-bold dark:text-white">{matchScore}%</span>
            </div>
            <div
              className={cn(
                "whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium",
                matchStatus.bgColor,
                matchStatus.textColor,
              )}
            >
              {matchStatus.text}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex h-[500px] w-full flex-col overflow-hidden p-2", className)}>
      <AnimatedList>
        {matches.map((item, idx) => (
          <MatchCard {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
