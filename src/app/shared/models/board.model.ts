import { ColumnModel } from "@app/shared";

export interface BoardBodyModel {
  title: string;
  description: string;
}

export interface BoardModel {
  id: string;
  title: string;
  description: string;
  columns?: ColumnModel[];
}
