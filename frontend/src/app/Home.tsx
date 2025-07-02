"use client";

import { ArticleCard } from "../components/features/ArticleCard/ArticleCard";
import type { ArticleCardTypes } from "../types/articleCard.types";
import { Article as ArticleData } from "../data/article";
import { Article } from "../app/Article";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((post) => (
            <ArticleCard
              key={post.id}
              post={post}
              onClick={() => onArticleClick(post.id)}
            />
          ))}
        </div>
      ) : (
        currentArticle && <Article article={currentArticle} onBack={onBack} />
      )}
    </div>
  );
}
