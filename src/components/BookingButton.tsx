import { catalogBookingUrl } from '@/lib/catalog';

export function BookingButton({ serviceId, children = 'Agendar online', className = 'button booking-button' }: { serviceId?: string; children?: React.ReactNode; className?: string }) {
  return <a className={className} href={catalogBookingUrl(serviceId)} aria-label={typeof children === 'string' ? children : 'Agendar online'}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6M17 2v6M3 11h18m-13 5 3 3 5-5"/></svg><span>{children}</span></a>;
}
