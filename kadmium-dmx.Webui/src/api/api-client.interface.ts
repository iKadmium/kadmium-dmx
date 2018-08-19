/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from '.';
import * as models from './models';

export interface APIClientInterface
{

  getFixtureDefinition(
    args: {
      manufacturer: string,
      model: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.FixtureDefinition>;

  putFixtureDefinition(
    args: {
      manufacturer: string,
      model: string,
      value: models.FixtureDefinition,
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
  ): Observable<models.FixtureDefinition>;

  getFixtureDefinitions(
    requestHttpOptions?: HttpOptions
  ): Observable<models.FixtureDefinitionSkeleton[]>;

  postFixtureDefinition(
    args: {
      value: models.FixtureDefinition,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getGroups(
    requestHttpOptions?: HttpOptions
  ): Observable<models.GroupData[]>;

  putGroup(
    args: {
      groups: any,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  setAttributeGroup(
    args: {
      group: string,
      attribute: string,
      value: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getSettings(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Settings>;

  postSettings(
    args: {
      value: models.Settings,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getActiveVenue(
    requestHttpOptions?: HttpOptions
  ): Observable<models.ActiveVenue>;

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
      value: models.VenueData,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getVenue(
    args: {
      name: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.VenueData>;

  deleteVenue(
    args: {
      name: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  putVenue(
    args: {
      originalName: string,
      value: models.VenueData,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getPortsEnttecProTransmitters(
    requestHttpOptions?: HttpOptions
  ): Observable<string[]>;

  enabledEnttecProTransmitter(
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  setEnabledEnttecProTransmitter(
    args: {
      value: boolean,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  statusEnttecProTransmitter(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Status>;

  enabledOSCListener(
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  setEnabledOSCListener(
    args: {
      value: boolean,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  getPreview(
    requestHttpOptions?: HttpOptions
  ): Observable<models.PreviewResult>;

  enabledSACNTransmitter(
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  setEnabledSACNTransmitter(
    args: {
      value: boolean,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<any>;

  statusSACNTransmitter(
    requestHttpOptions?: HttpOptions
  ): Observable<models.Status>;

  getActiveUniverse(
    args: {
      universeID: number,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.ActiveUniverse>;

}
