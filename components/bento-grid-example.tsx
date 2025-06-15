"use client"

import { 
  Code2, 
  Globe, 
  Lightbulb, 
  Rocket, 
  Sparkles, 
  Zap 
} from "lucide-react"

import { BentoGrid, BentoGridItem } from "./bento-grid"

export function BentoGridExample() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      <BentoGridItem
        title="Global Reach"
        description="Connect with users worldwide through our platform"
        header={<div className="h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl" />}
        icon={<Globe className="h-4 w-4 text-neutral-500" />}
      />
      <BentoGridItem
        title="Clean Code"
        description="Built with modern best practices and patterns"
        header={<div className="h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl" />}
        icon={<Code2 className="h-4 w-4 text-neutral-500" />}
      />
      <BentoGridItem
        title="Innovation"
        description="Pushing boundaries with cutting-edge technology"
        header={<div className="h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl" />}
        icon={<Lightbulb className="h-4 w-4 text-neutral-500" />}
      />
      <BentoGridItem
        title="Fast Performance"
        description="Optimized for speed and efficiency"
        header={<div className="h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl" />}
        icon={<Rocket className="h-4 w-4 text-neutral-500" />}
      />
      <BentoGridItem
        title="Beautiful Design"
        description="Crafted with attention to detail"
        header={<div className="h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl" />}
        icon={<Sparkles className="h-4 w-4 text-neutral-500" />}
      />
      <BentoGridItem
        title="Lightning Fast"
        description="Instant response times and smooth interactions"
        header={<div className="h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl" />}
        icon={<Zap className="h-4 w-4 text-neutral-500" />}
      />
    </BentoGrid>
  )
} 