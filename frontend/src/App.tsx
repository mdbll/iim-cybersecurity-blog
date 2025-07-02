"use client"

import { useState } from "react"
import { Navigation } from "./components/navigation"
import { BlogGrid } from "./components/blog-grid"
import { Article } from "./components/article"
import { blogPosts } from "./data/blog-posts"

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "article">("home")
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null)

  const handleArticleClick = (id: number) => {
    setSelectedArticle(id)
    setCurrentView("article")
  }

  const handleBackToHome = () => {
    setCurrentView("home")
    setSelectedArticle(null)
  }

  const currentArticle = selectedArticle ? blogPosts.find((post) => post.id === selectedArticle) : null

  return (
    <div className="min-h-screen bg-background">
      <Navigation onHomeClick={handleBackToHome} />
      <main className="container mx-auto px-4 py-8">
        {currentView === "home" ? (
          <div>
            <BlogGrid posts={blogPosts} onArticleClick={handleArticleClick} />
          </div>
        ) : (
          currentArticle && <Article post={currentArticle} onBack={handleBackToHome} />
        )}
      </main>
    </div>
  )
}
