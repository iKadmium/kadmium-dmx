/* tslint:disable */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ApiConfiguration } from '../api-configuration';
import { ApiResponse as _ApiResponse_ } from '../api-response';

import { ActiveUniverse } from '../models/active-universe';


@Injectable()
export class UniverseService {
  constructor(
    public http: Http
  ) {
  }

  /**
   * @param value - undefined
   */
  postUniverse(value?: string): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "post",
      url: ApiConfiguration.rootUrl + `/api/Universe`,
      search: new URLSearchParams(),
      headers: new Headers()
    });
    options.body = value;
    ApiConfiguration.prepareRequestOptions(options);
    return this.http.request(options.url, options)
      .toPromise()
      .then(response => {
        if (response.status < 200 || response.status > 299) {
          throw response;
        }
        return new _ApiResponse_(response, null);
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }

  /**
   * @param id - undefined
   * @param value - undefined
   */
  putUniverse(params: UniverseService.PutUniverseParams): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "put",
      url: ApiConfiguration.rootUrl + `/api/Universe/${params.id}`,
      search: new URLSearchParams(),
      headers: new Headers()
    });
    
    options.body = params.value;
    ApiConfiguration.prepareRequestOptions(options);
    return this.http.request(options.url, options)
      .toPromise()
      .then(response => {
        if (response.status < 200 || response.status > 299) {
          throw response;
        }
        return new _ApiResponse_(response, null);
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }

  /**
   * @param id - undefined
   */
  deleteUniverse(id: number): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "delete",
      url: ApiConfiguration.rootUrl + `/api/Universe/${id}`,
      search: new URLSearchParams(),
      headers: new Headers()
    });
    
    ApiConfiguration.prepareRequestOptions(options);
    return this.http.request(options.url, options)
      .toPromise()
      .then(response => {
        if (response.status < 200 || response.status > 299) {
          throw response;
        }
        return new _ApiResponse_(response, null);
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }

  /**
   * @param universeID - undefined
   */
  getActiveUniverseByID(universeID: number): Promise<_ApiResponse_<ActiveUniverse>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/Universe/getActive/${universeID}`,
      search: new URLSearchParams(),
      headers: new Headers()
    });
    
    ApiConfiguration.prepareRequestOptions(options);
    return this.http.request(options.url, options)
      .toPromise()
      .then(response => {
        if (response.status < 200 || response.status > 299) {
          throw response;
        }
        return new _ApiResponse_(response, response.json() as ActiveUniverse);
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }
}

export module UniverseService {
  export interface PutUniverseParams {
    id: number;
    value?: string;
  }
}
