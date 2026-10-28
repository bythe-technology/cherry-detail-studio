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
  { slug: 'lavagem-premium', title: 'Lavagem premium', description: 'Limpeza minuciosa, das caixas de rodas ao acabamento interno, com cuidado em cada etapa.', detail: 'Mais minuciosa e delicada que a lavagem técnica convencional, a lavagem premium começa com a pré-lavagem e a aplicação de shampoo com Snow Foam — uma espuma densa, tipo chantilly. A lavagem manual é feita com cuidado, enquanto pincéis alcançam cantos e detalhes. O veículo é elevado em uma plataforma tipo gangorra, com remoção das rodas para permitir uma limpeza profunda das caixas de rodas.', benefit: 'No interior, o serviço inclui aspiração, limpeza superficial dos bancos e limpeza dos vidros, além do condicionamento dos plásticos. O acabamento dos pneus recebe pretinho hidrofóbico, que ajuda a repelir a água por alguns dias, conforme o uso do veículo e as condições de exposição.', image: '/lavagem-premium.webp', imageAlt: 'Imagem ilustrativa da lavagem premium de um SUV compacto' },
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
