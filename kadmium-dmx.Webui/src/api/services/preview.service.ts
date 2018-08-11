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

import { PreviewResult } from '../models/preview-result';

@Injectable()
export class PreviewService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
   getPreviewResponse(): Observable<HttpResponse<PreviewResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Preview`,
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
        let _body: PreviewResult = null;
        _body = _resp.body as PreviewResult
        return _resp.clone({body: _body}) as HttpResponse<PreviewResult>;
      })
    );
  }

  /**
   * @return Success
   */
   getPreview(): Observable<PreviewResult> {
    return this.getPreviewResponse().pipe(
      map(_r => _r.body)
    );
  }
}

export module PreviewService {
}
