"use client"

import { useState } from "react"
import { RootMeGrid } from "../rootMe-grid"
import { rootMePosts } from "../../data/rootme-posts"
import { Article } from "../article"

export function RootMeWebClient() {
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

    const currentArticle = selectedArticle ? rootMePosts.find((post) => post.id === selectedArticle) : null

    return (
        <>
            <div>
                <RootMeGrid posts={rootMePosts} onArticleClick={handleArticleClick} />
            </div>
        </>
    )
}