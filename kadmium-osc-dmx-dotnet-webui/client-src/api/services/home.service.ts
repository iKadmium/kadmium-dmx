/* tslint:disable */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ApiConfiguration } from '../api-configuration';
import { ApiResponse as _ApiResponse_ } from '../api-response';



@Injectable()
export class HomeService {
  constructor(
    public http: Http
  ) {
  }

  /**
   */
  home(): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/`,
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
   */
  error(): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/error`,
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

export module HomeService {
}
