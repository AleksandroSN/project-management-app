import { createFeature, createReducer, on } from "@ngrx/store";
import { USER_FEATURE_KEY } from "@utils";
import { userAuthorize, userLogout } from "../actions";
import { UserState } from "../state.models";

const INITIAL_STATE: UserState = {
  isAuth: false,
  login: "",
};

export const userFeature = createFeature({
  name: USER_FEATURE_KEY,
  reducer: createReducer(
    INITIAL_STATE,
    on(
      userAuthorize,
      (state, { user }): UserState => ({
        ...state,
        ...user,
      }),
    ),
    on(userLogout, (state): UserState => ({ ...state, ...INITIAL_STATE })),
  ),
});
