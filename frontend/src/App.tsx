// import { Button } from "@/components/ui/button"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
 
// function App() {
//   return (
//     <div className="">
//       <NavigationMenu>
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger>Accueil</NavigationMenuTrigger>
//             {/* <NavigationMenuContent>
//               <NavigationMenuLink>Link</NavigationMenuLink>
//             </NavigationMenuContent> */}
            
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
//             {/* <NavigationMenuContent>
//               <Card className="w-[300px]">
//                 <CardHeader>
//                   <CardTitle>Card Title</CardTitle>
//                   <CardDescription>Card Description</CardDescription>
//                 </CardHeader>
//                 <CardContent>Content goes here</CardContent>
//                 <CardFooter>
//                   <Button>Action</Button>
//                 </CardFooter>
//               </Card>
//             </NavigationMenuContent> */}
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//     </div>
//   )
// }
 
// export default App

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
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Bienvenue sur le blog !</h1>
              {/* <p className="text-muted-foreground text-lg">
                Discover insights, tutorials, and stories from our community
              </p> */}
            </div>
            <BlogGrid posts={blogPosts} onArticleClick={handleArticleClick} />
          </div>
        ) : (
          currentArticle && <Article post={currentArticle} onBack={handleBackToHome} />
        )}
      </main>
    </div>
  )
}
