import Link from 'next/link';
import { bookingUrl } from '@/lib/content';
import { Brand } from './Brand';
import { MobileNavigation } from './MobileNavigation';

export function SiteHeader() {
  return <header className="site-header"><div className="shell header-inner">
    <Link className="brand" href="/" aria-label="Cherry Detail Studio, página inicial"><Brand/></Link>
    <nav aria-label="Navegação principal"><a href="/#servicos">Serviços</a><a href="/#sobre">Sobre</a><a href="/#contato">Contato</a></nav>
    <a className="header-cta" href={bookingUrl()}>Agendar conversa <span aria-hidden="true">↗</span></a>
    <MobileNavigation/>
  </div></header>;
}
