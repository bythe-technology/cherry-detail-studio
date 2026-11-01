import Image from 'next/image';
import { whatsappUrl } from '@/lib/content';

export function ContactButton({ subject, children = 'Falar pelo WhatsApp', className = 'button whatsapp-button' }: { subject?: string; children?: React.ReactNode; className?: string }) {
  return <a className={className} href={whatsappUrl(subject)} aria-label={typeof children === 'string' && children !== 'Dúvidas?' ? children : 'Tirar dúvidas pelo WhatsApp'}><Image src="/whatsapp.svg" alt="" width={23} height={23}/><span>{children}</span></a>;
}
