export const __DEV__ = process.env.NODE_ENV !== 'production';

export const __TEST__ = process.env.NODE_ENV === 'test';

export function isFunction<T extends Function = Function>(value: any): value is T {
  return typeof value === 'function';
}
