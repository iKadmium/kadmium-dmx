/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from './models';

export interface APIClientInterface
{

  getFixtureDefinition(
    args: {
      manufacturer: string,
      model: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IFixtureDefinition>;

  putFixtureDefinition(
    args: {
      manufacturer: string,
      model: string,
      value?: models.IFixtureDefinition,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  deleteFixtureDefinition(
    args: {
      manufacturer: string,
      model: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  downloadFixtureDefinition(
    args: {
      manufacturer: string,
      model: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IFixtureDefinition>;

  getFixtureDefinitions(
    requestHttpOptions?: HttpOptions
  ): Observable<models.FixtureDefinitionSkeleton[]>;

  postFixtureDefinition(
    args: {
      value?: models.IFixtureDefinition,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getGroups(
    requestHttpOptions?: HttpOptions
  ): Observable<models.IGroupData[]>;

  putGroups(
    args: {
      groups?: any,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  setGroupAttribute(
    args: {
      group: string,
      attribute: string,
      value: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getOSCListenerEnabled(
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  setOSCListenerEnabled(
    args: {
      value: boolean,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getPreview(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PreviewResult>;

  getSACNTransmitterEnabled(
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  setSACNTransmitterEnabled(
    args: {
      value: boolean,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getStatus(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Status>;

  getSettings(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Settings>;

  putSettings(
    args: {
      value?: models.Settings,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getActiveUniverse(
    args: {
      universeID: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ActiveUniverse>;

  getActiveVenue(
    requestHttpOptions?: HttpOptions
  ): Observable<models.IVenueData>;

  activateVenue(
    args: {
      name: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  downloadVenue(
    args: {
      name: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IVenueData>;

  getVenues(
    requestHttpOptions?: HttpOptions
  ): Observable<string[]>;

  postVenue(
    args: {
      value?: models.IVenueData,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getVenue(
    args: {
      name: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.IVenueData>;

  deleteVenue(
    args: {
      name: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  putVenue(
    args: {
      originalName: string,
      value?: models.IVenueData,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

}
