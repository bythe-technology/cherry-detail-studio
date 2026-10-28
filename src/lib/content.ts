export const business = {
  name: 'Cherry Detail Studio',
  phone: '5513996174744',
  phoneDisplay: '(13) 99617-4744',
  instagram: 'https://www.instagram.com/cherrydetail_studio/',
  address: 'Rua Mangueira, 177 – Flor da Vila, Jacupiranga/SP, CEP 11940-000',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Mangueira+177+Flor+da+Vila+Jacupiranga+SP',
  domain: 'https://cherrydetail.com.br',
} as const;

export interface Service {
  slug: string;
  title: string;
  description: string;
  detail: string;
  benefit: string;
  image: string;
  imageAlt: string;
}

export const featuredServices: Service[] = [
  { slug: 'higienizacao-de-estofados', title: 'Higienização de estofados', description: 'Limpeza profunda para um interior mais higienizado e renovado.', detail: 'A higienização dos estofados combina limpeza profunda e extração de sujeiras e resíduos dos bancos e tecidos. O procedimento busca reduzir a presença de fungos, ácaros e bactérias no interior do carro, conforme os produtos e métodos adequados a cada material.', benefit: 'Um interior com aspecto mais limpo, higienizado e aparência renovada. O resultado depende do material, do estado de conservação e das condições dos estofados.', image: '/higienizacao-estofados.webp', imageAlt: 'Imagem ilustrativa da higienização de estofados de um carro compacto' },
  { slug: 'polimento-tecnico', title: 'Polimento técnico', description: 'Acabamento atento à condição da pintura.', detail: 'O polimento técnico é planejado a partir de uma avaliação da pintura. A proposta é trabalhar o acabamento com atenção aos detalhes e às necessidades do veículo.', benefit: 'Uma apresentação da pintura feita com critério.', image: '/polimento-tecnico.webp', imageAlt: 'Imagem ilustrativa de polimento em um sedã comum no Brasil' },
  { slug: 'lavagem-premium', title: 'Lavagem premium', description: 'Um cuidado A+ com produtos e serviços adicionais à lavagem técnica.', detail: 'A lavagem premium oferece um cuidado A+: além da limpeza da lavagem técnica, reúne produtos e serviços agregados para dedicar mais atenção às superfícies e ao acabamento do veículo. A equipe explica os cuidados adicionais indicados para o seu carro antes do agendamento.', benefit: 'Mais cuidado no acabamento e na apresentação do veículo, com a composição do serviço definida na avaliação e no orçamento.', image: '/lavagem-premium.webp', imageAlt: 'Imagem ilustrativa da lavagem premium de um SUV compacto' },
  { slug: 'lavagem-de-motor', title: 'Lavagem de motor', description: 'Limpeza avaliada conforme as características do veículo.', detail: 'A lavagem de motor exige avaliação prévia das condições e características do veículo. Na Cherry, o atendimento é orientado pela segurança e pelo cuidado em cada etapa.', benefit: 'Um serviço especializado com atenção à segurança.', image: '/lavagem-motor.webp', imageAlt: 'Imagem ilustrativa da limpeza cuidadosa do motor de um carro compacto' },
];

export const otherServices = ['Lavagem técnica', 'Polimento comercial', 'Vitrificação', 'Descontaminação de vidros e plásticos', 'Cristalização de vidros', 'Lavagem de chassis'];

export function whatsappUrl(subject?: string): string {
  const message = subject ? `Olá! Gostaria de saber mais sobre ${subject} na Cherry Detail Studio.` : 'Olá! Gostaria de agendar um serviço na Cherry Detail Studio.';
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}

export function bookingUrl(subject?: string): string {
  return whatsappUrl(subject);
}
