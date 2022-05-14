import { Injectable } from "@angular/core";
import { HttpService } from "@app/core/services";
import { Observable } from "rxjs";
import { ColumnBodyModel, ColumnModel } from "@app/shared";
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

  public deleteColumn(boardId: string, columnId: string): Observable<ColumnModel> {
    return this.httpService.delete<ColumnModel>(
      `${BOARDS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${columnId}`,
    );
  }
}
