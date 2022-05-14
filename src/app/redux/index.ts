import { ActionReducerMap } from "@ngrx/store";
import { ALL_BOARDS_FEATURE_KEY, CURRENT_BOARD_KEY, USER_FEATURE_KEY } from "@utils";
import { UserAuthorizeEffects, CurrentBoardEffects, AllBoardsEffects } from "./effects";
import { userFeature, currentBoardFeature, allBoardsFeature } from "./reducers";
import { AppState } from "./state.models";

export const appReducers: ActionReducerMap<AppState> = {
  [USER_FEATURE_KEY]: userFeature.reducer,
  // [APP_SETTINGS_FEATURE_KEY]: appSettingsFeature.reducer,
  [CURRENT_BOARD_KEY]: currentBoardFeature.reducer,
  [ALL_BOARDS_FEATURE_KEY]: allBoardsFeature.reducer,
};

export const appEffects = [UserAuthorizeEffects, CurrentBoardEffects, AllBoardsEffects];

export * from "./actions";
export * from "./state.models";
export * from "./selectors";
