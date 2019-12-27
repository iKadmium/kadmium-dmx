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
  group: string;
}

export interface FixtureViewerQuery_activeUniverse {
  __typename: "activeUniverse";
  name: string;
  fixtures: FixtureViewerQuery_activeUniverse_fixtures[];
}

export interface FixtureViewerQuery_groups {
  __typename: "Group";
  /**
   * The Group's name
   */
  name: string;
}

export interface FixtureViewerQuery_fixtures {
  __typename: "FixtureDefinition";
  /**
   * The fixture's manufacturer
   */
  manufacturer: string;
  /**
   * The fixture's model name (including its personality)
   */
  model: string;
}

export interface FixtureViewerQuery {
  activeUniverse: FixtureViewerQuery_activeUniverse | null;
  groups: FixtureViewerQuery_groups[];
  fixtures: FixtureViewerQuery_fixtures[];
}

export interface FixtureViewerQueryVariables {
  universeId: number;
}
