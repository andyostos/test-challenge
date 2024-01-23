
const  procesarCadenaADN  = require('../dna');

describe('DNA String Filter', () => {
  test('Remove non-canonical DNA bases and case sensitivity', () => {
    expect(procesarCadenaADN('CTaGGGTA')).toBe('CTGGGTA');
  });

  test('Empty DNA string should return an empty string', () => {
    expect(procesarCadenaADN('')).toBe('');
  });
});