/* tslint:disable */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ApiConfiguration } from '../api-configuration';
import { ApiResponse as _ApiResponse_ } from '../api-response';

import { Group } from '../models/group';


@Injectable()
export class GroupService {
  constructor(
    public http: Http
  ) {
  }

  /**
   */
  getGroups(): Promise<_ApiResponse_<Group[]>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/Group`,
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
        return new _ApiResponse_(response, response.json() as Group[]);
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }

  /**
   * @param groups - undefined
   */
  putGroup(groups?: Group[]): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "put",
      url: ApiConfiguration.rootUrl + `/api/Group`,
      search: new URLSearchParams(),
      headers: new Headers()
    });
    options.body = groups;
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
   * @param value - undefined
   * @param group - undefined
   * @param attribute - undefined
   */
  setAttribute(params: GroupService.SetAttributeParams): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/Group/Set/${params.group}/${params.attribute}/${params.value}`,
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

export module GroupService {
  export interface SetAttributeParams {
    value: number;
    group: string;
    attribute: string;
  }
}
