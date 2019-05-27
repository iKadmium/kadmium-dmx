/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { statusCode } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: SubscribeVenueStatus
// ====================================================

export interface SubscribeVenueStatus_venueStatus_activeVenue_universes_fixtures {
  __typename: "FixtureInstance";
  address: number | null;
}

export interface SubscribeVenueStatus_venueStatus_activeVenue_universes {
  __typename: "Universe";
  universeID: number;
  name: string;
  dmxChannels: number | null;
  fixtures: (SubscribeVenueStatus_venueStatus_activeVenue_universes_fixtures | null)[] | null;
}

export interface SubscribeVenueStatus_venueStatus_activeVenue {
  __typename: "Venue";
  name: string;
  universes: (SubscribeVenueStatus_venueStatus_activeVenue_universes | null)[] | null;
}

export interface SubscribeVenueStatus_venueStatus {
  __typename: "VenueStatus";
  /**
   * The code associated with the status
   */
  statusCode: statusCode | null;
  /**
   * The message associated with the status
   */
  message: string;
  /**
   * The currently active venue
   */
  activeVenue: SubscribeVenueStatus_venueStatus_activeVenue | null;
}

export interface SubscribeVenueStatus {
  venueStatus: SubscribeVenueStatus_venueStatus | null;
}
