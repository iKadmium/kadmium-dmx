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

import { Look } from '../models/look';

@Injectable()
export class LookService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
   getLooksResponse(): Observable<HttpResponse<Look[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Look`,
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
        let _body: Look[] = null;
        _body = _resp.body as Look[]
        return _resp.clone({body: _body}) as HttpResponse<Look[]>;
      })
    );
  }

  /**
   * @return Success
   */
   getLooks(): Observable<Look[]> {
    return this.getLooksResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param look undefined
   * @return Success
   */
   postLookResponse(look?: Look): Observable<HttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = look;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/Look`,
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
        let _body: number = null;
        _body = parseFloat(_resp.body as string)
        return _resp.clone({body: _body}) as HttpResponse<number>;
      })
    );
  }

  /**
   * @param look undefined
   * @return Success
   */
   postLook(look?: Look): Observable<number> {
    return this.postLookResponse(look).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   getLookByIdResponse(id: number): Observable<HttpResponse<Look>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Look/${id}`,
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
        let _body: Look = null;
        _body = _resp.body as Look
        return _resp.clone({body: _body}) as HttpResponse<Look>;
      })
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   getLookById(id: number): Observable<Look> {
    return this.getLookByIdResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `LookService.PutLookParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `look`:
   */
   putLookResponse(params: LookService.PutLookParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.look;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/Look/${params.id}`,
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
   * @param params The `LookService.PutLookParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `look`:
   */
   putLook(params: LookService.PutLookParams): Observable<void> {
    return this.putLookResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   deleteLookResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/Look/${id}`,
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
   deleteLook(id: number): Observable<void> {
    return this.deleteLookResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `LookService.ActivateLookByIdParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `amount`:
   */
   activateLookByIdResponse(params: LookService.ActivateLookByIdParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Look/Activate/${params.id}/${params.amount}`,
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
   * @param params The `LookService.ActivateLookByIdParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `amount`:
   */
   activateLookById(params: LookService.ActivateLookByIdParams): Observable<void> {
    return this.activateLookByIdResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `LookService.ActivateLookParams` containing the following parameters:
   *
   * - `amount`: 
   *
   * - `look`:
   */
   activateLookResponse(params: LookService.ActivateLookParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.look;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/Look/Activate/${params.amount}`,
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
   * @param params The `LookService.ActivateLookParams` containing the following parameters:
   *
   * - `amount`: 
   *
   * - `look`:
   */
   activateLook(params: LookService.ActivateLookParams): Observable<void> {
    return this.activateLookResponse(params).pipe(
      map(_r => _r.body)
    );
  }
}

export module LookService {

  /**
   * Parameters for putLook
   */
   export interface PutLookParams {

    id: number;

    look?: Look;
  }

  /**
   * Parameters for activateLookById
   */
   export interface ActivateLookByIdParams {

    id: number;

    amount: number;
  }

  /**
   * Parameters for activateLook
   */
   export interface ActivateLookParams {

    amount: number;

    look?: Look;
  }
}
