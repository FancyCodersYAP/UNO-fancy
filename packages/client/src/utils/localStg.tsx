export const localStgMethodsObj = {
  getValue(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  addValue(key: string, value: string): void {
    localStorage.setItem(key, value);
  },
};
