"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  className,
  pauseOnHover = false,
  direction = "left",
  speed = 20,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current
    if (!container || !content) return

    const contentWidth = content.offsetWidth

    const animation = content.animate(
      [
        { transform: "translateX(0)" },
        {
          transform: `translateX(${
            direction === "left" ? "-" : ""
          }${contentWidth}px)`,
        },
      ],
      {
        duration: (contentWidth / speed) * 1000,
        iterations: Infinity,
        easing: "linear",
      }
    )

    if (pauseOnHover) {
      container.addEventListener("mouseenter", () => {
        animation.pause()
      })
      container.addEventListener("mouseleave", () => {
        animation.play()
      })
    }

    return () => {
      animation.cancel()
      if (pauseOnHover) {
        container.removeEventListener("mouseenter", () => {
          animation.pause()
        })
        container.removeEventListener("mouseleave", () => {
          animation.play()
        })
      }
    }
  }, [direction, pauseOnHover, speed])

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex w-full overflow-hidden",
        pauseOnHover && "cursor-pointer",
        className
      )}
    >
      <div
        ref={contentRef}
        className={cn(
          "flex w-max animate-marquee items-stretch gap-4",
          direction === "right" && "animate-marquee-right"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex w-max animate-marquee items-stretch gap-4",
          direction === "right" && "animate-marquee-right"
        )}
      >
        {children}
      </div>
    </div>
  )
} 