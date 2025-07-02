"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { RootMePost } from "../types/rootme"
import { rootMePosts } from "../data/rootme-posts"

interface RootMeCardProps {
  post: RootMePost
  onClick: () => void
}

export function RootMeCard({ post, onClick }: RootMeCardProps) {
  const handleClick = () => {
    window.scrollTo({ top: 0 });
    onClick();
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer group">
      <CardHeader className="">
        <h3 className="text-2xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        
      </CardContent>

      <CardFooter className="flex flex-col gap-4 pt-0">
          <Button
            onClick={handleClick}
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