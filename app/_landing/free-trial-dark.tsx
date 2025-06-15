import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HexagonOutlineProps {
  x?: number;
  y?: number;
  filled?: boolean;
}

function HexagonIllustration() {
  // Base points for a regular hexagon
  const baseHexPoints = "50 0, 100 28.87, 100 86.6, 50 115.47, 0 86.6, 0 28.87";

  const HexagonOutline = ({ x = 0, y = 0, filled = false }: HexagonOutlineProps) => (
    <g transform={`translate(${x}, ${y}) scale(0.6)`}>
      {/* Outer Hexagon boundary */}
      <polygon
        points={baseHexPoints}
        stroke="currentColor"
        strokeWidth="2"
        fill={filled ? "rgba(255,255,255,0.1)" : "none"}
      />
      {/* Simplified dashed internal lines to imply 3D depth */}
      <line
        x1="0"
        y1="28.87"
        x2="50"
        y2="115.47"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <line
        x1="50"
        y1="0"
        x2="100"
        y2="86.6"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <line
        x1="0"
        y1="86.6"
        x2="100"
        y2="28.87"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
    </g>
  );

  return (
    <div className="relative flex h-full min-h-[200px] w-full items-center justify-center">
      {/* ViewBox dimensions adjusted to accommodate 5 scaled hexagons with spacing */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 450 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <defs>
          <pattern
            id="pattern-diagonal-lines"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        {/* Hexagons arranged with slight vertical staggering as seen in the image */}
        <HexagonOutline x={0} y={15} />
        <HexagonOutline x={70} y={10} />
        <HexagonOutline x={140} y={5} filled={true} />{" "}
        {/* The middle hexagon is slightly lower and filled */}
        <HexagonOutline x={210} y={10} />
        <HexagonOutline x={280} y={15} />
      </svg>
    </div>
  );
}

export default function FreeTrialDark() {
  return (
    <section className="relative overflow-hidden border-b border-t border-[#3e4458] bg-[#282f43] py-16 md:py-24">
      <div className="absolute left-[10%] top-0 h-full w-[1px] bg-[#3e4458]"></div>
      <div className="absolute right-[10%] top-0 h-full w-[1px] bg-[#3e4458]"></div>
      <div className="container mx-auto flex flex-col items-center justify-center gap-16 md:flex-row md:px-[10%]">
        <div className="flex max-w-lg flex-col items-center gap-4 text-center md:items-start md:text-left">
          <h2 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            Start with a 14-day <br className="hidden md:block" />
            free trial of Pro.
          </h2>
          <div className="mt-6 flex gap-4">
            <Link
              href="/signup"
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-white text-gray-800 hover:bg-gray-100",
              )}
            >
              Start for free
            </Link>
            <Link
              href="/pricing"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white",
              )}
            >
              See our plans
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-shrink-0 items-center justify-center md:w-1/2">
          <HexagonIllustration />
        </div>
      </div>
    </section>
  );
}
