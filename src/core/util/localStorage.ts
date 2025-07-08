export const get = (key: string): string | null => {
  if (window.localStorage) {
    return window.localStorage.getItem(key);
  }
  return null;
};

export const set = (key: string, value: any): void => {
  if (window.localStorage) {
    window.localStorage.setItem(key, value);
  }
};

export const remove = (key: string): void => {
  if (window.localStorage) {
    window.localStorage.removeItem(key);
  }
};

export const clear = (): void => {
  if (window.localStorage) {
    window.localStorage.clear();
  }
};
