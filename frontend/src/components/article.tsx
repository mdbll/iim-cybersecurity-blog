"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ArrowDown, Calendar, Clock, User } from "lucide-react"
import type { BlogPost } from "../types/blog"
import { Wannacry } from "./articles/wannacry"
import { Log4Shell } from "./articles/log4shell"
import { Solarwinds } from "./articles/solarwinds"
import { NotPetya } from "./articles/notpetya"
import { Target } from "./articles/target"
import { RootMeWebClient } from "./articles/rootmeWebClient"

interface ArticleProps {
  post: BlogPost
  onBack: () => void
}

export function Article({ post, onBack }: ArticleProps) {
  return (
    <article className="max-w-4xl mx-auto">
      <Button onClick={onBack} variant="ghost" className="mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour
      </Button>

      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>

        <div className="flex items-center gap-6 text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
        </div>

        <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </header>

      <Separator className="mb-8" />

      <div className="prose prose-lg max-w-none">

        {post.id === 3 && <RootMeWebClient/>}
        
        {post.id === 4 && <Wannacry/>}

        {post.id === 5 && <Log4Shell/>}

        {post.id === 6 && <Solarwinds/>}

        {post.id === 7 && <NotPetya/>}

        {post.id === 8 && <Target/>}


        {/* template */}
        {/* {post.id === 11 && ( 
          <>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed"></p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight"></h2>
            <p className="text-xl mb-6 leading-relaxed"></p>
            <p className="text-xl mb-6 leading-relaxed"></p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight"></h2>
            <p className="text-xl mb-6 leading-relaxed">
              <br />
              <ul className="list-disc pl-6 mt-4 mb-6">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </p>
            <p className="text-xl mb-6 leading-relaxed"></p>
          </>
        )} */}

      </div>
    </article>
  )
}
