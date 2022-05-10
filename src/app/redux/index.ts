import { ActionReducerMap } from "@ngrx/store";
import { APP_SETTINGS_FEATURE_KEY, USER_FEATURE_KEY } from "@utils";
import { UserAuthorizeEffects } from "./effects";
import { appSettingsFeature, userFeature } from "./reducers";
import { AppState } from "./state.models";

export const appReducers: ActionReducerMap<AppState> = {
  [USER_FEATURE_KEY]: userFeature.reducer,
  [APP_SETTINGS_FEATURE_KEY]: appSettingsFeature.reducer,
};

export const appEffects = [UserAuthorizeEffects];

export * from "./actions";
export * from "./state.models";
export * from "./selectors";
