"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function NotPetya() {
  return (
    <>
        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            En juin 2017, une cyberattaque d’une brutalité inédite frappe l’Ukraine… puis le monde entier. Derrière l’apparence d’un ransomware se cache en réalité une opération de sabotage numérique d’ampleur mondiale, baptisée NotPetya. Si son nom évoque un clone du malware Petya, ses objectifs et ses conséquences étaient bien plus sombres : détruire plutôt qu’extorquer.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Quelle est la vulnérabilité exploitée ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            NotPetya s’est appuyé sur plusieurs vecteurs, notamment la célèbre faille EternalBlue (CVE-2017-0144), exploitant le protocole SMBv1 de Windows. Cette vulnérabilité, initialement découverte par la NSA, a été rendue publique en avril 2017 par le groupe de hackers Shadow Brokers.
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            Mais le malware allait plus loin. Il combinait :
            <br />
            <ul className="list-disc pl-6 mt-4 mb-6">
                <li>Exploitation de SMBv1 pour se propager sur le réseau</li>
                <li>Vol d’identifiants Windows via l’outil Mimikatz</li>
                <li>Utilisation détournée de MeDoc, un logiciel comptable ukrainien très répandu, pour se faire passer pour une mise à jour légitime</li>
            </ul>   
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            Ce mélange explosif lui a permis de contourner les systèmes de sécurité traditionnels avec une efficacité redoutable.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Comment l’attaque s’est-elle déroulée ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            Tout commence le 27 juin 2017, à travers une mise à jour corrompue de MeDoc, logiciel utilisé massivement par les entreprises ukrainiennes pour leurs déclarations fiscales.
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            Une fois installé sur une machine, NotPetya utilisait EternalBlue pour se propager de manière latérale à tous les postes vulnérables, puis dérobait les identifiants d’administrateurs pour étendre son infection.
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            Malgré son apparence de ransomware, aucun mécanisme réel de déchiffrement n'était prévu. Même après paiement, les victimes ne pouvaient pas récupérer leurs données. Il s’agissait donc d’un wiper déguisé, visant à détruire les données et perturber les infrastructures.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Qui a été touché ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            L’attaque ciblait initialement l’Ukraine, mais s’est rapidement propagée hors de ses frontières, contaminant de nombreuses multinationales. Parmi les victimes notables :
            <br />
            <ul className="list-disc pl-6 mt-4 mb-6">
                <li>Maersk (logistique maritime) : système de réservation mondial à l’arrêt</li>
                <li>Merck (industrie pharmaceutique)</li>
                <li>Rosneft (géant pétrolier russe)</li>
                <li>Mondelez (agroalimentaire)</li>
                <li>Des banques, hôpitaux et ministères ukrainiens</li>
            </ul>   
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            Le caractère viral de NotPetya, combiné à sa diffusion via un logiciel de confiance, a entraîné une propagation quasi incontrôlable.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Quels ont été les impacts ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            Les dégâts ont été massifs et immédiats :
            <br />
            <ul className="list-disc pl-6 mt-4 mb-6">
                <li>Perte de données critiques et irrécupérables</li>
                <li>Interruption totale de la production dans de nombreuses entreprises</li>
                <li>Paralysie de chaînes logistiques (Maersk a dû reconfigurer 45 000 postes)</li>
                <li>Dommages économiques mondiaux de plusieurs centaines de millions de dollars</li>
            </ul>   
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            Certaines entreprises ont mis des semaines à se remettre. L’effet domino s’est étendu à des secteurs entiers, affectant transports, santé, industrie, énergie et logistique globale.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Un coût gigantesque… et peu de rançons payées</h2>
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
                <TableCell>10 000 € – 100 000 €</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="font-medium">Moyenne entreprise</TableCell>
                <TableCell>100 000 € – 1 million €</TableCell>
            </TableRow>
            <TableRow>
                <TableCell className="font-medium">Grande entreprise</TableCell>
                <TableCell>Jusqu’à 200 à 300 millions € — ex. Maersk : 300 M $</TableCell>
            </TableRow>
            </TableBody>
        </Table>
        <p className="text-xl mb-6 leading-relaxed">
            Pour certaines entreprises, la perte de données et la désorganisation ont eu des impacts durables sur leur réputation et leur chiffre d'affaires.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Comment s’en protéger ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            NotPetya a mis en lumière l'importance des pratiques de base en cybersécurité. Voici les mesures essentielles pour se prémunir contre ce type d’attaque :
            <br />
            <ul className="list-disc pl-6 mt-4 mb-6">
                <li>Désactiver SMBv1 sur tous les postes et serveurs</li>
                <li>Appliquer tous les correctifs de sécurité Windows, notamment contre EternalBlue</li>
                <li>Segmenter les réseaux internes pour éviter la propagation latérale</li>
                <li>Vérifier la sécurité des logiciels tiers (comme MeDoc)</li>
                <li>Limiter les droits administrateurs</li>
                <li>Mettre en place des sauvegardes régulières, testées, et déconnectées du réseau</li>
            </ul>   
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            Des outils de surveillance comportementale (EDR) peuvent détecter l’exploitation de failles connues ou de privilèges anormaux.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Pourquoi est-ce difficile à éviter ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            L’attaque NotPetya a été extrêmement difficile à contenir, pour plusieurs raisons :
            <br />
            <ul className="list-decimal pl-6 mt-4 mb-6">
                <li>Propagation via un logiciel de confiance (MeDoc), trompant les antivirus et les pare-feu</li>
                <li>Utilisation de failles connues mais non corrigées, dans un contexte de négligence de patchs</li>
                <li>Vol d’identifiants internes, permettant une escalade rapide des privilèges</li>
                <li>Absence de canal de récupération réel, ce qui a multiplié les pertes</li>
            </ul>   
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            La vitesse de propagation et l’absence de vecteur unique identifiable ont pris de court de nombreuses entreprises, même bien équipées.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Et dans le contexte d’une entreprise, que faire ?</h2>
        <p className="text-xl mb-6 leading-relaxed">
            Une approche globale de la cybersécurité est essentielle. Voici ce que notre entreprise mettrait en œuvre :
            <br />
            <ul className="list-disc pl-6 mt-4 mb-6">
                <li>Audit complet des dépendances logicielles tierces</li>
                <li>Politique de sauvegarde renforcée, avec tests de restauration</li>
                <li>Supervision active des correctifs et mises à jour automatiques</li>
                <li>Séparation des réseaux critiques (production, finances, RH…)</li>
                <li>Formation du personnel aux bonnes pratiques numériques</li>
                <li>Surveillance continue avec EDR, alertes comportementales et audits périodiques</li>
            </ul>   
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            Un plan de réponse aux incidents clair, testé et mis à jour régulièrement, est également indispensable pour limiter les dégâts en cas d’attaque.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">NotPetya : le visage de la cyberguerre moderne</h2>
        <p className="text-xl mb-6 leading-relaxed">
            Plus qu’un simple malware, NotPetya a marqué l’entrée dans une nouvelle ère de cyberguerre hybride, où la frontière entre attaque criminelle et sabotage géopolitique s’efface.
        </p>
        <p className="text-xl mb-6 leading-relaxed">
            Derrière son apparente simplicité, cette attaque a démontré à quel point la confiance dans les outils numériques peut être retournée contre ceux qui la leur accordent. Depuis, les entreprises comme les États renforcent leur posture cyber — parfois dans la douleur.
        </p>
    </>
  )
}