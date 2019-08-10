/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: FixtureControllerSubscription
// ====================================================

export interface FixtureControllerSubscription_universeDmx {
  __typename: "dmxEvent";
  dmx: (number | null)[] | null;
}

export interface FixtureControllerSubscription {
  universeDmx: FixtureControllerSubscription_universeDmx | null;
}

export interface FixtureControllerSubscriptionVariables {
  universeId: number;
}
