import { ApiConfig } from './http';
import { GenericState } from './store';
import { IProfile } from './profile';

export * from './profile';
export * from './http';

export type IMultiApiConfig<T = {}> = {
  [key in keyof T]: ApiConfig;
};

export type UserProfileState = {
  main: GenericState<IProfile>;
};

export interface ThemeState {
  isDark: boolean;
}
