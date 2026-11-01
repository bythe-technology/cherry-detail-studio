import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ContactButton } from '@/components/ContactButton';
import { EssentialList } from '@/components/InterfaceIcon';
import { BookingButton } from '@/components/BookingButton';
import { serviceHighlights } from '@/lib/service-highlights';
import { ServicePrices } from '@/components/ServiceCatalog';
import { notFound } from 'next/navigation';
import { featuredServices } from '@/lib/content';

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() { return featuredServices.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = featuredServices.find((item) => item.slug === slug);
  if (!service) return {};
  return { title: `${service.title} em Jacupiranga`, description: `${service.description} Conheça a Cherry Detail Studio em Jacupiranga/SP e fale com nossa equipe.`, alternates: { canonical: `/servicos/${slug}` } };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = featuredServices.find((item) => item.slug === slug);
  if (!service) notFound();
  return <><section className="page-hero"><div className="shell"><p className="breadcrumb"><Link href="/">Início</Link> / Serviços</p><h1>{service.title}</h1><p>{service.description}</p></div></section><section className="detail-content"><div className="shell"><figure className={`detail-photo ${slug === 'lavagem-premium' ? 'detail-photo-lift' : ''}`}><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 860px) 100vw, 1360px" priority/><figcaption>Imagem ilustrativa. Não representa um serviço realizado pela Cherry.</figcaption></figure><div className="detail-grid"><div><h2>O que está incluído.</h2></div><div><EssentialList items={serviceHighlights[slug] ?? []}/><p className="service-condition">Resultado e procedimento sujeitos à avaliação do veículo.</p><ServicePrices slug={slug}/>{slug === 'outros-servicos' && <BookingButton>Ver opções na agenda</BookingButton>}<ContactButton subject={slug === 'outros-servicos' ? 'outros serviços e um orçamento personalizado' : service.title}>{slug === 'outros-servicos' ? 'Solicitar orçamento pelo WhatsApp' : 'Tirar dúvidas sobre este serviço'}</ContactButton></div></div></div></section></>;
}
