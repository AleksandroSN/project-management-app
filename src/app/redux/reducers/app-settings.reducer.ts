import { createFeature, createReducer, on } from "@ngrx/store";
import { APP_SETTINGS_FEATURE_KEY } from "@utils";
import { hideLoader, showLoader } from "../actions";
import { AppSettingsState } from "../state.models";

const INITIAL_STATE: AppSettingsState = {
  isLoadData: false,
};

export const appSettingsFeature = createFeature({
  name: APP_SETTINGS_FEATURE_KEY,
  reducer: createReducer(
    INITIAL_STATE,
    on(
      showLoader,
      (state): AppSettingsState => ({
        ...state,
        isLoadData: true,
      }),
    ),
    on(
      hideLoader,
      (state): AppSettingsState => ({
        ...state,
        isLoadData: false,
      }),
    ),
  ),
});
