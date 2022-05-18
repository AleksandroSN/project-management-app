import { Injectable } from "@angular/core";
import { HttpService } from "@app/core/services";
import { Observable } from "rxjs";
import { ColumnBodyModel, ColumnModel, ExtendedColumnModel } from "@app/shared";
import { BOARDS_ENDPOINT, COLUMNS_ENDPOINT } from "@utils";

@Injectable({
  providedIn: "root",
})
export class ColumnsService {
  constructor(private httpService: HttpService) {}

  public getAllColumns(boardId: string): Observable<ColumnModel[]> {
    return this.httpService.getAll<ColumnModel>(`${BOARDS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}`);
  }

  public getColumnById(boardId: string, columnId: string): Observable<ColumnModel> {
    return this.httpService.get<ColumnModel>(`${BOARDS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${columnId}`);
  }

  public createColumn(boardId: string, column: ColumnBodyModel): Observable<ColumnModel> {
    return this.httpService.post<ColumnBodyModel, ColumnModel>(
      `${BOARDS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}`,
      column,
    );
  }

  public updateColumn(boardId: string, columnId: string, column: ColumnBodyModel): Observable<ColumnModel> {
    return this.httpService.update<ColumnBodyModel, ColumnModel>(
      `${BOARDS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${columnId}`,
      column,
    );
  }

  public moveColumn(
    boardId: string,
    column: ColumnModel,
    columns: ColumnModel[],
    previousIndex: number,
    currentIndex: number,
  ): Observable<ColumnModel[]> {
    const minOrder = previousIndex < currentIndex ? previousIndex : currentIndex - 1;
    const maxOrder = previousIndex > currentIndex ? previousIndex : currentIndex + 1;
    const between = (): Observable<ColumnModel>[] => {
      const filtered = columns.filter(
        (filterCol: ColumnModel) => filterCol.order > minOrder + 1 && filterCol.order < maxOrder + 1,
      );
      if (currentIndex < previousIndex) {
        filtered.reverse();
      }
      return filtered.map((mapCol: ColumnModel) => {
        return this.updateColumn(
          boardId,
          mapCol.id,
          { title: mapCol.title, order: mapCol.order + (currentIndex < previousIndex ? 1 : -1) },
        );
      });
    };
    return this.httpService.chain<ColumnModel[]>([
      this.updateColumn(
        boardId,
        column.id,
        { title: column.title, order: columns.length + 1 },
      ),
      ...between(),
      this.updateColumn(
        boardId,
        column.id,
        { title: column.title, order: currentIndex + 1 },
      ),
    ]);
  }

  // eslint-disable-next-line max-len
  public deleteColumn(
    boardId: string,
    column: ExtendedColumnModel,
    columns: ColumnModel[],
  ): Observable<ColumnModel[]> {
    return this.httpService.chain<ColumnModel[]>([
      this.httpService.delete<ColumnModel>(`${BOARDS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${column.id}`),
      // eslint-disable-next-line max-len
      ...columns
        .filter((filterCol: ColumnModel) => filterCol.order > column.order)
        // eslint-disable-next-line max-len
        .map((mapCol: ColumnModel) => this.updateColumn(boardId, mapCol.id, { title: mapCol.title, order: mapCol.order - 1 })),
    ]);
  }
}
