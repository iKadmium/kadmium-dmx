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

import { Status } from '../models/status';

@Injectable()
export class EnttecProTransmitterService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
   getEnttecPortNamesResponse(): Observable<HttpResponse<string[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/EnttecProTransmitter/Ports`,
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
        let _body: string[] = null;
        _body = _resp.body as string[]
        return _resp.clone({body: _body}) as HttpResponse<string[]>;
      })
    );
  }

  /**
   * @return Success
   */
   getEnttecPortNames(): Observable<string[]> {
    return this.getEnttecPortNamesResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @return Success
   */
   getEnttecEnabledResponse(): Observable<HttpResponse<boolean>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/EnttecProTransmitter/Enabled`,
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
   getEnttecEnabled(): Observable<boolean> {
    return this.getEnttecEnabledResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param value undefined
   */
   setEnttecEnabledResponse(value: boolean): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/EnttecProTransmitter/Enabled/${value}`,
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
   setEnttecEnabled(value: boolean): Observable<void> {
    return this.setEnttecEnabledResponse(value).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @return Success
   */
   getEnttecStatusResponse(): Observable<HttpResponse<Status>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/EnttecProTransmitter/Status`,
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
        let _body: Status = null;
        _body = _resp.body as Status
        return _resp.clone({body: _body}) as HttpResponse<Status>;
      })
    );
  }

  /**
   * @return Success
   */
   getEnttecStatus(): Observable<Status> {
    return this.getEnttecStatusResponse().pipe(
      map(_r => _r.body)
    );
  }
}

export module EnttecProTransmitterService {
}
