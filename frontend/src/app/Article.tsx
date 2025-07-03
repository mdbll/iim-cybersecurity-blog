"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import type { ArticleCardTypes } from "../types/articleCard.types";
import { WannaCryArticle } from "./Articles/WannaCryArticle";
import { Log4ShellArticle } from "./Articles/Log4ShellArticle";
import { SolarWindsArticle } from "./Articles/SolarWindsArticle";
import { NotPetyaArticle } from "./Articles/NotPetyaArticle";
import { TargetArticle } from "./Articles/TargetArticle";
import { RootMeChallengeWebClientArticle } from "./Articles/RootMeChallengeWebClientArticle";
import { useState } from "react";
import { Challenge } from "./Challenge";
// import { ViamedisAndAlmerysCyberAttackArticle } from "./Articles/ViamedisAndAlmerysCyberAttackArticle"
// import { CybersecurityIssuesTransportationSectorArticle } from "./Articles/CybersecurityIssuesTransportationSectorArticle"

interface ArticleProps {
  article: ArticleCardTypes;
  onBack: () => void;
}

export function Article({ article, onBack }: ArticleProps) {
  const [currentView, setCurrentView] = useState<"article" | "challenge">(
    "article"
  );
  const [selectedChallenge, setSelectedChallenge] = useState<number | null>(
    null
  );

  const handleChallengeClick = (id: number) => {
    setSelectedChallenge(id);
    setCurrentView("challenge");
  };

  const handleBackToArticle = () => {
    setSelectedChallenge(null);
    setCurrentView("article");
  };

  return (
    <article className="max-w-4xl mx-auto">
      {currentView === "article" && (
        <div>
          <Button onClick={onBack} variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>

          {/* --- Article Header --- */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
            </div>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          <Separator className="mb-8" />

          {/* --- Article Content --- */}
          <div className="prose prose-lg max-w-none">
            {article.id === 1 && <WannaCryArticle />}
            {article.id === 2 && <Log4ShellArticle />}
            {article.id === 3 && <SolarWindsArticle />}
            {article.id === 4 && <NotPetyaArticle />}
            {article.id === 5 && <TargetArticle />}
            {article.id === 6 && article.challenge && (
              <RootMeChallengeWebClientArticle
                challenges={article.challenge}
                view={currentView}
                selectedArticle={selectedChallenge}
                onChallengeClick={handleChallengeClick}
                onBack={handleBackToArticle}
              />
            )}
            {/* {article.id === 7 && <ViamedisAndAlmerysCyberAttackArticle/>} */}
            {/* {article.id === 8 && <CybersecurityIssuesTransportationSectorArticle/>} */}

            {/* <p>{article.id}</p>
        <p>{article.other[0].difficulty}</p> */}
          </div>
        </div>
      )}

      {currentView === "challenge" &&
        selectedChallenge !== null &&
        article.challenge && (
          <Challenge
            challenge={article.challenge[selectedChallenge - 1]}
            onBack={handleBackToArticle}
          />
        )}
    </article>
  );
}
