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

import { Group } from '../models/group';

@Injectable()
export class GroupService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
   getGroupsResponse(): Observable<HttpResponse<Group[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Group`,
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
        let _body: Group[] = null;
        _body = _resp.body as Group[]
        return _resp.clone({body: _body}) as HttpResponse<Group[]>;
      })
    );
  }

  /**
   * @return Success
   */
   getGroups(): Observable<Group[]> {
    return this.getGroupsResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param groups undefined
   */
   putGroupResponse(groups?: Group[]): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = groups;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/Group`,
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
   * @param groups undefined
   */
   putGroup(groups?: Group[]): Observable<void> {
    return this.putGroupResponse(groups).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `GroupService.SetAttributeParams` containing the following parameters:
   *
   * - `value`: 
   *
   * - `group`: 
   *
   * - `attribute`:
   */
   setAttributeResponse(params: GroupService.SetAttributeParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Group/Set/${params.group}/${params.attribute}/${params.value}`,
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
   * @param params The `GroupService.SetAttributeParams` containing the following parameters:
   *
   * - `value`: 
   *
   * - `group`: 
   *
   * - `attribute`:
   */
   setAttribute(params: GroupService.SetAttributeParams): Observable<void> {
    return this.setAttributeResponse(params).pipe(
      map(_r => _r.body)
    );
  }
}

export module GroupService {

  /**
   * Parameters for setAttribute
   */
   export interface SetAttributeParams {

    value: number;

    group: string;

    attribute: string;
  }
}
