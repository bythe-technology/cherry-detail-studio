type IconName = 'check' | 'calendar' | 'car' | 'shield' | 'sparkles' | 'pin' | 'clock';

const paths: Record<IconName, string> = {
  clock: 'M12 7v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
  check: 'm5 12 4 4L19 6',
  calendar: 'M7 2v5m10-5v5M3 10h18M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2Zm3 11 3 3 5-5',
  car: 'm5 10 2-6h10l2 6M3 10h18v8H3v-8Zm2 8v3m14-3v3M6 14h2m8 0h2',
  shield: 'm12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6l8-3Zm-4 9 3 3 5-6',
  sparkles: 'm12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z',
  pin: 'M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Zm-5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z',
};

export function InterfaceIcon({ name, size = 21 }: { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]}/></svg>;
}

export function EssentialList({ items }: { items: readonly string[] }) {
  return <ul className="essential-list">{items.map((item) => <li key={item}><InterfaceIcon name="check" size={18}/><span>{item}</span></li>)}</ul>;
}
