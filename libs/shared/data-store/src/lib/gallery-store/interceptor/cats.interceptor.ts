import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CatsInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isApiUrl = request.url.startsWith('https://api.thecatapi.com/');
    if (isApiUrl) {
      request = request.clone({
        setHeaders: { 'x-api-key': `43951548-9956-4058-be7e-969dd805ea78` },
      });
    }
    return next.handle(request);
  }
}
