import { createSelector } from "@ngrx/store";
import { userFeature } from "../reducers";

export const selectUserAuth = createSelector(userFeature.selectIsAuth, (isAuth) => isAuth);
export const selectUserLogin = createSelector(userFeature.selectLogin, (login) => login);
export const selectUser = createSelector(userFeature.selectUserFeatureState, (user) => user);
