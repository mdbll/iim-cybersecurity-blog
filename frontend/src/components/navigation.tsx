"use client"

import { Button } from "@/components/ui/button"
import { Home, Search, Menu } from "lucide-react"

interface NavigationProps {
  onHomeClick: () => void
}

export function Navigation({ onHomeClick }: NavigationProps) {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={onHomeClick} className="text-xl font-bold">
              mdbll.
            </Button>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" onClick={onHomeClick}>
              {/* <Home className="w-4 h-4 mr-2" /> */}
              Accueil
            </Button>
            <Button variant="ghost">A propos</Button>
            <Button variant="ghost">Contact</Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
