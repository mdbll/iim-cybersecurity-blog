"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { BlogPost } from "../types/blog"

interface BlogCardProps {
  post: BlogPost
  onClick: () => void
}

export function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer group">
      <CardHeader className="pb-4">
        <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Button
          onClick={onClick}
          className="w-full"
          variant="default"
        >
          Voir plus
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  )
}

// bg-blue-500 text-white hover:bg-blue-600 hover:text-white transition-colors