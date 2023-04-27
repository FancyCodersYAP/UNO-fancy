export const localStgMethodsObj = {
  getValue(key: string): string | null {
    try {
      if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(key);
      } else return 'light';
    } catch {
      return null;
    }
  },
  addValue(key: string, value: string): void {
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        console.log(e);
      }
    }
  },
};
