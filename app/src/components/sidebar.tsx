"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"
import { FoodCategory } from "@/lib/food-data"
import { TemperoCategory } from "@/lib/temperos-data"

type FilterOption = "todos" | FoodCategory | TemperoCategory

interface SidebarProps {
    activeFilter: FilterOption
    setActiveFilter: (filter: FilterOption) => void
}

const subCategories: { value: FoodCategory; label: string }[] = [
    { value: "fruta", label: "Frutas" },
    { value: "legume", label: "Legumes" },
    { value: "verdura", label: "Verduras" },
    { value: "comida", label: "Comidas" },
    { value: "ervas", label: "Ervas" },
]

const subArteDeTemperar: { value: TemperoCategory; label: string }[] = [
  { value: "temperos", label: "Tipos de Temperos" },
  { value: "misturas", label: "Misturas de Temperos" },
]

export function Sidebar({ activeFilter, setActiveFilter }: SidebarProps) {
    const [congeladosOpen, setCongeladosOpen] = useState(true)
    const [arteDeTemperarOpen, setArteDeTemperarOpen] = useState(true)

    return (
        <nav className="flex flex-col gap-1 p-4">
            <Button
                variant={activeFilter === "todos" ? "default" : "ghost"}
                className="justify-start"
                onClick={() => setActiveFilter("todos")}
            >
                Todos
            </Button>

            <div>
                <Button
                    variant="ghost"
                    className="justify-between w-full font-medium"
                    onClick={() => setCongeladosOpen((prev) => !prev)}
                >
                    Congelados
                    {congeladosOpen
                        ? <ChevronDown className="h-4 w-4" />
                        : <ChevronRight className="h-4 w-4" />}
                </Button>

                {congeladosOpen && (
                    <div className="ml-3 flex flex-col gap-1 mt-1 border-l border-border pl-2">
                        {subCategories.map((cat) => (
                            <Button
                                key={cat.value}
                                variant={activeFilter === cat.value ? "default" : "ghost"}
                                size="sm"
                                className="justify-start"
                                onClick={() => setActiveFilter(cat.value)}
                            >
                                {cat.label}
                            </Button>
                        ))}
                    </div>
                )}
            </div>

            <div>
                <Button
                    variant="ghost"
                    className="justify-between w-full font-medium"
                    onClick={() => setArteDeTemperarOpen((prev) => !prev)}
                >
                    Arte de Temperar
                    {arteDeTemperarOpen
                        ? <ChevronDown className="h-4 w-4" />
                        : <ChevronRight className="h-4 w-4" />}
                </Button>

                {arteDeTemperarOpen && (
                    <div className="ml-3 flex flex-col gap-1 mt-1 border-l border-border pl-2">
                        {subArteDeTemperar.map((cat) => (
                            <Button
                                key={cat.value}
                                variant={activeFilter === cat.value ? "default" : "ghost"}
                                size="sm"
                                className="justify-start"
                                onClick={() => setActiveFilter(cat.value)}
                            >
                                {cat.label}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}