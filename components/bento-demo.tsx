import { BellIcon, Share2Icon, ShieldIcon } from "lucide-react";

import AnimatedBeamMultipleOutputDemo from "@/components/animated-beam-multiple-outputs";
import AnimatedListDemo from "@/components/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import RiskAssessmentDemo from "@/components/risk-assessment-demo";
import { cn } from "@/lib/utils";
import { FileTextIcon } from "@radix-ui/react-icons";

const startups = [
  {
    name: "Pynn",
    stage: "Pre-Seed Stage - MVP",
    website: "www.pynnai.com",
    location: "Palma, ES",
    vertical: "VC-Tech",
    segment: "SaaS",
  },
  {
    name: "FlowSync",
    stage: "Seed Stage - Series A",
    website: "www.flowsync.io",
    location: "Berlin, DE",
    vertical: "FinTech",
    segment: "B2B",
  },
  {
    name: "EcoTrack",
    stage: "Pre-Seed Stage - Prototype",
    website: "www.ecotrack.green",
    location: "Amsterdam, NL",
    vertical: "CleanTech",
    segment: "IoT",
  },
  {
    name: "MindBridge",
    stage: "Seed Stage - MVP",
    website: "www.mindbridge.ai",
    location: "London, UK",
    vertical: "HealthTech",
    segment: "AI/ML",
  },
  {
    name: "CraftLab",
    stage: "Pre-Seed Stage - Beta",
    website: "www.craftlab.studio",
    location: "Barcelona, ES",
    vertical: "CreatorTech",
    segment: "Marketplace",
  },
  {
    name: "DataVault",
    stage: "Seed Stage - Growth",
    website: "www.datavault.secure",
    location: "Zurich, CH",
    vertical: "CyberSec",
    segment: "Enterprise",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Track your startups",
    description: "Screen and assess all your dealflow",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:25s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {startups.map((startup, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-6",
              "border-gray-950/[.1] bg-white hover:bg-gray-50",
              "dark:border-gray-50/[.1] dark:bg-gray-900 dark:hover:bg-gray-800",
              "transform-gpu transition-all duration-300 ease-out hover:scale-105",
              "shadow-lg hover:shadow-xl",
            )}
          >
            <div className="space-y-4">
              <h3 className="mb-4 text-center text-lg font-bold text-gray-900 dark:text-white">
                {startup.name}
              </h3>

              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Stage:</span>
                  <span className="max-w-[180px] text-right text-sm font-medium text-gray-900 dark:text-white">
                    {startup.stage}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Website:</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {startup.website}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Location:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {startup.location}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Vertical:</span>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                    {startup.vertical}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Segment:</span>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                    {startup.segment}
                  </span>
                </div>
              </div>
            </div>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Match instantly",
    description: "Your thesis shows the matching score",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "LLM integrations",
    description: "Our AI connects to the leading AI models",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: ShieldIcon,
    name: "Risk assessment",
    description: "Get a professional in-depth startup evaluation",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <RiskAssessmentDemo className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90" />
    ),
  },
];

export default function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
