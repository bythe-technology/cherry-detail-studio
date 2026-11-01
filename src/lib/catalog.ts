// Fonte: agenda pública da Cherry, conferida em 01/11/2026.
export const agendaUrl = 'https://minhaautoagenda.com/p/cherrydetailstudio';
export const catalogCheckedAt = '2026-11-01';
export interface CatalogPrice { category: string; value: number }
export interface CatalogService { id: string; title: string; group: string; duration: string; description: string; prices: CatalogPrice[] }
export const catalogServices: CatalogService[] = [
  {
    "id": "polimento-tecnico-141f",
    "title": "Polimento técnico",
    "group": "Pintura",
    "duration": "2 dias e 30 minutos",
    "description": "Processo de correção da pintura que reduz riscos superficiais, microrriscos, marcas de lavagem e imperfeições, recuperando o brilho, a profundidade da cor e o aspecto renovado do veículo.",
    "prices": [
      {
        "category": "Pequeno",
        "value": 900.0
      },
      {
        "category": "Médio",
        "value": 1200.0
      },
      {
        "category": "Grande",
        "value": 1400.0
      }
    ]
  },
  {
    "id": "vitrificacao-de-pintura-1421",
    "title": "Vitrificação de pintura",
    "group": "Pintura",
    "duration": "3h30min",
    "description": "Aplicação de revestimento cerâmico que forma uma camada de proteção sobre a superfície do veículo, proporcionando brilho intenso, profundidade da cor e efeito hidrofóbico. Ajuda a proteger a pintura contra agentes externos e facilita a manutenção e conservação do veículo.",
    "prices": [
      {
        "category": "Pequeno",
        "value": 600.0
      },
      {
        "category": "Médio",
        "value": 700.0
      },
      {
        "category": "Grande",
        "value": 800.0
      }
    ]
  },
  {
    "id": "higienizacao-interna-com-remocao-de-bancos-1423",
    "title": "Higienização interna com remoção de bancos",
    "group": "Interior",
    "duration": "5h30min",
    "description": "Limpeza profunda de todo o interior do veículo, com remoção dos bancos para alcançar áreas de difícil acesso. Busca reduzir a presença de fungos, bactérias e ácaros e remover sujeiras impregnadas e odores, proporcionando uma renovação completa do ambiente interno.",
    "prices": [
      {
        "category": "Pequeno",
        "value": 480.0
      },
      {
        "category": "Médio",
        "value": 650.0
      },
      {
        "category": "Grande",
        "value": 750.0
      }
    ]
  },
  {
    "id": "higienizacao-interna-sem-remocao-de-bancos-2b71",
    "title": "Higienização interna sem remoção de bancos",
    "group": "Interior",
    "duration": "4h30min",
    "description": "Limpeza profunda dos estofados, carpetes e demais superfícies internas do veículo, sem a necessidade de remoção dos bancos. Busca reduzir a presença de fungos, bactérias e ácaros e remover sujeiras impregnadas e odores, renovando o ambiente interno do veículo.",
    "prices": [
      {
        "category": "Pequeno",
        "value": 300.0
      },
      {
        "category": "Médio",
        "value": 400.0
      },
      {
        "category": "Grande",
        "value": 480.0
      }
    ]
  },
  {
    "id": "lavagem-detalhada-5bcf",
    "title": "Lavagem detalhada",
    "group": "Lavagens",
    "duration": "2h30min",
    "description": "Limpeza minuciosa da parte externa e interna do veículo, incluindo: Limpeza superficial de bancos e carpetes. Detalhamento de cantos e frestas. Aplicação de cera convencional. Hidratação convencional de rodas. Não inclui: remoção de rodas nem hidratação de plásticos e borrachas. Observação: A remoção de frisos, borrachas e acabamentos não está inclusa. Caso solicitada, poderá ser realizada mediante avaliação e cobrança adicional.",
    "prices": [
      {
        "category": "Pequeno",
        "value": 130.0
      },
      {
        "category": "Médio",
        "value": 150.0
      },
      {
        "category": "Grande",
        "value": 170.0
      }
    ]
  },
  {
    "id": "lavagem-premium-a776",
    "title": "Lavagem premium",
    "group": "Lavagens",
    "duration": "4h",
    "description": "Lavagem minuciosa com processo cuidadoso em todas as etapas, incluindo pré-lavagem, aplicação de shampoo com snow foam, limpeza detalhada com pincéis de cerdas macias , remoção das rodas para higienização completa das caixas de rodas, hidratação de plásticos e borrachas, condicionamento de pneus com proteção hidrofóbica e aplicação de cera premium para realçar o brilho e proporcionar proteção à pintura. Um cuidado superior para quem busca máxima atenção aos detalhes do veículo.",
    "prices": [
      {
        "category": "Pequeno",
        "value": 240.0
      },
      {
        "category": "Médio",
        "value": 280.0
      },
      {
        "category": "Grande",
        "value": 320.0
      }
    ]
  },
  {
    "id": "lavagem-de-chassis-dfd9",
    "title": "Lavagem de chassis",
    "group": "Lavagens",
    "duration": "2h30min",
    "description": "Limpeza especializada da parte inferior do veículo, removendo barro, terra, resíduos de estrada e sujeiras acumuladas. Procedimento realizado com equipamentos e produtos adequados, contribuindo para a conservação do veículo. Observação: O valor do serviço será definido de acordo com o nível de sujidade apresentado pelo veículo, mediante avaliação prévia.",
    "prices": [
      {
        "category": "Pequeno",
        "value": 150.0
      },
      {
        "category": "Médio",
        "value": 170.0
      },
      {
        "category": "Grande",
        "value": 200.0
      }
    ]
  },
  {
    "id": "tratamento-de-vidros-29f0",
    "title": "Tratamento de vidros",
    "group": "Acabamentos",
    "duration": "1h30min",
    "description": "Limpeza técnica e descontaminação dos vidros, seguida da aplicação de produto cristalizador que proporciona efeito hidrofóbico, repelindo a água e melhorando a visibilidade durante a condução, principalmente em dias de chuva.",
    "prices": [
      {
        "category": "Pequeno",
        "value": 130.0
      },
      {
        "category": "Médio",
        "value": 140.0
      },
      {
        "category": "Grande",
        "value": 150.0
      }
    ]
  },
  {
    "id": "polimento-de-farois-par-4301",
    "title": "Polimento de faróis (par)",
    "group": "Acabamentos",
    "duration": "3h30min",
    "description": "Processo de recuperação da transparência dos faróis, reduzindo o amarelamento, o aspecto opaco e as marcas superficiais. Proporciona melhor acabamento estético, maior transparência e melhor aproveitamento da iluminação. Observação: É necessária uma avaliação prévia para verificar as condições dos faróis e identificar se há possibilidade de recuperação.",
    "prices": [
      {
        "category": "Valor único",
        "value": 250.0
      }
    ]
  },
  {
    "id": "detalhamento-de-caixa-de-rodas-protecao-15f3",
    "title": "Detalhamento de caixas de rodas + proteção",
    "group": "Acabamentos",
    "duration": "1h30min",
    "description": "Limpeza profunda das caixas de rodas, removendo barro, graxa e sujeiras impregnadas. Após a limpeza, é aplicado produto específico para condicionamento e proteção das superfícies, proporcionando melhor acabamento e conservação. Observação: O valor poderá variar de acordo com o nível de sujidade do veículo.",
    "prices": [
      {
        "category": "Pequeno",
        "value": 80.0
      },
      {
        "category": "Médio",
        "value": 100.0
      },
      {
        "category": "Grande",
        "value": 120.0
      }
    ]
  },
  {
    "id": "polimento-de-farois-protecao-vitrificacao-5bf7",
    "title": "Polimento de faróis + proteção (vitrificação)",
    "group": "Acabamentos",
    "duration": "4h30min",
    "description": "Processo de recuperação da transparência dos faróis, reduzindo o amarelamento, a opacidade e marcas superficiais. Após o polimento, é aplicado um revestimento protetor (vitrificador), que forma uma camada de proteção contra raios UV e agentes externos, ajudando a preservar a transparência e retardar o amarelamento. Observação: É necessária uma avaliação prévia para verificar as condições dos faróis e identificar a possibilidade de recuperação.",
    "prices": [
      {
        "category": "Valor único",
        "value": 330.0
      }
    ]
  },
  {
    "id": "descontaminacao-revitalizacao-de-plasticos-externos-75d6",
    "title": "Descontaminação + revitalização de plásticos externos",
    "group": "Acabamentos",
    "duration": "1h30min",
    "description": "Limpeza técnica com utilização de APC (limpador multiuso) específico para plásticos, auxiliando na remoção de sujeiras impregnadas e resíduos acumulados. Após a descontaminação, é aplicado um condicionador protetor que realça a aparência dos plásticos e ajuda a protegê-los contra o ressecamento e a ação dos agentes externos.",
    "prices": [
      {
        "category": "Pequeno",
        "value": 100.0
      },
      {
        "category": "Médio",
        "value": 120.0
      },
      {
        "category": "Grande",
        "value": 130.0
      }
    ]
  },
  {
    "id": "descontaminacao-revitalizacao-de-plasticos-internos-abd3",
    "title": "Descontaminação + revitalização de plásticos internos",
    "group": "Interior",
    "duration": "1h30min",
    "description": "Limpeza técnica com APC específico para plásticos internos, utilizando pincéis de cerdas macias para alcançar cantos, frestas e áreas de difícil acesso. Após a limpeza, é aplicado um condicionador protetor que renova o aspecto dos plásticos e ajuda a proteger contra o ressecamento e o desgaste diário.",
    "prices": [
      {
        "category": "Pequeno",
        "value": 130.0
      },
      {
        "category": "Médio",
        "value": 150.0
      },
      {
        "category": "Grande",
        "value": 170.0
      }
    ]
  },
  {
    "id": "descontaminacao-a-vapor-2x-mais-limpeza-revitalizacao-de-plasticos-e2e0",
    "title": "Descontaminação a vapor + revitalização de plásticos",
    "group": "Interior",
    "duration": "2h30min",
    "description": "Processo avançado de limpeza que combina vapor e APC com ação antibactericida, potencializando a remoção de sujeiras impregnadas e resíduos. Inclui detalhamento com pincéis de cerdas macias e aplicação de produto revitalizador, renovando a aparência dos plásticos e auxiliando na conservação das superfícies. Diferencial: Dupla ação de limpeza, combinando vapor e APC antibactericida para um resultado superior.",
    "prices": [
      {
        "category": "Pequeno",
        "value": 160.0
      },
      {
        "category": "Médio",
        "value": 180.0
      },
      {
        "category": "Grande",
        "value": 200.0
      }
    ]
  },
  {
    "id": "lavagem-de-motor-a-vapor-347e",
    "title": "Lavagem de motor a vapor",
    "group": "Motor",
    "duration": "2h30min",
    "description": "Limpeza técnica do compartimento do motor utilizando vapor e produtos específicos, auxiliando na remoção de graxa, óleos e sujeiras impregnadas. O processo permite uma limpeza mais controlada, alcançando áreas de difícil acesso e proporcionando melhor acabamento e conservação dos componentes. Observação: Serviço realizado mediante avaliação prévia das condições do motor e de seus componentes.",
    "prices": [
      {
        "category": "Pequeno",
        "value": 150.0
      },
      {
        "category": "Médio",
        "value": 180.0
      },
      {
        "category": "Grande",
        "value": 200.0
      }
    ]
  },
  {
    "id": "lavagem-de-motor-5020",
    "title": "Lavagem de motor",
    "group": "Motor",
    "duration": "1h",
    "description": "Limpeza técnica do compartimento do motor com produtos específicos e técnicas adequadas para remover resíduos de óleo, graxa e sujeiras acumuladas, proporcionando melhor aparência e conservação dos componentes.  Serviço sujeito à avaliação prévia das condições do motor e de seus componentes.",
    "prices": [
      {
        "category": "Pequeno",
        "value": 180.0
      },
      {
        "category": "Médio",
        "value": 200.0
      },
      {
        "category": "Grande",
        "value": 250.0
      }
    ]
  },
  {
    "id": "descontaminacao-de-pintura-protecao-de-pintura-f141",
    "title": "Descontaminação de pintura + proteção de pintura",
    "group": "Pintura",
    "duration": "2h30min",
    "description": "Processo técnico de descontaminação que remove impurezas impregnadas na superfície da pintura, restaurando a suavidade ao toque e preparando-a para receber a proteção. Finalizado com a aplicação de um protetor de alta qualidade, que realça o brilho, proporciona efeito hidrofóbico e cria uma barreira protetora que dificulta a aderência de contaminantes, como seiva de árvores e dejetos de pássaros, facilitando a limpeza e preservando o acabamento por mais tempo.",
    "prices": [
      {
        "category": "Pequeno",
        "value": 150.0
      },
      {
        "category": "Médio",
        "value": 180.0
      },
      {
        "category": "Grande",
        "value": 200.0
      }
    ]
  },
  {
    "id": "polimento-comercial-1-etapa-5e28",
    "title": "Polimento comercial (1 etapa)",
    "group": "Pintura",
    "duration": "9h30min",
    "description": "Processo de polimento realizado em etapa única, utilizando compostos e boinas específicas para renovar visualmente a pintura, reduzir marcas superficiais e realçar o brilho e a profundidade da cor. Ideal para quem busca uma valorização estética rápida do veículo, sendo bastante utilizado por revendedores e lojistas na preparação de veículos para exposição e venda. Observação: O resultado depende das condições da pintura. Não tem como objetivo a correção profunda de riscos e imperfeições.",
    "prices": [
      {
        "category": "Valor único",
        "value": 500.0
      }
    ]
  }
];

export const catalogGroups = ['Lavagens', 'Interior', 'Pintura', 'Motor', 'Acabamentos'] as const;
const featuredCatalogIds: Record<string, readonly string[]> = {
  'higienizacao-de-estofados': ['higienizacao-interna-com-remocao-de-bancos-1423', 'higienizacao-interna-sem-remocao-de-bancos-2b71'],
  'polimento-tecnico': ['polimento-tecnico-141f'],
  'lavagem-premium': ['lavagem-premium-a776'],
  'lavagem-de-motor': ['lavagem-de-motor-5020', 'lavagem-de-motor-a-vapor-347e'],
};
export function catalogForService(slug: string): CatalogService[] {
  const ids = featuredCatalogIds[slug] ?? [];
  return catalogServices.filter((service) => ids.includes(service.id));
}
export function catalogBookingUrl(id?: string): string {
  const url = new URL(agendaUrl);
  if (id && catalogServices.some((service) => service.id === id)) url.searchParams.set('servico', id);
  return url.toString();
}
export function formatPrice(value: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}
