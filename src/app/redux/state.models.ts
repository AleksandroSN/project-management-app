import { USER_FEATURE_KEY } from "@utils";

export interface UserState {
  id: string;
  login: string;
  name: string;
  isAuth: boolean;
}

export interface AppState {
  [USER_FEATURE_KEY]: UserState;
}
