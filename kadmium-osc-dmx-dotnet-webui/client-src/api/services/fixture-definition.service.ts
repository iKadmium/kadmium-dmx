/* tslint:disable */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ApiConfiguration } from '../api-configuration';
import { ApiResponse as _ApiResponse_ } from '../api-response';

import { FixtureDefinitionSkeleton } from '../models/fixture-definition-skeleton';
import { FixtureDefinition } from '../models/fixture-definition';


@Injectable()
export class FixtureDefinitionService {
  constructor(
    public http: Http
  ) {
  }

  /**
   */
  ApiFixtureDefinitionGet(): Promise<_ApiResponse_<FixtureDefinitionSkeleton[]>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/FixtureDefinition`,
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
        return new _ApiResponse_(response, response.json() as FixtureDefinitionSkeleton[]);
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }

  /**
   * @param definition - undefined
   */
  postFixtureDefinitionById(definition?: FixtureDefinition): Promise<_ApiResponse_<number>> {
    let options = new RequestOptions({
      method: "post",
      url: ApiConfiguration.rootUrl + `/api/FixtureDefinition`,
      search: new URLSearchParams(),
      headers: new Headers()
    });
    options.body = definition;
    ApiConfiguration.prepareRequestOptions(options);
    return this.http.request(options.url, options)
      .toPromise()
      .then(response => {
        if (response.status < 200 || response.status > 299) {
          throw response;
        }
        return new _ApiResponse_(response, parseFloat(response.text()));
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }

  /**
   * @param id - undefined
   */
  getFixtureDefinitionById(id: number): Promise<_ApiResponse_<FixtureDefinition>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/FixtureDefinition/${id}`,
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
        return new _ApiResponse_(response, response.json() as FixtureDefinition);
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }

  /**
   * @param id - undefined
   * @param definition - undefined
   */
  putFixtureDefinitionById(params: FixtureDefinitionService.PutFixtureDefinitionByIdParams): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "put",
      url: ApiConfiguration.rootUrl + `/api/FixtureDefinition/${params.id}`,
      search: new URLSearchParams(),
      headers: new Headers()
    });
    
    options.body = params.definition;
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
  deleteFixtureDefinitionById(id: number): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "delete",
      url: ApiConfiguration.rootUrl + `/api/FixtureDefinition/${id}`,
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
}

export module FixtureDefinitionService {
  export interface PutFixtureDefinitionByIdParams {
    id: number;
    definition?: FixtureDefinition;
  }
}
