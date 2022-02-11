import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharactersServicesSpinner } from '../services/characters-services-spinner';
import { finalize } from 'rxjs/operators';

@Injectable()
export class CharactersInterceptorSpinner implements HttpInterceptor {
  constructor(private _charSvcSpinner: CharactersServicesSpinner) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this._charSvcSpinner.show();
    return next.handle(request).pipe(
      finalize(() => {
        this._charSvcSpinner.hide();
      })
    );
  }
}
