import { USER_FEATURE_KEY } from "@utils";

export interface UserState {
  login: string;
  isAuth: boolean;
}

export interface AppState {
  [USER_FEATURE_KEY]: UserState;
}
