export type TemperoCategory = "temperos" | "misturas"

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
  description: "Tempero com sabor forte e levemente terroso, muito usado na culinária árabe e nordestina. Uma das especiarias mais antigas do mundo.",
  uses: ["Carnes", "Feijão", "Arroz", "Refogados"],
  howToUse: ["Use com moderação, o sabor é intenso", "Combina bem com coentro"],
  storage: "Pote fechado longe de luz e umidade. Dura até 2 anos.",
  tips: ["Torrar levemente na frigideira seca realça o aroma"],
},
{
  id: "curry",
  name: "Curry",
  category: "temperos",
  emoji: "🍛",
  description: "Mistura aromática de especiarias muito popular na culinária indiana. Pode conter cúrcuma, cominho, coentro, gengibre, pimenta e outras especiarias, variando conforme a região e a receita.",
  uses: [
    "Frango",
    "Carnes",
    "Legumes",
    "Arroz",
    "Sopas",
    "Molhos",
    "Ensopados"
  ],
  howToUse: [
    "Adicione durante o refogado de cebola e alho para liberar os aromas.",
    "Use de 1 a 2 colheres de chá para cada 500g de alimento.",
    "Misture com leite de coco para criar molhos cremosos.",
    "Pode ser usado em marinadas para carnes e aves."
  ],
  storage: "Armazene em pote bem fechado, em local fresco, seco e protegido da luz. Mantém melhor sabor por até 1 ano.",
  tips: [
    "Aqueça rapidamente em óleo ou azeite antes de adicionar outros ingredientes.",
    "Pode ser usado em pratos vegetarianos, especialmente com grão-de-bico, lentilha e batata.",
    "Experimente adicionar ao arroz para dar cor e aroma.",
    "Evite cozinhar por tempo excessivo para não perder parte do aroma."
  ],
},
{
  id: "pimenta-calabresa",
  name: "Pimenta Calabresa",
  category: "temperos",
  emoji: "🌶️",
  description: "Originária da região da Calábria, na Itália. Pimenta seca e triturada, conhecida pelo sabor picante e aroma marcante. Muito utilizada em pizzas, massas, molhos e receitas que pedem um toque de calor e intensidade.",
  uses: [
    "Pizzas",
    "Massas",
    "Molhos",
    "Carnes",
    "Azeites aromatizados",
    "Refogados",
    "Caldos"
  ],
  howToUse: [
    "Adicione pequenas quantidades durante o preparo para controlar a picância.",
    "Misture em molhos de tomate para realçar o sabor.",
    "Polvilhe sobre pizzas e massas já prontas.",
    "Use para aromatizar azeite, deixando a pimenta em infusão por alguns dias."
  ],
  storage: "Guarde em recipiente bem fechado, protegido da luz, calor e umidade. Mantém o aroma e a picância por até 2 anos.",
  tips: [
    "Comece com pequenas quantidades, pois a picância pode aumentar durante o cozimento.",
    "Combina muito bem com alho, orégano e manjericão.",
    "Pode ser usada para preparar azeites e manteigas temperadas.",
    "Uma pitada é suficiente para transformar molhos e refogados simples."
  ],
},
{
  id: "paprica-defumada",
  name: "Páprica Defumada",
  category: "temperos",
  emoji: "🔥",
  description: "Tempero produzido a partir de pimentões secos e defumados antes da moagem. Possui sabor intenso, levemente adocicado e um aroma defumado característico.",
  uses: [
    "Carnes grelhadas",
    "Churrasco",
    "Frango",
    "Batatas",
    "Hambúrgueres",
    "Molhos",
    "Legumes assados"
  ],
  howToUse: [
    "Adicione durante o preparo para incorporar o sabor defumado ao prato.",
    "Misture em marinadas para carnes e aves.",
    "Use em temperos secos para churrasco e grelhados.",
    "Polvilhe sobre legumes assados antes de levar ao forno."
  ],
  storage: "Conserve em recipiente bem fechado, protegido da luz, calor e umidade. Mantém o sabor por até 2 anos.",
  tips: [
    "Uma pequena quantidade já proporciona bastante aroma.",
    "Combina muito bem com alho, cebola e pimenta-do-reino.",
    "Pode substituir o sabor defumado de alguns ingredientes em receitas vegetarianas.",
    "Excelente para dar mais profundidade a molhos e ensopados."
  ],
},
{
  id: "paprica-doce",
  name: "Páprica Doce",
  category: "temperos",
  emoji: "🌶️",
  description: "Tempero obtido a partir da moagem de pimentões doces secos. Possui sabor suave, levemente adocicado e é muito utilizada para dar cor e aroma aos alimentos.",
  uses: [
    "Guisados",
    "Frutos do mar",
    "Arroz",
    "Frango",
    "Molhos",
    "Sopas"
  ],
  howToUse: [
    "Adicione durante o refogado para liberar o aroma.",
    "Misture em molhos, ensopados e pratos à base de arroz.",
    "Use para dar cor natural a carnes e legumes.",
    "Polvilhe sobre pratos prontos para finalização."
  ],
  storage: "Guarde em pote fechado, longe da luz e da umidade. O ideal é consumir em até 2 anos para preservar aroma e cor.",
  tips: [
    "Não é picante, sendo adequada para todos os paladares.",
    "Combina bem com alho, cebola, tomate e ervas aromáticas.",
    "Evite cozinhar em fogo muito alto para não amargar.",
    "Muito utilizada na culinária espanhola e húngara."
  ],
},
{
  id: "paprica-picante",
  name: "Páprica Picante",
  category: "temperos",
  emoji: "🌶️",
  description: "Tempero produzido a partir da moagem de pimentões e pimentas secas. Possui sabor marcante e picância moderada, sendo ideal para quem deseja adicionar calor e cor aos pratos.",
  uses: [
    "Carnes",
    "Frango",
    "Churrasco",
    "Molhos",
    "Ensopados",
    "Batatas",
    "Feijão"
  ],
  howToUse: [
    "Adicione pequenas quantidades durante o preparo para controlar a picância.",
    "Misture em marinadas para carnes e aves.",
    "Use em molhos de tomate para um toque mais intenso.",
    "Polvilhe sobre batatas, legumes e carnes antes de assar."
  ],
  storage: "Armazene em recipiente bem fechado, em local fresco, seco e protegido da luz. Conserva melhor o sabor por até 2 anos.",
  tips: [
    "Comece com meia colher de chá e ajuste conforme o seu gosto.",
    "Combina muito bem com alho, cebola, cominho e pimenta-do-reino.",
    "Pode substituir parcialmente outras pimentas em receitas.",
    "Adiciona cor avermelhada vibrante além da picância."
  ],
},
{
  id: "lemon-pepper",
  name: "Lemon Pepper",
  category: "temperos",
  emoji: "🍋",
  description: "Mistura de raspas de limão desidratadas com pimenta-do-reino e outros temperos. Possui sabor cítrico, levemente picante e muito aromático, sendo um dos temperos mais versáteis para carnes, aves e peixes.",
  uses: [
    "Peixes",
    "Frango",
    "Carnes brancas",
    "Frutos do mar",
    "Legumes assados",
    "Batatas",
    "Saladas"
  ],
  howToUse: [
    "Tempere carnes e peixes antes de grelhar ou assar.",
    "Polvilhe sobre legumes e batatas antes de levar ao forno.",
    "Use como finalização em saladas e vegetais cozidos.",
    "Misture com azeite para criar marinadas rápidas."
  ],
  storage: "Guarde em recipiente bem fechado, longe da luz, calor e umidade. Para melhor aroma, consuma preferencialmente em até 1 ano.",
  tips: [
    "o Lemon Pepper costuma funcionar melhor quando aplicado antes de assar ou grelhar,",
    "Combina especialmente bem com salmão, tilápia e frango.",
    "Experimente misturar com manteiga para temperar legumes e carnes.",
    "Evite exagerar na quantidade para não mascarar o sabor dos alimentos.",
    "Pode substituir limão e pimenta em receitas rápidas."
  ],
},
{
  id: "tempero-baiano",
  name: "Tempero Baiano",
  category: "temperos",
  emoji: "🌶️",
  description: "Mistura tradicional de especiarias muito utilizada na culinária brasileira, especialmente na Bahia. Possui sabor marcante, levemente picante e aromático, geralmente combinando cúrcuma, cominho, pimenta, coentro e outras especiarias.",
  uses: [
    "Feijão",
    "Carnes",
    "Frango",
    "Peixes",
    "Moquecas",
    "Ensopados",
    "Refogados"
  ],
  howToUse: [
    "Adicione durante o refogado de cebola e alho para liberar os aromas.",
    "Use para temperar carnes e aves antes do preparo.",
    "Misture em feijões, caldos e ensopados para dar mais sabor.",
    "Experimente em moquecas e pratos à base de peixe."
  ],
  storage: "Armazene em pote bem fechado, em local seco, fresco e protegido da luz. Mantém o sabor e aroma por até 2 anos.",
  tips: [
    "Comece com pequenas quantidades, pois algumas versões podem ser bastante intensas.",
    "Combina muito bem com leite de coco e azeite de dendê.",
    "Pode substituir várias especiarias individuais em receitas do dia a dia.",
    "Excelente para dar mais cor e sabor a pratos simples.",
    "Não existe uma receita única para o tempero baiano; os ingredientes variam conforme o fabricante e a região.",
  ],
},
{
  id: "pimenta-do-reino",
  name: "Pimenta-do-Reino",
  category: "temperos",
  emoji: "⚫",
  description: "Uma das especiarias mais populares do mundo, a pimenta-do-reino possui sabor picante e aroma marcante. Pode ser encontrada em grãos ou moída e combina com praticamente todos os tipos de preparações salgadas.",
  uses: [
    "Carnes",
    "Frango",
    "Peixes",
    "Molhos",
    "Sopas",
    "Saladas",
    "Legumes"
  ],
  howToUse: [
    "Moa na hora para obter mais aroma e sabor.",
    "Adicione durante o preparo ou na finalização dos pratos.",
    "Use em marinadas para carnes e aves.",
    "Combine com sal para temperar receitas do dia a dia."
  ],
  storage: "Conserve em recipiente fechado, longe da luz e da umidade. Os grãos inteiros mantêm o aroma por mais tempo, podendo durar até 3 anos.",
  tips: [
    "Prefira comprar em grãos e moer apenas a quantidade necessária.",
    "Combina com praticamente qualquer tempero salgado.",
    "A pimenta preta costuma ter sabor mais intenso que a branca.",
    "Use com moderação para não sobrepor os demais sabores."
  ],
},
{
  id: "colorau",
  name: "Colorau",
  category: "temperos",
  emoji: "🟠",
  description: "Tempero produzido a partir do urucum moído, muito utilizado na culinária brasileira para dar cor vibrante aos alimentos. Possui sabor suave e levemente terroso.",
  uses: [
    "Arroz",
    "Frango",
    "Carnes",
    "Peixes",
    "Ensopados",
    "Molhos",
    "Refogados"
  ],
  howToUse: [
    "Adicione ao refogado para liberar a cor e o aroma.",
    "Misture em marinadas para carnes e aves.",
    "Use para colorir arroz, molhos e ensopados.",
    "Combine com alho, cebola e outros temperos para um sabor mais completo."
  ],
  storage: "Guarde em recipiente bem fechado, protegido da luz, calor e umidade. Mantém suas características por até 2 anos.",
  tips: [
    "É usado principalmente para dar cor aos alimentos.",
    "Não costuma deixar os pratos picantes.",
    "Combina muito bem com alho, cebola e cominho.",
    "Pode substituir corantes artificiais em diversas receitas."
  ],
},
{
  id: "chimichurri-sem-pimenta",
  name: "Chimichurri sem Pimenta",
  category: "temperos",
  emoji: "🌿",
  description: "Mistura de ervas e especiarias inspirada no tradicional tempero argentino. Sem ingredientes picantes, oferece sabor aromático e levemente ácido, sendo ideal para quem busca realçar os alimentos sem adicionar ardência.",
  uses: [
    "Carnes",
    "Frango",
    "Peixes",
    "Legumes assados",
    "Batatas",
    "Molhos",
    "Saladas"
  ],
  howToUse: [
    "Polvilhe sobre carnes antes de grelhar ou assar.",
    "Misture com azeite para criar um molho rápido.",
    "Use em marinadas para aves e peixes.",
    "Adicione após o preparo para preservar o aroma das ervas."
  ],
  storage: "Armazene em recipiente bem fechado, em local fresco, seco e protegido da luz. Conserva melhor o sabor por até 1 ano.",
  tips: [
    "Misturado ao azeite, torna-se um excelente molho para churrasco.",
    "Combina muito bem com alho e limão.",
    "Pode ser usado como tempero para legumes assados e saladas.",
    "Deixe hidratar por alguns minutos em azeite antes de servir para intensificar o sabor."
  ],
},
{
  id: "oregano",
  name: "Orégano",
  category: "temperos",
  emoji: "🌿",
  description: "Erva aromática muito utilizada na culinária mediterrânea. Possui sabor levemente amargo, refrescante e marcante, sendo especialmente conhecida pelo uso em pizzas, molhos e massas.",
  uses: [
    "Pizzas",
    "Massas",
    "Molhos de tomate",
    "Saladas",
    "Carnes",
    "Legumes",
    "Pães"
  ],
  howToUse: [
    "Polvilhe sobre pizzas antes ou depois de assar.",
    "Adicione a molhos de tomate durante o cozimento.",
    "Misture em saladas e vinagretes.",
    "Use em marinadas para carnes e frango."
  ],
  storage: "Guarde em recipiente bem fechado, protegido da luz, calor e umidade. Conserva o aroma por até 2 anos.",
  tips: [
    "Esfregue as folhas secas entre os dedos antes de usar para liberar mais aroma.",
    "Combina muito bem com tomate, queijo, alho e azeite.",
    "Pode ser utilizado tanto durante o preparo quanto na finalização dos pratos.",
    "É um dos temperos mais tradicionais da culinária italiana."
  ],
},
{
  id: "ervas-finas",
  name: "Ervas Finas",
  category: "temperos",
  emoji: "🌱",
  description: "Mistura aromática de ervas desidratadas, geralmente composta por orégano, manjericão, tomilho, alecrim, salsa e outras ervas. Muito utilizada para dar sabor e aroma a diversos pratos.",
  uses: [
    "Frango",
    "Peixes",
    "Carnes",
    "Massas",
    "Molhos",
    "Legumes",
    "Saladas"
  ],
  howToUse: [
    "Adicione durante o preparo para que as ervas liberem seus aromas.",
    "Misture em molhos, sopas e ensopados.",
    "Use para temperar carnes, aves e peixes antes de cozinhar.",
    "Polvilhe sobre legumes assados e saladas."
  ],
  storage: "Armazene em recipiente fechado, em local seco e protegido da luz. Mantém o aroma por até 1 ano.",
  tips: [
    "Combina muito bem com azeite e manteiga.",
    "Excelente para receitas rápidas quando não há ervas frescas disponíveis.",
    "Use com moderação para que uma erva não se sobressaia às demais.",
    "Pode ser adicionada ao pão de alho, manteigas temperadas e marinadas."
  ],
},
{
  id: "folha-de-louro",
  name: "Folha de Louro",
  category: "temperos",
  emoji: "🍃",
  description: "O louro é utilizado na culinária há milhares de anos. Erva aromática muito utilizada em cozimentos longos. Possui aroma marcante e sabor levemente amadeirado e herbal, capaz de enriquecer caldos, feijões, carnes e ensopados.",
  uses: [
    "Feijão",
    "Carnes",
    "Ensopados",
    "Sopas",
    "Caldos",
    "Molhos",
    "Arroz"
  ],
  howToUse: [
    "Adicione 1 ou 2 folhas durante o cozimento do prato.",
    "Utilize em preparos de longa duração para liberar gradualmente o aroma.",
    "Retire as folhas antes de servir.",
    "Pode ser usado em marinadas para carnes e aves."
  ],
  storage: "Guarde em recipiente bem fechado, protegido da luz, calor e umidade. As folhas secas conservam suas propriedades por até 2 anos.",
  tips: [
    "Uma pequena quantidade já é suficiente para aromatizar a receita.",
    "Combina muito bem com alho, cebola, pimenta-do-reino e tomilho.",
    "É um ingrediente clássico no preparo de feijão.",
    "Folhas inteiras são preferíveis, pois preservam melhor o aroma."
  ],
},
// mistura
{
  id: "tempero-rancheiro",
  name: "Tempero Rancheiro",
  category: "misturas",
  emoji: "🧂",
  description: "Mistura de temperos secos para temperar carnes antes de grelhar ou assar.",
  uses: ["Carnes bovinas", "Frango", "Costela"],
  ingredients: [
    "1/2 Cebola", 
    "5 dentes de alho", 
    "50g de bacon", 
    "1 folha de louro", 
    "1 colher de cominho", 
    "1 colher de chá de colorau",
    "1 colher de chá de sal",
    "pimenta do reino a gosto"
  ],
  howToUse: ["Misture tudo", "Esfregue na carne 30 min antes de cozinhar"],
  storage: "Pote de vidro fechado, até 5 dias.",
  tips: ["Use com moderação, é um tempero forte", "Fica ótimo em frango assado também"],
},
{
  id: "tempero-de-bisteca",
  name: "Tempero de Bisteca Frita",
  category: "misturas",
  emoji: "🍖",
  description: "Mistura de temperos para bisteca de frigideira.",
  uses: ["Carnes bovinas"],
  ingredients: [
    "3 colheres de sopa de azeite", 
    "1 colher de sopa de molho de alho", 
    "sal a gosto", 
    "1/4 pimenta dedo de moça amassado ou uma colher de chá de pimenta calabresa", 
    "3 colheres de sopa de vinagre",
  ],
  howToUse: ["Misture tudo", "Passe na carne antes de levar a frigideira"],
  storage: "",
  tips: ["deixe escorrer todo o líquido da carne antes de levar à frigideira", "Raspe de leve a carne com uma faca sem dente", "Dê pequenos cortes nas laterais da carne para a ela não dobrar na panela" ],
},
{
  id: "tempero-sobrecoxa-frango",
  name: "Tempero para Sobrecoxa de Frango na Air Fryer",
  category: "misturas",
  emoji: "🍗",
  description: "Tempero simples e aromático para sobrecoxa de frango.",
  uses: [
    "Sobrecoxa de frango",
    "Coxa de frango",
    "Frango inteiro",
    "Asinhas"
  ],
  ingredients: [
    "3 dentes de alho amassados",
    "1 colher de chá de colorau ou páprica doce",
    "1 colher de chá de orégano ou tomilho",
    "1 colher de chá de pimenta-do-reino",
    "Sal a gosto"
  ],
  howToUse: [
    "Misture todos os ingredientes.",
    "Espalhe sobre o frango por todos os lados.",
    "Deixe marinar por pelo menos 30 minutos.",
    "Asse, grelhe ou frite normalmente."
  ],
  storage: "Consumir logo após o preparo. Se já estiver misturado no frango cru, conservar refrigerado por até 24 horas.",
  tips: [
    "Quanto mais tempo marinar, mais saboroso ficará.",
    "Adicione algumas gotas de limão para um sabor mais cítrico.",
    "Páprica doce deixa a pele mais dourada e bonita.",
    "Tomilho combina especialmente bem com frango assado."
  ],
},
{
  id: "tempero-frango-defumado-citrico",
  name: "Tempero Defumado Cítrico para Frango",
  category: "misturas",
  emoji: "🍗",
  description: "Mistura caseira com ervas, notas cítricas e toque defumado, criada especialmente para frango assado na air fryer.",
  uses: [
    "Sobrecoxa",
    "Coxa de frango",
    "Asinhas"
  ],
  ingredients: [
    "1 colher de sopa de chimichurri sem pimenta",
    "1 colher de sopa de lemon pepper",
    "1 colher de chá de páprica defumada",
    "1 colher de chá de pimenta-do-reino",
    "Sal a gosto",
    "Se prefeirir, alho amassado ou molho de alho"
  ],
  howToUse: [
    "Misture todos os ingredientes.",
    "Faça pequenas perfurações na carne.",
    "Espalhe o tempero por todo o frango.",
    "Deixe descansar por pelo menos 30 minutos antes de cozinhar."
  ],
  storage: "Se misturada ao frango cru, mantenha refrigerada e utilize em até 24 horas.",
  tips: [
    "Pode adicionar azeite para formar uma marinada.",
    "Quanto maior o tempo de descanso, mais intenso o sabor.",
    "A páprica defumada ajuda a criar uma cor dourada bonita."
  ]
},
// {
//   id: "marinada-frango-festas",
//   name: "Marinada Especial para Frango Inteiro",
//   category: "misturas",
//   emoji: "🎄",
//   description: "Marinada cítrica e aromática para frango inteiro assado, ideal para ceias e ocasiões especiais.",
//   uses: [
//     "Frango inteiro",
//     "Frango de Natal",
//     "Frango assado"
//   ],
//   ingredients: [
//     "1 cebola grande",
//     "5 dentes de alho",
//     "Cheiro-verde a gosto",
//     "Suco de 2 laranjas",
//     "1 colher de sopa de páprica defumada",
//     "1 colher de sopa de lemon pepper",
//     "2 colheres de sopa de chimichurri sem pimenta",
//     "2 colheres de sopa de mostarda amarela",
//     "2 colheres de sopa de maionese",
//     "Azeite a gosto",
//     "Sal a gosto",
//     "Pimenta-do-reino a gosto"
//   ],
//   howToUse: [
//     "Bata todos os ingredientes no liquidificador ou processador até formar uma marinada homogênea.",
//     "Faça pequenas perfurações nas partes mais grossas do frango, principalmente na região do peito.",
//     "Espalhe a marinada por toda a ave",
//     "Coloque o frango em um saco culinário ou recipiente fechado.",
//     "Deixe marinar na geladeira por 12 a 24 horas.",
//     "Pré-aqueça o forno a 200°C antes levar ao forno",
//     "Para Assar, entre a pele e a carne do frango, espalhe manteiga temperada de sua preferência para deixar a carne mais suculenta e saborosa.",
//     "Se desejar, recheie o interior do frango com farofa antes de assar.",
//     "Cubra o frango com papel-alumínio e asse por aproximadamente 1 hora e 50 minutos.",
//     "Retire o papel-alumínio e pincele o frango com o caldo formado na assadeira.",
//     "Deixe dourar por cerca de 20 minutos ou mais, até atingir a cor desejada.",
//     "Se preferir uma douração mais uniforme, vire o frango, pincele novamente com o caldo da assadeira e deixe dourar por mais 20 minutos ou até ficar bem corado."
//   ],
//   storage: "A marinada deve ser utilizada imediatamente após o preparo. Após aplicada ao frango, conservar refrigerado por até 24 horas.",
//   tips: [
//     "Retire o frango da geladeira cerca de 30 minutos antes de assar.",
//     "Regue ocasionalmente com o caldo da assadeira durante o preparo.",
//     "A combinação de mostarda e maionese ajuda a formar uma pele mais dourada.",
//     "Quanto mais próximo das 24 horas de marinada, mais intenso será o sabor.",
//     "cubra as pontas das asas e coxas com papel-alumínio durante o cozimento para evitar que queimem antes do restante do frango estar cozido.",
//     "cuidado ao virar o frango, ele pode quebrar."
//   ]
// }
]