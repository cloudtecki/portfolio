export const setSessionStorage = (key: string, value: unknown): void => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorage = <T>(key: string): T | null => {
  const value = sessionStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};
