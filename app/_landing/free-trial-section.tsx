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
        fill={filled ? "url(#pattern-diagonal-lines)" : "none"}
      />
      {/* Simplified dashed internal lines to imply 3D depth */}
      <line x1="0" y1="28.87" x2="50" y2="115.47" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3"/>
      <line x1="50" y1="0" x2="100" y2="86.6" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3"/>
      <line x1="0" y1="86.6" x2="100" y2="28.87" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3"/>
    </g>
  );

  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[200px]">
      {/* ViewBox dimensions adjusted to accommodate 5 scaled hexagons with spacing */}
      <svg width="100%" height="100%" viewBox="0 0 450 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
        <defs>
          <pattern id="pattern-diagonal-lines" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>

        {/* Hexagons arranged with slight vertical staggering as seen in the image */}
        <HexagonOutline x={0} y={15} />
        <HexagonOutline x={70} y={10} />
        <HexagonOutline x={140} y={5} filled={true} /> {/* The middle hexagon is slightly lower and filled */}
        <HexagonOutline x={210} y={10} />
        <HexagonOutline x={280} y={15} />
      </svg>
    </div>
  )
}

export default function FreeTrialSection() {

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden border-t border-b border-[#dcdcdc]">
      <div className="absolute left-[10%] top-0 h-full w-[1px] bg-[#dcdcdc]"></div>
      <div className="absolute right-[10%] top-0 h-full w-[1px] bg-[#dcdcdc]"></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16 md:px-[10%]">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-semibold text-stone-800 leading-tight">
            Start with a 14-day <br className="hidden md:block"/>free trial of Pro.
          </h2>
          <div className="flex gap-4 mt-6">
            <Link href="/signup" className={cn(buttonVariants({ variant: "default" }))}>
              Start for free
            </Link>
            <Link href="/pricing" className={cn(buttonVariants({ variant: "outline" }))}>
              See our plans
            </Link>
          </div>
        </div>
        <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
          <HexagonIllustration />
        </div>
      </div>
    </section>
  );
} 