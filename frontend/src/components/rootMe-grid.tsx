"use client"

import { RootMeCard } from "./rootMe-card"
import type { RootMePost } from "../types/rootme"

interface RootMeGridProps {
  posts: RootMePost[]
  onArticleClick: (id: number) => void
}

export function RootMeGrid({ posts, onArticleClick }: RootMeGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <RootMeCard key={post.id} post={post} onClick={() => onArticleClick(post.id)} />
      ))}
    </div>
  )
}
