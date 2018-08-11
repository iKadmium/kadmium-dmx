/* tslint:disable */
import { Injectable } from '@angular/core';
import
{
  HttpClient, HttpRequest, HttpResponse,
  HttpHeaders, HttpParams
} from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import { FixtureDefinitionSkeleton } from '../models/fixture-definition-skeleton';
import { FixtureDefinition } from '../models/fixture-definition';

@Injectable()
export class FixtureDefinitionService extends BaseService
{
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  )
  {
    super(config, http);
  }

  /**
   * @return Success
   */
  getFixtureDefinitionSkeletonsResponse(): Observable<HttpResponse<FixtureDefinitionSkeleton[]>>
  {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/FixtureDefinition`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r =>
      {
        let _resp = _r as HttpResponse<any>;
        let _body: FixtureDefinitionSkeleton[] = null;
        _body = _resp.body as FixtureDefinitionSkeleton[]
        return _resp.clone({ body: _body }) as HttpResponse<FixtureDefinitionSkeleton[]>;
      })
    );
  }

  /**
   * @return Success
   */
  getFixtureDefinitionSkeletons(): Observable<FixtureDefinitionSkeleton[]>
  {
    return this.getFixtureDefinitionSkeletonsResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param definition undefined
   * @return Success
   */
  postFixtureDefinitionByIdResponse(definition?: FixtureDefinition): Observable<HttpResponse<number>>
  {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = definition;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/FixtureDefinition`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r =>
      {
        let _resp = _r as HttpResponse<any>;
        let _body: number = null;
        _body = parseFloat(_resp.body as string)
        return _resp.clone({ body: _body }) as HttpResponse<number>;
      })
    );
  }

  /**
   * @param definition undefined
   * @return Success
   */
  postFixtureDefinitionById(definition?: FixtureDefinition): Observable<number>
  {
    return this.postFixtureDefinitionByIdResponse(definition).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getFixtureDefinitionByIdResponse(id: number): Observable<HttpResponse<FixtureDefinition>>
  {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/FixtureDefinition/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r =>
      {
        let _resp = _r as HttpResponse<any>;
        let _body: FixtureDefinition = null;
        _body = _resp.body as FixtureDefinition
        return _resp.clone({ body: _body }) as HttpResponse<FixtureDefinition>;
      })
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
  getFixtureDefinitionById(id: number): Observable<FixtureDefinition>
  {
    return this.getFixtureDefinitionByIdResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `FixtureDefinitionService.PutFixtureDefinitionByIdParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `definition`:
   */
  putFixtureDefinitionByIdResponse(params: FixtureDefinitionService.PutFixtureDefinitionByIdParams): Observable<HttpResponse<void>>
  {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.definition;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/FixtureDefinition/${params}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r =>
      {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;

        return _resp.clone({ body: _body }) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param params The `FixtureDefinitionService.PutFixtureDefinitionByIdParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `definition`:
   */
  putFixtureDefinitionById(params: FixtureDefinitionService.PutFixtureDefinitionByIdParams): Observable<void>
  {
    return this.putFixtureDefinitionByIdResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
  deleteFixtureDefinitionByIdResponse(id: number): Observable<HttpResponse<void>>
  {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/FixtureDefinition/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map(_r =>
      {
        let _resp = _r as HttpResponse<any>;
        let _body: void = null;

        return _resp.clone({ body: _body }) as HttpResponse<void>;
      })
    );
  }

  /**
   * @param id undefined
   */
  deleteFixtureDefinitionById(id: number): Observable<void>
  {
    return this.deleteFixtureDefinitionByIdResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module FixtureDefinitionService
{

  /**
   * Parameters for putFixtureDefinitionById
   */
  export interface PutFixtureDefinitionByIdParams
  {

    id: { manufacturer: string, model: string };

    definition?: FixtureDefinition;
  }
}
