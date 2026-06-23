"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Search, Leaf, Menu, X } from "lucide-react"
import { FoodCategory, foodItems } from "@/lib/food-data"
import { TemperoCategory, temperoItems } from "@/lib/temperos-data"
import { FoodCard } from "@/components/food-card"
import { TemperoCard } from "@/components/tempero-card"
import { Sidebar } from "@/components/sidebar"
import Image from "next/image"

const FOOD_CATS: FoodCategory[] = ["fruta", "legume", "verdura", "comida", "ervas"]
const TEMPERO_CATS: TemperoCategory[] = ["temperos", "misturas", "receitas"]

type FilterOption = "todos" | FoodCategory | TemperoCategory

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState<FilterOption>("todos")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // filteredItems — adicionar o "se o filtro for de temperos, retorna vazio"
  const filteredItems = useMemo(() => {
    if (activeFilter !== "todos" && !FOOD_CATS.includes(activeFilter as FoodCategory)) return []

    let items = foodItems
    if (FOOD_CATS.includes(activeFilter as FoodCategory)) {
      items = items.filter((item) => item.category === activeFilter)
    }
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

  // NOVO — filteredTemperos (adicionar após o filteredItems)
  const filteredTemperos = useMemo(() => {
    if (activeFilter !== "todos" && !TEMPERO_CATS.includes(activeFilter as TemperoCategory)) return []

    let items = temperoItems
    if (TEMPERO_CATS.includes(activeFilter as TemperoCategory)) {
      items = items.filter((item) => item.category === activeFilter)
    }
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase()
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term)
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
    };
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
    ervas: "Ervas",
  }

  const temperoLabels: Record<TemperoCategory, string> = {
    temperos: "Temperos",
    misturas: "Misturas",
    receitas: "Receitas",
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header — título, subtítulo, busca e ícone (sem filtros) */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              {/* Botão hamburger — visível só em mobile */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-secondary"
                onClick={() => setSidebarOpen(true)}
                aria-label="Abrir menu"
              >
                <Menu className="h-5 w-5 text-card-foreground" />
              </button>

              <div className="p-2 rounded-xl">
                <Image
                  src="/abacaxi.png"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="h-8 w-8"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-card-foreground text-balance">
                  Guia de Cozinha
                </h1>
                <p className="text-sm text-muted-foreground">
                  Aprendar a congelar alimentos do jeito certo, tipos de temperos e receitas
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
        </div>
      </header>

      {/* Layout: sidebar + conteúdo */}
      <div className="flex flex-1 w-full max-w-7xl mx-auto">

        {/* Sidebar — visível só em desktop */}
        <aside className="hidden md:block w-56 shrink-0 border-r border-border">
          <div className="sticky top-[101px] max-h-[calc(100vh-101px)] overflow-y-auto">
            <Sidebar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          </div>
        </aside>

        {/* Drawer — visível só em mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="absolute left-0 top-0 h-full w-64 bg-card border-r border-border z-50 overflow-y-auto">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-semibold text-card-foreground">Filtros</span>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-1 rounded hover:bg-secondary"
                  aria-label="Fechar menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <Sidebar
                activeFilter={activeFilter}
                setActiveFilter={(f) => {
                  setActiveFilter(f)
                  setSidebarOpen(false)
                }}
              />
            </aside>
          </div>
        )}

        {/* Cards */}
        <div className="flex-1 px-4 sm:px-6 py-8">
          {filteredItems.length === 0 && filteredTemperos.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-xl font-semibold text-card-foreground mb-2">
                Nenhum resultado encontrado
              </h2>
              <p className="text-muted-foreground">
                Tente buscar por outro termo, como &quot;morango&quot; ou &quot;cominho&quot;
              </p>
            </div>
          ) : (
            <div className="space-y-10">

              {/* Seção de alimentos — igual ao atual */}
              {(["fruta", "legume", "verdura", "comida", "ervas"] as FoodCategory[]).map((category) => {
                const items = groupedItems[category]
                if (items.length === 0) return null
                return (
                  <section key={category}>
                    <h2 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full" />
                      {categoryLabels[category]}
                      <span className="text-sm font-normal text-muted-foreground">({items.length})</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {items.map((item) => <FoodCard key={item.id} item={item} />)}
                    </div>
                  </section>
                )
              })}

              {/* Seção de temperos — NOVO */}
              {(["temperos", "misturas", "receitas"] as TemperoCategory[]).map((category) => {
                const items = filteredTemperos.filter((item) => item.category === category)
                if (items.length === 0) return null
                return (
                  <section key={category}>
                    <h2 className="text-xl font-bold text-card-foreground mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-primary rounded-full" />
                      {temperoLabels[category]}
                      <span className="text-sm font-normal text-muted-foreground">({items.length})</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {items.map((item) => <TemperoCard key={item.id} item={item} />)}
                    </div>
                  </section>
                )
              })}

            </div>
          )}
        </div>

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
              <a href="mailto:marciacarina931@gmail.com" className="block text-primary hover:underline">
                📥 marciacarina931@gmail.com
              </a>
              <a href="https://linkedin.com/in/marcia-carina" target="_blank" rel="noreferrer" className="block text-primary hover:underline">
                💼 linkedin.com/in/marcia-carina
              </a>
              <a href="https://github.com/mcarina" target="_blank" rel="noreferrer" className="block text-primary hover:underline">
                🐙 github.com/mcarina
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
