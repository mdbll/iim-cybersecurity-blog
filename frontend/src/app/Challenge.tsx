"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import type { ChallengeCard } from "../types/articleCard.types";
import { HtmlDisabledButtonChallenge } from "./Challenges/HtmlDisabledButtonChallenge";
import { JavascriptAuthentificationChallenge } from "./Challenges/JavascriptAuthentificationChallenge";
import { JavascriptSourceChallenge } from "./Challenges/JavascriptSourceChallenge";
import { JavascriptAuthentification2Challenge } from "./Challenges/JavascriptAuthentification2Challenge";

interface ChallengeProps {
  challenge: ChallengeCard;
  onBack: () => void;
}

export function Challenge({ challenge, onBack }: ChallengeProps) {
  return (
    <article className="max-w-4xl mx-auto">
      <Button onClick={onBack} variant="ghost" className="mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour à l’article
      </Button>

      <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
        {challenge.title}
      </h1>

      {challenge.id === 1 && (
        <HtmlDisabledButtonChallenge challenge={challenge} />
      )}

      {challenge.id === 2 && (
        <JavascriptAuthentificationChallenge challenge={challenge} />
      )}

      {challenge.id === 3 && (
        <JavascriptSourceChallenge challenge={challenge} />
      )}

      {challenge.id === 4 && (
        <JavascriptAuthentification2Challenge challenge={challenge} />
      )}

      <Button onClick={onBack} variant="default" className="mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Terminer
      </Button>
    </article>
  );
}
