import { simulate } from '../src/simulator';

describe('Chess Simulator', () => {
  test('Pawn move from G1 → G2', () => {
    expect(simulate('Pawn, G1')).toEqual(['G2']);
  });

  test('King move from D4', () => {
    const expected = ['C3', 'C4', 'C5', 'D3', 'D5', 'E3', 'E4', 'E5'];
    expect(simulate('King, D4').sort()).toEqual(expected.sort());
  });

  test('Queen move from A1 includes all directions', () => {
    const result = simulate('Queen, A1');
    expect(result).toContain('A8');
    expect(result).toContain('H1');
    expect(result).toContain('H8');
  });

  test('Invalid piece type throws error', () => {
    expect(() => simulate('Horse, B2')).toThrow('Unknown piece type');
  });
});
