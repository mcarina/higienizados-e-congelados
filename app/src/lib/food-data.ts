export type FoodCategory = "fruta" | "legume" | "verdura" | "comida" | "ervas"

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

  //BANANA
  {
    id: "banana",
    name: "Banana",
    category: "fruta",
    emoji: "🍌",
    hygiene: {
      steps: [
        "Lave a casca em água corrente",
        "Deixe de molho por 10-15 min em: 1 litro de água + 1 colher de sopa de água sanitaria para alimentos",
        "Enxágue bem",
        "Seque antes de armazenar"
      ],
      tips: [
        "A casca pode conter bactérias que passam para a fruta ao descascar",
        "Guarde em local arejado, longe de outras frutas"
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Descasque as bananas maduras",
        "Corte em rodelas ou deixe inteiras",
        "Coloque em saco hermético retirando o ar",
        "Leve ao congelador",
        "identifique com data",
      ],
      duration: "Até 3 meses",
      tips: [
        "Bananas maduras são melhores para congelar",
        "Perfeitas para vitaminas e bolos"
      ]
    }
  },
  //UVA
  {
    id: "uva",
    name: "Uva",
    category: "fruta",
    emoji: "🍇",
    hygiene: {
      steps: [
        "Lave o cacho inteiro em água corrente",
        "Retire uvas estragadas ou machucadas e lave novamente",
        "Deixe de molho por 10-15 min em: 1 litro de água + 1 colher de sopa de água sanitaria para alimentos",
        "Enxágue bem e seque"
      ],
      tips: [
        "Na geladeira, guarde seca e use potes com ventilação",
        "Evite guardar molhada"
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Após higienizada, retire no cacho",
        "Espalhe em assadeira sem encostar",
        "Congele por 2 horas",
        "Transfira para saco hermético",
        "identifique com data",
      ],
      duration: "Até 8 meses",
      tips: [
        "pode ser usado para vitaminas",
        "e Sobremesas congeladas"
      ]
    }
  },
  //ABACAXI
  {
    id: "abacaxi",
    name: "Abacaxi",
    category: "fruta",
    emoji: "🍍",
    hygiene: {
      steps: [
        "Lave o abacaxi inteiro em água corrente",
        "Esfregue a casca com as mãos ou escovinha limpa.",
        "Deixe de molho por 10-15 min em: 1 litro de água + 1 colher de sopa de água sanitaria para alimentos",
        "Enxágue bem em água corrente",
        "depois descasque e corte",
      ],
      tips: [
        "Mesmo tendo casca grossa, o abacaxi precisa ser lavado porque a faca pode levar sujeiras da casca para a parte interna ao cortar.",
        
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Corte em cubos ou fatias",
        "Seque levemente",
        "Congele primeiro separado em bandeja.",
        "Espalhe em uma assadeira sem encostar",
        "Depois transfira para saco/pote.",
        "identifique com data",
      ],
      duration: "Até 6 meses",
      tips: [
        "Congele individualmente para não grudar",
        "Ideal para suco, smoothies, comer congelado e sobremesas"
      ]
    }
  },
  //MORANGO
  {
    id: "morango",
    name: "Morango",
    category: "fruta",
    emoji: "🍓",
    hygiene: {
      steps: [
        "Lave em água corrente sem remover o cabinho",
        "Deixe de molho por 10-15 min em: 1 litro de água + 1 colher de sopa de água sanitaria para alimentos",
        "Enxágue bem em água corrente",
        "Seque com papel toalha antes de guardar",
        "retire os cabinhos, se quiser."
      ],
      tips: [
        "Não remova o cabinho antes de lavar, isso evita que entrem água e microrganismos na fruta",
        "Não use detergente, pois o morango é poroso"
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Lave e seque completamente os morangos",
        "Seque MUITO bem.",
        "Remova os cabinhos",
        "Espalhe em uma assadeira sem encostar",
        "Leve ao congelador por 2 horas",
        "Transfira para saco hermético",
        "identifique com data",
      ],
      duration: "Até 6 meses",
      tips: [
        "Congele individualmente para não grudar",
        "Ideal para smoothies e sobremesas"
      ]
    }
  },
  //CEBOLA
  {
    id: "cebola",
    name: "Cebola",
    category: "legume",
    emoji: "🧅",
    hygiene: {
      steps: [
        "Retire a casca externa",
        "Lave rapidamente em água corrente.",
        "",
        "",
        "",
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
        "Congele em porções",
        "identifique com data",
      ],
      duration: "Até 3-6 meses",
      tips: [
        "quanto mais tempo guardado, mais a textura muda",
        "Pode ir direto do freezer para a panela"
      ]
    }
  },  
  //CENOURA
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
        "Seque e embale em porções",
        "identifique com data",
      ],
      duration: "Até 10 meses",
      tips: [
        "Corte em cubos ou rodelas para praticidade",
        "Ideal para sopas e refogados"
      ]
    }
  },  
  //BATATA
  {
    id: "batata",
    name: "Batata portuguesa",
    category: "legume",
    emoji: "🥔",
    hygiene: {
      steps: [
        "Lave em água corrente",
        "Esfregue com escovinha limpa para retirar terra",
        "Não precisa deixar de molho em sanitizante",
        "",
        "",
      ],
      tips: [
        "-"
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Corte como preferir",
        "Cozinhe parcialmente por 3–5 minutos",
        "Resfrie em água gelada",
        "Seque bem",
        "Congele em porções",
        "identifique com data",
      ],
      duration: "Até 3",
      tips: [
        "Funciona muito bem para frita, sopa e purê"
      ]
    }
  },
  //BROCOLIS
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
        "Embale em porções e congele",
        "identifique com data",
      ],
      duration: "8-12 meses",
      tips: [
        "O branqueamento preserva cor e nutrientes",
        "Não descongele antes de cozinhar"
      ]
    }
  },
  //BETERRABA
  {
    id: "beterraba",
    name: "Beterraba",
    category: "legume",
    emoji: "🫜",
    hygiene: {
      steps: [
        "Escove a casca em água corrente",
        "Deixe de molho por 10-15 min em: 1 litro de água + 1 colher de sopa de água sanitaria para alimentos",
        "Enxágue bem",
        "Descasque se preferir",
        "",
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
 //TOMATE
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
        "Seque antes de guardar",
        "",
      ],
      tips: [
        "Tomates maduros estragam mais rápido"
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Lave e seque os tomates",
        "Remova o pedúnculo",
        "Congele inteiros ou faça um corte em X na base",
        "Embale em sacos herméticos",
        "identifique com data",
      ],
      duration: "Até 6 meses",
      tips: [
        "A textura muda após congelar - ideal para molhos",
        "A casca sai facilmente após descongelar"
      ]
    }
  },
 //ALHO
  {
    id: "alho",
    name: "Alho",
    category: "legume",
    emoji: "🧄",
    hygiene: {
      steps: [
        "Retire a casca",
        "lave rapidamente se desejar",
        "Seque bem",
        "",
        "",
      ],
      tips: [
        "-"
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Congele em pequenas porções ou forminhas de gelo.",
        "identifique com data",
      ],
      duration: "Até 3 meses",
      tips: [
        "-"
      ]
    }
  },
  //PIMENTÃO
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
        "O pimentão normalmente não precisa de branqueamento."
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Corte como preferir",
        "Retire sementes e parte branca.",
        "Seque bem",
        "Congele em porções",
        "identifique com data",
      ],
      duration: "Até 6-8 meses",
      tips: [
        "-"
      ]
    }
  },
  //ALFACE
  {
    id: "alface",
    name: "Alface",
    category: "verdura",
    emoji: "🥬",
    hygiene: {
      steps: [
        "Separe as folhas",
        "Lave cada folha em água corrente",
        "Deixe de molho em solução sanitizante por 15 minutos",
        "Enxágue folha por folha",
        "Seque em centrífuga de salada ou papel toalha"
      ],
      tips: [
        "Guarde em recipiente com papel toalha para absorver umidade",
        "Não corte com faca de metal para não oxidar"
      ]
    },
    freezing: {
      canFreeze: false,
      steps: [],
      duration: "Não recomendado",
      tips: [
        "Alface não congela bem devido ao alto teor de água",
        "Perde completamente a textura crocante"
      ]
    }
  },
  //FEIJAO
  {
    id: "feijao-cozido",
    name: "Feijão Cozido",
    category: "comida",
    emoji: "🫘",
    hygiene: {
      steps: [
        "Lave os grãos em água corrente",
        "Deixe de molho por 8-12 horas",
        "Descarte a água do molho",
        "Cozinhe com água nova"
      ],
      tips: [
        "O molho ajuda a reduzir os fitatos e melhora a digestão",
        "Troque a água do molho se passar de 12 horas"
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Deixe o feijão esfriar completamente",
        "Congele com o caldo em porções",
        "Use potes ou sacos herméticos",
        "Deixe espaço para expansão",
        "identifique com data",
      ],
      duration: "Até 3 meses",
      tips: [
        "Congele em porções para evitar desperdício",
        "Tempere antes ou depois de congelar"
      ]
    }
  },
  //FRANGO DESFIADO
  {
    id: "frango-desfiado",
    name: "Frango Desfiado",
    category: "comida",
    emoji: "🍗",
    hygiene: {
      steps: [
        "O frango precisa estar cozido completamente",
        "espere esfriar",
        "não deixe mais de 2h fora da geladeria"
      ],
      tips: [
        "tempero a gosto"
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Use potes ou sacos",
        "Divida em porções",
        "Tire o máximo de ar possível",
        "identifique com data",
        "Congele"
      ],
      duration: "Até 3 meses",
      tips: [
        "Para descongelar, deixe na geladeira na noite anterior",
        "Ou use o modo 'descongelar' do microondas",
        "Se estiver em pequenas porções pode ir direto para a panela sem descongelar",
        "NÃO RECONGELE NOVAMENTE"
      ]
    }
  },
  //Cheiro verde
  {
    id: "cheiro-verde",
    name: "Cheiro-verde",
    category: "ervas",
    emoji: "🌿",
    hygiene: {
      steps: [
        "Separe folhas estragadas ou amareladas.",
        "Lave em água corrente folha por folha ou em pequenos maços.",
        "Deixe de molho por 10-15 min em: 1 litro de água + 1 colher de sopa de água sanitaria para alimentos",
        "Enxágue bem",
        "Seque bastante, em pano limpo ou com papel toalha"
      ],
      tips: [
        "Quanto mais seco estiver, mais tempo dura",
        "Para guardar na geldeira já cortado, armazene em um ponte ventilado com papel toalha"
      ]
    },
    freezing: {
      canFreeze: true,
      steps: [
        "Após Higienizado, seque MUITO bem",
        "Corte",
        "Armazene me potinhos, saquinhos ou forminhas de gelo com azeite/água.",
        "identifique com data",
      ],
      duration: "Até 3 meses",
      tips: [
        "Não precisa descongelar antes de cozinhar."
      ]
    }
  },

]
