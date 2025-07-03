"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { ArticleCardTypes } from "../../../types/articleCard.types";

interface ArticleCardProps {
  article: ArticleCardTypes;
  onClick: () => void;
}

export function ArticleCard({ article, onClick }: ArticleCardProps) {
  const handleClick = () => {
    window.scrollTo({ top: 0 });
    onClick();
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer group">
      <CardHeader className="">
        <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
      </CardHeader>

      <CardContent className="flex-1"></CardContent>

      <CardFooter className="flex flex-col gap-4 pt-0">
        <div className="flex items-center gap-4 text-sm text-muted-foreground w-full">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {article.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.readTime}
          </div>
        </div>
        <div className="w-full">
          <Button onClick={handleClick} className="w-full" variant="default">
            Voir plus
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
