import { ActionReducerMap } from "@ngrx/store";
import { APP_SETTINGS_FEATURE_KEY, CURRENT_BOARD_KEY, USER_FEATURE_KEY } from "@utils";
import { CurrentBoardEffects } from "@app/redux/effects/current-board.effects";
import { UserAuthorizeEffects } from "./effects";
import { appSettingsFeature, userFeature } from "./reducers";
import { AppState } from "./state.models";
import { currentBoardFeature } from "@app/redux/reducers/current-board.reducer";

export const appReducers: ActionReducerMap<AppState> = {
  [USER_FEATURE_KEY]: userFeature.reducer,
  [APP_SETTINGS_FEATURE_KEY]: appSettingsFeature.reducer,
  [CURRENT_BOARD_KEY]: currentBoardFeature.reducer,
};

export const appEffects = [UserAuthorizeEffects, CurrentBoardEffects];

export * from "./actions";
export * from "./state.models";
export * from "./selectors";
