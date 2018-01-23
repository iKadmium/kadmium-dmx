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

import { VenueSkeleton } from '../models/venue-skeleton';
import { Venue } from '../models/venue';
import { ActiveVenue } from '../models/active-venue';
import { VenueDownload } from '../models/venue-download';

@Injectable()
export class VenueService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return Success
   */
   getVenuesResponse(): Observable<HttpResponse<VenueSkeleton[]>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Venue`,
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
        let _body: VenueSkeleton[] = null;
        _body = _resp.body as VenueSkeleton[]
        return _resp.clone({body: _body}) as HttpResponse<VenueSkeleton[]>;
      })
    );
  }

  /**
   * @return Success
   */
   getVenues(): Observable<VenueSkeleton[]> {
    return this.getVenuesResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param venue undefined
   * @return Success
   */
   postVenueResponse(venue?: Venue): Observable<HttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = venue;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/api/Venue`,
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
        let _body: number = null;
        _body = parseFloat(_resp.body as string)
        return _resp.clone({body: _body}) as HttpResponse<number>;
      })
    );
  }

  /**
   * @param venue undefined
   * @return Success
   */
   postVenue(venue?: Venue): Observable<number> {
    return this.postVenueResponse(venue).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id The Venue ID
   * @return Success
   */
   getVenueByIdResponse(id: number): Observable<HttpResponse<Venue>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Venue/${id}`,
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
        let _body: Venue = null;
        _body = _resp.body as Venue
        return _resp.clone({body: _body}) as HttpResponse<Venue>;
      })
    );
  }

  /**
   * @param id The Venue ID
   * @return Success
   */
   getVenueById(id: number): Observable<Venue> {
    return this.getVenueByIdResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param params The `VenueService.PutVenueParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `venue`:
   */
   putVenueResponse(params: VenueService.PutVenueParams): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.venue;
    let req = new HttpRequest<any>(
      "PUT",
      this.rootUrl + `/api/Venue/${params.id}`,
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
   * @param params The `VenueService.PutVenueParams` containing the following parameters:
   *
   * - `id`: 
   *
   * - `venue`:
   */
   putVenue(params: VenueService.PutVenueParams): Observable<void> {
    return this.putVenueResponse(params).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   deleteVenueResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "DELETE",
      this.rootUrl + `/api/Venue/${id}`,
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
   * @param id undefined
   */
   deleteVenue(id: number): Observable<void> {
    return this.deleteVenueResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @return Success
   */
   getActiveVenueResponse(): Observable<HttpResponse<ActiveVenue>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Venue/GetActive`,
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
        let _body: ActiveVenue = null;
        _body = _resp.body as ActiveVenue
        return _resp.clone({body: _body}) as HttpResponse<ActiveVenue>;
      })
    );
  }

  /**
   * @return Success
   */
   getActiveVenue(): Observable<ActiveVenue> {
    return this.getActiveVenueResponse().pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   */
   activateVenueByIdResponse(id: number): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Venue/Activate/${id}`,
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
   * @param id undefined
   */
   activateVenueById(id: number): Observable<void> {
    return this.activateVenueByIdResponse(id).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param name undefined
   */
   activateVenueByNameResponse(name: string): Observable<HttpResponse<void>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Venue/Activate/${name}`,
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
   * @param name undefined
   */
   activateVenueByName(name: string): Observable<void> {
    return this.activateVenueByNameResponse(name).pipe(
      map(_r => _r.body)
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   downloadVenueResponse(id: number): Observable<HttpResponse<VenueDownload>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/Venue/Download/${id}`,
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
        let _body: VenueDownload = null;
        _body = _resp.body as VenueDownload
        return _resp.clone({body: _body}) as HttpResponse<VenueDownload>;
      })
    );
  }

  /**
   * @param id undefined
   * @return Success
   */
   downloadVenue(id: number): Observable<VenueDownload> {
    return this.downloadVenueResponse(id).pipe(
      map(_r => _r.body)
    );
  }
}

export module VenueService {

  /**
   * Parameters for putVenue
   */
   export interface PutVenueParams {

    id: number;

    venue?: Venue;
  }
}
