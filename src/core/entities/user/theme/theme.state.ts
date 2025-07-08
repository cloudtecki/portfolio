import { ThemeState } from 'core/base/type';

export const initialThemeState: ThemeState = {
  isDark: localStorage.getItem('theme') === 'dark' || false,
};
