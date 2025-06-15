"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const connections = [
  {
    id: 1,
    source: "API",
    target: "Database",
    status: "active",
  },
  {
    id: 2,
    source: "Frontend",
    target: "API",
    status: "active",
  },
  {
    id: 3,
    source: "Mobile",
    target: "API",
    status: "pending",
  },
  {
    id: 4,
    source: "Analytics",
    target: "Database",
    status: "active",
  },
]

export default function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string
}) {
  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-2 gap-4">
        {connections.map((connection, index) => (
          <motion.div
            key={connection.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative rounded-lg border bg-background p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div
                  className={cn(
                    "h-2 w-2 rounded-full",
                    connection.status === "active"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  )}
                />
                <span className="text-sm font-medium">{connection.source}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">{connection.target}</span>
                <div
                  className={cn(
                    "h-2 w-2 rounded-full",
                    connection.status === "active"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  )}
                />
              </div>
            </div>
            <motion.div
              className="absolute left-1/2 top-1/2 h-0.5 w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
} 