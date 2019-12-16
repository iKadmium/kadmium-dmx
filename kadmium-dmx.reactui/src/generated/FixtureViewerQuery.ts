/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FixtureViewerQuery
// ====================================================

export interface FixtureViewerQuery_activeUniverse_fixtures_channels {
  __typename: "activeDmxChannel";
  address: number;
  controlled: boolean;
  name: string;
  min: number;
  max: number;
}

export interface FixtureViewerQuery_activeUniverse_fixtures {
  __typename: "activeFixture";
  address: number;
  manufacturer: string;
  model: string;
  channels: FixtureViewerQuery_activeUniverse_fixtures_channels[];
}

export interface FixtureViewerQuery_activeUniverse {
  __typename: "activeUniverse";
  name: string;
  fixtures: FixtureViewerQuery_activeUniverse_fixtures[];
}

export interface FixtureViewerQuery {
  activeUniverse: FixtureViewerQuery_activeUniverse | null;
}

export interface FixtureViewerQueryVariables {
  universeId: number;
}
