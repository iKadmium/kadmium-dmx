/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: FixtureViewerSubscription
// ====================================================

export interface FixtureViewerSubscription_universeDmx {
  __typename: "dmxEvent";
  dmx: number[] | null;
}

export interface FixtureViewerSubscription {
  universeDmx: FixtureViewerSubscription_universeDmx;
}

export interface FixtureViewerSubscriptionVariables {
  universeId: number;
}
