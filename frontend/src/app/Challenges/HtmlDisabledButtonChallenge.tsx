"use client";

import type { ChallengeCard } from "../../types/articleCard.types";

interface HtmlDisabledButtonChallengeProps {
  challenge: ChallengeCard;
}

export function HtmlDisabledButtonChallenge({
  challenge,
}: HtmlDisabledButtonChallengeProps) {
  return (
    <>
      <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
        Objectif : Le formulaire est désactivé et ne peut pas être utilisé. Il
        faut trouver le moyen de l’utiliser.
      </p>

      <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
        <img
          src="/img/challenge/1/A.png"
          alt={challenge.title}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-xl mb-6 leading-relaxed">
        Pour résoudre ce challenge, nous allons utiliser le{" "}
        <strong>DevTools</strong>. Pour cela,
        <strong> appuyez</strong> simplement sur la touche{" "}
        <strong>'F12'</strong> ou faites un <strong>clic droit</strong> sur la
        page, puis <strong>cliquez</strong> sur <strong>'Inspecter'</strong>.
      </p>

      <p className="text-xl mb-6 leading-relaxed">
        Une fois le <strong>DevTools</strong> ouvert, on va inspecter le
        document <strong>HTML</strong>. On remarque que les balises{" "}
        <strong>'input'</strong> ont l'attribut
        <strong>'disabled'</strong>, ce qui rend l'élément{" "}
        <strong>non mutable</strong>, <strong>non focusable</strong>, ou même
        <strong> non soumis</strong> avec le formulaire.
      </p>

      <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
        <img
          src="/img/challenge/1/B.png"
          alt={challenge.title}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-xl mb-6 leading-relaxed">
        La solution ici est de simplement <strong>retirer</strong> l'attribut{" "}
        <strong>'disabled'</strong> des balises <strong>'input'</strong>. Une
        fois cet attribut strong, il est possible <strong>d'entrer</strong> une{" "}
        <strong>valeur</strong> quelconque et de <strong>cliquer</strong> sur{" "}
        <strong>'Member access'</strong>.
      </p>

      <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
        <img
          src="/img/challenge/1/C.png"
          alt={challenge.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
        <img
          src="/img/challenge/1/D.png"
          alt={challenge.title}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-xl mb-6 leading-relaxed">
        Une fois validé, il est indiqué que le <strong>mot de passe</strong> de{" "}
        <strong>validation</strong> (<strong>flag</strong>) est :{" "}
        <strong>HTMLCantStopYou</strong>
      </p>

      <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
        <img
          src="/img/challenge/1/E.png"
          alt={challenge.title}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
