import test from 'node:test';
import assert from 'node:assert/strict';
import { bookingUrl, whatsappUrl, featuredServices } from '../src/lib/content.ts';

test('agendamento sempre abre o WhatsApp da Cherry com a mensagem do serviço', () => {
  const url = new URL(bookingUrl('higienização de estofados'));
  assert.equal(url.hostname, 'wa.me');
  assert.equal(url.pathname, '/5513996174744');
  assert.match(url.searchParams.get('text') ?? '', /higienização de estofados/);
  assert.equal(bookingUrl(), whatsappUrl());
});
test('todos os serviços possuem um destino válido de agendamento', () => {
  for (const service of featuredServices) {
    assert.equal(new URL(bookingUrl(service.title)).hostname, 'wa.me');
    assert.ok(service.detail.length > service.description.length);
  }
});
