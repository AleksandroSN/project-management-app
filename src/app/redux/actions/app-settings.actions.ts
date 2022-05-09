import { createAction } from "@ngrx/store";
import { LoaderActionsName } from "@utils";

export const showLoader = createAction(LoaderActionsName.SHOW);
export const hideLoader = createAction(LoaderActionsName.HIDE);
