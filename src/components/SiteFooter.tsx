import Link from 'next/link';
import Image from 'next/image';
import { business, whatsappUrl } from '@/lib/content';
import { ContactButton } from './ContactButton';
import { Brand } from './Brand';

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell">
    <div className="footer-invitation"><div><p>Vamos cuidar do seu veículo?</p><span>Converse com a Cherry e encontre o cuidado ideal.</span></div><ContactButton/></div>
    <div className="footer-top"><div className="footer-identity"><Link href="/" aria-label="Cherry Detail Studio, início"><Brand/></Link><p>Estética automotiva em Jacupiranga.<br/>Cuidado em cada detalhe.</p><a href={business.instagram} target="_blank" rel="noreferrer"><Image src="/instagram.svg" alt="" width={18} height={18}/> Instagram <span aria-hidden="true">↗</span></a></div><div className="footer-column"><h2>Visite o estúdio</h2><address>Rua Mangueira, 177<br/>Flor da Vila · Jacupiranga/SP<br/>CEP 11940-000</address><a href={business.maps} target="_blank" rel="noreferrer">Como chegar <span aria-hidden="true">↗</span></a></div><div className="footer-column"><h2>Fale com a Cherry</h2><a className="footer-phone" href={whatsappUrl()}>{business.phoneDisplay}</a><p>Segunda a sexta · 08h às 18h<br/>Sábado · 08h às 13h</p><span>Atendimento com horário marcado.</span></div></div>
    <div className="footer-credit"><a className="footer-credit-link" href="https://bythe.tech/" aria-label="Desenvolvido por BYTHE"><span>Desenvolvido por</span><Image src="/bythe-mark.svg" alt="" width={35} height={28}/></a></div>
    <div className="footer-base"><p>© {new Date().getFullYear()} Cherry Detail Studio. Todos os direitos reservados.</p><div><Link href="/privacidade">Privacidade</Link><a href="#conteudo">Voltar ao topo <span aria-hidden="true">↑</span></a></div></div>
  </div></footer>;
}
