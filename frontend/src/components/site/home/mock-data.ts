export const diferenciais = [
  { 
    title: "Motoristas Executivos", 
    description: "Equipe treinada para atendimento premium e discreto.",
    ctaText: "Conheça nossa equipe",
    modalContent: [
      "Treinamento em atendimento VIP",
      "Uniformes formais discretos",
      "Conhecimento de rotas premium",
      "Idiomas disponíveis sob consulta"
    ]
  },
  { 
    title: "Pontualidade Rigorosa", 
    description: "Monitoramento de rotas e previsao para chegada no horario.",
    ctaText: "Como garantimos a pontualidade",
    modalContent: [
      "Monitoramento de trânsito em tempo real",
      "Planejamento prévio das rotas",
      "Acompanhamento de voos",
      "Margem operacional para imprevistos"
    ]
  },
  { 
    title: "Conforto Superior", 
    description: "Veiculos selecionados para alto padrao de conforto interno.",
    ctaText: "Ver detalhes dos veículos",
    modalContent: [
      "Bancos em couro premium",
      "Ar-condicionado individual",
      "Wi-Fi e carregadores",
      "Ambiente climatizado e silencioso"
    ]
  },
  { 
    title: "Atendimento 24h", 
    description: "Atendimento de viagens 24 horas, sempre disponível para suas necessidades.",
    ctaText: "Como funciona o atendimento",
    modalContent: [
      "Atendimento para viagens 24h",
      "Alterações de rota em tempo real",
      "Suporte para imprevistos durante a viagem",
      "Confirmação automática de reservas"
    ]
  },
  { 
    title: "Seguranca Prioritaria", 
    description: "Protocolos de condução segura e acompanhamento de trajetos.",
    ctaText: "Conheça nossos protocolos",
    modalContent: [
      "Monitoramento por GPS 24h",
      "Veículos com seguro completo",
      "Manutenção preventiva regular",
      "Protocolos de saúde e segurança"
    ]
  },
  { 
    title: "Experiencia Personalizada", 
    description: "Servico adaptado ao perfil de cada cliente e roteiro.",
    ctaText: "Entenda o atendimento",
    modalContent: [
      "Preferências de temperatura e música",
      "Rotas personalizadas",
      "Acompanhamento em eventos",
      "Atendimento personalizado"
    ]
  }
];

export const passeios = [
  { name: "Gramado", location: "Rio Grande do Sul", price: "A partir de R$ 1.500", image: "/assets/passeios/Gramado.jpg" },
  { name: "Beto Carrero World", location: "Santa Catarina", price: "A partir de R$ 650", image: "/assets/passeios/beto.jpg" },
  { name: "Bombinhas", location: "Santa Catarina", price: "A partir de R$ 350", image: "/assets/passeios/bombinhas.jpg" },
  { name: "Balneário Camboriú", location: "Santa Catarina", price: "A partir de R$ 350", image: "/assets/passeios/camburiu.jpg" },
  { name: "Pomerode", location: "Santa Catarina", price: "A partir de R$ 800", image: "/assets/passeios/pomerode.jpg" },
  { name: "Serra Catarinense", location: "Santa Catarina", price: "A partir de R$ 800", image: "/assets/passeios/serra.jpg" }
];

export const frota = [
  { model: "Toyota Corolla", capacity: "4 passageiros", badge: "Executivo", image: "/assets/frota/Corolla.jpeg" },
  { model: "Volkswagen Virtus", capacity: "4 passageiros", badge: "Premium", image: "/assets/frota/Virtus.jpeg" },
  { model: "Chevrolet Spin", capacity: "6 passageiros", badge: "Familia/Grupo", image: "/assets/frota/Spin.jpeg" }
];

export const galeria = Array.from({ length: 8 }).map((_, index) => ({
  id: `img-${index + 1}`,
  label: `Imagem ${index + 1}`
}));

export const avaliacoes = [
  {
    name: "Ricardo M.",
    role: "Diretor Comercial",
    rating: 5,
    content: "Servico impecavel. Pontualidade e conforto acima do esperado para clientes VIP."
  },
  {
    name: "Fernanda A.",
    role: "Executiva",
    rating: 5,
    content: "Atendimento excelente e veiculo em estado perfeito. Experiencia realmente premium."
  },
  {
    name: "Carlos B.",
    role: "Empresario",
    rating: 5,
    content: "Uso recorrente para viagens corporativas. Time muito profissional e confiavel."
  }
];

export const faqs = [
  {
    question: "Como faco uma reserva?",
    answer: "Voce pode iniciar pela secao de reservas e concluir o atendimento via WhatsApp."
  },
  {
    question: "A VBM atende eventos corporativos?",
    answer: "Sim. Temos operacao dedicada para eventos e transporte de executivos."
  },
  {
    question: "Posso solicitar roteiro personalizado?",
    answer: "Sim. Adaptamos o servico conforme necessidade de agenda e destino."
  },
  {
    question: "Qual o horario de atendimento?",
    answer: "Atendemos 24 horas mediante agendamento antecipado."
  }
];
