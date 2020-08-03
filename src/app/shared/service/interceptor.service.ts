import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError, from } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(public authService: AuthenticationService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request.url.includes("token")) {
      return from(this.authService.getV2CToken()).pipe(
        switchMap((token) => {
          if (token) {
            var oauth = "Bearer " + token;
            request = request.clone({
              headers: request.headers.set("Authorization", oauth),
            });
          }

          return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
              }
              return event;
            }),
            catchError((error: HttpErrorResponse) => {
              console.error(error);
              return throwError(error);
            })
          );
        })
      );
    } else {
      return next.handle(request);
    }
  }
}
