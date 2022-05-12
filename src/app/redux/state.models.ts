import { APP_SETTINGS_FEATURE_KEY, CURRENT_BOARD_KEY, USER_FEATURE_KEY } from "@utils";
import { BoardModel, LoadingStatus } from "@app/shared";

export interface UserState {
  id: string;
  login: string;
  name: string;
  isAuth: boolean;
}

export interface AppSettingsState {}

export interface CurrentBoardState {
  board: BoardModel | undefined;
  error: string | null;
  status: LoadingStatus;
}

export interface AppState {
  [USER_FEATURE_KEY]: UserState;
  [APP_SETTINGS_FEATURE_KEY]: AppSettingsState;
  [CURRENT_BOARD_KEY]: CurrentBoardState;
}
