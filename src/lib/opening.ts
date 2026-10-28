export type OpeningPhase = 'before' | 'during' | 'after';

export function openingPhase(now: number, start: number, end: number): OpeningPhase {
  if (now < start) return 'before';
  if (now < end) return 'during';
  return 'after';
}

export function remainingTime(now: number, start: number) {
  const seconds = Math.max(0, Math.floor((start - now) / 1000));
  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}
