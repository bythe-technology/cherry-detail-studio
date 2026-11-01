import Image from 'next/image';
import { BookingButton } from './BookingButton';
import { InterfaceIcon } from './InterfaceIcon';
import styles from './StudioIntroduction.module.css';

const highlights = [
  { title: 'Hora marcada', icon: 'calendar' as const },
  { title: 'Cuidado individual', icon: 'shield' as const },
  { title: 'Leva e traz grátis na cidade*', icon: 'car' as const },
] as const;

export function StudioIntroduction() {
  return (
    <section id="estudio" className={styles.section} aria-labelledby="studio-heading">
      <div className={`shell ${styles.grid}`}>
        <figure className={styles.figure}>
          <div className={styles.photo}>
            <Image src="/fachada-inauguracao.webp" alt="Foto da fachada da Cherry Detail Studio na inauguração, com portões abertos e arco de balões preto e dourado; céu e rua retocados" fill sizes="(max-width: 860px) 100vw, 55vw" />
          </div>
          <figcaption>Fachada da Cherry Detail Studio. Foto com tratamento digital.</figcaption>
        </figure>
        <div className={styles.copy}>
          <p className="section-intro">De portas abertas em Jacupiranga</p>
          <h2 id="studio-heading">Conheça a Cherry.</h2>
          <p>Estética automotiva em Jacupiranga, com atenção a cada veículo.</p>
          <ul className={styles.highlights}>{highlights.map(({ title, icon }) => <li key={title}><InterfaceIcon name={icon}/><strong>{title}</strong></li>)}</ul>
          <BookingButton/>
          <p className={styles.address}>*Leva e traz mediante combinação. Rua Mangueira, 177.</p>
        </div>
      </div>
    </section>
  );
}
