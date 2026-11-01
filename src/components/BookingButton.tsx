import { InterfaceIcon } from './InterfaceIcon';
import { catalogBookingUrl } from '@/lib/catalog';

export function BookingButton({ serviceId, children = 'Agendar online', className = 'button booking-button' }: { serviceId?: string; children?: React.ReactNode; className?: string }) {
  return <a className={className} href={catalogBookingUrl(serviceId)} aria-label={typeof children === 'string' ? children : 'Agendar online'}><InterfaceIcon name="calendar" size={22}/><span>{children}</span></a>;
}

export function FloatingBooking() { return <BookingButton className="floating-booking booking-button"/>; }
