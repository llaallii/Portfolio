import { cn } from './utils';

describe('cn', () => {
  it('joins class names with spaces', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  it('merges duplicate classes', () => {
    expect(cn('p-2', 'p-2')).toBe('p-2');
  });
});
