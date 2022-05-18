import { TaskModel } from "@app/shared";

export interface ColumnBodyModel {
  title: string;
  order: number;
}

export interface ColumnModel {
  id: string;
  title: string;
  order: number;
  tasks?: TaskModel[];
}

export interface ExtendedColumnModel extends ColumnModel {
  otherColumns: string[];
  indexId: number;
}
