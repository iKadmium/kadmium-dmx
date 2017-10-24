/* tslint:disable */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ApiConfiguration } from '../api-configuration';
import { ApiResponse as _ApiResponse_ } from '../api-response';

import { Look } from '../models/look';


@Injectable()
export class LookService {
  constructor(
    public http: Http
  ) {
  }

  /**
   */
  getLooks(): Promise<_ApiResponse_<Look[]>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/Look`,
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
        return new _ApiResponse_(response, response.json() as Look[]);
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }

  /**
   * @param look - undefined
   */
  postLook(look?: Look): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "post",
      url: ApiConfiguration.rootUrl + `/api/Look`,
      search: new URLSearchParams(),
      headers: new Headers()
    });
    options.body = look;
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
  getLookById(id: number): Promise<_ApiResponse_<Look>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/Look/${id}`,
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
        return new _ApiResponse_(response, response.json() as Look);
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }

  /**
   * @param id - undefined
   * @param look - undefined
   */
  putLook(params: LookService.PutLookParams): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "put",
      url: ApiConfiguration.rootUrl + `/api/Look/${params.id}`,
      search: new URLSearchParams(),
      headers: new Headers()
    });
    
    options.body = params.look;
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
  deleteLook(id: number): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "delete",
      url: ApiConfiguration.rootUrl + `/api/Look/${id}`,
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
   * @param id - undefined
   * @param amount - undefined
   */
  activateLookById(params: LookService.ActivateLookByIdParams): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/Look/Activate/${params.id}/${params.amount}`,
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
   * @param amount - undefined
   * @param look - undefined
   */
  activateLook(params: LookService.ActivateLookParams): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "post",
      url: ApiConfiguration.rootUrl + `/api/Look/Activate/${params.amount}`,
      search: new URLSearchParams(),
      headers: new Headers()
    });
    
    options.body = params.look;
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
}

export module LookService {
  export interface PutLookParams {
    id: number;
    look?: Look;
  }
  export interface ActivateLookByIdParams {
    id: number;
    amount: number;
  }
  export interface ActivateLookParams {
    amount: number;
    look?: Look;
  }
}
