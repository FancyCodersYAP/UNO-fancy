export const localStgMethodsObj = {
  getValue(key: string): string | null {
    try {
      // return localStorage.getItem(key);
      return 'light'; //TODO нужно заменить на получить из базы
    } catch {
      return null;
    }
  },
  addValue(key: string, value: string): void {
    // localStorage.setItem(key, value);
    //TODO нужно заменить на добавить в базу
  },
};
