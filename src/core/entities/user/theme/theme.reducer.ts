import { combineReducers } from '@reduxjs/toolkit';
import theme from './theme.slice';

const themeReducer = combineReducers({
  theme,
});

export type ThemeState = ReturnType<typeof themeReducer>;

export default themeReducer;
