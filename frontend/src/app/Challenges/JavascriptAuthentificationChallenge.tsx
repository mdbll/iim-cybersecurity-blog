"use client"

import type { ChallengeCard } from "../../types/articleCard.types";


interface JavascriptAuthentificationChallengeProps {
  challenge: ChallengeCard;
}

export function JavascriptAuthentificationChallenge({challenge,}: JavascriptAuthentificationChallengeProps) {
  return (
    <>
        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
        Objectif : Il y a un formulaire d'authentification, mais il est
        impossible de se connecter. Il faut trouver le moyen de se connecter.
      </p>

      <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
        <img
          src="/img/challenge/2/A.png"
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
        document <strong>HTML</strong>. On remarque que l'une des balises{" "}
        <strong>'input'</strong> appelle la fonction{" "}
        <strong>'login()'</strong> lors de l'envoi du formulaire.
      </p>

      <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
        <img
          src="/img/challenge/2/C.png"
          alt={challenge.title}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-xl mb-6 leading-relaxed">
       On va donc se rendre dans l'onglet Sources du
        DevTools. On remarque qu'on peut y trouver un fichier 'login.js' qui contient la fonction
        'login()'. Dans cette fonction on voit que le 'pseudo' est comparé à la valeur '4dm1n' et le 'password' à la valeur 'sh.org'.
      </p>

      <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
        <img
          src="/img/challenge/2/D.png"
          alt={challenge.title}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-xl mb-6 leading-relaxed">
       On va donc essayer de se connecter avec ces identifiants. Et une fois connecter une alerte est affichée avec un message nous indiquant que le mot de passe est validé et qu'il est possible de valider le challenge avec le mot de passe 'sh.org'.
      </p>

      <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
        <img
          src="/img/challenge/2/E.png"
          alt={challenge.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
        <img
          src="/img/challenge/2/F.png"
          alt={challenge.title}
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}