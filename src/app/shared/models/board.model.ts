import { ColumnModel } from "./column.model";

export interface BoardModel {
  id: string;
  title: string;
  columns?: ColumnModel[];
}
