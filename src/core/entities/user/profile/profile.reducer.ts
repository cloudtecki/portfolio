import { combineReducers } from '@reduxjs/toolkit';
import profile from './profile.slice';

const profileReducer = combineReducers({
  main: profile,
});

export type ProfileState = ReturnType<typeof profileReducer>;

export default profileReducer;
