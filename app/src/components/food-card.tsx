"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Snowflake, Lightbulb, Clock, CheckCircle2, XCircle } from "lucide-react"
import { FoodItem } from "@/lib/food-data"

interface FoodCardProps {
  item: FoodItem
}

export function FoodCard({ item }: FoodCardProps) {
  const categoryColors = {
    fruta: "bg-accent text-accent-foreground",
    legume: "bg-primary text-primary-foreground",
    verdura: "bg-chart-1 text-primary-foreground",
  }

  const categoryLabels = {
    fruta: "Fruta",
    legume: "Legume",
    verdura: "Verdura",
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{item.emoji}</span>
            <div>
              <CardTitle className="text-xl text-card-foreground">{item.name}</CardTitle>
              {/* <Badge className={`mt-1 ${categoryColors[item.category]}`}>
                {categoryLabels[item.category]} */}
              {/* </Badge> */}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Higienização */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary font-semibold">
            <Droplets className="h-5 w-5" />
            <span>Como Higienizar</span>
          </div>
          <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
            {item.hygiene.steps.map((step, index) => (
              <li key={index} className="leading-relaxed">{step}</li>
            ))}
          </ol>
          {item.hygiene.tips.length > 0 && (
            <div className="mt-2 p-2 bg-secondary rounded-lg">
              <div className="flex items-center gap-1 text-xs font-medium text-accent-foreground mb-1">
                <Lightbulb className="h-3 w-3" />
                Dicas
              </div>
              <ul className="text-xs text-muted-foreground space-y-0.5">
                {item.hygiene.tips.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Congelamento */}
        <div className="space-y-2 pt-2 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-chart-4 font-semibold">
              <Snowflake className="h-5 w-5" />
              <span>Como Congelar</span>
            </div>
            {item.freezing.canFreeze ? (
              <div className="flex items-center gap-1 text-xs text-primary">
                <CheckCircle2 className="h-4 w-4" />
                <span>Pode congelar</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-xs text-destructive">
                <XCircle className="h-4 w-4" />
                <span>Não congela bem</span>
              </div>
            )}
          </div>
          
          {item.freezing.canFreeze ? (
            <>
              <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                {item.freezing.steps.map((step, index) => (
                  <li key={index} className="leading-relaxed">{step}</li>
                ))}
              </ol>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Duração:</span>
                <span className="font-medium text-card-foreground">{item.freezing.duration}</span>
              </div>
            </>
          ) : null}
          
          {item.freezing.tips.length > 0 && (
            <div className="mt-2 p-2 bg-secondary rounded-lg">
              <div className="flex items-center gap-1 text-xs font-medium text-accent-foreground mb-1">
                <Lightbulb className="h-3 w-3" />
                Dicas
              </div>
              <ul className="text-xs text-muted-foreground space-y-0.5">
                {item.freezing.tips.map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
