import { createFeature, createReducer, on } from "@ngrx/store";
import { USER_FEATURE_KEY } from "@utils";
import { userAuthorize, userLogin, userLogout } from "../actions";
import { UserState } from "../state.models";

const INITIAL_STATE: UserState = {
  isAuth: false,
  login: "",
  id: "",
  name: "",
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
    on(userLogin, (state): UserState => ({ ...state, isAuth: true })),
    on(userLogout, (state): UserState => ({ ...state, ...INITIAL_STATE })),
  ),
});
