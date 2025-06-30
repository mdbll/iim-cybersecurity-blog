"use client"

import { BlogCard } from "./blog-card"
import type { BlogPost } from "../types/blog"

interface BlogGridProps {
  posts: BlogPost[]
  onArticleClick: (id: number) => void
}

export function BlogGrid({ posts, onArticleClick }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} onClick={() => onArticleClick(post.id)} />
      ))}
    </div>
  )
}
