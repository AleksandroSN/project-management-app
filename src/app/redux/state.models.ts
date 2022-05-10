import { APP_SETTINGS_FEATURE_KEY, USER_FEATURE_KEY } from "@utils";

export interface UserState {
  id: string;
  login: string;
  name: string;
  isAuth: boolean;
}

export interface AppSettingsState {
}

export interface AppState {
  [USER_FEATURE_KEY]: UserState;
  [APP_SETTINGS_FEATURE_KEY]: AppSettingsState;
}
