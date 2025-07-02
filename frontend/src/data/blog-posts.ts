import type { BlogPost } from "../types/blog"

export const blogPosts: BlogPost[] = [
  {
    "id": 1,
    "title": "Cyberattaque Viamedis & Almerys – vol de données massives début 2024",
    "excerpt": "En janvier‑février 2024, les prestataires de tiers‑payant santé Viamedis et Almerys ont subi une cyberattaque majeure par phishing. Plus de 33 millions de données d'assurés exposées.",
    "content": "<div>\n  <p><strong>1. Contexte & Cibles</strong><br />\n    <strong>Qui ?</strong> Viamedis et Almerys, deux opérateurs français de tiers-payant santé, ont été visés. Ensemble, ils gèrent les données de plus de <strong>33 millions d’assurés</strong> – soit près de la moitié de la population française.<br />\n    <strong>Quand ?</strong> Début des attaques : <strong>29 janvier 2024</strong> pour Viamedis, <strong>1er février 2024</strong> pour Almerys.\n  </p>\n  <br />\n  <p><strong>2. Vecteur & Mécanisme d’attaque</strong><br />\n    Les pirates ont utilisé une technique de <strong>phishing ciblé</strong> : en usurpant les identifiants de professionnels de santé, ils ont pu accéder aux portails internes en toute légitimité et <strong>exfiltrer des données sensibles</strong>.\n  </p>\n  <br />\n  <p><strong>3. Données compromises</strong><br />\n    Données volées : <strong>nom, date de naissance, numéro de Sécurité sociale, informations sur les garanties santé</strong>.<br />\n    Aucune donnée médicale, bancaire ou coordonnée de contact n’a été compromise.\n  </p>\n  <br />\n  <p><strong>4. Impacts</strong><br />\n    ➤ <strong>Opérationnels :</strong> Fermeture temporaire des portails pour les professionnels (opticiens, audioprothésistes, etc.)<br />\n    ➤ <strong>Économiques & réputationnels :</strong> Enquête CNIL & ANSSI, dépôt de plainte, perte de confiance, risque de phishing ou d’usurpation d’identité.\n  </p>\n  <br />\n  <p><strong>5. Réactions immédiates</strong><br />\n    ➤ Déconnexion immédiate des systèmes<br />\n    ➤ Déclaration à la <strong>CNIL</strong>, <strong>ANSSI</strong> et dépôt de plainte<br />\n    ➤ Communication aux assurés via newsletters, sites web, mutuelles<br />\n    ➤ Renforcement de la cybersécurité par Hélium (audit, contrôles, surveillance…)\n  </p>\n  <br />\n  <p><strong>6. Mesures de cybersécurité recommandées</strong></p>\n  <ul>\n    <li><strong>Filtrage email/web :</strong> Antiphishing, DNS, sandboxing</li>\n    <li><strong>Authentification forte :</strong> MFA obligatoire (FIDO2/WebAuthn)</li>\n    <li><strong>Sensibilisation :</strong> Formations + campagnes de phishing simulé</li>\n    <li><strong>Contrôle d’accès :</strong> Principe du moindre privilège</li>\n    <li><strong>Chiffrement :</strong> Données en transit et au repos</li>\n    <li><strong>Audit & patching :</strong> Scans réguliers + correctifs rapides</li>\n    <li><strong>Surveillance (SIEM) :</strong> Alertes en temps réel</li>\n    <li><strong>Plan de crise :</strong> Playbook RGPD + communication</li>\n    <li><strong>Partage d’information :</strong> CERT-FR, ANSSI, réseaux d’échange</li>\n  </ul>\n  <br />\n  <p><strong>7. Conclusion</strong><br />\n    Une approche de <strong>cybersécurité en profondeur</strong> — combinant MFA, filtrage, sensibilisation, surveillance et chiffrement — aurait grandement limité l’impact de cette attaque. Un rappel fort pour toutes les entreprises manipulant des données sensibles.\n  </p>\n</div>",
    "author": "Billy IEA",
    "date": "Juin 30, 2025",
    "readTime": "3 min",
    "tags": ["Cybersécurité", "Santé", "Phishing", "Tiers‑payant"],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZu0EWUD1BO_Zzlbc83I0Qa0mAAseD2XRklg&s"
  },
  {
    "id": 2,
    "title": "Carte mentale : Enjeux de la cybersécurité dans le secteur du transport",
    "excerpt": "",
    "content": "",
    "author": "Billy IEA",
    "date": "Juin 30, 2025",
    "readTime": "3 min",
      "tags": ["Cybersécurité", "Transport"],
    "image": "/img/mindmap_transport.png"
  },
  {
    "id": 3,
    "title": "Root-me : HTML - Bouton désactivés",
    "excerpt": "Dans cette article, nous allons voir comment réaliser le challenge HTML - Bouton désactivés sur Root-ME.",
    "content": "<div className='mb-5'> <h2 className='text-2xl md:text-3xl font-bold mb-4 leading-tight'>Html - boutons désactivés</h2> <p>Dans ce challenge le formulaire est désactivé, l'objectif est de trouver un moyen d'activer le formulaire et l'utiliser.</p> <div className='w-full h-full flex justify-center'> <img src='/img/rootme/C1/C1A.png' alt='Html - boutons désactivés' className='mt-4 mb-4' /> </div> <p>Pour résoudre ce problème nous allons utiliser l'inspecteur d'élement. Pour y accéder faites <strong>clique-droit</strong> sur la page et cliquer sur <strong>\"Inspecter\"</strong>.</p> <div className='w-full h-full flex justify-center'> <img src='/img/rootme/element_inspect.png' alt='Inspecter élément' className='mt-4 mb-4' /> </div> <p>Ensuite, dans l'onglet <strong>\"Elements\"</strong> dérouler chaque élément du HTML. Vous dreviez voir le contenu du formulaire. On remarquera que la propriété <strong>\"disable\"</strong> a été mis sur <strong>l'input \"text\" et \"submit\"</strong>. Il suffira de <strong>supprimer</strong> cette propriété de chaque input.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1B.png' alt='DevTools Elements' className='mt-4 mb-4' /> <ArrowDown className='w-10 h-10 mr-2' /> <img src='/img/rootme/C1/C1C.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> <p>Il est maintenant possible de <strong>cliquer</strong> sur le bouton <strong>\"Member access\"</strong> et de taper une <strong>valeur</strong>.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1D.png' alt='DevTools Elements' className='mt-4 mb-4' /> <ArrowDown className='w-10 h-10 mr-2' /> <img src='/img/rootme/C1/C1E.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> <p>Il est maintenant indiqué que le <strong>flag</strong> est <strong>HTMLCantStopYou</strong>. Et nous pouvons le vérifier en retournant sur le site.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1F.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> </div>",
    "author": "Billy IEA",
    "date": "Juin 30, 2025",
    "readTime": "3 min",
    "tags": ["Cybersécurité", "Root-ME", "Challenge"],
    "image": "/img/rootme/banner.png"
  },
  {
    "id": 4,
    "title": "Root-me : Javascript - Authentification",
    "excerpt": "Dans cette article, nous allons voir comment réaliser le challenge Javascript - Authentification sur Root-ME.",
    content: `
      <div class="mb-5">
        <h2 class="text-2xl md:text-3xl font-bold mb-4 leading-tight">Html - boutons désactivés</h2>
        <p>Dans ce challenge l'objectif est de trouver un identifiant de connexion pour se connecter.</p>
        <div class="w-full h-full flex justify-center">
          <img src="/img/rootme/C2/C2A.png" alt="Html - boutons désactivés" class="mt-4 mb-4" />
        </div>
        <p>Pour résoudre ce problème nous allons utiliser l'inspecteur d'élement. Pour y accéder faites <strong>clique-droit</strong> sur la page et cliquer sur <strong>&quot;Inspecter&quot;</strong>.</p>
        <div class="w-full h-full flex justify-center">
          <img src="/img/rootme/element_inspect.png" alt="Inspecter élément" class="mt-4 mb-4" />
        </div>
        <p>Ensuite, dans l'onglet <strong>&quot;Source&quot;</strong>, dérouler <strong>&quot;challenge01.root-me.org&quot;</strong>, <strong>&quot;web-client/ch9&quot;</strong> et cliquer sur le fichier <strong>&quot;loging.js&quot;</strong>. Vous dreviez voir le code de la fonction <strong>Login</strong>. On remarquera que les valeurs sont comparé à <strong>4dm1n</strong> pour le pseudo et <strong>sh.org</strong> pour le mot de passe.</p>
        <div class="w-full h-full flex flex-col justify-center items-center">
          <img src="/img/rootme/C2/C2B.png" alt="DevTools Elements" class="mt-4 mb-4" />
        </div>
        <p>Il est maintenant possible de se connecter en utilisant les identifiants trouvé.</p>
        <div class="w-full h-full flex flex-col justify-center items-center">
          <img src="/img/rootme/C2/C2C.png" alt="DevTools Elements" class="mt-4 mb-4" />
          <ArrowDown class="w-10 h-10 mr-2" />
          <img src="/img/rootme/C2/C2D.png" alt="DevTools Elements" class="mt-4 mb-4" />
        </div>
        <p>Il est maintenant indiqué que le <strong>flag</strong> est <strong>sh.org</strong>.</p>
      </div>
    `,
    "author": "Billy IEA",
    "date": "Juin 30, 2025",
    "readTime": "3 min",
    "tags": ["Cybersécurité", "Root-ME", "Challenge"],
    "image": "/img/rootme/banner.png"
  },
  // {
  //   "id": 5,
  //   "title": "Root-me : HTML - Bouton désactivés",
  //   "excerpt": "Dans cette article, nous allons voir comment réaliser le challenge HTML - Bouton désactivés sur Root-ME.",
  //   "content": "<div className='mb-5'> <h2 className='text-2xl md:text-3xl font-bold mb-4 leading-tight'>Html - boutons désactivés</h2> <p>Dans ce challenge le formulaire est désactivé, l'objectif est de trouver un moyen d'activer le formulaire et l'utiliser.</p> <div className='w-full h-full flex justify-center'> <img src='/img/rootme/C1/C1A.png' alt='Html - boutons désactivés' className='mt-4 mb-4' /> </div> <p>Pour résoudre ce problème nous allons utiliser l'inspecteur d'élement. Pour y accéder faites <strong>clique-droit</strong> sur la page et cliquer sur <strong>\"Inspecter\"</strong>.</p> <div className='w-full h-full flex justify-center'> <img src='/img/rootme/element_inspect.png' alt='Inspecter élément' className='mt-4 mb-4' /> </div> <p>Ensuite, dans l'onglet <strong>\"Elements\"</strong> dérouler chaque élément du HTML. Vous dreviez voir le contenu du formulaire. On remarquera que la propriété <strong>\"disable\"</strong> a été mis sur <strong>l'input \"text\" et \"submit\"</strong>. Il suffira de <strong>supprimer</strong> cette propriété de chaque input.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1B.png' alt='DevTools Elements' className='mt-4 mb-4' /> <ArrowDown className='w-10 h-10 mr-2' /> <img src='/img/rootme/C1/C1C.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> <p>Il est maintenant possible de <strong>cliquer</strong> sur le bouton <strong>\"Member access\"</strong> et de taper une <strong>valeur</strong>.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1D.png' alt='DevTools Elements' className='mt-4 mb-4' /> <ArrowDown className='w-10 h-10 mr-2' /> <img src='/img/rootme/C1/C1E.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> <p>Il est maintenant indiqué que le <strong>flag</strong> est <strong>HTMLCantStopYou</strong>. Et nous pouvons le vérifier en retournant sur le site.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1F.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> </div>",
  //   "author": "Billy IEA",
  //   "date": "Juin 30, 2025",
  //   "readTime": "3 min",
  //   "tags": ["Cybersécurité", "Root-ME", "Challenge"],
  //   "image": "/img/rootme_challenge_webclient.png"
  // },
  // {
  //   "id": 6,
  //   "title": "Root-me : HTML - Bouton désactivés",
  //   "excerpt": "Dans cette article, nous allons voir comment réaliser le challenge HTML - Bouton désactivés sur Root-ME.",
  //   "content": "<div className='mb-5'> <h2 className='text-2xl md:text-3xl font-bold mb-4 leading-tight'>Html - boutons désactivés</h2> <p>Dans ce challenge le formulaire est désactivé, l'objectif est de trouver un moyen d'activer le formulaire et l'utiliser.</p> <div className='w-full h-full flex justify-center'> <img src='/img/rootme/C1/C1A.png' alt='Html - boutons désactivés' className='mt-4 mb-4' /> </div> <p>Pour résoudre ce problème nous allons utiliser l'inspecteur d'élement. Pour y accéder faites <strong>clique-droit</strong> sur la page et cliquer sur <strong>\"Inspecter\"</strong>.</p> <div className='w-full h-full flex justify-center'> <img src='/img/rootme/element_inspect.png' alt='Inspecter élément' className='mt-4 mb-4' /> </div> <p>Ensuite, dans l'onglet <strong>\"Elements\"</strong> dérouler chaque élément du HTML. Vous dreviez voir le contenu du formulaire. On remarquera que la propriété <strong>\"disable\"</strong> a été mis sur <strong>l'input \"text\" et \"submit\"</strong>. Il suffira de <strong>supprimer</strong> cette propriété de chaque input.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1B.png' alt='DevTools Elements' className='mt-4 mb-4' /> <ArrowDown className='w-10 h-10 mr-2' /> <img src='/img/rootme/C1/C1C.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> <p>Il est maintenant possible de <strong>cliquer</strong> sur le bouton <strong>\"Member access\"</strong> et de taper une <strong>valeur</strong>.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1D.png' alt='DevTools Elements' className='mt-4 mb-4' /> <ArrowDown className='w-10 h-10 mr-2' /> <img src='/img/rootme/C1/C1E.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> <p>Il est maintenant indiqué que le <strong>flag</strong> est <strong>HTMLCantStopYou</strong>. Et nous pouvons le vérifier en retournant sur le site.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1F.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> </div>",
  //   "author": "Billy IEA",
  //   "date": "Juin 30, 2025",
  //   "readTime": "3 min",
  //   "tags": ["Cybersécurité", "Root-ME", "Challenge"],
  //   "image": "/img/rootme_challenge_webclient.png"
  // },
  // {
  //   "id": 7,
  //   "title": "Root-me : HTML - Bouton désactivés",
  //   "excerpt": "Dans cette article, nous allons voir comment réaliser le challenge HTML - Bouton désactivés sur Root-ME.",
  //   "content": "<div className='mb-5'> <h2 className='text-2xl md:text-3xl font-bold mb-4 leading-tight'>Html - boutons désactivés</h2> <p>Dans ce challenge le formulaire est désactivé, l'objectif est de trouver un moyen d'activer le formulaire et l'utiliser.</p> <div className='w-full h-full flex justify-center'> <img src='/img/rootme/C1/C1A.png' alt='Html - boutons désactivés' className='mt-4 mb-4' /> </div> <p>Pour résoudre ce problème nous allons utiliser l'inspecteur d'élement. Pour y accéder faites <strong>clique-droit</strong> sur la page et cliquer sur <strong>\"Inspecter\"</strong>.</p> <div className='w-full h-full flex justify-center'> <img src='/img/rootme/element_inspect.png' alt='Inspecter élément' className='mt-4 mb-4' /> </div> <p>Ensuite, dans l'onglet <strong>\"Elements\"</strong> dérouler chaque élément du HTML. Vous dreviez voir le contenu du formulaire. On remarquera que la propriété <strong>\"disable\"</strong> a été mis sur <strong>l'input \"text\" et \"submit\"</strong>. Il suffira de <strong>supprimer</strong> cette propriété de chaque input.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1B.png' alt='DevTools Elements' className='mt-4 mb-4' /> <ArrowDown className='w-10 h-10 mr-2' /> <img src='/img/rootme/C1/C1C.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> <p>Il est maintenant possible de <strong>cliquer</strong> sur le bouton <strong>\"Member access\"</strong> et de taper une <strong>valeur</strong>.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1D.png' alt='DevTools Elements' className='mt-4 mb-4' /> <ArrowDown className='w-10 h-10 mr-2' /> <img src='/img/rootme/C1/C1E.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> <p>Il est maintenant indiqué que le <strong>flag</strong> est <strong>HTMLCantStopYou</strong>. Et nous pouvons le vérifier en retournant sur le site.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1F.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> </div>",
  //   "author": "Billy IEA",
  //   "date": "Juin 30, 2025",
  //   "readTime": "3 min",
  //   "tags": ["Cybersécurité", "Root-ME", "Challenge"],
  //   "image": "/img/rootme_challenge_webclient.png"
  // },
  // {
  //   "id": 8,
  //   "title": "Root-me : HTML - Bouton désactivés",
  //   "excerpt": "Dans cette article, nous allons voir comment réaliser le challenge HTML - Bouton désactivés sur Root-ME.",
  //   "content": "<div className='mb-5'> <h2 className='text-2xl md:text-3xl font-bold mb-4 leading-tight'>Html - boutons désactivés</h2> <p>Dans ce challenge le formulaire est désactivé, l'objectif est de trouver un moyen d'activer le formulaire et l'utiliser.</p> <div className='w-full h-full flex justify-center'> <img src='/img/rootme/C1/C1A.png' alt='Html - boutons désactivés' className='mt-4 mb-4' /> </div> <p>Pour résoudre ce problème nous allons utiliser l'inspecteur d'élement. Pour y accéder faites <strong>clique-droit</strong> sur la page et cliquer sur <strong>\"Inspecter\"</strong>.</p> <div className='w-full h-full flex justify-center'> <img src='/img/rootme/element_inspect.png' alt='Inspecter élément' className='mt-4 mb-4' /> </div> <p>Ensuite, dans l'onglet <strong>\"Elements\"</strong> dérouler chaque élément du HTML. Vous dreviez voir le contenu du formulaire. On remarquera que la propriété <strong>\"disable\"</strong> a été mis sur <strong>l'input \"text\" et \"submit\"</strong>. Il suffira de <strong>supprimer</strong> cette propriété de chaque input.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1B.png' alt='DevTools Elements' className='mt-4 mb-4' /> <ArrowDown className='w-10 h-10 mr-2' /> <img src='/img/rootme/C1/C1C.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> <p>Il est maintenant possible de <strong>cliquer</strong> sur le bouton <strong>\"Member access\"</strong> et de taper une <strong>valeur</strong>.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1D.png' alt='DevTools Elements' className='mt-4 mb-4' /> <ArrowDown className='w-10 h-10 mr-2' /> <img src='/img/rootme/C1/C1E.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> <p>Il est maintenant indiqué que le <strong>flag</strong> est <strong>HTMLCantStopYou</strong>. Et nous pouvons le vérifier en retournant sur le site.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1F.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> </div>",
  //   "author": "Billy IEA",
  //   "date": "Juin 30, 2025",
  //   "readTime": "3 min",
  //   "tags": ["Cybersécurité", "Root-ME", "Challenge"],
  //   "image": "/img/rootme_challenge_webclient.png"
  // },
  // {
  //   "id": 9,
  //   "title": "Root-me : HTML - Bouton désactivés",
  //   "excerpt": "Dans cette article, nous allons voir comment réaliser le challenge HTML - Bouton désactivés sur Root-ME.",
  //   "content": "<div className='mb-5'> <h2 className='text-2xl md:text-3xl font-bold mb-4 leading-tight'>Html - boutons désactivés</h2> <p>Dans ce challenge le formulaire est désactivé, l'objectif est de trouver un moyen d'activer le formulaire et l'utiliser.</p> <div className='w-full h-full flex justify-center'> <img src='/img/rootme/C1/C1A.png' alt='Html - boutons désactivés' className='mt-4 mb-4' /> </div> <p>Pour résoudre ce problème nous allons utiliser l'inspecteur d'élement. Pour y accéder faites <strong>clique-droit</strong> sur la page et cliquer sur <strong>\"Inspecter\"</strong>.</p> <div className='w-full h-full flex justify-center'> <img src='/img/rootme/element_inspect.png' alt='Inspecter élément' className='mt-4 mb-4' /> </div> <p>Ensuite, dans l'onglet <strong>\"Elements\"</strong> dérouler chaque élément du HTML. Vous dreviez voir le contenu du formulaire. On remarquera que la propriété <strong>\"disable\"</strong> a été mis sur <strong>l'input \"text\" et \"submit\"</strong>. Il suffira de <strong>supprimer</strong> cette propriété de chaque input.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1B.png' alt='DevTools Elements' className='mt-4 mb-4' /> <ArrowDown className='w-10 h-10 mr-2' /> <img src='/img/rootme/C1/C1C.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> <p>Il est maintenant possible de <strong>cliquer</strong> sur le bouton <strong>\"Member access\"</strong> et de taper une <strong>valeur</strong>.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1D.png' alt='DevTools Elements' className='mt-4 mb-4' /> <ArrowDown className='w-10 h-10 mr-2' /> <img src='/img/rootme/C1/C1E.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> <p>Il est maintenant indiqué que le <strong>flag</strong> est <strong>HTMLCantStopYou</strong>. Et nous pouvons le vérifier en retournant sur le site.</p> <div className='w-full h-full flex flex-col justify-center items-center'> <img src='/img/rootme/C1/C1F.png' alt='DevTools Elements' className='mt-4 mb-4' /> </div> </div>",
  //   "author": "Billy IEA",
  //   "date": "Juin 30, 2025",
  //   "readTime": "3 min",
  //   "tags": ["Cybersécurité", "Root-ME", "Challenge"],
  //   "image": "/img/rootme_challenge_webclient.png"
  // },
]
