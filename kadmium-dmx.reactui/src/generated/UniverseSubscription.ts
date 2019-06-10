/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: UniverseSubscription
// ====================================================

export interface UniverseSubscription_universeDmx {
  __typename: "dmxEvent";
  dmx: (number | null)[] | null;
}

export interface UniverseSubscription {
  universeDmx: UniverseSubscription_universeDmx | null;
}

export interface UniverseSubscriptionVariables {
  universeId: number;
}
