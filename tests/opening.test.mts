import test from 'node:test';
import assert from 'node:assert/strict';
import { openingPhase, remainingTime } from '../src/lib/opening.ts';

const start = Date.parse('2026-10-31T15:00:00-03:00');
const end = Date.parse('2026-10-31T17:00:00-03:00');
test('inauguração tem fases corretas nas fronteiras', () => { assert.equal(openingPhase(start - 1, start, end), 'before'); assert.equal(openingPhase(start, start, end), 'during'); assert.equal(openingPhase(end, start, end), 'after'); });
test('contador nunca fica negativo', () => { assert.deepEqual(remainingTime(start + 1000, start), { days: 0, hours: 0, minutes: 0, seconds: 0 }); assert.deepEqual(remainingTime(start - 1000, start), { days: 0, hours: 0, minutes: 0, seconds: 1 }); });
