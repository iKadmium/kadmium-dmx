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


@Injectable()
export class OSCListenerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
   getOSCListenerEnabledResponse(): Observable<HttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/OSCListener/Enabled`,
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
        let _body: boolean = null;
        _body = _resp.body == 'true'
        return _resp.clone({body: _body}) as HttpResponse<boolean>;
      })
    );
  }

  /**
   * @return Success
   */
   getOSCListenerEnabled(): Observable<boolean> {
    return this.getOSCListenerEnabledResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param value undefined
   */
   setOSCListenerEnabledResponse(value: boolean): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/OSCListener/Enabled/${value}`,
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
   setOSCListenerEnabled(value: boolean): Observable<void> {
    return this.setOSCListenerEnabledResponse(value).pipe(
      map(_r => _r.body)
    );
  }
}

export module OSCListenerService {
}
