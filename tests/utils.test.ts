import { add } from '../src/utils';

jest.mock('../src/config', () => ({
  debug: true,
}));

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
    expect(add(-5, -5)).toBe(-10);
  });

  it('should handle large numbers', () => {
    expect(add(1000000, 2000000)).toBe(3000000);
  });
});
