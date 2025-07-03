"use client";

import { useState } from "react";
import { Navigation } from "./components/layout/Navigation/Navigation";
import { Home } from "./app/Home";
import { Article as ArticleData } from "./data/article";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "article">("home");
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const handleArticleClick = (id: number) => {
    setSelectedArticle(id);
    setCurrentView("article");
  };

  const handleBackToHome = () => {
    setSelectedArticle(null);
    setCurrentView("home");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onHomeClick={handleBackToHome} />
      <main className="px-4 py-8">
        <Home
          articles={ArticleData}
          view={currentView}
          selectedArticle={selectedArticle}
          onArticleClick={handleArticleClick}
          onBack={handleBackToHome}
        />
      </main>
    </div>
  );
}
