export const business = {
  name: 'Cherry Detail Studio',
  phone: '5513996174744',
  phoneDisplay: '(13) 99617-4744',
  instagram: 'https://www.instagram.com/cherrydetail_studio/',
  address: 'Rua Mangueira, 177 – Flor da Vila, Jacupiranga/SP, CEP 11940-000',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua+Mangueira+177+Flor+da+Vila+Jacupiranga+SP',
  domain: 'https://cherrydetail.com.br',
  openingAt: '2026-10-31T15:00:00-03:00',
  openingEnd: '2026-10-31T17:00:00-03:00',
  ceraUrl: '',
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
  { slug: 'higienizacao-de-estofados', title: 'Higienização de estofados', description: 'Um cuidado dedicado ao interior do veículo.', detail: 'A higienização dos estofados é indicada para quem deseja renovar o cuidado com o interior do veículo. A avaliação prévia considera o material e as condições de cada peça.', benefit: 'Cuidado individual para o ambiente em que você passa mais tempo.', image: '/higienizacao-estofados.webp', imageAlt: 'Imagem ilustrativa da higienização de estofados de um carro compacto' },
  { slug: 'polimento-tecnico', title: 'Polimento técnico', description: 'Acabamento atento à condição da pintura.', detail: 'O polimento técnico é planejado a partir de uma avaliação da pintura. A proposta é trabalhar o acabamento com atenção aos detalhes e às necessidades do veículo.', benefit: 'Uma apresentação da pintura feita com critério.', image: '/polimento-tecnico.webp', imageAlt: 'Imagem ilustrativa de polimento em um sedã comum no Brasil' },
  { slug: 'lavagem-premium', title: 'Lavagem premium', description: 'Uma lavagem com mais atenção a cada etapa.', detail: 'A lavagem premium reúne cuidado na limpeza e atenção às superfícies do veículo. O procedimento é definido conforme o estado do carro e o resultado desejado.', benefit: 'Limpeza e apresentação em um atendimento cuidadoso.', image: '/lavagem-premium.webp', imageAlt: 'Imagem ilustrativa da lavagem premium de um SUV compacto' },
  { slug: 'lavagem-de-motor', title: 'Lavagem de motor', description: 'Limpeza avaliada conforme as características do veículo.', detail: 'A lavagem de motor exige avaliação prévia das condições e características do veículo. Na Cherry, o atendimento é orientado pela segurança e pelo cuidado em cada etapa.', benefit: 'Um serviço especializado com atenção à segurança.', image: '/lavagem-motor.webp', imageAlt: 'Imagem ilustrativa da limpeza cuidadosa do motor de um carro compacto' },
];

export const otherServices = ['Lavagem técnica', 'Polimento comercial', 'Vitrificação', 'Descontaminação de vidros e plásticos', 'Cristalização de vidros', 'Lavagem de chassis'];

export function whatsappUrl(subject?: string): string {
  const message = subject ? `Olá! Gostaria de saber mais sobre ${subject} na Cherry Detail Studio.` : 'Olá! Gostaria de agendar um serviço na Cherry Detail Studio.';
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}

export function bookingUrl(subject?: string): string {
  return business.ceraUrl || whatsappUrl(subject);
}
