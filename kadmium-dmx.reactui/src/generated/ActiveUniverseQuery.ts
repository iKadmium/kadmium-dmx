/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ActiveUniverseQuery
// ====================================================

export interface ActiveUniverseQuery_activeUniverse_fixtures_channels {
  __typename: "activeDmxChannel";
  address: number | null;
  name: string;
  controlled: boolean;
}

export interface ActiveUniverseQuery_activeUniverse_fixtures {
  __typename: "activeFixture";
  address: number;
  manufacturer: string;
  model: string;
  channels: (ActiveUniverseQuery_activeUniverse_fixtures_channels | null)[] | null;
}

export interface ActiveUniverseQuery_activeUniverse {
  __typename: "activeUniverse";
  fixtures: (ActiveUniverseQuery_activeUniverse_fixtures | null)[] | null;
}

export interface ActiveUniverseQuery {
  activeUniverse: ActiveUniverseQuery_activeUniverse | null;
}

export interface ActiveUniverseQueryVariables {
  universeId: number;
}
