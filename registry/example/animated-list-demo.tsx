"use client"

import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const items = [
  {
    id: 1,
    title: "New message from Sarah",
    description: "Hey, can you review the latest design?",
    time: "2m ago",
  },
  {
    id: 2,
    title: "Meeting reminder",
    description: "Team sync in 30 minutes",
    time: "1h ago",
  },
  {
    id: 3,
    title: "New comment on PR",
    description: "Great work on the implementation!",
    time: "2h ago",
  },
  {
    id: 4,
    title: "New follower",
    description: "John Doe started following you",
    time: "3h ago",
  },
]

export default function AnimatedListDemo({
  className,
}: {
  className?: string
}) {
  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="mb-4 rounded-lg border bg-background p-4 shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
            <span className="text-xs text-muted-foreground">{item.time}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 