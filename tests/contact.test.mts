import test from 'node:test';
import assert from 'node:assert/strict';
import { whatsappUrl } from '../src/lib/content.ts';
import { agendaUrl, catalogServices, catalogBookingUrl, catalogForService } from '../src/lib/catalog.ts';

test('agendamento abre a agenda oficial e contato preserva WhatsApp e assunto', () => {
  assert.equal(catalogBookingUrl(), agendaUrl);
  const url = new URL(whatsappUrl('higienização de estofados'));
  assert.equal(url.hostname, 'wa.me');
  assert.equal(url.pathname, '/5513996174744');
  assert.match(url.searchParams.get('text') ?? '', /higienização de estofados/);
});

test('catálogo possui serviços únicos, valores válidos e links para a opção correta', () => {
  assert.equal(catalogServices.length, 18);
  assert.equal(new Set(catalogServices.map(({ id }) => id)).size, 18);
  for (const service of catalogServices) {
    assert.ok(service.description.length > 50);
    assert.ok(service.duration.length > 0);
    assert.ok(service.prices.length === 1 || service.prices.length === 3);
    assert.ok(service.prices.every(({ value }) => Number.isFinite(value) && value > 0));
    const url = new URL(catalogBookingUrl(service.id));
    assert.equal(url.origin, 'https://minhaautoagenda.com');
    assert.equal(url.pathname, '/p/cherrydetailstudio');
    assert.equal(url.searchParams.get('servico'), service.id);
  }
});

test('valores por porte, opções de higienização e serviço inexistente são tratados', () => {
  assert.deepEqual(catalogForService('lavagem-premium')[0].prices.map(({ value }) => value), [240, 280, 320]);
  assert.equal(catalogForService('higienizacao-de-estofados').length, 2);
  assert.deepEqual(catalogForService('inexistente'), []);
  assert.equal(catalogBookingUrl('https://outro-site.example'), agendaUrl);
});
