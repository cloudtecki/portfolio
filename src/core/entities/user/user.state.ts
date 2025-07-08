import { initialProfileState } from './profile/profile.state';
import { initialThemeState } from './theme/theme.state';
import { UserState } from './user.reducer';

export const initialUserState: UserState = {
  profile: initialProfileState,
  theme: initialThemeState,
};
