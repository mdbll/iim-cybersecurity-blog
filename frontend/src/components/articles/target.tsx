"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function Target() {
  return (
    <>
        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            Décembre 2013. En pleine période des fêtes, le géant américain de la distribution Target devient la victime d’une cyberattaque d’ampleur exceptionnelle. Plus de 40 millions de données bancaires et 70 millions d’informations personnelles sont compromises. Derrière ce vol massif : l’exploitation des accès d’un prestataire tiers, révélant une faille humaine et organisationnelle dans la gestion des fournisseurs. Une attaque qui marquera un tournant mondial dans la cybersécurité du retail.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Quelle est la vulnérabilité exploitée ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            La faille principale n’était pas technique, mais organisationnelle. Les pirates ont visé un prestataire de services de Target, dont les accès réseau n’étaient ni suffisamment sécurisés, ni segmentés.
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            Une fois ce fournisseur compromis, les attaquants ont pu accéder au réseau interne de Target. L’absence de cloisonnement entre les environnements (réseau fournisseur ↔ réseau de production) a permis aux cybercriminels d’avancer latéralement et de cibler les systèmes de paiement.
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            La vulnérabilité principale : un défaut de gestion des accès tiers, désormais reconnu comme l’un des vecteurs d’intrusion les plus critiques dans les grandes organisations.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Comment l’attaque s’est-elle déroulée ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            L’attaque s’est déroulée en plusieurs étapes :
            <br />
            <ul className="list-decimal pl-6 mt-4 mb-6">
                <li>Compromission du fournisseur via du phishing ou un logiciel mal protégé.</li>
                <li>Utilisation des identifiants d’accès de ce fournisseur pour s’introduire dans le réseau interne de Target.</li>
                <li>Installation de logiciels malveillants sur les terminaux de paiement dans les magasins.</li>
                <li>Collecte silencieuse des données de carte bancaire à chaque transaction, pendant plusieurs semaines, en pleine période des fêtes.</li>
                <li>Exfiltration des données, revendue ensuite sur le dark web.</li>
            </ul>   
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            La compromission a duré plus de trois semaines avant d’être détectée, affectant des millions de clients à travers les États-Unis.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Qui a été touché ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            Les chiffres sont vertigineux :
            <br />
            <ul className="list-disc pl-6 mt-4 mb-6">
                <li>40 millions de clients ont vu leurs données bancaires compromises (n° de carte, date d’expiration, cryptogramme).</li>
                <li>70 millions d’autres ont vu leurs informations personnelles exposées : nom, adresse, numéro de téléphone, e-mail…</li>
                <li>Target elle-même, dont l’image, les finances et la gouvernance ont été profondément affectées.</li>
                <li>Les partenaires commerciaux et les banques ont dû remplacer des millions de cartes.</li>
            </ul>   
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            Cette attaque est aujourd’hui considérée comme l’un des cas d’école en matière de gestion de crise cyber.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Quels ont été les impacts ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            L’attaque a eu des conséquences massives et durables pour Target :
            <br />
            <ul className="list-disc pl-6 mt-4 mb-6">
                <li>Baisse de 46 % du chiffre d’affaires au trimestre suivant</li>
                <li>Perte de confiance massive des consommateurs</li>
                <li>Démission du PDG et du directeur informatique</li>
                <li>Indemnisations massives, actions en justice et amendes</li>
                <li>Coût total estimé à plus de 200 millions de dollars</li>
                <li>Mise en place de nouvelles normes de sécurité dans le secteur du retail</li>
            </ul>   
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Quel coût estimé selon la taille d’entreprise ?</h2>
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
                <TableCell>300 000 € – 500 000 € (parfois létal)</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="font-medium">Moyenne entreprise</TableCell>
                <TableCell>59 000 € – 230 000 € selon l’impact</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="font-medium">Grande entreprise</TableCell>
                <TableCell>Plusieurs millions voir centaines de millions € (ex. Target : 200 M $+)</TableCell>
            </TableRow>
            </TableBody>
        </Table>
        <p className="text-xl mb-6 leading-relaxed">
            Ce cas a montré que la gestion des accès tiers peut entraîner des pertes colossales… même sans faille technique apparente.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Comment s’en protéger ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            L’attaque contre Target a mis en lumière des mesures essentielles pour toute entreprise, quelle que soit sa taille :
            <br />
            <ul className="list-disc pl-6 mt-4 mb-6">
                <li>Contrôler et surveiller les accès des prestataires avec des politiques strictes</li>
                <li>Segmenter les réseaux pour limiter la propagation après une intrusion</li>
                <li>Former les collaborateurs aux risques de phishing et à la sécurité des mots de passe</li>
                <li>Mettre à jour régulièrement les systèmes et logiciels</li>
                <li>Appliquer une authentification forte (MFA) pour tous les accès sensibles</li>
                <li>Effectuer des audits de sécurité réguliers, y compris pour les fournisseurs</li>
                <li>Mettre en place un plan de gestion de crise dédié aux incidents cyber</li>
                <li>Souscrire une assurance cyber adaptée</li>
            </ul>   
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Pourquoi est-ce difficile à éviter ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            Plusieurs éléments expliquent la complexité à prévenir ce type d’attaque :
            <br />
            <ul className="list-decimal pl-6 mt-4 mb-6">
                <li>Les humains restent le maillon faible, en particulier chez les fournisseurs.</li>
                <li>Les systèmes sont de plus en plus interconnectés, créant de multiples points d’entrée.</li>
                <li>Les procédures de sécurité varient selon les prestataires, rendant leur contrôle difficile.</li>
                <li>Les cybercriminels évoluent rapidement, adaptant leurs méthodes à chaque environnement.</li>
                <li>La confiance mal placée dans les systèmes légitimes et les partenaires fragilise les défenses.</li>
            </ul>   
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            Résultat : même une entreprise équipée et réputée comme Target peut tomber.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Et dans le contexte d’une entreprise, que faire ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            Pour éviter un scénario similaire, voici les actions prioritaires à mettre en place :
            <br />
            <ul className="list-disc pl-6 mt-4 mb-6">
                <li>Évaluation approfondie des fournisseurs tiers, en particulier ceux ayant accès à notre SI.</li>
                <li>Segmentation stricte du réseau et limitation des droits d’accès.</li>
                <li>Sensibilisation continue de l’ensemble du personnel, y compris les partenaires externes.</li>
                <li>Déploiement d’un EDR pour détecter les comportements anormaux.</li>
                <li>Audits réguliers de sécurité, avec tests d’intrusion réels.</li>
                <li>Plan de crise cyber bien rodé : qui fait quoi, comment, quand.</li>
                <li>Contrat d’assurance cyber adapté au secteur et aux menaces actuelles.</li>
            </ul>   
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Une attaque fondée sur la confiance… mal placée</h2>
        <p className="text-xl mb-6 leading-relaxed">
            L’affaire Target a changé la manière dont les grandes entreprises perçoivent leurs relations avec les fournisseurs. Elle a montré que le danger ne vient pas toujours de l’extérieur, mais parfois de partenaires internes mal protégés.
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            Aujourd’hui encore, cet incident reste un cas de référence dans toutes les formations en cybersécurité. Il rappelle une vérité essentielle : dans un monde interconnecté, la sécurité d’une entreprise est aussi forte que la plus faible de ses connexions.
        </p>
    </>
  )
}