'use client';

import { useEffect, useState } from 'react';
import { business } from '@/lib/content';
import { openingPhase, remainingTime } from '@/lib/opening';

const start = Date.parse(business.openingAt);
const end = Date.parse(business.openingEnd);

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setNow(Date.now());
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);
  if (now === null) return <p className="countdown-fallback">Inauguração em 31 de outubro, das 15h às 17h.</p>;
  const phase = openingPhase(now, start, end);
  if (phase === 'after') return <p className="countdown-message">A Cherry já está de portas abertas. Agende sua visita.</p>;
  if (phase === 'during') return <p className="countdown-message">Nossa inauguração está acontecendo. Esperamos você!</p>;
  const time = remainingTime(now, start);
  return <div className="countdown" role="timer" aria-label={`${time.days} dias, ${time.hours} horas e ${time.minutes} minutos para a inauguração`}>
    {[['dias', time.days], ['horas', time.hours], ['min', time.minutes], ['seg', time.seconds]].map(([label, value]) => <div className="countdown-unit" key={label}><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}
  </div>;
}
