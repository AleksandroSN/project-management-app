import { createSelector } from "@ngrx/store";
import { appSettingsFeature } from "../reducers";

export const selectIsLoadData = createSelector(
  appSettingsFeature.selectIsLoadData,
  (isLoadData) => isLoadData,
);
