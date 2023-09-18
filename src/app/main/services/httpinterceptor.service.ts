import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //https://scotch.io/@vigneshsithirai/angular-6-7-http-client-interceptor-with-error-handling
    //https://medium.com/@johnmeguira/intercept-all-http-calls-with-angular-5-to-display-a-loader-281924b73ad8
    //https://medium.com/@zeljkoradic/loader-bar-on-every-http-request-in-angular-6-60d8572a21a9

    if (!req.headers.get('Content-Type') && !(req.body instanceof FormData)) {
      req = req.clone({
        headers: req.headers.append(
          'Content-Type',
          'application/json; charset=utf-8'
        )
      });
    }


        return next.handle(req).pipe(
          timeout(30000),
          map((event: HttpEvent<any>) => {
            return event;
          }),
          catchError((response: { error: any; message: any; }) => {
            const messages =
              response?.error?.message ||
              this.tryJsonParse(response?.error)?.message ||
              response?.message ||
              'Please try again later';

            if (Array.isArray(messages)) {
              messages.forEach((message: string, index: number) => {
                // alert with errors
                // setTimeout(() => {
                //    this.utilService.alert(message, AlertType.danger);
                //  }, 100 * index);
              });
            } else {
              // alert with errors
              // this.utilService.alert(messages, AlertType.danger);
            }
            throw response;
          })
        );
  }

  private tryJsonParse(json: string): any {
    try {
      return JSON.parse(json);
    } catch (e) {
      return null;
    }
  }
}
