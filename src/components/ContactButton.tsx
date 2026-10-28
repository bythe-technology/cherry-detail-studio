import Image from 'next/image';
import { whatsappUrl } from '@/lib/content';

export function ContactButton({ subject, children = 'Agendar pelo WhatsApp', className = 'button whatsapp-button' }: { subject?: string; children?: React.ReactNode; className?: string }) {
  return <a className={className} href={whatsappUrl(subject)} aria-label={subject ? `Agendar ${subject} pelo WhatsApp` : 'Agendar pelo WhatsApp'}><Image src="/whatsapp.svg" alt="" width={23} height={23}/><span>{children}</span></a>;
}

export function FloatingWhatsApp() {
  return <ContactButton className="floating-whatsapp">Agendar</ContactButton>;
}
