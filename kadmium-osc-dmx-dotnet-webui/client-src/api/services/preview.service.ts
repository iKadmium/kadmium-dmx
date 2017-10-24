/* tslint:disable */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ApiConfiguration } from '../api-configuration';
import { ApiResponse as _ApiResponse_ } from '../api-response';

import { PreviewResult } from '../models/preview-result';


@Injectable()
export class PreviewService {
  constructor(
    public http: Http
  ) {
  }

  /**
   */
  getPreview(): Promise<_ApiResponse_<PreviewResult>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/Preview`,
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
        return new _ApiResponse_(response, response.json() as PreviewResult);
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }
}

export module PreviewService {
}
