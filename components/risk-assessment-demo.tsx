"use client";

import { useEffect, useState } from "react";
import { ShieldIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface RiskAssessmentDemoProps {
  className?: string;
}

export default function RiskAssessmentDemo({ className }: RiskAssessmentDemoProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const targetScore = 3.2;
  const maxScore = 5;

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedScore((prev) => {
          if (prev >= targetScore) {
            clearInterval(interval);
            return targetScore;
          }
          return prev + 0.1;
        });
      }, 100);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, [targetScore]);

  const getProgressSegments = () => {
    const segments = [];
    const segmentData = [
      { color: "bg-red-500", width: "w-32" }, // Long red segment
      { color: "bg-orange-500", width: "w-16" }, // Medium orange segment
      { color: "bg-yellow-400", width: "w-12" }, // Small yellow segment
      { color: "bg-green-300", width: "w-8" }, // Small light green segment
      { color: "bg-green-500", width: "w-8" }, // Small green segment
    ];

    for (let i = 0; i < 5; i++) {
      const segmentValue = i + 1;
      const isActive = animatedScore >= segmentValue;
      const isPartial = animatedScore > i && animatedScore < segmentValue;

      let opacity = 0.3;
      if (isActive) {
        opacity = 1;
      } else if (isPartial) {
        opacity = 0.3 + (animatedScore - i) * 0.7;
      }

      segments.push(
        <div
          key={i}
          className={cn(
            "h-4 rounded-full transition-all duration-500 ease-out",
            segmentData[i].color,
            segmentData[i].width,
          )}
          style={{ opacity }}
        />,
      );
    }

    return segments;
  };

  const getRiskLevel = () => {
    if (animatedScore <= 2) return "High Risk";
    if (animatedScore <= 3.5) return "Medium Risk";
    return "Low Risk";
  };

  const getRiskColor = () => {
    if (animatedScore <= 2) return "text-red-600 dark:text-red-400";
    if (animatedScore <= 3.5) return "text-orange-600 dark:text-orange-400";
    return "text-green-600 dark:text-green-400";
  };

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-md rounded-2xl bg-white p-8 dark:bg-gray-900",
        "shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.05)]",
        className,
      )}
    >
      <div className="space-y-8">
        {/* Header */}
        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white">
          Risk Assessment
        </h2>

        {/* Score Section */}
        <div className="space-y-3 text-center">
          <p className="text-base text-gray-500 dark:text-gray-400">Total Score</p>
          <div className="text-5xl font-bold text-gray-900 dark:text-white">
            {animatedScore.toFixed(1)} / {maxScore}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-2 py-4">{getProgressSegments()}</div>

        {/* Risk Level */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <ShieldIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            <span className="text-base text-gray-600 dark:text-gray-400">Risk Level</span>
          </div>
          <span className={cn("text-base font-semibold", getRiskColor())}>{getRiskLevel()}</span>
        </div>
      </div>
    </div>
  );
}
