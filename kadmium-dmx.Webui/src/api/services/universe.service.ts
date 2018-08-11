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

import { ActiveUniverse } from '../models/active-universe';

@Injectable()
export class UniverseService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param value undefined
   */
   postUniverseResponse(value?: string): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = value;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/Universe`,
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
   postUniverse(value?: string): Observable<void> {
    return this.postUniverseResponse(value).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `UniverseService.PutUniverseParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `value`:
   */
   putUniverseResponse(params: UniverseService.PutUniverseParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.value;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/Universe/${params.id}`,
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
   * @param params The `UniverseService.PutUniverseParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `value`:
   */
   putUniverse(params: UniverseService.PutUniverseParams): Observable<void> {
    return this.putUniverseResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   deleteUniverseResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/Universe/${id}`,
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
   * @param id undefined
   */
   deleteUniverse(id: number): Observable<void> {
    return this.deleteUniverseResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param universeID undefined
   * @return Success
   */
   getActiveUniverseByIDResponse(universeID: number): Observable<HttpResponse<ActiveUniverse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Universe/getActive/${universeID}`,
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
        let _body: ActiveUniverse = null;
        _body = _resp.body as ActiveUniverse
        return _resp.clone({body: _body}) as HttpResponse<ActiveUniverse>;
      })
    );
  }

  /**
   * @param universeID undefined
   * @return Success
   */
   getActiveUniverseByID(universeID: number): Observable<ActiveUniverse> {
    return this.getActiveUniverseByIDResponse(universeID).pipe(
      map(_r => _r.body)
    );
  }
}

export module UniverseService {

  /**
   * Parameters for putUniverse
   */
   export interface PutUniverseParams {

    id: number;

    value?: string;
  }
}
