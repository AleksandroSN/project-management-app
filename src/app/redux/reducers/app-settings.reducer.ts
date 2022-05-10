import { createFeature, createReducer } from "@ngrx/store";
import { APP_SETTINGS_FEATURE_KEY } from "@utils";
import { AppSettingsState } from "@app/redux";

const INITIAL_STATE: AppSettingsState = {
  isLoadData: false,
};

export const appSettingsFeature = createFeature({
  name: APP_SETTINGS_FEATURE_KEY,
  reducer: createReducer(
    INITIAL_STATE,
  ),
});
