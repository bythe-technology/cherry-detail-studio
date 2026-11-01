import Image from 'next/image';
import { ContactButton } from './ContactButton';
import styles from './StudioIntroduction.module.css';

const highlights = [
  { title: 'Hora marcada', detail: 'Tempo dedicado ao seu veículo.' },
  { title: 'Cuidado individual', detail: 'Procedimentos escolhidos após avaliação.' },
  { title: 'Leva e traz local', detail: 'Sem taxa em Jacupiranga, mediante combinação.' },
] as const;

export function StudioIntroduction() {
  return (
    <section id="estudio" className={styles.section} aria-labelledby="studio-heading">
      <div className={`shell ${styles.grid}`}>
        <figure className={styles.figure}>
          <div className={styles.photo}>
            <Image src="/fachada-oficial.webp" alt="Fachada oficial da Cherry Detail Studio, com letreiro preto e dourado e portões abertos; fotografia tratada digitalmente" fill sizes="(max-width: 860px) 100vw, 55vw" />
            <div className={styles.seal}><span>Cherry Detail Studio</span><strong>Novo espaço</strong><span>Jacupiranga · SP</span></div>
          </div>
          <figcaption>Nosso endereço. Nossa identidade. Foto da fachada com tratamento digital.</figcaption>
        </figure>
        <div className={styles.copy}>
          <p className="section-intro">De portas abertas em Jacupiranga</p>
          <h2 id="studio-heading">Um novo endereço para cuidar do seu carro.</h2>
          <p>Conheça a Cherry Detail Studio: um espaço dedicado à estética automotiva, onde cada veículo recebe atenção individual, da chegada ao acabamento.</p>
          <ul className={styles.highlights}>{highlights.map(({ title, detail }) => <li key={title}><strong>{title}</strong><span>{detail}</span></li>)}</ul>
          <ContactButton>Conhecer os serviços pelo WhatsApp</ContactButton>
          <p className={styles.address}>Rua Mangueira, 177 · Flor da Vila</p>
        </div>
      </div>
    </section>
  );
}
