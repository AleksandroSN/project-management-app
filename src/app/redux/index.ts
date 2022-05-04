import { ActionReducerMap } from "@ngrx/store";
import { USER_FEATURE_KEY } from "@utils";
import { UserAuthorizeEffects } from "./effects";
import { userFeature } from "./reducers";
import { AppState } from "./state.models";

export const appReducers: ActionReducerMap<AppState> = {
  [USER_FEATURE_KEY]: userFeature.reducer,
};

export const appEffects = [UserAuthorizeEffects];

export * from "./actions";
export * from "./state.models";
export * from "./selectors";
