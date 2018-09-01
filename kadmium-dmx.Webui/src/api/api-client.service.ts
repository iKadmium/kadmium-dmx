/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DefaultHttpOptions, HttpOptions, APIClientInterface } from './';

import * as models from './models';

export const USE_DOMAIN = new InjectionToken<string>('APIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('APIClient_USE_HTTP_OPTIONS');

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

  readonly domain: string = `//${window.location.hostname}${window.location.port ? ':' + 5000 : ''}`;

  constructor(private readonly http: HttpClient,
    @Optional() @Inject(USE_DOMAIN) domain?: string,
    @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions)
  {

    if (domain != null)
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
  ): Observable<models.IFixtureDefinition>
  {
    const path = `/api/FixtureDefinition/${args.manufacturer}/${args.model}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.IFixtureDefinition>('GET', path, options);
  }

  putFixtureDefinition(
    args: {
      manufacturer: string,
      model: string,
      value?: models.IFixtureDefinition,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/FixtureDefinition/${args.manufacturer}/${args.model}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('PUT', path, options, (args.value));
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
  ): Observable<models.IFixtureDefinition>
  {
    const path = `/api/FixtureDefinition/${args.manufacturer}/${args.model}/download`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.IFixtureDefinition>('GET', path, options);
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
      value?: models.IFixtureDefinition,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/FixtureDefinition`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('POST', path, options, (args.value));
  }

  getGroups(
    requestHttpOptions?: HttpOptions
  ): Observable<models.IGroupData[]>
  {
    const path = `/api/Group`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.IGroupData[]>('GET', path, options);
  }

  putGroups(
    args: {
      groups?: any,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/Group`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('PUT', path, options, (args.groups));
  }

  setGroupAttribute(
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

  getOSCListenerEnabled(
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/OSCListener/Enabled`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('GET', path, options);
  }

  setOSCListenerEnabled(
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

  getSACNTransmitterEnabled(
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/SACNTransmitter/Enabled`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('GET', path, options);
  }

  setSACNTransmitterEnabled(
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

  getStatus(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Status>
  {
    const path = `/api/SACNTransmitter/Status`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.Status>('GET', path, options);
  }

  getSettings(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Settings>
  {
    const path = `/api/Settings`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.Settings>('GET', path, options);
  }

  putSettings(
    args: {
      value?: models.Settings,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/Settings`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('PUT', path, options, (args.value));
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

  getActiveVenue(
    requestHttpOptions?: HttpOptions
  ): Observable<models.IVenueData>
  {
    const path = `/api/Venue/GetActive`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.IVenueData>('GET', path, options);
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
      value?: models.IVenueData,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/Venue`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('POST', path, options, (args.value));
  }

  getVenue(
    args: {
      name: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IVenueData>
  {
    const path = `/api/Venue/${args.name}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<models.IVenueData>('GET', path, options);
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
      value?: models.IVenueData,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>
  {
    const path = `/api/Venue/${args.originalName}`;
    const options: APIHttpOptions = { ...this.options, ...requestHttpOptions };

    return this.sendRequest<any>('PUT', path, options, (args.value));
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
