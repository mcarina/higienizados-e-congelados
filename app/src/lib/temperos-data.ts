export type TemperoCategory = "temperos" | "misturas" | "dicas"

export interface TemperoItem {
  id: string
  name: string
  category: TemperoCategory
  emoji: string
  description: string        // o que é / breve apresentação
  uses: string[]             // para que serve (carnes, sopas, saladas...)
  ingredients?: string[]     // só para "misturas" — o que leva
  howToUse?: string[]        // como usar / modo de preparo
  storage: string            // como guardar (geladeira, pote fechado, etc.)
  tips: string[]             // dicas extras
}


export const temperoItems: TemperoItem[] = [

// tempero simples
{
  id: "cominho",
  name: "Cominho",
  category: "temperos",
  emoji: "🌿",
  description: "Tempero com sabor forte e levemente terroso, muito usado na culinária árabe e nordestina.",
  uses: ["Carnes", "Feijão", "Arroz", "Refogados"],
  howToUse: ["Use com moderação, o sabor é intenso", "Combina bem com coentro"],
  storage: "Pote fechado longe de luz e umidade. Dura até 2 anos.",
  tips: ["Torrar levemente na frigideira seca realça o aroma"],
},

// mistura
{
  id: "tempero-rancheiro",
  name: "Tempero Rancheiro",
  category: "misturas",
  emoji: "🧂",
  description: "Mistura de temperos secos para temperar carnes antes de grelhar ou assar.",
  uses: ["Carnes bovinas", "Frango", "Costela"],
  ingredients: ["Alho em pó", "Cebola em pó", "Páprica defumada", "Cominho", "Pimenta do reino", "Sal"],
  howToUse: ["Misture tudo", "Esfregue na carne 30 min antes de cozinhar"],
  storage: "Pote de vidro fechado, até 3 meses.",
  tips: ["Pode substituir a páprica defumada por doce", "Fica ótimo em frango assado também"],
}

]