'use client';
import { useEffect, useState } from 'react';

export function MotionLayer() {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    document.body.dataset.motionPaused = String(paused);
    return () => { delete document.body.dataset.motionPaused; };
  }, [paused]);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || paused) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver((entries) => {
      if (preference.matches) return;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animations.push(entry.target.animate([{ opacity: 0, transform: 'translateY(22px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'none' }));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('main section h2,main section h3,.service-row,.founder-photo,.location-map,.care-grid>div,.kit-copy,.kit-art').forEach((element) => observer.observe(element));
    const stop = () => { if (preference.matches) animations.forEach((animation) => animation.cancel()); };
    preference.addEventListener('change', stop);
    return () => { observer.disconnect(); animations.forEach((animation) => animation.cancel()); preference.removeEventListener('change', stop); };
  }, [paused]);
  return <div className="motion-preference shell"><button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? 'Retomar animações' : 'Pausar animações'} <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span></button></div>;
}
