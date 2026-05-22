"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Leaf } from "lucide-react"
import { FoodCategory, foodItems } from "@/lib/food-data"
import { FoodCard } from "@/components/food-card"

type FilterOption = "todos" | FoodCategory

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState<FilterOption>("todos")

  const filteredItems = useMemo(() => {
    let items = foodItems

    // Filtro por categoria
    if (activeFilter !== "todos") {
      items = items.filter((item) => item.category === activeFilter)
    }

    // Filtro por busca
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.category.toLowerCase().includes(term)
      )
    }

    return items
  }, [searchTerm, activeFilter])

  const groupedItems = useMemo(() => {
    const groups: Record<FoodCategory, typeof foodItems> = {
      fruta: [],
      legume: [],
      verdura: [],
      comida: [],
      ervas: [],
    }
    
    filteredItems.forEach((item) => {
      groups[item.category].push(item)
    })
    
    return groups
  }, [filteredItems])

  const categoryLabels: Record<FoodCategory, string> = {
    fruta: "Frutas",
    legume: "Legumes",
    verdura: "Verduras",
    comida: "Comidas",
    ervas: "ervas"
    
  }

  const filterOptions: { value: FilterOption; label: string }[] = [
    { value: "todos", label: "Todos" },
    { value: "fruta", label: "Frutas" },
    { value: "legume", label: "Legumes" },
    { value: "verdura", label: "Verduras" },
    { value: "comida", label: "Comidas" },
    { value: "ervas", label: "Ervas" },

  ]

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-xl">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-card-foreground text-balance">
                  Guia de Higienização e Congelamento
                </h1>
                <p className="text-sm text-muted-foreground">
                  Aprenda a preparar e conservar frutas, legumes e verduras
                </p>
              </div>
            </div>
            
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-input border-border focus:ring-primary"
              />
            </div>
          </div>

          {/* Filtrosj*/}
          <div className="flex flex-wrap gap-2 mt-4">
            {filterOptions.map((option) => (
              <Button
                key={option.value}
                variant={activeFilter === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(option.value)}
                className={
                  activeFilter === option.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-card-foreground hover:bg-secondary"
                }
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-xl font-semibold text-card-foreground mb-2">
              Nenhum resultado encontrado
            </h2>
            <p className="text-muted-foreground">
              Tente buscar por outro termo, como &quot;morango&quot; ou &quot;brócolis&quot;
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {(["fruta", "legume", "verdura", "comida", "ervas"] as FoodCategory[]).map((category) => {
              const items = groupedItems[category]
              if (items.length === 0) return null
              
              return (
                <section key={category}>
                  <h2 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-primary rounded-full" />
                    {categoryLabels[category]}
                    <span className="text-sm font-normal text-muted-foreground">
                      ({items.length})
                    </span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item) => (
                      <FoodCard key={item.id} item={item} />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-semibold text-card-foreground">Contato</p>
              <p className="mt-2 text-xs text-muted-foreground max-w-xl">
                Quer falar comigo sobre o projeto? Entre em contato comigo nos canais listados
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:marciacarina931@gmail.com"
                className="block text-primary hover:underline"
              >
                📥 marciacarina931@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/marcia-carina"
                target="_blank"
                rel="noreferrer"
                className="block text-primary hover:underline"
              >
                💼 linkedin.com/in/marcia-carina
              </a>
              <a
                href="https://github.com/mcarina"
                target="_blank"
                rel="noreferrer"
                className="block text-primary hover:underline"
              >
                🐙 github.com/mcarina
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
