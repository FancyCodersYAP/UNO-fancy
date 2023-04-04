export const isArrayAndHasItems = (array: unknown): boolean =>
  Array.isArray(array) && array.length > 0;
