export const localStgMethodsObj = {
  getValue(): string | null {
    try {
      return localStorage.getItem('theme');
    } catch {
      return null;
    }
  },
  addValue(value: string): void {
    localStorage.setItem('theme', value);
  },
};
