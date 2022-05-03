import { UserWithAuth } from "@app/shared";
import { createAction, props } from "@ngrx/store";
import { UserActionsName } from "@utils";

export const userAuthorize = createAction(UserActionsName.UPDATE, props<{ user: UserWithAuth }>());
export const userLogin = createAction(UserActionsName.LOGIN);
export const userLogout = createAction(UserActionsName.LOGOUT);
