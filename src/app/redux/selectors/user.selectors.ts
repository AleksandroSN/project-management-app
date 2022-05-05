import { createSelector } from "@ngrx/store";
import { userFeature } from "../reducers";

export const selectUserAuth = createSelector(userFeature.selectIsAuth, (isAuth) => isAuth);
export const selectUser = createSelector(userFeature.selectLogin, (login) => login);
