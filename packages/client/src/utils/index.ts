export const isArrayHasItems = (array: unknown): array is unknown[] => (Array.isArray(array) && array.length > 0);
