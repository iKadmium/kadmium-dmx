/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FixtureControllerQuery
// ====================================================

export interface FixtureControllerQuery_activeFixture_channels {
  __typename: "activeDmxChannel";
  controlled: boolean;
  address: number;
  name: string;
  min: number;
  max: number;
  value: number;
}

export interface FixtureControllerQuery_activeFixture_attributes {
  __typename: "activeFixtureAttribute";
  controlled: boolean;
  name: string;
  value: number;
}

export interface FixtureControllerQuery_activeFixture {
  __typename: "activeFixture";
  address: number;
  manufacturer: string;
  model: string;
  channels: FixtureControllerQuery_activeFixture_channels[];
  attributes: FixtureControllerQuery_activeFixture_attributes[];
  group: string;
}

export interface FixtureControllerQuery {
  activeFixture: FixtureControllerQuery_activeFixture | null;
}

export interface FixtureControllerQueryVariables {
  universeId: number;
  address: number;
}
