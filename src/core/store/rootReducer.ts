import { combineReducers } from '@reduxjs/toolkit';
import user from '../entities/user/user.reducer';
import {
  reducer as apiReducer,
  reducerPath as apiReducerPath,
} from 'core/api/api.base';

const rootReducer = combineReducers({
  user,
  [apiReducerPath]: apiReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
