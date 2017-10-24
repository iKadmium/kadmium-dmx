/* tslint:disable */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ApiConfiguration } from '../api-configuration';
import { ApiResponse as _ApiResponse_ } from '../api-response';

import { VenueSkeleton } from '../models/venue-skeleton';
import { Venue } from '../models/venue';
import { ActiveVenue } from '../models/active-venue';
import { VenueDownload } from '../models/venue-download';


@Injectable()
export class VenueService {
  constructor(
    public http: Http
  ) {
  }

  /**
   */
  getVenues(): Promise<_ApiResponse_<VenueSkeleton[]>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/Venue`,
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
        return new _ApiResponse_(response, response.json() as VenueSkeleton[]);
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }

  /**
   * @param venue - undefined
   */
  postVenue(venue?: Venue): Promise<_ApiResponse_<number>> {
    let options = new RequestOptions({
      method: "post",
      url: ApiConfiguration.rootUrl + `/api/Venue`,
      search: new URLSearchParams(),
      headers: new Headers()
    });
    options.body = venue;
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
   * @param id - The Venue ID
   */
  getVenueById(id: number): Promise<_ApiResponse_<Venue>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/Venue/${id}`,
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
        return new _ApiResponse_(response, response.json() as Venue);
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }

  /**
   * @param id - undefined
   * @param venue - undefined
   */
  putVenue(params: VenueService.PutVenueParams): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "put",
      url: ApiConfiguration.rootUrl + `/api/Venue/${params.id}`,
      search: new URLSearchParams(),
      headers: new Headers()
    });
    
    options.body = params.venue;
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
  deleteVenue(id: number): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "delete",
      url: ApiConfiguration.rootUrl + `/api/Venue/${id}`,
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
  getActiveVenue(): Promise<_ApiResponse_<ActiveVenue>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/Venue/GetActive`,
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
        return new _ApiResponse_(response, response.json() as ActiveVenue);
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }

  /**
   * @param id - undefined
   */
  activateVenueById(id: number): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/Venue/Activate/${id}`,
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
   * @param name - undefined
   */
  activateVenueByName(name: string): Promise<_ApiResponse_<void>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/Venue/Activate/${name}`,
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
   */
  downloadVenue(id: number): Promise<_ApiResponse_<VenueDownload>> {
    let options = new RequestOptions({
      method: "get",
      url: ApiConfiguration.rootUrl + `/api/Venue/Download/${id}`,
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
        return new _ApiResponse_(response, response.json() as VenueDownload);
      })
      .catch(e => {
        ApiConfiguration.handleError(e);
        throw e;
      });
  }
}

export module VenueService {
  export interface PutVenueParams {
    id: number;
    venue?: Venue;
  }
}
