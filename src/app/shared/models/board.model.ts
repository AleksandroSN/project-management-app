import { ColumnModel } from "@app/shared";

export interface BoardModel {
  id: string;
  title: string;
  description: string;
  columns?: ColumnModel[];
}
