import { Injectable } from "@angular/core";
import { HttpService } from "@app/core/services";
import { Observable } from "rxjs";
import { ColumnBodyModel, ColumnModel, ExtendedColumnModel } from "@app/shared";
import { BOARS_ENDPOINT, COLUMNS_ENDPOINT } from "@utils";

@Injectable({
  providedIn: "root",
})
export class ColumnsService {
  constructor(private httpService: HttpService) {}

  public getAllColumns(boardId: string): Observable<ColumnModel[]> {
    return this.httpService.getAll<ColumnModel>(`${BOARS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}`);
  }

  public getColumnById(boardId: string, columnId: string): Observable<ColumnModel> {
    return this.httpService.get<ColumnModel>(`${BOARS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${columnId}`);
  }

  public createColumn(boardId: string, column: ColumnBodyModel): Observable<ColumnModel> {
    return this.httpService.post<ColumnBodyModel, ColumnModel>(
      `${BOARS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}`,
      column,
    );
  }

  public updateColumn(boardId: string, columnId: string, column: ColumnBodyModel): Observable<ColumnModel> {
    return this.httpService.update<ColumnBodyModel, ColumnModel>(
      `${BOARS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${columnId}`,
      column,
    );
  }

  // eslint-disable-next-line max-len
  public deleteColumn(boardId: string, column: ExtendedColumnModel, columns: ColumnModel[]): Observable<ColumnModel[]> {
    return this.httpService.chain<ColumnModel[]>([
      this.httpService.delete<ColumnModel>(
        `${BOARS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${column.id}`,
      ),
      // eslint-disable-next-line max-len
      ...columns
        .filter((filterCol: ColumnModel) => filterCol.order > column.order)
        // eslint-disable-next-line max-len
        .map((mapCol: ColumnModel) => this.updateColumn(boardId, mapCol.id, { title: mapCol.title, order: mapCol.order - 1 })),
    ]);
  }
}
