"use client"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

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
              medcy.
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
