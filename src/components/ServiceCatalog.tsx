import { agendaUrl, catalogForService, catalogGroups, catalogServices, formatPrice, type CatalogService } from '@/lib/catalog';
import { BookingButton } from './BookingButton';
import styles from './ServiceCatalog.module.css';

function PriceList({ service }: { service: CatalogService }) {
  return <dl className={styles.prices}>{service.prices.map(({ category, value }) => <div key={category}><dt>{category}</dt><dd>{formatPrice(value)}</dd></div>)}</dl>;
}

export function ServicePrices({ slug }: { slug: string }) {
  const services = catalogForService(slug);
  if (!services.length) return null;
  return <section className={styles.detailPrices} aria-label="Valores e agendamento">{services.map((service) => <div key={service.id}><h3>{service.title}</h3><p>Duração estimada: {service.duration}</p><PriceList service={service}/><BookingButton serviceId={service.id}/></div>)}<p className={styles.note}>Valores por porte publicados na agenda. Confirme a categoria, a disponibilidade e eventuais ajustes após a avaliação do veículo.</p></section>;
}

export function ServiceCatalog() {
  return <section id="valores" className={styles.section} aria-labelledby="catalog-title"><div className="shell">
    <div className={styles.heading}><div><p className="section-intro">Serviços, valores e horários</p><h2 id="catalog-title">Escolha o cuidado.<br/>Reserve seu horário.</h2></div><div><p>Confira o catálogo e os valores por porte do veículo. Toque em um serviço para conhecer os detalhes e agendar diretamente.</p><a className="text-link" href={agendaUrl}>Abrir agenda completa ↗</a></div></div>
    <p className={styles.note}>Valores consultados na agenda oficial em 01/11/2026. O enquadramento do porte e o preço final devem ser confirmados na agenda e na avaliação do veículo. Durações estimadas, sujeitas às condições do serviço.</p>
    <nav className={styles.categories} aria-label="Categorias de serviços">{catalogGroups.map((group, index) => <a key={group} href={`#catalog-group-${index}`}>{group}</a>)}</nav>
    {catalogGroups.map((group, index) => <div className={styles.group} key={group} id={`catalog-group-${index}`}><h3>{group}</h3>{catalogServices.filter((service) => service.group === group).map((service) => <details className={styles.item} key={service.id}><summary><span className={styles.title}>{service.title}<small>Duração estimada: {service.duration}</small></span><span className={styles.from}>{service.prices.length > 1 && <small>A partir de</small>}{formatPrice(Math.min(...service.prices.map(({ value }) => value)))}</span><span className={styles.expand} aria-hidden="true">+</span></summary><div className={styles.body}><p>{service.description}</p><div><PriceList service={service}/><BookingButton serviceId={service.id}>Agendar este serviço</BookingButton></div></div></details>)}</div>)}
    <div className={styles.custom}><p>Não encontrou o cuidado que procura? A Cherry avalia serviços específicos e prepara um orçamento personalizado.</p><a className="text-link" href="/servicos/outros-servicos/">Solicitar outro serviço ↗</a></div>
  </div></section>;
}
