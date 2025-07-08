import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiStatus } from 'core/base/enum';
import { initialProfileState } from './profile.state';
import { IProfile } from 'core/base/type';

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialProfileState,
  reducers: {
    profileSuccess(state, action: PayloadAction<IProfile>) {
      state.main.status = ApiStatus.SUCCESS;
      state.main.data = action.payload;
    },
  },
});

export const { profileSuccess } = profileSlice.actions;

export default profileSlice.reducer;
