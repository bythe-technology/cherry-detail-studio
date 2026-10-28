'use client';
import { useRef } from 'react';

export function MobileNavigation() {
  const menu = useRef<HTMLDetailsElement>(null);
  const close = () => { if (menu.current) menu.current.open = false; };
  return <details ref={menu} className="mobile-navigation" onKeyDown={(event) => { if (event.key === 'Escape') { close(); menu.current?.querySelector('summary')?.focus(); } }}><summary aria-label="Abrir navegação">Menu <span aria-hidden="true">☰</span></summary><nav aria-label="Navegação móvel" onClick={(event) => { if ((event.target as HTMLElement).closest('a')) close(); }}><a href="/#servicos">Serviços</a><a href="/#sobre">Sobre a Cherry</a><a href="/#localizacao">Localização</a><a href="/#contato">Contato</a></nav></details>;
}
