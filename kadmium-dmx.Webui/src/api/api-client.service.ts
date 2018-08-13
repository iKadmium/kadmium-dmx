/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DefaultHttpOptions, HttpOptions, APIClientInterface } from './';

import * as models from './models';

export const USE_DOMAIN = new InjectionToken<string>('USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable({
  providedIn: 'root'
})
export class APIClient implements APIClientInterface
{

  readonly options: APIHttpOptions;

  private readonly domain: string = `http://localhost:5000`;

  constructor(private readonly http: HttpClient,
    @Optional() @Inject(USE_DOMAIN) domain: string,
    @Optional() @Inject(USE_HTTP_OPTIONS) options: DefaultHttpOptions)
  {

    if (domain)
    {
      this.domain = domain;
    }

    this.options = {
      headers: new HttpHeaders(options && options.headers ? options.headers : {}),
      params: new HttpParams(options && options.params ? options.params : {}),
      ...(options && options.reportProgress ? { reportProgress: options.reportProgress } : {}),
      ...(options && options.withCredentials ? { withCredentials: options.withCredentials } : {})
    };
  }

  getFixtureDefinition(
    args: {
      manufacturer: string,
      model: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.FixtureDefinition>
  {
    const path = `/api/FixtureDefinition/${args.manufacturer}/${args.model}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.FixtureDefinition>('GET', path, options);
  }

  putFixtureDefinition(
    args: {
      manufacturer: string,
      model: string,
      value: models.FixtureDefinition,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/FixtureDefinition/${args.manufacturer}/${args.model}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('PUT', path, options, args.value);
  }

  deleteFixtureDefinition(
    args: {
      manufacturer: string,
      model: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/FixtureDefinition/${args.manufacturer}/${args.model}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('DELETE', path, options);
  }

  downloadFixtureDefinition(
    args: {
      manufacturer: string,
      model: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.FixtureDefinition>
  {
    const path = `/api/FixtureDefinition/${args.manufacturer}/${args.model}/download`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.FixtureDefinition>('GET', path, options);
  }

  getFixtureDefinitions(
    requestHttpOptions?: HttpOptions
  ): Observable<models.FixtureDefinitionSkeleton[]>
  {
    const path = `/api/FixtureDefinition`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.FixtureDefinitionSkeleton[]>('GET', path, options);
  }

  postFixtureDefinition(
    args: {
      value: models.FixtureDefinition,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/FixtureDefinition`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('POST', path, options, args.value);
  }

  getGroups(
    requestHttpOptions?: HttpOptions
  ): Observable<models.GroupData[]>
  {
    const path = `/api/Group`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.GroupData[]>('GET', path, options);
  }

  putGroup(
    args: {
      groups: any,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/Group`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('PUT', path, options, args.groups);
  }

  setAttributeGroup(
    args: {
      group: string,
      attribute: string,
      value: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/Group/SetAttribute/${args.group}/${args.attribute}/${args.value}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('GET', path, options);
  }

  getSettings(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Settings>
  {
    const path = `/api/Settings`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.Settings>('GET', path, options);
  }

  postSettings(
    args: {
      value: models.Settings,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/Settings`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('POST', path, options, args.value);
  }

  getActiveVenue(
    requestHttpOptions?: HttpOptions
  ): Observable<models.ActiveVenue>
  {
    const path = `/api/Venue/GetActive`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.ActiveVenue>('GET', path, options);
  }

  activateVenue(
    args: {
      name: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/Venue/Activate/${args.name}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('POST', path, options);
  }

  downloadVenue(
    args: {
      name: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IVenueData>
  {
    const path = `/api/Venue/Download/${args.name}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.IVenueData>('GET', path, options);
  }

  getVenues(
    requestHttpOptions?: HttpOptions
  ): Observable<string[]>
  {
    const path = `/api/Venue`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<string[]>('GET', path, options);
  }

  postVenue(
    args: {
      value: models.VenueData,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/Venue`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('POST', path, options, args.value);
  }

  getVenue(
    args: {
      name: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.VenueData>
  {
    const path = `/api/Venue/${args.name}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.VenueData>('GET', path, options);
  }

  deleteVenue(
    args: {
      name: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/Venue/${args.name}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('DELETE', path, options);
  }

  putVenue(
    args: {
      originalName: string,
      value: models.VenueData,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/Venue/${args.originalName}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('PUT', path, options, args.value);
  }

  getPortsEnttecProTransmitters(
    requestHttpOptions?: HttpOptions
  ): Observable<string[]>
  {
    const path = `/api/EnttecProTransmitter/ports`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<string[]>('GET', path, options);
  }

  enabledEnttecProTransmitter(
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/EnttecProTransmitter/Enabled`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('GET', path, options);
  }

  setEnabledEnttecProTransmitter(
    args: {
      value: boolean,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/EnttecProTransmitter/SetEnabled/${args.value}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('POST', path, options);
  }

  statusEnttecProTransmitter(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Status>
  {
    const path = `/api/EnttecProTransmitter/Status`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.Status>('GET', path, options);
  }

  enabledOSCListener(
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/OSCListener/Enabled`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('GET', path, options);
  }

  setEnabledOSCListener(
    args: {
      value: boolean,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/OSCListener/SetEnabled/${args.value}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('POST', path, options);
  }

  getPreview(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PreviewResult>
  {
    const path = `/api/Preview`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.PreviewResult>('GET', path, options);
  }

  enabledSACNTransmitter(
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/SACNTransmitter/Enabled`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('GET', path, options);
  }

  setEnabledSACNTransmitter(
    args: {
      value: boolean,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/SACNTransmitter/SetEnabled/${args.value}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('POST', path, options);
  }

  statusSACNTransmitter(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Status>
  {
    const path = `/api/SACNTransmitter/Status`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.Status>('GET', path, options);
  }

  getActiveUniverse(
    args: {
      universeID: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ActiveUniverse>
  {
    const path = `/api/Universe/getActive/${args.universeID}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.ActiveUniverse>('GET', path, options);
  }

  private sendRequest<T>(method: string, path: string, options: HttpOptions, body?: any): Observable<T>
  {
    switch (method)
    {
      case 'DELETE':
        return this.http.delete<T>(`${this.domain}${path}`, options);
      case 'GET':
        return this.http.get<T>(`${this.domain}${path}`, options);
      case 'HEAD':
        return this.http.head<T>(`${this.domain}${path}`, options);
      case 'OPTIONS':
        return this.http.options<T>(`${this.domain}${path}`, options);
      case 'PATCH':
        return this.http.patch<T>(`${this.domain}${path}`, body, options);
      case 'POST':
        return this.http.post<T>(`${this.domain}${path}`, body, options);
      case 'PUT':
        return this.http.put<T>(`${this.domain}${path}`, body, options);
      default:
        console.error(`Unsupported request: ${method}`);
        return throwError(`Unsupported request: ${method}`);
    }
  }
}
