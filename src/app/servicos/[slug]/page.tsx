import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ContactButton } from '@/components/ContactButton';
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
  return <><section className="page-hero"><div className="shell"><p className="breadcrumb"><Link href="/">Início</Link> / Serviços</p><h1>{service.title}</h1><p>{service.description}</p></div></section><section className="detail-content"><div className="shell"><figure className={`detail-photo ${slug === 'lavagem-premium' ? 'detail-photo-lift' : ''}`}><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 860px) 100vw, 1360px" priority/><figcaption>Imagem ilustrativa. Não representa um serviço realizado pela Cherry.</figcaption></figure><div className="detail-grid"><div><h2>Cuidado pensado para o seu veículo.</h2></div><div><p>{service.detail}</p><p>{service.benefit}</p><p>Atendemos com horário marcado na Rua Mangueira, 177, em Jacupiranga. O leva e traz é gratuito dentro da cidade, mediante combinação prévia.</p><ContactButton subject={service.title}>Agendar este serviço pelo WhatsApp</ContactButton></div></div></div></section></>;
}
