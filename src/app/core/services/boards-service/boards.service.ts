import { Injectable } from "@angular/core";
import { HttpService } from "@app/core/services";
import { Observable } from "rxjs";
import { BoardModel, BoardBodyModel } from "@app/shared";
import { BOARDS_ENDPOINT } from "@utils";

@Injectable({
  providedIn: "root",
})
export class BoardsService {
  constructor(private httpService: HttpService) {}

  public getAllBoards(): Observable<BoardModel[]> {
    return this.httpService.getAll<BoardModel>(`${BOARDS_ENDPOINT}`);
  }

  public getBoardById(id: string): Observable<BoardModel> {
    return this.httpService.get<BoardModel>(`${BOARDS_ENDPOINT}/${id}`);
  }

  public createBoard(board: BoardBodyModel): Observable<BoardModel> {
    return this.httpService.post<BoardBodyModel, BoardModel>(`${BOARDS_ENDPOINT}`, board);
  }

  public updateBoard(id: string, board: BoardBodyModel): Observable<BoardModel> {
    return this.httpService.update<BoardBodyModel, BoardModel>(`${BOARDS_ENDPOINT}/${id}`, board);
  }

  public deleteBoard(id: string): Observable<BoardModel> {
    return this.httpService.delete<BoardModel>(`${BOARDS_ENDPOINT}/${id}`);
  }
}
