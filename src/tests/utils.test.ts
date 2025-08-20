import { add } from '@/utils';

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
    expect(add(-5, -5)).toBe(-10);
  });

  it('should handle non-integer numbers', () => {
    expect(add(2.5, 3.5)).toBe(6);
    expect(add(-1.1, 1.1)).toBe(0);
  });
});
