/* eslint-disable max-len */
// ENDPOINTS
export const USERS_ENDPOINT = "users";
export const BOARDS_ENDPOINT = "boards";
export const COLUMNS_ENDPOINT = "columns";
export const TASKS_ENDPOINT = "tasks";
export const LOGIN_ENDPOINT = "signin";
export const SINGUP_ENPOINT = "signup";

// VALIDATION
export const RegExForInputValidation = {
  minLength: "^(?=.{8,})",
  upperAndLowerCase: "^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})",
  numbersAndLetters: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})",
  specialChar: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
  urlValid:
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
};

// INPUTS
export const NAME_INPUT = "name";
export const LOGIN_INPUT = "login";
export const PASSWORD_INPUT = "password";

// ACTIONS
export enum UserActionsName {
  LOGIN = "[AUTH] User is authorized",
  LOGOUT = "[AUTH] User is logout",
  UPDATE = "[AUTH] User data updated",
}

export enum LoaderActionsName {
  SHOW = "[LOADER] Spinner show",
  HIDE = "[LOADER] Spinner hide",
}

// FEATURENAME
export const USER_FEATURE_KEY = "userFeature";
export const APP_SETTINGS_FEATURE_KEY = "appSettingsFeature";

// OTHER
export const LOCAL_STORAGE_KEY = "auth_data";
