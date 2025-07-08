import { combineReducers } from '@reduxjs/toolkit';
import profile from './profile/profile.slice';
import theme from './theme/theme.slice';

const userReducer = combineReducers({
  profile,
  theme,
});

export type UserState = ReturnType<typeof userReducer>;

export default userReducer;
