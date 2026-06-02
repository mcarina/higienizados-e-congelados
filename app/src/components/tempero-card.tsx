"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, UtensilsCrossed, Package, BookOpen, ListOrdered } from "lucide-react"
import { TemperoItem } from "@/lib/temperos-data"

interface TemperoCardProps {
  item: TemperoItem
}

export function TemperoCard({ item }: TemperoCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{item.emoji}</span>
          <div>
            <CardTitle className="text-xl text-card-foreground">{item.name}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Para que serve */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <UtensilsCrossed className="h-5 w-5" />
            <span>Para que serve</span>
          </div>
          <ul className="text-sm text-muted-foreground space-y-1">
            {item.uses.map((use, index) => (
              <li key={index}>• {use}</li>
            ))}
          </ul>
        </div>

        {/* Ingredientes — só aparece em misturas */}
        {item.ingredients && item.ingredients.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-border">
            <div className="flex items-center gap-2 text-chart-4 font-semibold">
              <ListOrdered className="h-5 w-5" />
              <span>Ingredientes</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1">
              {item.ingredients.map((ing, index) => (
                <li key={index}>• {ing}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Como usar */}
        {item.howToUse && item.howToUse.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-border">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <BookOpen className="h-5 w-5" />
              <span>Como usar</span>
            </div>
            <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
              {item.howToUse.map((step, index) => (
                <li key={index} className="leading-relaxed">{step}</li>
              ))}
            </ol>
          </div>
        )}

        {/* Como guardar */}
        <div className="space-y-1 pt-2 border-t border-border">
          <div className="flex items-center gap-2 text-chart-4 font-semibold">
            <Package className="h-5 w-5" />
            <span>Como guardar</span>
          </div>
          <p className="text-sm text-muted-foreground">{item.storage}</p>
        </div>

        {/* Dicas */}
        {item.tips.length > 0 && (
          <div className="p-2 bg-secondary rounded-lg">
            <div className="flex items-center gap-1 text-xs font-medium text-accent-foreground mb-1">
              <Lightbulb className="h-3 w-3" />
              Dicas
            </div>
            <ul className="text-xs text-muted-foreground space-y-0.5">
              {item.tips.map((tip, index) => (
                <li key={index}>• {tip}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
