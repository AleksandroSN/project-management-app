import { UserWithAuth } from "@app/shared";
import { createAction, props } from "@ngrx/store";
import { UserActionsName } from "@utils";

export const userAuthorize = createAction(UserActionsName.LOGIN, props<{ user: UserWithAuth }>());
export const userLogout = createAction(UserActionsName.LOGOUT);
