"use client";

import { RootMeChallengeWebClientArticleCard } from "../../components/features/RootMeChallengeWebClientArticleCard/RootMeChallengeWebClientArticleCard";
import type { ChallengeCard } from "../../types/articleCard.types";

interface RootMeChallengeWebClientArticleProps {
  challenges: ChallengeCard[];
  view: "article" | "challenge";
  selectedArticle: number | null;
  onChallengeClick: (id: number) => void;
  onBack: () => void;
}

export function RootMeChallengeWebClientArticle({
  challenges,
  view,
  selectedArticle,
  onChallengeClick,
  onBack,
}: RootMeChallengeWebClientArticleProps) {
  const currentChallenge = selectedArticle
    ? challenges.find((a) => a.id === selectedArticle)
    : null;
  return (
    <>
      <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
        Dans cet article, on va découvrir comment résoudre différents challenges
        de la catégorie Web - Client sur la plateforme Root Me. Ces défis
        tournent autour de l’analyse et la manipulation du code côté client,
        principalement en JavaScript. L’objectif est de comprendre comment
        fonctionnent les pages web, repérer les failles logiques ou techniques,
        et les exploiter pour atteindre les objectifs fixés par chaque épreuve.
      </p>

      {view === "article" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <RootMeChallengeWebClientArticleCard
              key={challenge.id}
              challenge={challenge}
              onClick={() => onChallengeClick(challenge.id)}
            />
          ))}
        </div>
      ) : (
        <p>test</p>
      )}
    </>
  );
}
