export enum LoadingStatus {
  PENDING = "PENDING",
  LOADING = "LOADING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}

export interface StatusModel {
  type: LoadingStatus;
  info: string | null;
  code: number | string | null;
}
