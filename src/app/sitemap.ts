import type { MetadataRoute } from 'next';
import { business, featuredServices } from '@/lib/content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap { return [{ url: business.domain, priority: 1 }, ...featuredServices.map((service) => ({ url: `${business.domain}/servicos/${service.slug}`, priority: 0.8 })), { url: `${business.domain}/privacidade`, priority: 0.2 }]; }
