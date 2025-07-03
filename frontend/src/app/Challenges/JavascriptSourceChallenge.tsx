"use client"

import type { ChallengeCard } from "../../types/articleCard.types";

interface JavascriptSourceChallengeProps {
  challenge: ChallengeCard;
}

export function JavascriptSourceChallenge({challenge}: JavascriptSourceChallengeProps) {
    return(
        <>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Objectif : En allant sur la page, une alerte s'affiche et nous demande le mot de passe. Le but est de trouver le mot de passe pour accéder à la page.
            </p>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img
                src="/img/challenge/3/A.png"
                alt={challenge.title}
                className="w-full h-full object-cover"
                />
            </div>

            <p className="text-xl mb-6 leading-relaxed">
                Pour résoudre ce challenge, nous allons utiliser le{" "}
                <strong>DevTools</strong>. Pour cela, il faut d'abord fermer les alertes et ensuite{" "}
                <strong> appuyez</strong> simplement sur la touche{" "}
                <strong>'F12'</strong> ou faites un <strong>clic droit</strong> sur la
                page, puis <strong>cliquez</strong> sur <strong>'Inspecter'</strong>.
            </p>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img
                src="/img/challenge/3/B.png"
                alt={challenge.title}
                className="w-full h-full object-cover"
                />
            </div>

            <p className="text-xl mb-6 leading-relaxed">
                On remarque que dans l'onglet 'Elements' que la fonction 'login()' est appelée lors du chargement de la page. On va donc se rendre dans l'onglet 'Sources' du DevTools. Rien n'est affiché, il faudra recharger la page pour afficher le code.
            </p>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img
                src="/img/challenge/3/C.png"
                alt={challenge.title}
                className="w-full h-full object-cover"
                />
            </div>

            <p className="text-xl mb-6 leading-relaxed">
               On remarque le code JavaScript est en inline dans le document HTML et que dans la fonction 'login()', le mot de passe est comparé à la valeur '123456azerty'. On va donc utiliser cette valeur pour se connecter.
            </p>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img
                src="/img/challenge/3/D.png"
                alt={challenge.title}
                className="w-full h-full object-cover"
                />
            </div>

            <p className="text-xl mb-6 leading-relaxed">
               Une fois connecté, une alerte s'affiche avec un message nous indiquant que le mot de passe est valider et est utilisant pour valider le challenge.
            </p>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img
                src="/img/challenge/3/E.png"
                alt={challenge.title}
                className="w-full h-full object-cover"
                />
            </div>
        </>
    )
}