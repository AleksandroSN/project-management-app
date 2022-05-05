import { ColumnModel } from "@app/shared/models/column.model";

export interface BoardModel {
  id: string;
  title: string;
  columns?: ColumnModel[];
}
