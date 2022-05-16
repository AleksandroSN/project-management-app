import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NotificationsService } from "@app/core/services";
import { BOARDS_ENDPOINT, checkLenghtStr } from "@utils";
import { catchError, Observable, throwError } from "rxjs";
import { BackendError } from "../models";

@Injectable()
export class ErrorCatcherInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationsService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isBoardWithIdRoute = checkLenghtStr(BOARDS_ENDPOINT, req.url);
    if (req.url.includes(BOARDS_ENDPOINT) && !isBoardWithIdRoute) {
      return next.handle(req);
    }
    return next.handle(req).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        const { message, statusCode } = errorResponse.error as BackendError;
        this.notificationService.showNotification({
          type: "error",
          message: `[${statusCode}] ${message}`,
        });
        return throwError(() => errorResponse);
      }),
    );
  }
}
