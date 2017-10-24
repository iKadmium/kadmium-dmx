/* tslint:disable */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ApiConfiguration } from '../api-configuration';
import { ApiResponse as _ApiResponse_ } from '../api-response';



@Injectable()
export class SolversLiveService {
  constructor(
    public http: Http
  ) {
  }

  /**
   */
  getSolversEnabled(): Promise<_ApiResponse_<boolean>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/SolversLive/Enabled`,
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
        return new _ApiResponse_(response, response.text() == 'true');
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }

  /**
   * @param value - undefined
   */
  setSolversEnabled(value: boolean): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/SolversLive/Enabled/${value}`,
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

export module SolversLiveService {
}
