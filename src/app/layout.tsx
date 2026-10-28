import type { Metadata, Viewport } from 'next';
import { business } from '@/lib/content';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import './globals.css';
import './studio.css';
import './refinement.css';
import './brand-refresh.css';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-manrope' });

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: { default: 'Estética Automotiva em Jacupiranga | Cherry Detail Studio', template: '%s | Cherry Detail Studio' },
  description: 'Estética e detalhamento automotivo em Jacupiranga. Lavagem premium, polimento técnico, higienização de estofados e leva e traz gratuito na cidade.',
  alternates: { canonical: '/' },
  openGraph: { type: 'website', locale: 'pt_BR', siteName: business.name, images: ['/hero-car.webp'] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#0b0b0b' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={manrope.variable}><body><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><SiteHeader/><main id="conteudo">{children}</main><SiteFooter/></body></html>;
}
