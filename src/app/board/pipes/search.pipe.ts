/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable class-methods-use-this */
import { Pipe, PipeTransform } from "@angular/core";
import { BoardModel } from "@app/shared";

@Pipe({
  name: "search",
})
export class SearchPipe implements PipeTransform {
  transform(boards: BoardModel[] | null, str?: string): BoardModel[] | null {
    const boardSet: Set<BoardModel> = new Set();
    if (str) {
      boards?.forEach((board) =>
        board.columns?.forEach((column) =>
          column.tasks?.forEach((task) => {
            if (task.title.includes(str) || task.description.includes(str)) {
              boardSet.add(board);
            }
          }),
        ),
      );
      return Array.from(boardSet);
    }
    return null;
  }
}
