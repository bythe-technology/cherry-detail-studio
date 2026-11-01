import Link from 'next/link';
import { BookingButton } from './BookingButton';
import { Brand } from './Brand';
import { MobileNavigation } from './MobileNavigation';

export function SiteHeader() {
  return <header className="site-header"><div className="shell header-inner">
    <Link className="brand" href="/" aria-label="Cherry Detail Studio, página inicial"><Brand/></Link>
    <nav aria-label="Navegação principal"><a href="/#servicos">Serviços</a><a href="/#valores">Valores</a><a href="/#sobre">Sobre</a><a href="/#contato">Contato</a></nav>
    <BookingButton className="header-cta button booking-button"/>
    <MobileNavigation/>
  </div></header>;
}
