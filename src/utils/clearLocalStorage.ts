import { LOCAL_STORAGE_KEY, LOCAL_STORAGE_KEY_AUTH } from "./constants";

export const clearLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  localStorage.removeItem(LOCAL_STORAGE_KEY_AUTH);
};
