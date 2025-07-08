import { createSlice } from '@reduxjs/toolkit';
import { initialThemeState } from './theme.state';

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      localStorage.setItem('theme', state.isDark ? 'dark' : 'light');
      document.documentElement.setAttribute(
        'data-theme',
        state.isDark ? 'dark' : 'light'
      );
    },
    setTheme: (state, action) => {
      state.isDark = action.payload;
      localStorage.setItem('theme', action.payload ? 'dark' : 'light');
      document.documentElement.setAttribute(
        'data-theme',
        action.payload ? 'dark' : 'light'
      );
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
