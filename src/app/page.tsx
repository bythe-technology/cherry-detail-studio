import Image from 'next/image';
import Link from 'next/link';
import { StudioIntroduction } from '@/components/StudioIntroduction';
import { Location } from '@/components/Location';
import { catalogServices, catalogBookingUrl } from '@/lib/catalog';
import { BookingButton } from '@/components/BookingButton';
import { ServiceCatalog } from '@/components/ServiceCatalog';
import { EssentialList, InterfaceIcon } from '@/components/InterfaceIcon';
import { ContactButton } from '@/components/ContactButton';
import { business, whatsappUrl, featuredServices } from '@/lib/content';

const localBusiness = {
  '@context': 'https://schema.org', '@type': 'AutoWash', name: business.name, url: business.domain,
  telephone: `+${business.phone}`, image: `${business.domain}/hero-car.webp`,
  address: { '@type': 'PostalAddress', streetAddress: 'Rua Mangueira, 177 – Flor da Vila', addressLocality: 'Jacupiranga', addressRegion: 'SP', postalCode: '11940-000', addressCountry: 'BR' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '13:00' },
  ], sameAs: [business.instagram],
  hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Serviços de estética automotiva', itemListElement: catalogServices.map((service) => ({
    '@type': 'OfferCatalog', name: service.title, itemListElement: service.prices.map(({ category, value }) => ({
      '@type': 'Offer', name: `${service.title} — ${category}`, price: value, priceCurrency: 'BRL', url: catalogBookingUrl(service.id),
      itemOffered: { '@type': 'Service', name: service.title, description: service.description },
    })),
  })) },
};

export default function HomePage() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, '\\u003c') }} />
    <section className="hero"><Image src="/hero-car.webp" alt="Cena ilustrativa de um Volkswagen Polo no ambiente oficial da Cherry, recriada a partir de fotos do estúdio" fill priority sizes="100vw" className="hero-image"/><div className="hero-scrim"/><div className="shell hero-content"><p className="hero-place">Estética automotiva em Jacupiranga</p><h1>Cuidado em cada detalhe.</h1><p className="hero-copy">Lavagem, proteção e acabamento. Escolha o serviço e agende online.</p><BookingButton/><a className="hero-catalog-link" href="#valores">Ver serviços e valores ↗</a><p className="image-note">Imagem ilustrativa</p></div></section>
    <StudioIntroduction/>
    <section id="servicos" className="services-section"><div className="shell"><div className="section-heading"><h2>Cuidados para seu veículo.</h2><p>Conheça os destaques ou consulte o catálogo completo.</p></div><div className="service-list">{featuredServices.map((service) => <Link className={`service-row service-row-photo ${service.slug === 'lavagem-premium' ? 'service-row-lift' : ''}`} key={service.slug} href={`/servicos/${service.slug}`}><span className="service-thumb"><Image src={service.image} alt="" fill sizes="(max-width: 560px) 100vw, 55vw"/></span><span className="service-title">{service.title}</span><span className="service-description">{service.description}</span><span className="service-arrow" aria-hidden="true">↗</span></Link>)}</div><a className="text-link service-extra" href="#valores">Ver todos os serviços e valores ↗</a></div></section>
    <ServiceCatalog/>
    <section className="kit-section"><div className="shell kit-grid"><div className="kit-copy"><h2>Cuidado profissional.</h2><EssentialList items={['Produtos adequados a cada superfície', 'Ferramentas profissionais', 'Atenção ao acabamento']}/><a className="text-link" href="#valores">Escolher meu serviço <span aria-hidden="true">↗</span></a></div><div className="kit-art"><Image src="/ferramentas-estudio.webp" alt="Cena ilustrativa de ferramentas de estética automotiva no ambiente da Cherry" fill sizes="(max-width: 860px) 100vw, 55vw"/></div></div></section>
    <section className="care-section"><div className="shell care-grid"><div className="pickup-flow"><h3>Leva e traz gratuito em Jacupiranga</h3><ol><li><strong>Reserve seu horário</strong><p>Escolha seu serviço na agenda online.</p></li><li><strong>A gente busca</strong><p>Buscamos no local e horário combinados.</p></li><li><strong>Você recebe de volta</strong><p>Entregamos após o cuidado no estúdio.</p></li></ol></div><div><h2>Leva e traz grátis.</h2><p>Dentro de Jacupiranga, mediante combinação prévia.</p><BookingButton/><p className="secondary-contact"><a href={whatsappUrl('o serviço de leva e traz')}>Combinar a retirada pelo WhatsApp ↗</a></p></div></div></section>
    <section id="sobre" className="founder-section"><div className="shell founder-grid"><div className="founder-photo"><Image src="/alessandro-portrait.webp" alt="Retrato editado de Sandro Ramos, fundador da Cherry Detail Studio" fill sizes="(max-width: 860px) 100vw, 45vw"/></div><div className="founder-copy"><p className="section-intro">Quem está à frente</p><h2>Sandro Ramos</h2><a className="sandro-profile" href="https://www.instagram.com/sandro_ramoos_/" target="_blank" rel="noreferrer"><Image src="/instagram.svg" alt="" width={18} height={18}/> @sandro_ramoos_</a><p>Fundador da Cherry e da Tiger Segurança Privada.</p><EssentialList items={['Atendimento individualizado', 'Atenção à segurança e ao acabamento']}/><BookingButton/></div></div></section>
    <section className="faq-section"><div className="shell"><h2>Antes de agendar</h2><div className="faq-grid"><div><h3><InterfaceIcon name="calendar"/>Preciso marcar horário?</h3><p>Sim. Escolha o serviço e o horário na agenda online.</p></div><div><h3><InterfaceIcon name="car"/>Atendem em domicílio?</h3><p>Os serviços são feitos no estúdio. Temos leva e traz grátis na cidade, mediante combinação.</p></div><div><h3><InterfaceIcon name="check"/>Como vejo os valores?</h3><p>Veja os preços por porte no catálogo. Serviços específicos são orçados pelo WhatsApp.</p></div><div><h3><InterfaceIcon name="calendar"/>Como agendar?</h3><p>Use “Agendar online”. Se precisar de ajuda, o WhatsApp é uma alternativa.</p></div></div></div></section>
    <Location/>
    <section id="contato" className="contact-section"><div className="shell contact-grid"><div><p className="section-intro">Estamos em Jacupiranga</p><h2>Reserve seu horário.</h2><div className="contact-actions"><BookingButton/><ContactButton>Ajuda pelo WhatsApp</ContactButton></div></div><div className="contact-info"><h3>Cherry Detail Studio</h3><p>{business.address}</p><p>Segunda a sexta: 08h às 18h<br/>Sábado: 08h às 13h<br/>Atendimento com horário marcado.</p><a href={business.maps} target="_blank" rel="noreferrer">Abrir rota <span aria-hidden="true">↗</span></a><a href={`tel:+${business.phone}`}>{business.phoneDisplay}</a></div></div></section>
  </>;
}
