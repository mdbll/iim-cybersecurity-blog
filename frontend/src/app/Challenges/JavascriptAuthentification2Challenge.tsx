"use client"

import type { ChallengeCard } from "../../types/articleCard.types";

interface JavascriptAuthentification2ChallengeProps {
  challenge: ChallengeCard;
}

export function JavascriptAuthentification2Challenge({challenge }: JavascriptAuthentification2ChallengeProps) {
    return (
        <>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Objectif : En allant sur la page, on retouve un bouton 'login', en cliquant dessus, une alerte nous demande le 'username' et le 'password'. Le but est de trouver le nom d'utilisateur et le mot de passe pour accéder à la page.
            </p>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img
                src="/img/challenge/4/A.png"
                alt={challenge.title}
                className="w-full h-full object-cover"
                />
            </div>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img
                src="/img/challenge/4/B.png"
                alt={challenge.title}
                className="w-full h-full object-cover"
                />
            </div>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img
                src="/img/challenge/4/C.png"
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
                src="/img/challenge/4/D.png"
                alt={challenge.title}
                className="w-full h-full object-cover"
                />
            </div>

            <p className="text-xl mb-6 leading-relaxed">
                On peut remarquer que au clique sur la balise 'input', que la fonction 'connexion()' est appelée. On va donc se diriger vers l'onglet 'Sources' du DevTools.
            </p>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img
                src="/img/challenge/4/E.png"
                alt={challenge.title}
                className="w-full h-full object-cover"
                />
            </div>

            <p className="text-xl mb-6 leading-relaxed">
                En analysant le code, on remarque une liste nomme 'TheLists' qui contient cette valeur ["GOD:HIDDEN"]. On peut en déduire que le nom d'utilisateur est 'GOD' et le mot de passe est 'HIDDEN'. On va donc utiliser ces valeurs pour se connecter.
            </p>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img
                src="/img/challenge/4/F.png"
                alt={challenge.title}
                className="w-full h-full object-cover"
                />
            </div>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img
                src="/img/challenge/4/G.png"
                alt={challenge.title}
                className="w-full h-full object-cover"
                />
            </div>

            <p className="text-xl mb-6 leading-relaxed">
                Une alerte s'affiche avec un message nous indiquant que le mot de passe est validé et est utilisé pour valider le challenge.
            </p>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
                <img
                src="/img/challenge/4/H.png"
                alt={challenge.title}
                className="w-full h-full object-cover"
                />
            </div>
        </>
    );
}