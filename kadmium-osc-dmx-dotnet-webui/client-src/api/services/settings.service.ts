/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient, HttpRequest, HttpResponse, 
  HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import { Settings } from '../models/settings';

@Injectable()
export class SettingsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
   getSettingsResponse(): Observable<HttpResponse<Settings>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Settings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: Settings = null;
        _body = _resp.body as Settings
        return _resp.clone({body: _body}) as HttpResponse<Settings>;
      })
    );
  }

  /**
   * @return Success
   */
   getSettings(): Observable<Settings> {
    return this.getSettingsResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param value undefined
   */
   postSettingsResponse(value?: Settings): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = value;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/Settings`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r => {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;
        
        return _resp.clone({body: _body}) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param value undefined
   */
   postSettings(value?: Settings): Observable<void> {
    return this.postSettingsResponse(value).pipe(
      map(_r => _r.body)
    );
  }
}

export module SettingsService {
}
