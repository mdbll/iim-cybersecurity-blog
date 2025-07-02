"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function Wannacry() {
    return (
        <>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Le 12 mai 2017, un vendredi comme un autre s’est transformé en cauchemar mondial. Un ransomware du nom de WannaCry s’est abattu sur les systèmes informatiques de la planète. En quelques heures, des centaines de milliers d’ordinateurs dans plus de 150 pays ont été paralysés. Derrière cette attaque fulgurante : une faille critique volée à la NSA, des systèmes non mis à jour… et un dangereux cocktail d’inconscience et de négligence numérique.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Une faille cachée dans Windows... découverte par la NSA</h2>
            <p className="text-xl mb-6 leading-relaxed">
                À l’origine de WannaCry se cache une vulnérabilité du protocole SMB (Server Message Block), utilisée pour le partage de fichiers et d'imprimantes dans les réseaux Windows. La faille, baptisée EternalBlue, avait été identifiée en secret par la NSA (National Security Agency), l’agence de renseignement américaine, qui avait choisi de la garder pour elle à des fins de cyber-espionnage.
                <br /><br />
                Mais en avril 2017, un groupe de hackers nommé Shadow Brokers publie sur Internet un ensemble d'outils de la NSA, dont EternalBlue. Microsoft, averti en amont, avait publié un correctif critique (MS17-010) en mars 2017. Malheureusement, trop peu d’organisations l’avaient appliqué à temps.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Un ransomware à propagation éclair</h2>
            <p className="text-xl mb-6 leading-relaxed">
                Le malware WannaCry a été conçu pour s’auto-propager sans interaction humaine. Une fois un ordinateur infecté, il scanne automatiquement le réseau local à la recherche d'autres machines vulnérables. Il peut également atteindre des cibles via Internet grâce à des ports ouverts.
                <br /><br />
                Le ransomware arrivait aussi par e-mail, dissimulé dans des pièces jointes infectées. Une fois activé, il chiffrait tous les fichiers de l'utilisateur et affichait un message de rançon : entre 300 et 600 dollars à payer en bitcoin pour récupérer les données. Un compte à rebours accompagnait l’écran : passé un certain délai, les fichiers étaient supposément perdus.
                <br /><br />
                Un chercheur en cybersécurité britannique, Marcus Hutchins, découvre par hasard un "kill switch" dans le code : un nom de domaine que, s’il était enregistré, arrêtait la propagation. Il le fait immédiatement, ralentissant fortement l’épidémie… mais trop tard pour les centaines de milliers de victimes déjà infectées.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Une attaque d’ampleur mondiale</h2>
            <p className="text-xl mb-6 leading-relaxed">
                L’attaque ne visait pas une industrie en particulier. Elle a frappé au hasard, là où les systèmes étaient vulnérables. Le bilan est lourd :
                <br />
                <ul className="list-disc pl-6 mt-4 mb-6">
                <li>300 000 ordinateurs infectés dans plus de 150 pays</li>
                <li>Des géants touchés : Renault, FedEx, Telefonica, Deutsche Bahn, Honda, etc.</li>
                <li>Le NHS (système de santé britannique) est durement touché : 50 hôpitaux paralysés, opérations reportées, services d’urgence redirigés.</li>
                <li>Même des entités gouvernementales comme le ministère de l’Intérieur russe sont impactées.</li>
                </ul>
            </p>
            <p className="text-xl mb-6 leading-relaxed">
                La vitesse de propagation et la nature critique des services affectés (transports, santé, énergie, télécoms) ont montré à quel point nos infrastructures numériques étaient fragiles.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Un coût gigantesque… et peu de rançons payées</h2>
            <p className="text-xl mb-6 leading-relaxed">
                Les dommages causés par WannaCry sont évalués à plusieurs centaines de millions de dollars, voire plus selon certaines estimations. Les pertes varient selon la taille des organisations :
            </p>
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
                    <TableCell>5 000 € à 50 000 €</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">Moyenne entreprise</TableCell>
                    <TableCell>50 000 € à 500 000 €</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">Grande entreprise</TableCell>
                    <TableCell>Plusieurs millions d’euros (jusqu’à 100 M€)</TableCell>
                </TableRow>
                </TableBody>
            </Table>
            <p className="text-xl mb-6 leading-relaxed">
                Les coûts incluent non seulement la perte de données, mais aussi :
                <br />
                <ul className="list-disc pl-6 mt-4 mb-6">
                <li>L’arrêt de production</li>
                <li>Les retards de services</li>
                <li>Les frais de récupération</li>
                <li>La communication de crise</li>
                <li>La perte d’image et de confiance</li>
                </ul>
            </p>
            <p className="text-xl mb-6 leading-relaxed">Fait intéressant : peu d’entreprises ont payé la rançon. D’une part, parce que les autorités déconseillent fortement de le faire ; d’autre part, car rien ne garantissait la récupération des fichiers, même après paiement.</p>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Pourquoi autant de victimes ?</h2>
            <p className="text-xl mb-6 leading-relaxed">
                WannaCry n’est pas un cas isolé. Mais ce qui a rendu cette attaque aussi destructrice, c’est une combinaison de facteurs bien connus des experts en cybersécurité :
            <br />
                <ul className="list-decimal pl-6 mt-4 mb-6">
                <li>Systèmes obsolètes : de nombreuses machines utilisaient encore Windows XP ou des versions non mises à jour de Windows 7.</li>
                <li>Correctifs non appliqués : malgré la publication du patch MS17-010, de nombreuses organisations avaient tardé à l’installer.</li>
                <li>Propagation automatique : contrairement à d’autres ransomwares, WannaCry se diffusait sans action humaine.</li>
                <li>Manque de sensibilisation : les utilisateurs ouvrent encore trop souvent des pièces jointes douteuses ou ignorent les alertes.</li>
                <li>Infrastructure mal segmentée : un seul poste infecté permettait à WannaCry de se répandre sur tout le réseau.</li>
                </ul>
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Comment se protéger efficacement ?</h2>
            <p className="text-xl mb-6 leading-relaxed">
                Face à ce type de menace, la prévention est la seule vraie arme. Voici les bonnes pratiques essentielles :
                <br />
                <ul className="list-disc pl-6 mt-4 mb-6">
                <li>Appliquer immédiatement les mises à jour de sécurité</li>
                <li>Utiliser un antivirus à jour et un pare-feu correctement configuré</li>
                <li>Faire des sauvegardes régulières et hors ligne</li>
                <li>Désactiver les services non utilisés (comme SMBv1)</li>
                <li>Limiter les droits d’accès aux fichiers partagés</li>
                <li>Former les employés à la détection de phishing et aux comportements sécuritaires</li>
                <li>Élaborer un plan de réponse en cas d’attaque (procédures, sauvegardes, contacts d’urgence)</li>
                </ul>
            </p>
            <p className="text-xl mb-6 leading-relaxed">
                Des outils comme WannaPatch, WannaSmile ou Wanakiwi ont été développés dans les jours suivant l’attaque pour aider à restaurer les données — avec un taux de réussite limité et uniquement dans certaines conditions.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Une leçon à ne pas oublier</h2>
            <p className="text-xl mb-6 leading-relaxed">
                WannaCry a servi de signal d’alarme mondial. Il a révélé à quel point notre dépendance aux systèmes numériques est fragile, et combien la négligence peut coûter cher. Six ans plus tard, les leçons sont claires, mais encore trop peu appliquées.
            </p>
            <p className="text-xl mb-6 leading-relaxed">
                Les ransomwares sont plus sophistiqués que jamais. Et tant que les correctifs ne seront pas appliqués, les sauvegardes ignorées, et les utilisateurs mal formés, d'autres WannaCry sont inévitables.
            </p>
        </>   
    )
}