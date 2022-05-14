import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NotificationsService } from "@app/core/services";
import { catchError, Observable, throwError } from "rxjs";
import { BackendError } from "../models";

@Injectable()
export class ErrorCatcherInterceptor implements HttpInterceptor {
  constructor(private notificationService: NotificationsService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
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
