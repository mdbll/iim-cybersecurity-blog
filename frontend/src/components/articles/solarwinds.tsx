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

export function Solarwinds() {
  return (
    <>
        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            En décembre 2020, la société de cybersécurité FireEye dévoile une attaque d’une ampleur sans précédent. Une mise à jour légitime du logiciel Orion, édité par SolarWinds, contenait un code malveillant inséré en amont par des pirates. Cette compromission, qui a touché plus de 18 000 organisations à travers le monde, a marqué un tournant dans la manière dont les attaques informatiques ciblent désormais la chaîne d’approvisionnement logicielle. Analyse d’un piratage d’État d’une redoutable discrétion.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Quelle est la vulnérabilité exploitée ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            L’attaque n’a pas exploité une faille logicielle classique, mais un point structurellement vulnérable : le processus de développement logiciel. Les pirates ont réussi à infiltrer les systèmes internes de SolarWinds, éditeur du très utilisé logiciel Orion (outil de supervision réseau). En février 2020, ils y injectent un malware baptisé Sunburst, dans le code source du logiciel.
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            La version infectée est signée numériquement comme n’importe quelle mise à jour officielle. Entre mars et juin 2020, plus de 18 000 clients installent la version compromise, offrant sans le savoir une porte dérobée aux attaquants. Cette attaque d’ingénierie logicielle, autrement appelée supply chain attack, a permis une infiltration silencieuse des réseaux les plus sensibles au monde.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Comment l’attaque s’est-elle déroulée ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            L’opération a été longue, méthodique et sophistiquée :
            <br />
            <ul className="list-disc pl-6 mt-4 mb-6">
            <li>Septembre 2019 : Les hackers s’infiltrent dans le réseau interne de SolarWinds.</li>
            <li>Octobre 2019 : Premiers tests d’injection de code malveillant dans Orion.</li>
            <li>Février 2020 : Le malware Sunburst est intégré au produit final.</li>
            <li>Mars – juin 2020 : Déploiement mondial de la version infectée.</li>
            <li>Décembre 2020 : FireEye découvre l’attaque après une enquête interne.</li>
            </ul>
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            Une fois installé, Sunburst restait latent pendant plusieurs jours, puis contactait des serveurs de commande (C2). Il permettait aux attaquants de voler des données, d’installer d’autres malwares, de créer des comptes ou encore de modifier les droits d’accès sur les systèmes compromis.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Qui a été touché ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            Les victimes se comptent en milliers, dans les secteurs public comme privé. Parmi les plus notables :
            <br />
            <ul className="list-disc pl-6 mt-4 mb-6">
            <li>Agences gouvernementales américaines : Département de la Sécurité intérieure, du Commerce, du Trésor, etc.</li>
            <li>Entreprises technologiques : Microsoft, Cisco, Intel, FireEye, Deloitte</li>
            <li>Organisations utilisant Orion, dans la santé, l’énergie, l’aérospatial, la finance, etc.</li>
            </ul>
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            L’effet domino est inquiétant : les réseaux des partenaires et clients des victimes directes pouvaient eux aussi être infiltrés, multipliant les vecteurs d’accès.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Quels ont été les impacts ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            L’objectif de l’attaque n’était pas financier mais stratégique : espionner, surveiller et extraire des données confidentielles. Parmi les conséquences :
            <br />
            <ul className="list-disc pl-6 mt-4 mb-6">
            <li>Accès prolongé à des infrastructures critiques</li>
            <li>Compromission d’emails confidentiels et de documents sensibles</li>
            <li>Coûts financiers massifs : investigations, audits, remédiation, interruption de services</li>
            <li>Perte de confiance dans les éditeurs de logiciels</li>
            <li>Renforcement des règles de cybersécurité pour les entreprises et États</li>
            <li>Hausse des primes d’assurance cyber, avec exclusion des attaques “étatiques”</li>
            </ul>
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Quel coût selon la taille des entreprises ?</h2>
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
                <TableCell>300 000 € à 1 M € — avec 60 % risquant la fermeture</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="font-medium">Moyenne entreprise</TableCell>
                <TableCell>14 000 € en moyenne, mais jusqu’à 230 000 €</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="font-medium">Grande entreprise</TableCell>
                <TableCell>Jusqu’à 11 % du chiffre d’affaires, ou plusieurs millions €</TableCell>
            </TableRow>
            </TableBody>
        </Table>
        <p className="text-xl mb-6 leading-relaxed">
            Le coût total de l’affaire SolarWinds, pour l’ensemble des victimes, dépasse le milliard de dollars selon certaines estimations.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Comment s’en protéger ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            Les attaques de supply chain sont par nature très difficiles à anticiper, mais certaines mesures réduisent fortement les risques :
            <br />
            <ul className="list-disc pl-6 mt-4 mb-6">
            <li>Limiter les droits des logiciels tiers, même s’ils sont de confiance</li>
            <li>Auditer régulièrement les accès et les journaux systèmes</li>
            <li>Mettre en place des solutions SIEM et EDR pour détecter les comportements anormaux</li>
            <li>Activer l’authentification multi-facteurs (MFA) partout où c’est possible</li>
            <li>Évaluer la sécurité des fournisseurs logiciels (SBOM, audits de code, certifications)</li>
            <li>Sensibiliser les équipes IT et métiers aux risques de la chaîne d’approvisionnement</li>
            <li>Segmenter les réseaux internes pour limiter les déplacements latéraux</li>
            </ul>
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Pourquoi est-ce si difficile à éviter ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            Trois raisons principales rendent ce type d’attaque particulièrement redoutable :
            <br />
            <ul className="list-decimal pl-6 mt-4 mb-6">
            <li>La confiance implicite accordée aux éditeurs et aux mises à jour signées.</li>
            <li>La dissimulation avancée du malware, qui se fond dans les opérations normales du logiciel.</li>
            <li>Les privilèges élevés accordés aux logiciels comme Orion, leur offrant un accès total au réseau.</li>
            </ul>
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            Les pirates sont restés plus d’un an dans certains réseaux avant d’être détectés.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Et dans le contexte d’une entreprise, que faire ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            Voici les actions clés qu’une entreprise doit engager :
            <br />
            <ul className="list-decimal pl-6 mt-4 mb-6">
            <li>Évaluer les dépendances logicielles et les fournisseurs à risques</li>
            <li>Mettre en œuvre une politique stricte de gestion des correctifs et des privilèges</li>
            <li>Former les équipes aux menaces de la chaîne d’approvisionnement</li>
            <li>Exiger une transparence maximale des éditeurs : SBOM, audits de sécurité, certifications</li>
            <li>Préparer un plan de réponse aux incidents réaliste et testé</li>
            <li>Souscrire une cyberassurance adaptée à son secteur et à sa taille</li>
            </ul>
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Une attaque silencieuse, mais un signal d’alarme mondial</h2>
        <p className="text-xl mb-6 leading-relaxed">
            SolarWinds n’est pas une simple cyberattaque. C’est un précédent historique : une attaque chirurgicale, ciblant le cœur même de la chaîne de confiance logicielle mondiale. Elle a mis en lumière la fragilité du modèle de dépendance logicielle, et la nécessité d’un changement profond dans les pratiques de cybersécurité, tant dans le privé que dans le public.
        </p>
    </>
  )
}