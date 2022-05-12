export interface TaskBodyModel {
  title: string;
  order: number;
  done: boolean;
  description: string;
  userId: string;
}

export interface TaskModel {
  id: string;
  title: string;
  order: number;
  done: boolean;
  description: string;
  userId: string;
  files?: TaskFileModel[];
}

interface TaskFileModel {
  filename: string;
  fileSize: number;
}
