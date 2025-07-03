"use client";

import { ArticleCard } from "../components/features/ArticleCard/ArticleCard";
import type { ArticleCardTypes } from "../types/articleCard.types";
import { Article as ArticleData } from "../data/article";
import { Article } from "../app/Article";
import { Separator } from "@/components/ui/separator";

interface HomeProps {
  articles: ArticleCardTypes[];
  view: "home" | "article";
  selectedArticle: number | null;
  onArticleClick: (id: number) => void;
  onBack: () => void;
}

export function Home({
  articles,
  view,
  selectedArticle,
  onArticleClick,
  onBack,
}: HomeProps) {
  const currentArticle = selectedArticle
    ? ArticleData.find((a) => a.id === selectedArticle)
    : null;

  return (
    <div className="container mx-auto">
      {view === "home" ? (
        <div>
          <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Le média qui décrypte l’actualité de la cybersécurité.
        </h2>
        <h3 className="text-2xl text-muted-foreground mb-6 leading-relaxed">
          Attaques marquantes, vulnérabilités critiques, outils, challenges, et
          enjeux globaux : Medcy t’apporte une veille claire, synthétique et
          engagée sur la cybersécurité.
        </h3>
      </div>
      <Separator className="mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onClick={() => onArticleClick(article.id)}
            />
          ))}
        </div>
      </div>      
      ) : (
        currentArticle && <Article article={currentArticle} onBack={onBack} />
      )}
    </div>
  );
}
