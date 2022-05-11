import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ModalService } from "@app/core/services";
import { catchError, Observable, throwError } from "rxjs";
import { BackendError } from "../models";

@Injectable()
export class ErrorCatcherInterceptor implements HttpInterceptor {
  constructor(private modalService: ModalService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        const { message, statusCode } = errorResponse.error as BackendError;
        this.modalService.openErrorModal(statusCode, message);
        return throwError(() => errorResponse);
      }),
    );
  }
}
