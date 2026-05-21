export type FoodCategory = "fruta" | "legume" | "verdura" | "comida"

export interface FoodItem {
  id: string
  name: string
  category: FoodCategory
  emoji: string
  hygiene: {
    steps: string[]
    tips: string[]
  }
  freezing: {
    canFreeze: boolean
    steps: string[]
    duration: string
    tips: string[]
  }
}

export const foodItems: FoodItem[] = [
  // {
  //   id: "morango",
  //   name: "Morango",
  //   category: "fruta",
  //   emoji: "🍓",
  //   hygiene: {
  //     steps: [
  //       "Lave em água corrente sem remover o cabinho",
  //       "Deixe de molho em solução de água com bicarbonato (1 colher de sopa para 1 litro) por 15 minutos",
  //       "Enxágue bem em água corrente",
  //       "Seque com papel toalha antes de guardar"
  //     ],
  //     tips: [
  //       "Não remova o cabinho antes de lavar para evitar absorção de água",
  //       "Não use detergente, pois o morango é poroso"
  //     ]
  //   },
  //   freezing: {
  //     canFreeze: true,
  //     steps: [
  //       "Lave e seque completamente os morangos",
  //       "Remova os cabinhos",
  //       "Espalhe em uma assadeira sem encostar",
  //       "Leve ao congelador por 2 horas",
  //       "Transfira para saco hermético"
  //     ],
  //     duration: "Até 6 meses",
  //     tips: [
  //       "Congele individualmente para não grudar",
  //       "Ideal para smoothies e sobremesas"
  //     ]
  //   }
  // },
  // {
  //   id: "banana",
  //   name: "Banana",
  //   category: "fruta",
  //   emoji: "🍌",
  //   hygiene: {
  //     steps: [
  //       "Lave a casca em água corrente",
  //       "Deixe de molho em solução com hipoclorito por 15 minutos",
  //       "Enxágue bem",
  //       "Seque antes de armazenar"
  //     ],
  //     tips: [
  //       "A casca pode conter bactérias que passam para a fruta ao descascar",
  //       "Guarde em local arejado, longe de outras frutas"
  //     ]
  //   },
  //   freezing: {
  //     canFreeze: true,
  //     steps: [
  //       "Descasque as bananas maduras",
  //       "Corte em rodelas ou deixe inteiras",
  //       "Coloque em saco hermético retirando o ar",
  //       "Leve ao congelador"
  //     ],
  //     duration: "Até 3 meses",
  //     tips: [
  //       "Bananas maduras são melhores para congelar",
  //       "Perfeitas para vitaminas e bolos"
  //     ]
  //   }
  // },
  // {
  //   id: "maca",
  //   name: "Maçã",
  //   category: "fruta",
  //   emoji: "🍎",
  //   hygiene: {
  //     steps: [
  //       "Lave em água corrente esfregando bem a casca",
  //       "Deixe de molho em solução sanitizante por 15 minutos",
  //       "Enxágue abundantemente",
  //       "Seque com pano limpo"
  //     ],
  //     tips: [
  //       "A cera natural pode ser removida com escova macia",
  //       "Guarde na geladeira para maior durabilidade"
  //     ]
  //   },
  //   freezing: {
  //     canFreeze: true,
  //     steps: [
  //       "Descasque e retire as sementes",
  //       "Corte em fatias ou cubos",
  //       "Mergulhe em água com limão para não escurecer",
  //       "Escorra e seque bem",
  //       "Congele em saco hermético"
  //     ],
  //     duration: "Até 12 meses",
  //     tips: [
  //       "Use para tortas e compotas após descongelar",
  //       "Não recongelar após descongelar"
  //     ]
  //   }
  // },
  {
    id: "brócolis",
    name: "Brócolis",
    category: "legume",
    emoji: "🥦",
    hygiene: {
      steps: [
        "corte as floretes",
        "Lave em água corrente cada florete",
        "Deixe de molho por 10-15 min em: 1 litro de água + 1 colher de sopa de água sanitaria para alimentos, ou sanitizante proprio para legumes",
        "Enxágue bem em água corrente"
      ],
      tips: [
        "Verifique entre os floretes se há insetos"
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Separe em floretes pequenos",
        "Branqueie em água fervente por 3 minutos",
        "Mergulhe imediatamente em água gelada",
        "Escorra e seque muito bem",
        "Embale em porções e congele"
      ],
      duration: "8-12 meses",
      tips: [
        "O branqueamento preserva cor e nutrientes",
        "Não descongele antes de cozinhar"
      ]
    }
  },
  {
    id: "cenoura",
    name: "Cenoura",
    category: "legume",
    emoji: "🥕",
    hygiene: {
      steps: [
        "Escove a casca em água corrente",
        "Deixe de molho por 10-15 min em: 1 litro de água + 1 colher de sopa de água sanitaria para alimentos",
        "Enxágue bem",
        "Descasque se preferir"
      ],
      tips: [
        "Guarde sem as folhas para durar mais",
        "Pode ser consumida com casca após higienização"
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Descasque e corte no formato desejado",
        "Branqueie em água fervente por 2-3 minutos",
        "Resfrie em água gelada",
        "Seque e embale em porções"
      ],
      duration: "Até 10 meses",
      tips: [
        "Corte em cubos ou rodelas para praticidade",
        "Ideal para sopas e refogados"
      ]
    }
  },
  {
    id: "beterraba",
    name: "Beterraba",
    category: "legume",
    emoji: "-",
    hygiene: {
      steps: [
        "Escove a casca em água corrente",
        "Deixe de molho por 10-15 min em: 1 litro de água + 1 colher de sopa de água sanitaria para alimentos",
        "Enxágue bem",
        "Descasque se preferir"
      ],
      tips: [
        "-"
      ]
    },
    freezing: {
      canFreeze: false,
      steps: [
        "-"
      ],
      duration: "Até 10 meses",
      tips: [
        "beterraba congelada perde a textura"
      ]
    }
  },
  {
    id: "tomate",
    name: "Tomate",
    category: "legume",
    emoji: "🍅",
    hygiene: {
      steps: [
        "Lave em água corrente",
        "Deixe de molho por 10-15 min em: 1 litro de água + 1 colher de sopa de água sanitaria para alimentos",
        "Enxágue",
        "Seque antes de guardar"
      ],
      tips: [
        "Não guarde na geladeira se for consumir em poucos dias",
        "Tomates maduros estragam mais rápido"
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Lave e seque os tomates",
        "Remova o pedúnculo",
        "Congele inteiros ou faça um corte em X na base",
        "Embale em sacos herméticos"
      ],
      duration: "Até 6 meses",
      tips: [
        "A textura muda após congelar - ideal para molhos",
        "A casca sai facilmente após descongelar"
      ]
    }
  },
  {
    id: "cebola",
    name: "Cebola",
    category: "legume",
    emoji: "🧅",
    hygiene: {
      steps: [
        "Retire a casca externa",
        "Lave rapidamente em água corrente."
      ],
      tips: [
        "Não precisa sanitizar porque a parte consumida fica protegida pela casca."
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "corte como preferir",
        "Seque bem",
        "Congele em porções"
      ],
      duration: "Até 3-6 meses",
      tips: [
        "quanto mais tempo guardado, mais a textura muda",
        "Pode ir direto do freezer para a panela"
      ]
    }
  },
  {
    id: "alho",
    name: "Alho",
    category: "legume",
    emoji: "🧄",
    hygiene: {
      steps: [
        "Retire a casca",
        "lave rapidamente se desejar",
        "Seque bem"
      ],
      tips: [
        "-"
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Congele em pequenas porções ou forminhas de gelo."
      ],
      duration: "Até 3 meses",
      tips: [
        "-"
      ]
    }
  },
  {
    id: "pimentao",
    name: "Pimentão",
    category: "legume",
    emoji: "🌶️",
    hygiene: {
      steps: [
        "Lave em água corrente esfregando a superfície.",
        "Deixe de molho por 10-15 min em: 1 litro de água + 1 colher de sopa de água sanitaria para alimentos",
        "Enxágue bem em água corrente.",
        "Seque bem"
      ],
      tips: [
        "O pimentão normalmente não precisa branqueamento."
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Crte como preferir",
        "Retire sementes e parte branca.",
        "Seque bem",
        "Congele em porções"
      ],
      duration: "Até 3 meses",
      tips: [
        "-"
      ]
    }
  },
  // {
  //   id: "alface",
  //   name: "Alface",
  //   category: "verdura",
  //   emoji: "🥬",
  //   hygiene: {
  //     steps: [
  //       "Separe as folhas",
  //       "Lave cada folha em água corrente",
  //       "Deixe de molho em solução sanitizante por 15 minutos",
  //       "Enxágue folha por folha",
  //       "Seque em centrífuga de salada ou papel toalha"
  //     ],
  //     tips: [
  //       "Guarde em recipiente com papel toalha para absorver umidade",
  //       "Não corte com faca de metal para não oxidar"
  //     ]
  //   },
  //   freezing: {
  //     canFreeze: false,
  //     steps: [],
  //     duration: "Não recomendado",
  //     tips: [
  //       "Alface não congela bem devido ao alto teor de água",
  //       "Perde completamente a textura crocante"
  //     ]
  //   }
  // },
  // {
  //   id: "espinafre",
  //   name: "Espinafre",
  //   category: "verdura",
  //   emoji: "🥬",
  //   hygiene: {
  //     steps: [
  //       "Remova as folhas do talo",
  //       "Lave em água corrente",
  //       "Deixe de molho em água com vinagre por 15 minutos",
  //       "Enxágue bem várias vezes",
  //       "Seque com centrífuga ou papel toalha"
  //     ],
  //     tips: [
  //       "Verifique se há areia entre as folhas",
  //       "Pode ser necessário lavar mais de uma vez"
  //     ]
  //   },
  //   freezing: {
  //     canFreeze: true,
  //     steps: [
  //       "Branqueie as folhas por 2 minutos",
  //       "Mergulhe em água gelada",
  //       "Escorra e esprema o excesso de água",
  //       "Forme bolinhas e congele"
  //     ],
  //     duration: "Até 12 meses",
  //     tips: [
  //       "Ideal para usar em receitas cozidas",
  //       "Cada bolinha equivale a aproximadamente 1 xícara"
  //     ]
  //   }
  // },
  // {
  //   id: "abobrinha",
  //   name: "Abobrinha",
  //   category: "legume",
  //   emoji: "🥒",
  //   hygiene: {
  //     steps: [
  //       "Lave em água corrente esfregando a casca",
  //       "Deixe de molho em solução sanitizante por 15 minutos",
  //       "Enxágue bem",
  //       "Seque com pano limpo"
  //     ],
  //     tips: [
  //       "Pode ser consumida com casca",
  //       "Verifique se não há manchas ou partes moles"
  //     ]
  //   },
  //   freezing: {
  //     canFreeze: true,
  //     steps: [
  //       "Corte em rodelas ou cubos",
  //       "Branqueie por 1-2 minutos",
  //       "Resfrie em água gelada",
  //       "Seque bem e embale"
  //     ],
  //     duration: "Até 10 meses",
  //     tips: [
  //       "Fica mais macia após descongelar",
  //       "Melhor para receitas refogadas ou assadas"
  //     ]
  //   }
  // // },
  // {
  //   id: "manga",
  //   name: "Manga",
  //   category: "fruta",
  //   emoji: "🥭",
  //   hygiene: {
  //     steps: [
  //       "Lave a casca em água corrente",
  //       "Esfregue com escova macia",
  //       "Deixe de molho em solução sanitizante por 15 minutos",
  //       "Enxágue e seque"
  //     ],
  //     tips: [
  //       "A casca pode contaminar a polpa ao cortar",
  //       "Sempre lave mesmo que vá descascar"
  //     ]
  //   },
  //   freezing: {
  //     canFreeze: true,
  //     steps: [
  //       "Descasque e corte em cubos",
  //       "Espalhe em assadeira sem encostar",
  //       "Congele por 2 horas",
  //       "Transfira para saco hermético"
  //     ],
  //     duration: "Até 6 meses",
  //     tips: [
  //       "Perfeita para smoothies e sobremesas",
  //       "Escolha mangas bem maduras"
  //     ]
  //   }
  // },
  // {
  //   id: "couve",
  //   name: "Couve",
  //   category: "verdura",
  //   emoji: "🥬",
  //   hygiene: {
  //     steps: [
  //       "Separe as folhas do talo",
  //       "Lave cada folha em água corrente",
  //       "Deixe de molho em solução com vinagre por 20 minutos",
  //       "Enxágue bem",
  //       "Seque completamente"
  //     ],
  //     tips: [
  //       "Verifique a presença de pulgões nas folhas",
  //       "O vinagre ajuda a eliminar insetos"
  //     ]
  //   },
  //   freezing: {
  //     canFreeze: true,
  //     steps: [
  //       "Lave e pique as folhas",
  //       "Branqueie por 2-3 minutos",
  //       "Resfrie em água gelada",
  //       "Escorra bem e embale em porções"
  //     ],
  //     duration: "Até 12 meses",
  //     tips: [
  //       "Ideal para sopas e refogados",
  //       "Pode congelar já picada para praticidade"
  //     ]
  //   }
  // },
  // {
  //   id: "uva",
  //   name: "Uva",
  //   category: "fruta",
  //   emoji: "🍇",
  //   hygiene: {
  //     steps: [
  //       "Lave o cacho inteiro em água corrente",
  //       "Separe as uvas e lave novamente",
  //       "Deixe de molho em água com bicarbonato por 15 minutos",
  //       "Enxágue bem e seque"
  //     ],
  //     tips: [
  //       "Remova uvas estragadas para não contaminar as demais",
  //       "Guarde na geladeira sem lavar para durar mais"
  //     ]
  //   },
  //   freezing: {
  //     canFreeze: true,
  //     steps: [
  //       "Lave e seque bem as uvas",
  //       "Espalhe em assadeira sem encostar",
  //       "Congele por 2 horas",
  //       "Transfira para saco hermético"
  //     ],
  //     duration: "Até 12 meses",
  //     tips: [
  //       "Deliciosas como petisco gelado",
  //       "Uvas sem semente são mais práticas"
  //     ]
  //   }
  // },
  // {
  //   id: "feijao-cozido",
  //   name: "Feijão Cozido",
  //   category: "comida",
  //   emoji: "🫘",
  //   hygiene: {
  //     steps: [
  //       "Lave os grãos em água corrente",
  //       "Deixe de molho por 8-12 horas",
  //       "Descarte a água do molho",
  //       "Cozinhe com água nova"
  //     ],
  //     tips: [
  //       "O molho ajuda a reduzir os fitatos e melhora a digestão",
  //       "Troque a água do molho se passar de 12 horas"
  //     ]
  //   },
  //   freezing: {
  //     canFreeze: true,
  //     steps: [
  //       "Deixe o feijão esfriar completamente",
  //       "Congele com o caldo em porções",
  //       "Use potes ou sacos herméticos",
  //       "Deixe espaço para expansão"
  //     ],
  //     duration: "Até 3 meses",
  //     tips: [
  //       "Congele em porções para evitar desperdício",
  //       "Tempere antes ou depois de congelar"
  //     ]
  //   }
  // },
  {
    id: "frango-desfiado",
    name: "Frango Desfiado",
    category: "comida",
    emoji: "🍗",
    hygiene: {
      steps: [
        "Não lave o frango cru (espalha bactérias)",
        "Cozinhe até atingir 74°C internamente",
        "Deixe descansar por 5 minutos antes de cortar",
        "Guarde em recipiente fechado"
      ],
      tips: [
        "Use termômetro culinário para garantir cozimento",
        "Separe utensílios para carne crua e cozida"
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Deixe esfriar completamente",
        "Desfie ou corte em pedaços",
        "Embale em porções em sacos herméticos",
        "Retire o máximo de ar possível"
      ],
      duration: "Até 4 meses",
      tips: [
        "Desfiado congela melhor",
        "Adicione um pouco de caldo para manter úmido"
      ]
    }
  },

]
