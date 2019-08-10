/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: FixtureViewerSubscription
// ====================================================

export interface FixtureViewerSubscription_universeDmx {
  __typename: "dmxEvent";
  dmx: (number | null)[] | null;
}

export interface FixtureViewerSubscription {
  universeDmx: FixtureViewerSubscription_universeDmx | null;
}

export interface FixtureViewerSubscriptionVariables {
  universeId: number;
}
