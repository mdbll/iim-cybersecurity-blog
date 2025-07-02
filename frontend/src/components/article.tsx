"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowDown, Calendar, Clock, User } from "lucide-react"
import type { BlogPost } from "../types/blog"

interface ArticleProps {
  post: BlogPost
  onBack: () => void
}

export function Article({ post, onBack }: ArticleProps) {
  return (
    <article className="max-w-4xl mx-auto">
      <Button onClick={onBack} variant="ghost" className="mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour
      </Button>

      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>

        <div className="flex items-center gap-6 text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
        </div>

        <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </header>

      <Separator className="mb-8" />

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>

        {/* <div className="space-y-6 text-foreground leading-relaxed">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-base">
              {paragraph}
            </p>
          ))}
        </div> */}

        <div
          className="space-y-6 text-foreground leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/className=/g, 'class=') }}
        />

        {/* Challenge 1 */}
        {/* <div className="mb-5">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Html - boutons désactivés</h2>
          <p>Dans ce challenge l'objectif est de trouver un identifiant de connexion pour se connecter.</p>
          <div className="w-full h-full flex justify-center">
            <img src="/img/rootme/C2/C2A.png" alt="Html - boutons désactivés" className="mt-4 mb-4" />
          </div>
          <p>Pour résoudre ce problème nous allons utiliser l'inspecteur d'élement. Pour y accéder faites <strong>clique-droit</strong> sur la page et cliquer sur <strong>"Inspecter"</strong>.</p>
          <div className="w-full h-full flex justify-center">
            <img src="/img/rootme/element_inspect.png" alt="Inspecter élément" className="mt-4 mb-4" />
          </div>
          <p>Ensuite, dans l'onglet <strong>"Source"</strong>, dérouler <strong>"challenge01.root-me.org"</strong>, <strong>"web-client/ch9"</strong> et cliquer sur le fichier <strong>"loging.js"</strong>. Vous dreviez voir le code de la fonction <strong>Login</strong>. On remarquera que les valeurs sont comparé à <strong>4dm1n</strong> pour le pseudo et <strong>sh.org</strong> pour le mot de passe.</p>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <img src="/img/rootme/C2/C2B.png" alt="DevTools Elements" className="mt-4 mb-4" />
          </div>
          <p>Il est maintenant possible de se connecter en utilisant les identifiants trouvé.</p>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <img src="/img/rootme/C2/C2C.png" alt="DevTools Elements" className="mt-4 mb-4" />
            <ArrowDown className="w-10 h-10 mr-2" />
            <img src="/img/rootme/C2/C2D.png" alt="DevTools Elements" className="mt-4 mb-4" />
          </div>
          <p>Il est maintenant indiqué que le <strong>flag</strong> est <strong>sh.org</strong>.</p>
        </div> */}

      </div>
    </article>
  )
}
